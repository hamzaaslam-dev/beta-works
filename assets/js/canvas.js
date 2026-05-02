(function () {
  "use strict";

  function Oscillator(opts) {
    this.phase = opts.phase || 0;
    this.offset = opts.offset || 0;
    this.frequency = opts.frequency || 0.001;
    this.amplitude = opts.amplitude || 1;
    this.valueNow = 0;
  }

  Oscillator.prototype.update = function () {
    this.phase += this.frequency;
    this.valueNow = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.valueNow;
  };

  var CONFIG = {
    friction: 0.5,
    trails: 28,
    size: 34,
    dampening: 0.025,
    tension: 0.98,
    lineWidth: 6,
    alpha: 0.035,
  };

  function Node() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }

  function Line(ctx, pos, config) {
    this.ctx = ctx;
    this.pos = pos;
    this.config = config;
    this.spring = 0.45 + Math.random() * 0.025;
    this.friction = config.friction + (Math.random() * 0.01 - 0.005);
    this.nodes = [];

    for (var i = 0; i < config.size; i++) {
      var n = new Node();
      n.x = pos.x;
      n.y = pos.y;
      this.nodes.push(n);
    }
  }

  Line.prototype.update = function () {
    var spring = this.spring;
    var node = this.nodes[0];
    node.vx += (this.pos.x - node.x) * spring;
    node.vy += (this.pos.y - node.y) * spring;

    for (var i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];
      if (i > 0) {
        var prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * this.config.dampening;
        node.vy += prev.vy * this.config.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= this.config.tension;
    }
  };

  Line.prototype.draw = function () {
    var ctx = this.ctx;
    var x = this.nodes[0].x;
    var y = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(x, y);

    for (var i = 1; i < this.nodes.length - 2; i++) {
      var a = this.nodes[i];
      var b = this.nodes[i + 1];
      x = 0.5 * (a.x + b.x);
      y = 0.5 * (a.y + b.y);
      ctx.quadraticCurveTo(a.x, a.y, x, y);
    }
    var n1 = this.nodes[this.nodes.length - 2];
    var n2 = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(n1.x, n1.y, n2.x, n2.y);
    ctx.stroke();
    ctx.closePath();
  };

  function renderCanvas() {
    var canvas = document.getElementById("canvas");
    if (!canvas) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var isMobile = window.innerWidth < 900;
    if (reduceMotion || isMobile) return;

    var ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    var pos = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
    var lines = [];
    var raf = 0;
    var running = true;

    var hue = new Oscillator({
      phase: Math.random() * Math.PI * 2,
      amplitude: 25,
      frequency: 0.0015,
      offset: 208,
    });
    var driftX = new Oscillator({
      phase: Math.random() * Math.PI * 2,
      amplitude: 0.22,
      frequency: 0.00035,
      offset: 0.5,
    });
    var driftY = new Oscillator({
      phase: Math.random() * Math.PI * 2,
      amplitude: 0.18,
      frequency: 0.00027,
      offset: 0.5,
    });

    function initLines() {
      lines = [];
      for (var i = 0; i < CONFIG.trails; i++) {
        lines.push(new Line(ctx, pos, CONFIG));
      }
    }

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      var w = window.innerWidth;
      var h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function frame() {
      if (!running) return;
      pos.x = window.innerWidth * driftX.update();
      pos.y = window.innerHeight * driftY.update();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.lineWidth = CONFIG.lineWidth;
      ctx.strokeStyle = "hsla(" + Math.round(hue.update()) + ", 95%, 52%, " + CONFIG.alpha + ")";

      for (var i = 0; i < lines.length; i++) {
        lines[i].update();
        lines[i].draw();
      }

      raf = window.requestAnimationFrame(frame);
    }

    function onVisibility() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        frame();
      }
    }

    resize();
    initLines();
    frame();

    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderCanvas);
  } else {
    renderCanvas();
  }
})();
