export const site = {
  name: 'Beta Works',
  email: 'info@beta-works.com',
  phone: '+92 3006180018',
  phoneHref: 'tel:+923006180018',
  linkedin: 'https://www.linkedin.com/company/120904548/',
  tagline: 'A global digital studio engineering the future of business — one product, platform and brand at a time.',
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
    "id": "web",
    "title": "Fast, conversion-driven, future-proof websites.",
    "body": "From marketing sites that rank & convert to complex SaaS products and internal tools \u2014 we build with React, Next.js, TypeScript and Tailwind, atop modern CMS layers like Sanity, Contentful or Payload.",
    "bullets": [
      "Marketing & landing sites",
      "SaaS platforms & dashboards",
      "Headless CMS integrations",
      "Progressive web apps (PWA)",
      "Core Web Vitals optimisation",
      "Internationalisation & SEO"
    ],
    "name": "Web Development",
    "summary": "Custom marketing sites, SaaS dashboards and high-performance web apps \u2014 built with React, Next.js, and modern design systems."
  },
  {
    "id": "mobile",
    "title": "Native-feel apps for iOS & Android.",
    "body": "Cross-platform speed with native polish. Flutter, React Native, Swift and Kotlin \u2014 shipped to the App Store and Play Store, hardened with CI/CD and crash-free reporting.",
    "bullets": [
      "iOS & Android native",
      "Flutter & React Native",
      "App Store & Play submissions",
      "Offline-first architecture",
      "Push notifications & analytics",
      "Performance & crash monitoring"
    ],
    "name": "Mobile Development",
    "summary": "Native iOS & Android + cross-platform apps with Flutter and React Native."
  },
  {
    "id": "shopify",
    "title": "Storefronts that make shoppers pull out their wallets.",
    "body": "Custom Shopify 2.0 themes, Hydrogen & Oxygen headless builds, app development and CRO audits. We make beautiful stores that load in under a second and convert like crazy.",
    "bullets": [
      "Custom Shopify 2.0 themes",
      "Hydrogen / Oxygen headless",
      "Shopify app development",
      "Migrations (WooCommerce, Magento)",
      "Conversion-rate optimisation",
      "Email & retention (Klaviyo)"
    ],
    "name": "Shopify Development",
    "summary": "Conversion-focused storefronts, custom themes & headless commerce."
  },
  {
    "id": "automation",
    "title": "Run your business on autopilot.",
    "body": "We map your workflows, eliminate the busywork and connect your tools into one intelligent system. n8n, Make, Zapier, Pipedream \u2014 or custom pipelines engineered from scratch.",
    "bullets": [
      "n8n, Make & Zapier pipelines",
      "CRM & marketing automation",
      "Data enrichment & scraping",
      "Internal tools & Retool dashboards",
      "Slack / Discord / WhatsApp bots",
      "ETL & data warehousing"
    ],
    "name": "Automation & Ops",
    "summary": "n8n, Zapier, Make & custom pipelines that quietly run your business 24/7."
  },
  {
    "id": "aiml",
    "title": "Production AI, not demos.",
    "body": "We productionise models the messy world actually runs on \u2014 with evaluation, observability and guardrails. Hugging Face, PyTorch, TensorFlow, LangChain, LlamaIndex, OpenAI, Anthropic, open-source.",
    "bullets": [
      "RAG & semantic search",
      "Fine-tuning & custom models",
      "Computer vision (YOLO, SAM)",
      "NLP & document intelligence",
      "Forecasting & recommendation",
      "MLOps & evaluation pipelines"
    ],
    "name": "AI / ML Solutions",
    "summary": "Production models, RAG pipelines, computer vision & NLP tailored to your data."
  },
  {
    "id": "agentic",
    "title": "Autonomous agents that do real work.",
    "body": "Multi-agent systems that plan, reason and act across your tools. Sales agents that qualify leads, research agents that brief your team, ops agents that close tickets \u2014 all with memory, tools and guardrails.",
    "bullets": [
      "Multi-agent orchestration",
      "Tool-use & function calling",
      "Long-term memory & context",
      "Human-in-the-loop workflows",
      "Voice agents (Retell, Vapi)",
      "Evaluation & safety testing"
    ],
    "name": "Agentic AI",
    "summary": "Autonomous agents that research, decide and act \u2014 automating workflows end-to-end with reasoning, tools and memory."
  },
  {
    "id": "design",
    "title": "Brand systems that punch above their weight.",
    "body": "Identity, design systems, motion, marketing assets and pixel-perfect UI \u2014 the visual layer that turns a product into a brand people recommend.",
    "bullets": [
      "Brand identity & guidelines",
      "Logo & visual systems",
      "Marketing & ad creative",
      "Motion & 3D design",
      "UI / UX design systems",
      "Pitch decks & print"
    ],
    "name": "Graphic & Brand Design",
    "summary": "Identity systems, motion, marketing design & pixel-perfect UI."
  }
]

