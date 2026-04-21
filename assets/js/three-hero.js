/* =====================================================================
   Nexora — Futuristic hero
   Depth-map parallax portrait + animated scan line + bloom, rendered in
   vanilla Three.js (WebGL). Colors tuned to the Nexora brand palette
   (purple / cyan / magenta) instead of the reference's red.

   Perf budget:
   - Not loaded at all on mobile / coarse-pointer / low-memory / low-core
     devices or when `prefers-reduced-motion: reduce` is set.
   - On eligible devices, Three.js + addons are imported dynamically via
     `import()` after the browser is idle, so shader compilation never
     blocks FCP, LCP, or TBT.
   ===================================================================== */
(function () {
  const mount = document.getElementById('hero-canvas');
  if (!mount) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const narrow = window.matchMedia('(max-width: 900px)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const lowMem = (navigator.deviceMemory || 8) <= 4;
  const lowCores = (navigator.hardwareConcurrency || 8) <= 4;
  const mobileLike = narrow || (coarse && (lowMem || lowCores));

  // Skip Three.js entirely — apply CSS-only fallback and bail.
  if (reduced || mobileLike) {
    mount.classList.add('hero-canvas--fallback');
    return;
  }

  const schedule = window.requestIdleCallback
    ? (fn) => window.requestIdleCallback(fn, { timeout: 2500 })
    : (fn) => setTimeout(fn, 1200);

  schedule(() => {
    boot().catch((err) => {
      console.warn('[hero] init failed — falling back to CSS hero.', err);
      mount.classList.add('hero-canvas--fallback');
    });
  });

  async function boot() {
    const [
      THREE,
      { EffectComposer },
      { RenderPass },
      { ShaderPass },
      { UnrealBloomPass },
      { OutputPass },
    ] = await Promise.all([
      import('three'),
      import('three/addons/postprocessing/EffectComposer.js'),
      import('three/addons/postprocessing/RenderPass.js'),
      import('three/addons/postprocessing/ShaderPass.js'),
      import('three/addons/postprocessing/UnrealBloomPass.js'),
      import('three/addons/postprocessing/OutputPass.js'),
    ]);

    const TEXTURE_URL = 'https://i.postimg.cc/XYwvXN8D/img-4.png';
    const DEPTH_URL = 'https://i.postimg.cc/2SHKQh2q/raw-4.webp';

    /* ---------- Scene ---------- */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 5;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      mount.classList.add('hero-canvas--fallback');
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050510, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    /* ---------- Textures ---------- */
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');

    function loadTex(url, srgb) {
      return new Promise((resolve, reject) => {
        loader.load(
          url,
          (t) => {
            if (srgb) t.colorSpace = THREE.SRGBColorSpace;
            t.minFilter = THREE.LinearFilter;
            t.magFilter = THREE.LinearFilter;
            t.generateMipmaps = false;
            resolve(t);
          },
          undefined,
          reject
        );
      });
    }

    let rawMap, depthMap;
    try {
      [rawMap, depthMap] = await Promise.all([
        loadTex(TEXTURE_URL, true),
        loadTex(DEPTH_URL, false),
      ]);
    } catch (err) {
      rawMap = null;
      depthMap = null;
    }

    /* ---------- Shader plane ---------- */
    const uniforms = {
      uTexture: { value: rawMap },
      uDepth: { value: depthMap },
      uPointer: { value: new THREE.Vector2(0, 0) },
      uProgress: { value: 0 },
      uOpacity: { value: 0 },
      uTiling: { value: 120.0 },
      uAspect: { value: 1.0 },
      uMaskColor: { value: new THREE.Vector3(3.5, 7.0, 11.0) },
      uHasTex: { value: rawMap && depthMap ? 1.0 : 0.0 },
    };

    const vertexShader = /* glsl */ `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = /* glsl */ `
      precision highp float;
      uniform sampler2D uTexture;
      uniform sampler2D uDepth;
      uniform vec2  uPointer;
      uniform float uProgress;
      uniform float uOpacity;
      uniform float uTiling;
      uniform float uAspect;
      uniform vec3  uMaskColor;
      uniform float uHasTex;
      varying vec2 vUv;

      float hash21(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }
      float cellNoise(vec2 p) { return hash21(floor(p)); }

      vec3 blendScreen(vec3 a, vec3 b) {
        return vec3(1.0) - (vec3(1.0) - a) * (vec3(1.0) - b);
      }

      void main() {
        if (uHasTex < 0.5) { discard; }

        vec4 d = texture2D(uDepth, vUv);
        vec2 pUv = vUv + d.r * uPointer * 0.012;
        vec4 tex = texture2D(uTexture, pUv);

        vec2 tUv = vec2(vUv.x * uAspect, vUv.y);
        vec2 tiledUv = mod(tUv * uTiling, 2.0) - 1.0;
        float brightness = cellNoise(tUv * uTiling * 0.5);
        float dist = length(tiledUv);
        float dotMask = smoothstep(0.5, 0.49, dist) * brightness;

        float flow = 1.0 - smoothstep(0.0, 0.02, abs(d.r - uProgress));
        vec3 mask = dotMask * flow * uMaskColor;

        vec3 color = blendScreen(tex.rgb, mask);
        gl_FragColor = vec4(color, tex.a * uOpacity);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
    scene.add(plane);

    const TEX_ASPECT = 1.0;
    uniforms.uAspect.value = TEX_ASPECT;

    /* ---------- Post-processing ---------- */
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const ScanShader = {
      uniforms: {
        tDiffuse: { value: null },
        uProgress: { value: 0 },
        uScanColor: { value: new THREE.Vector3(0.35, 0.92, 1.0) },
        uFullEffect: { value: 1.0 },
      },
      vertexShader: /* glsl */ `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform sampler2D tDiffuse;
        uniform float uProgress;
        uniform vec3  uScanColor;
        uniform float uFullEffect;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          float scanWidth = 0.05;
          float scanLine = smoothstep(0.0, scanWidth, abs(vUv.y - uProgress));
          vec3 overlay = uScanColor * (1.0 - scanLine) * 0.55;
          float mask = (uFullEffect > 0.5) ? smoothstep(0.9, 1.0, 1.0 - scanLine) : 1.0;
          vec3 result = mix(color.rgb, color.rgb + overlay, mask);
          gl_FragColor = vec4(result, color.a);
        }
      `,
    };
    const scanPass = new ShaderPass(ScanShader);
    composer.addPass(scanPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.95,
      0.55,
      0.18
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    /* ---------- Sizing ---------- */
    function resize() {
      const rect = mount.getBoundingClientRect();
      const w = Math.max(1, rect.width || window.innerWidth);
      const h = Math.max(1, rect.height || window.innerHeight);

      renderer.setSize(w, h, false);
      composer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const viewH = 2 * Math.tan((camera.fov * Math.PI) / 360) * Math.abs(camera.position.z);
      const viewW = viewH * camera.aspect;
      const scaleFactor = w < 720 ? 0.82 : 0.58;
      const fit = Math.min(viewW, viewH) * scaleFactor;
      plane.scale.set(fit * TEX_ASPECT, fit, 1);
    }
    resize();
    window.addEventListener('resize', resize);

    /* ---------- Pointer ---------- */
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    window.addEventListener(
      'pointermove',
      (e) => {
        pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.ty = -((e.clientY / window.innerHeight) * 2 - 1);
      },
      { passive: true }
    );

    /* ---------- Animation loop ---------- */
    const clock = new THREE.Clock();
    let raf;
    function tick() {
      const t = clock.getElapsedTime();

      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;
      uniforms.uPointer.value.set(pointer.x, pointer.y);

      const progress = Math.sin(t * 0.45) * 0.5 + 0.5;
      uniforms.uProgress.value = progress;
      scanPass.uniforms.uProgress.value = progress;

      uniforms.uOpacity.value += (1 - uniforms.uOpacity.value) * 0.05;

      composer.render();
      raf = requestAnimationFrame(tick);
    }
    tick();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else tick();
    });
  }
})();
