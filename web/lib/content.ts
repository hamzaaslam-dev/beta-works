export const site = {
  name: 'Beta Works',
  email: 'info@beta-works.com',
  phone: '+92 3006180018',
  phoneHref: 'tel:+923006180018',
  linkedin: 'https://www.linkedin.com/company/120904548/',
  tagline:
    'A global digital studio engineering the future of business — one product, platform and brand at a time.',
  location: 'Remote · Global',
} as const

export type Service = {
  id: string
  name: string
  summary: string
  title: string
  body: string
  bullets: string[]
}

export const services: Service[] = [
  {
    id: 'web',
    name: 'Web Development',
    summary:
      'Custom marketing sites, SaaS dashboards and high-performance web apps — built with React, Next.js, and modern design systems.',
    title: 'Fast, conversion-driven, future-proof websites.',
    body: 'From marketing sites that rank & convert to complex SaaS products and internal tools — we build with React, Next.js, TypeScript and Tailwind, atop modern CMS layers like Sanity, Contentful or Payload.',
    bullets: [
      'Marketing & landing sites',
      'SaaS platforms & dashboards',
      'Headless CMS integrations',
      'Progressive web apps (PWA)',
      'Core Web Vitals optimisation',
      'Internationalisation & SEO',
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    summary: 'Native iOS & Android + cross-platform apps with Flutter and React Native.',
    title: 'Native-feel apps for iOS & Android.',
    body: 'Cross-platform speed with native polish. Flutter, React Native, Swift and Kotlin — shipped to the App Store and Play Store, hardened with CI/CD and crash-free reporting.',
    bullets: [
      'iOS & Android native',
      'Flutter & React Native',
      'App Store & Play submissions',
      'Offline-first architecture',
      'Push notifications & analytics',
      'Performance & crash monitoring',
    ],
  },
  {
    id: 'shopify',
    name: 'Shopify Development',
    summary: 'Conversion-focused storefronts, custom themes & headless commerce.',
    title: 'Storefronts that make shoppers pull out their wallets.',
    body: 'Custom Shopify 2.0 themes, Hydrogen & Oxygen headless builds, app development and CRO audits. We make beautiful stores that load in under a second and convert like crazy.',
    bullets: [
      'Custom Shopify 2.0 themes',
      'Hydrogen / Oxygen headless',
      'Shopify app development',
      'Migrations (WooCommerce, Magento)',
      'Conversion-rate optimisation',
      'Email & retention (Klaviyo)',
    ],
  },
  {
    id: 'automation',
    name: 'Automation & Ops',
    summary: 'n8n, Zapier, Make & custom pipelines that quietly run your business 24/7.',
    title: 'Run your business on autopilot.',
    body: 'We map your workflows, eliminate the busywork and connect your tools into one intelligent system. n8n, Make, Zapier, Pipedream — or custom pipelines engineered from scratch.',
    bullets: [
      'n8n, Make & Zapier pipelines',
      'CRM & marketing automation',
      'Data enrichment & scraping',
      'Internal tools & Retool dashboards',
      'Slack / Discord / WhatsApp bots',
      'ETL & data warehousing',
    ],
  },
  {
    id: 'design',
    name: 'Graphic & Brand Design',
    summary: 'Identity systems, motion, marketing design & pixel-perfect UI.',
    title: 'Brand systems that punch above their weight.',
    body: 'Identity, design systems, motion, marketing assets and pixel-perfect UI — the visual layer that turns a product into a brand people recommend.',
    bullets: [
      'Brand identity & guidelines',
      'Logo & visual systems',
      'Marketing & ad creative',
      'Motion & 3D design',
      'UI / UX design systems',
      'Pitch decks & print',
    ],
  },
]

export const faqs = [
  {
    q: 'How fast can we start?',
    a: 'Most projects kick off within one week. Once the scope is agreed, we slot in a senior squad (designer, engineer, PM) and hold a discovery sprint in the first 3–5 days.',
  },
  {
    q: 'Do you work fixed-price or retainer?',
    a: 'Both. Fixed-scope launches are priced per project; ongoing product work and growth engineering run on monthly retainers starting at $6k.',
  },
  {
    q: 'Which tools & stacks do you use?',
    a: 'Next.js, React, TypeScript, Tailwind, Node, Flutter, Swift, Shopify Hydrogen, Postgres, Supabase, AWS, Vercel, n8n and more. We pick the right stack for your problem.',
  },
  {
    q: 'Who owns the code & IP?',
    a: 'You do. On day one, all code, design files and credentials are yours — transferred on delivery with zero lock-in.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. Send yours before the first call or use ours. We have shipped under strict NDAs for enterprise and stealth startups.',
  },
]

export type PortfolioProject = {
  slug: string
  name: string
  tag: string
  description: string
  url?: string
}

export const projects: PortfolioProject[] = [
  {
    slug: 'orient-lighting',
    name: 'Orient Lighting',
    tag: 'E-commerce · Brand',
    description:
      'Premium lighting brand storefront for Pakistan’s Orient Lighting — product catalog, collections and contact-led commerce.',
    url: 'https://orientlighting.com.pk/',
  },
  {
    slug: 'hissedari',
    name: 'Hissedari',
    tag: 'Web · Real estate',
    description:
      'Property discovery experience connecting people to their dream home — clean marketing site with a clear conversion path.',
    url: 'https://hissedari.com/',
  },
  {
    slug: 'simulations',
    name: 'Simulations',
    tag: 'Product · Web',
    description:
      'Interactive simulation product built for learning and exploration — focused UX, performance and clarity over decoration.',
  },
  {
    slug: 'sarmaya',
    name: 'Sarmaya',
    tag: 'Web app',
    description:
      'Modern web application experience with a sharp product UI and a fast, conversion-minded frontend.',
    url: 'https://sarmaya-amber.vercel.app/',
  },
  {
    slug: 'code4-security',
    name: 'Code4 Security',
    tag: 'Web · Security',
    description:
      'Security-focused marketing and product site — clear messaging for a technical audience.',
    url: 'https://code4-security.vercel.app/',
  },
  {
    slug: 'my-a-wellbeing',
    name: 'My A Wellbeing',
    tag: 'Health · Web',
    description:
      'Wellbeing platform site focused on clarity, trust and an approachable digital health experience.',
    url: 'https://myawellbeing.com/',
  },
  {
    slug: 'lemontree-and-co',
    name: 'LemonTree + Co.',
    tag: 'Shopify · Lifestyle',
    description:
      'Curated Canadian home & lifestyle e-commerce — “simple . casual . living.” Full catalog, editorial collections, loyalty and trade program.',
    url: 'https://lemontreeandco.com/',
  },
  {
    slug: 'orasure',
    name: 'OraSure Technologies',
    tag: 'Corporate · Healthcare',
    description:
      'Global diagnostics company site — non-invasive testing, product portfolio and corporate storytelling for healthcare and investors.',
    url: 'https://orasure.com/',
  },
]