export const faqs = [
  {
    "q": "How fast can we start?",
    "a": "Most projects kick off within one week. Once the scope is agreed, we slot in a senior squad (designer, engineer, PM) and hold a discovery sprint in the first 3\u20135 days."
  },
  {
    "q": "Do you work fixed-price or retainer?",
    "a": "Both. Fixed-scope launches are priced per project; ongoing product work, AI agents and growth engineering run on monthly retainers starting at $6k."
  },
  {
    "q": "Which tools & stacks do you use?",
    "a": "Next.js, React, TypeScript, Tailwind, Node, Python, Flutter, Swift, Shopify Hydrogen, Postgres, Supabase, AWS, Vercel, OpenAI, Anthropic, n8n, LangChain and more. We'll pick the right one for your problem."
  },
  {
    "q": "Who owns the code & IP?",
    "a": "You do. On day one, all code, design files, models and credentials are yours \u2014 transferred on delivery with zero lock-in."
  },
  {
    "q": "Do you sign NDAs?",
    "a": "Yes. Send yours before the first call or use ours. We've shipped under strict NDAs for enterprise & stealth startups."
  }
]

export type Project = {
  slug: string
  category: string
  featured?: boolean
  num?: string
  tag: string
  chips?: string[]
  title: string
  desc?: string
  oneliner?: string
  image: string
  year?: string
  metrics: { value: string; label: string }[]
}

