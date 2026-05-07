# Beta Works — IT Agency Website

A modern, sleek, fully static multi-page website for an IT agency offering Web
Development, Mobile Development, Shopify, Automation, AI/ML, Agentic AI and
Graphic Design.

Built with **pure HTML, CSS and vanilla JavaScript** — no build step, no frameworks,
ready to deploy anywhere in minutes.

## What you get

- **5 pages**: Home, Services, Work (Portfolio), About, Contact
- **3D animated hero** powered by Three.js (wireframe icosahedron + particle field + orbiting rings)
- **GSAP-quality scroll reveals** using a lightweight IntersectionObserver
- **Morphing gradient shapes**, animated stats counters, bento-grid service cards, magnetic buttons, custom cursor
- **Fully responsive** (desktop → tablet → mobile) with a proper mobile menu
- **Accessible** — keyboard navigable, reduced-motion support, semantic HTML
- **Fast** — no bundler, CDN for Three.js only, total page weight well under 1 MB

## File structure

```
websit/
├── index.html          # Landing page (hero, services, process, testimonials, CTA)
├── services.html       # Detailed service breakdown + FAQ
├── portfolio.html      # Project grid
├── about.html          # Story, values, team
├── contact.html        # Contact form + next steps
├── assets/
│   ├── css/style.css   # All site styles (design system + pages)
│   └── js/
│       ├── main.js     # Nav, reveals, counters, cursor, form
│       └── three-hero.js  # Hero 3D scene
└── README.md
```

## Run locally

Any static server works. Examples:

```bash
# Python 3
python3 -m http.server 8080

# Node
npx serve -l 8080 .
```

Then open <http://localhost:8080>.

## Customise it

Most edits are quick to make:

1. **Agency name** — replace `beta-works` across the HTML files (Find & Replace).
2. **Brand colours** — change the gradient stops at the top of `assets/css/style.css`
   (`--c-violet`, `--c-cyan`, `--c-magenta`).
3. **Contact details** — update email / phone in every page's footer & the
   `contact.html` info card (search for `info@beta-works.com`).
4. **Services copy** — edit the service sections in `index.html` and
   `services.html`.
5. **Projects** — replace the placeholder cards in `portfolio.html` with real
   images. Swap the `.thumb-*` CSS for `background-image: url('path/to.jpg')`.
6. **Team** — update `about.html` `.team-grid`.

## Wire up the contact form

`contact.html` ships with a working, client-side validated form. To actually
receive messages, point it at an email service. Quick options:

- **Formspree** (free tier): change the `<form>` tag to
  `<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">`
  and remove the `e.preventDefault()` / status code in `assets/js/main.js`.
- **Getform, Web3Forms, Basin**, or your own backend — same pattern.
- **Netlify Forms**: add `netlify` attribute: `<form class="contact-form" netlify>`.

## Deploy (free options)

All of these host static sites in under 5 minutes:

### Netlify (easiest)
1. Sign up at <https://netlify.com>.
2. Drag-and-drop the `websit` folder onto the Netlify dashboard.
3. Done — you get a `*.netlify.app` URL and free HTTPS. Add your domain in Site Settings → Domain Management.

### Vercel
1. Install CLI: `npm i -g vercel`
2. From the project folder: `vercel` (or push to GitHub and import at <https://vercel.com/new>).

### GitHub Pages
1. Push the project to a GitHub repo.
2. Settings → Pages → Source: `main` branch, root.
3. Your site will be live at `https://<user>.github.io/<repo>/`.

### Cloudflare Pages
1. Push to GitHub.
2. <https://pages.cloudflare.com> → Create project → connect repo.
3. Build command: *(leave empty)*. Output directory: `/`.

### Traditional cPanel / Hostinger / Bluehost / shared hosting
1. Zip the entire `websit` folder.
2. Upload via File Manager → `public_html/`.
3. Extract. Your site is live at your domain.

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari, iOS Safari, Android
Chrome). The 3D hero gracefully disables on `prefers-reduced-motion` and falls
back to static gradient rings if WebGL isn't available.

## License

MIT. Use it, modify it, ship it — no attribution required.