export const projects: Project[] = [
  {
    "slug": "maison-elan",
    "category": "shopify",
    "featured": true,
    "tag": "Shopify \u00b7 Hydrogen",
    "chips": [
      "Shopify Hydrogen",
      "CRO",
      "Brand",
      "AI recs"
    ],
    "title": "Maison \u00c9lan \u2014 a luxury storefront that sells while it sleeps.",
    "desc": "We replatformed a 20-year-old Parisian fashion house to headless Shopify, rebuilt the brand for the web and shipped an AI stylist. Six weeks from kick-off to go-live.",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1280&q=62",
    "year": "2025",
    "metrics": [
      {
        "value": "+41%",
        "label": "Revenue / visitor"
      },
      {
        "value": "\u221252%",
        "label": "Bounce rate"
      },
      {
        "value": "0.8s",
        "label": "Largest paint"
      },
      {
        "value": "3.2\u00d7",
        "label": "Mobile conv."
      }
    ]
  },
  {
    "slug": "sprintline",
    "category": "agentic",
    "featured": false,
    "num": "02 / 09",
    "tag": "Agentic AI",
    "title": "Sprintline \u2014 autonomous lead-gen.",
    "oneliner": "Multi-agent workforce that researches, qualifies and books enterprise leads overnight.",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=62",
    "metrics": [
      {
        "value": "\u221268%",
        "label": "CAC"
      },
      {
        "value": "12\u00d7",
        "label": "Meetings"
      },
      {
        "value": "24/7",
        "label": "Uptime"
      }
    ]
  },
  {
    "slug": "northwind",
    "category": "mobile",
    "featured": false,
    "num": "03 / 09",
    "tag": "iOS \u00b7 Android",
    "title": "Northwind \u2014 productivity, reborn.",
    "oneliner": "A Swift + Kotlin rebuild that climbed to #14 in Productivity within its launch week.",
    "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=62",
    "metrics": [
      {
        "value": "#14",
        "label": "App Store"
      },
      {
        "value": "4.8\u2605",
        "label": "Rating"
      },
      {
        "value": "180k",
        "label": "Installs"
      }
    ]
  },
  {
    "slug": "lumen-analytics",
    "category": "web",
    "featured": false,
    "num": "04 / 09",
    "tag": "SaaS \u00b7 Web",
    "title": "Lumen Analytics \u2014 data that makes sense.",
    "oneliner": "A Next.js dashboard for a fintech challenger \u2014 custom charts, real-time sync, dark mode by default.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=62",
    "metrics": [
      {
        "value": "+34%",
        "label": "Activation"
      },
      {
        "value": "98",
        "label": "Lighthouse"
      },
      {
        "value": "\u221271%",
        "label": "Time to insight"
      }
    ]
  },
  {
    "slug": "vault",
    "category": "ai",
    "featured": false,
    "num": "05 / 09",
    "tag": "AI / ML \u00b7 RAG",
    "title": "Vault \u2014 legal research at the speed of thought.",
    "oneliner": "A RAG engine that reads 40M case files and drafts memos cited to the paragraph.",
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=62",
    "metrics": [
      {
        "value": "40M",
        "label": "Docs indexed"
      },
      {
        "value": "8\u00d7",
        "label": "Faster research"
      },
      {
        "value": "99.2%",
        "label": "Citation recall"
      }
    ]
  },
  {
    "slug": "atlas-ventures",
    "category": "brand",
    "featured": false,
    "num": "06 / 09",
    "tag": "Brand \u00b7 Identity",
    "title": "Atlas Ventures \u2014 a fund with presence.",
    "oneliner": "Full identity, motion system and investor site for a $400M fund. Print, screen and signage.",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=62",
    "metrics": [
      {
        "value": "42",
        "label": "Touchpoints"
      },
      {
        "value": "$400M",
        "label": "Fund raised"
      },
      {
        "value": "3wk",
        "label": "To pitch"
      }
    ]
  },
  {
    "slug": "orbital",
    "category": "web",
    "featured": false,
    "num": "07 / 09",
    "tag": "Web \u00b7 Platform",
    "title": "Orbital \u2014 a platform for platforms.",
    "oneliner": "Multi-tenant Next.js infrastructure powering 200+ dev communities. Edge-first by default.",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=62",
    "metrics": [
      {
        "value": "200+",
        "label": "Tenants"
      },
      {
        "value": "45ms",
        "label": "Edge TTFB"
      },
      {
        "value": "$0",
        "label": "Downtime cost"
      }
    ]
  },
  {
    "slug": "pixelwise",
    "category": "ai",
    "featured": false,
    "num": "08 / 09",
    "tag": "AI / ML \u00b7 Vision",
    "title": "Pixelwise \u2014 vision you can ship.",
    "oneliner": "YOLO-based detection pipeline inspecting 2M SKUs/day in a warehouse robotics fleet.",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=62",
    "metrics": [
      {
        "value": "2M",
        "label": "SKUs / day"
      },
      {
        "value": "99.7%",
        "label": "Recall"
      },
      {
        "value": "12ms",
        "label": "Inference"
      }
    ]
  },
  {
    "slug": "basecamp-outdoors",
    "category": "shopify",
    "featured": false,
    "num": "09 / 09",
    "tag": "Shopify \u00b7 D2C",
    "title": "Basecamp Outdoors \u2014 high-altitude commerce.",
    "oneliner": "A Shopify 2.0 storefront for an adventure gear brand \u2014 custom quiz, 3D product viewer, Klaviyo retention.",
    "image": "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=900&q=62",
    "metrics": [
      {
        "value": "+63%",
        "label": "AOV"
      },
      {
        "value": "+28%",
        "label": "Retention"
      },
      {
        "value": "5.1%",
        "label": "CR"
      }
    ]
  }
]

export type CaseStudy = {
  slug: string
  number: string
  title: string
  standfirst: string
  category: string
  year: string
  scope: string
  stack: string
  image: string
  metrics: { value: string; label: string }[]
  challenge: string
  built: string[]
  outcome: string
  next: string
}

export const caseStudies: CaseStudy[] = [
  {
    "slug": "maison-elan",
    "number": "01",
    "title": "Maison \u00c9lan \u2014 a luxury storefront that sells while it sleeps.",
    "standfirst": "A 20-year-old Parisian fashion house, replatformed to headless Shopify with a rebuilt web brand and an AI stylist \u2014 six weeks from kick-off to go-live.",
    "category": "Shopify \u00b7 Hydrogen",
    "year": "2025",
    "scope": "Replatform \u00b7 Brand \u00b7 AI stylist",
    "stack": "Shopify Hydrogen, Oxygen, Klaviyo",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=62",
    "metrics": [
      {
        "value": "+41%",
        "label": "Revenue / visitor"
      },
      {
        "value": "\u221252%",
        "label": "Bounce rate"
      },
      {
        "value": "0.8s",
        "label": "Largest paint"
      },
      {
        "value": "3.2\u00d7",
        "label": "Mobile conversion"
      }
    ],
    "challenge": "Maison \u00c9lan\u2019s legacy theme was slow, hard to merchandise and impossible to brand properly. Mobile shoppers \u2014 over 70% of traffic \u2014 were bouncing before the first product image finished loading, and every campaign required developer time.",
    "built": [
      "Headless storefront on Shopify Hydrogen, deployed on Oxygen with edge caching",
      "A rebuilt visual identity translated into a full web design system",
      "An AI stylist that recommends complete looks from the live catalogue",
      "Klaviyo retention flows wired to browsing and fitting-room behaviour",
      "A merchandising workflow the in-house team runs without engineers"
    ],
    "outcome": "The new storefront paints in under a second on mid-range phones and converts mobile traffic at 3.2\u00d7 the old theme. Revenue per visitor rose 41% in the first full quarter, with the AI stylist driving a measurable share of multi-item orders.",
    "next": "sprintline"
  },
  {
    "slug": "sprintline",
    "number": "02",
    "title": "Sprintline \u2014 autonomous lead-gen.",
    "standfirst": "A multi-agent workforce that researches accounts, qualifies prospects and books enterprise meetings overnight \u2014 with humans approving, not typing.",
    "category": "Agentic AI",
    "year": "2025",
    "scope": "Multi-agent system \u00b7 Sales ops",
    "stack": "LangChain, OpenAI, Postgres, n8n",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=62",
    "metrics": [
      {
        "value": "\u221268%",
        "label": "CAC"
      },
      {
        "value": "12\u00d7",
        "label": "Meetings booked"
      },
      {
        "value": "24/7",
        "label": "Uptime"
      }
    ],
    "challenge": "Sprintline\u2019s SDR team spent most of the week researching accounts and writing first-touch emails, leaving little time for actual conversations. Pipeline was capped by headcount, not by market demand.",
    "built": [
      "A research agent that builds account briefs from public and CRM data",
      "A qualification agent that scores and routes leads against the ICP",
      "An outreach agent drafting personalised sequences for human approval",
      "Long-term memory so agents learn from every reply and objection",
      "Guardrails, evaluation suites and a human-in-the-loop approval queue"
    ],
    "outcome": "The agent workforce runs around the clock and hands the human team warm, briefed conversations. Meetings booked grew 12\u00d7 while customer acquisition cost fell 68% \u2014 with every outbound message still approved by a person.",
    "next": "northwind"
  },
  {
    "slug": "northwind",
    "number": "03",
    "title": "Northwind \u2014 productivity, reborn.",
    "standfirst": "A ground-up Swift and Kotlin rebuild of a struggling cross-platform app \u2014 it climbed to #14 in Productivity within its launch week.",
    "category": "iOS \u00b7 Android",
    "year": "2025",
    "scope": "Native rebuild \u00b7 App Store launch",
    "stack": "Swift, Kotlin, CI/CD, Crashlytics",
    "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=62",
    "metrics": [
      {
        "value": "#14",
        "label": "App Store rank"
      },
      {
        "value": "4.8\u2605",
        "label": "Store rating"
      },
      {
        "value": "180k",
        "label": "Installs"
      }
    ],
    "challenge": "Northwind\u2019s original hybrid app suffered from jank, battery drain and a 3.1-star rating. Reviews kept repeating the same word: \u201cslow\u201d. The team needed native quality without doubling their roadmap timeline.",
    "built": [
      "Native iOS (Swift) and Android (Kotlin) apps sharing one design system",
      "Offline-first sync architecture with conflict-free merging",
      "Push notification and deep-link infrastructure tied to analytics",
      "Automated CI/CD with staged rollouts to both stores",
      "Crash-free monitoring with sub-day fix turnaround during launch"
    ],
    "outcome": "The rebuilt app launched to a 4.8-star rating and reached #14 in Productivity in week one. 180k installs later, crash-free sessions hold above 99.8% and the roadmap ships weekly on both platforms.",
    "next": "lumen-analytics"
  },
  {
    "slug": "lumen-analytics",
    "number": "04",
    "title": "Lumen Analytics \u2014 data that makes sense.",
    "standfirst": "A Next.js analytics dashboard for a fintech challenger \u2014 custom charting, real-time sync and an interface people actually enjoy reading numbers in.",
    "category": "SaaS \u00b7 Web",
    "year": "2024",
    "scope": "Product design \u00b7 Dashboard build",
    "stack": "Next.js, TypeScript, WebSockets",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=62",
    "metrics": [
      {
        "value": "+34%",
        "label": "Activation"
      },
      {
        "value": "98",
        "label": "Lighthouse"
      },
      {
        "value": "\u221271%",
        "label": "Time to insight"
      }
    ],
    "challenge": "Lumen\u2019s customers were exporting data to spreadsheets because the old dashboard buried answers under filters and tabs. Activation stalled: new users couldn\u2019t reach their first insight fast enough to stay.",
    "built": [
      "A rebuilt information architecture centred on questions, not tables",
      "Custom chart components tuned for financial time-series data",
      "Real-time sync over WebSockets with optimistic UI updates",
      "Role-based saved views so teams share one source of truth",
      "Performance work that holds a 98 Lighthouse score in production"
    ],
    "outcome": "Time-to-first-insight dropped 71% and activation rose 34% within two release cycles. Spreadsheet exports \u2014 the old escape hatch \u2014 fell by more than half as teams moved their reporting into Lumen itself.",
    "next": "vault"
  },
  {
    "slug": "vault",
    "number": "05",
    "title": "Vault \u2014 legal research at the speed of thought.",
    "standfirst": "A retrieval-augmented engine that reads 40 million case files and drafts memos cited to the paragraph \u2014 built for lawyers who check every source.",
    "category": "AI / ML \u00b7 RAG",
    "year": "2025",
    "scope": "RAG engine \u00b7 Evaluation pipeline",
    "stack": "Python, LlamaIndex, pgvector",
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=62",
    "metrics": [
      {
        "value": "40M",
        "label": "Docs indexed"
      },
      {
        "value": "8\u00d7",
        "label": "Faster research"
      },
      {
        "value": "99.2%",
        "label": "Citation recall"
      }
    ],
    "challenge": "Associates were spending days assembling precedent for questions partners needed answered by morning. Generic AI tools were fast but unusable: hallucinated citations are worse than no citations in legal work.",
    "built": [
      "Ingestion and chunking pipeline across 40M case files and filings",
      "Hybrid retrieval (semantic + citation graph) tuned for legal language",
      "Memo drafting with paragraph-level citations back to source documents",
      "An evaluation harness measuring citation recall on every release",
      "Access controls and audit logs fit for privileged material"
    ],
    "outcome": "Research that took days now takes hours, with citation recall holding at 99.2% on the firm\u2019s own evaluation set. Associates verify instead of hunting \u2014 and partners get defensible memos, not confident guesses.",
    "next": "atlas-ventures"
  },
  {
    "slug": "atlas-ventures",
    "number": "06",
    "title": "Atlas Ventures \u2014 a fund with presence.",
    "standfirst": "Full identity, motion system and investor site for a $400M fund \u2014 one system carried across print, screen and signage in three weeks.",
    "category": "Brand \u00b7 Identity",
    "year": "2024",
    "scope": "Identity \u00b7 Motion \u00b7 Investor site",
    "stack": "Design system, motion kit, print",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=62",
    "metrics": [
      {
        "value": "42",
        "label": "Touchpoints"
      },
      {
        "value": "$400M",
        "label": "Fund raised"
      },
      {
        "value": "3wk",
        "label": "To pitch-ready"
      }
    ],
    "challenge": "Atlas was raising its second fund with a deck-quality brand: inconsistent marks, ad-hoc typography and no system for the flood of touchpoints a raise demands \u2014 from LP letters to event signage.",
    "built": [
      "A complete identity: mark, type system, colour and usage rules",
      "A motion language for pitch, social and event screens",
      "An investor site with a private, trackable data-room entry point",
      "Templates for memos, letters and quarterly reporting",
      "42 production-ready touchpoints delivered as one coherent kit"
    ],
    "outcome": "The partners walked into their raise three weeks after kick-off with a brand that read institutional. The fund closed at $400M, and the identity system now runs everything from term sheets to conference booths without design bottlenecks.",
    "next": "orbital"
  },
  {
    "slug": "orbital",
    "number": "07",
    "title": "Orbital \u2014 a platform for platforms.",
    "standfirst": "Multi-tenant Next.js infrastructure powering 200+ developer communities \u2014 edge-first by default, with tenant isolation that never leaks.",
    "category": "Web \u00b7 Platform",
    "year": "2024",
    "scope": "Multi-tenant platform \u00b7 Edge infra",
    "stack": "Next.js, Postgres, edge runtime",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=62",
    "metrics": [
      {
        "value": "200+",
        "label": "Tenants"
      },
      {
        "value": "45ms",
        "label": "Edge TTFB"
      },
      {
        "value": "99.99%",
        "label": "Uptime"
      }
    ],
    "challenge": "Orbital\u2019s single-tenant architecture meant every new community was a new deployment: slow to provision, expensive to run and drifting out of sync. Growth was throttled by infrastructure, not demand.",
    "built": [
      "A multi-tenant core with strict data isolation per community",
      "Edge-rendered pages with per-tenant theming and custom domains",
      "Self-serve provisioning: a new community live in under a minute",
      "Usage-based observability so noisy tenants never degrade neighbours",
      "Zero-downtime migration of all existing communities"
    ],
    "outcome": "More than 200 communities now run on one codebase with 45ms edge response times. Provisioning went from a day of ops work to a signup form, and the platform has held 99.99% uptime since migration.",
    "next": "pixelwise"
  },
  {
    "slug": "pixelwise",
    "number": "08",
    "title": "Pixelwise \u2014 vision you can ship.",
    "standfirst": "A YOLO-based detection pipeline inspecting two million SKUs a day inside a warehouse robotics fleet \u2014 at 12 milliseconds per inference.",
    "category": "AI / ML \u00b7 Vision",
    "year": "2025",
    "scope": "Vision pipeline \u00b7 MLOps",
    "stack": "PyTorch, YOLO, ONNX, edge GPUs",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=62",
    "metrics": [
      {
        "value": "2M",
        "label": "SKUs / day"
      },
      {
        "value": "99.7%",
        "label": "Recall"
      },
      {
        "value": "12ms",
        "label": "Inference"
      }
    ],
    "challenge": "Manual spot-checks caught damaged stock too late \u2014 after items were already shelved deep in the warehouse. The robotics fleet had cameras; what it lacked was a model fast and reliable enough to run on them in real time.",
    "built": [
      "A YOLO-based detection model fine-tuned on the client\u2019s own SKU imagery",
      "Quantised ONNX deployment running on the fleet\u2019s edge GPUs",
      "Active-learning loop: hard cases routed to humans, fed back to training",
      "Drift monitoring with automated retraining triggers",
      "A review console for QA teams to audit every flagged item"
    ],
    "outcome": "The pipeline now inspects two million SKUs a day at 99.7% recall, flagging damage before items enter storage. Inference holds at 12ms on edge hardware, and the active-learning loop keeps accuracy climbing as inventory changes.",
    "next": "basecamp-outdoors"
  },
  {
    "slug": "basecamp-outdoors",
    "number": "09",
    "title": "Basecamp Outdoors \u2014 high-altitude commerce.",
    "standfirst": "A Shopify 2.0 storefront for an adventure gear brand \u2014 custom gear-finder quiz, 3D product viewer and a retention engine that keeps climbers coming back.",
    "category": "Shopify \u00b7 D2C",
    "year": "2024",
    "scope": "Storefront \u00b7 CRO \u00b7 Retention",
    "stack": "Shopify 2.0, Klaviyo, 3D viewer",
    "image": "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1400&q=62",
    "metrics": [
      {
        "value": "+63%",
        "label": "AOV"
      },
      {
        "value": "+28%",
        "label": "Retention"
      },
      {
        "value": "5.1%",
        "label": "Conversion rate"
      }
    ],
    "challenge": "Basecamp sold serious gear with a template store that treated a $700 tent like a t-shirt. Shoppers couldn\u2019t judge technical products from flat photos, and one-time buyers rarely returned.",
    "built": [
      "A custom Shopify 2.0 theme built around technical product storytelling",
      "A gear-finder quiz matching customers to kit by trip and season",
      "An interactive 3D viewer for flagship tents and packs",
      "Klaviyo retention flows keyed to purchase and adventure cycles",
      "Bundle logic that assembles complete kits at checkout"
    ],
    "outcome": "Average order value climbed 63% as shoppers moved from single items to complete kits. Conversion settled at 5.1%, repeat purchase rate rose 28%, and the brand now launches seasonal drops without touching code.",
    "next": "maison-elan"
  }
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}
