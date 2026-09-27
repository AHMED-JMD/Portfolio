import type { Project, Quote } from "./types";

/**
 * All English copy. Its shape defines `Dictionary`: content/ar.ts must match it
 * exactly, so a missing translation is a build error, not a blank on the page.
 *
 * House rule: every claim here is checkable — from the project's own code, its
 * live site, a recorded demo, or the client. Nothing is rounded up and no quote
 * is invented. Enjaz clients are never named; neither are clients who prefer
 * not to be. Demo clips are cut before any screen with customer or staff data.
 */
const en = {
  meta: {
    title: "Ahmed Abdalrahman — Full-stack & Flutter developer",
    description:
      "I build business software for shops, restaurants and factories in Sudan and beyond. A project is done when the customer is satisfied — not just when the code works.",
    ogAlt:
      "The product works — struck through. The customer is satisfied. That's when a project is done.",
  },

  a11y: {
    skip: "Skip to content",
    menu: "Open menu",
    close: "Close menu",
    theme: "Switch between light and dark",
    prev: "Previous receipt",
    next: "Next receipt",
    scrollPrev: "Scroll to previous projects",
    scrollNext: "Scroll to next projects",
  },

  nav: {
    links: [
      { href: "#work", label: "Work" },
      { href: "#flutter", label: "Flutter" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" },
    ],
    lang: { href: "/ar/", label: "العربية", hreflang: "ar" },
    cta: "Start a project",
    whatsappMessage: "Hi Ahmed, I'd like to talk to you about a project.",
  },

  hero: {
    eyebrow: "Full-stack & Flutter developer · Sudan",
    struck: "The product works.",
    headline: "The customer is",
    emphasis: "satisfied.",
    tagline: "That's when a project is done.",
    lede: "I'm Ahmed Abdalrahman. Since 2021 I've built business software for shops, restaurants, factories and teachers — in their language, for the way they actually work.",
    ctaPrimary: "See the work",
    ctaSecondary: "Download CV",
    printer: "Recently delivered",
    photoAlt: "Ahmed Abdalrahman",
  },

  receipt: {
    job: "Job",
    customer: "Customer",
    needed: "Needed",
    delivered: "Delivered",
    status: "Status",
    total: "Total",
    totalValue: "1 satisfied customer",
    stamp: "Customer satisfied",
    thanks: "Thank you",
  },

  receipts: [
    {
      id: "luma",
      title: "Luma",
      sub: "Marketplace · Sudan · 2026",
      customer: "Luma, a new Sudanese online store",
      needed: "The Shein experience, from a Sudanese brand",
      delivered: "Shop, seller portal and admin; verified-purchase reviews",
      status: "Live · luma-sd.com",
    },
    {
      id: "baladna",
      title: "Baladna",
      sub: "Meat factory · Nile State · 2026",
      customer: "Baladna, a meat factory opened March 2026",
      needed: "Look established from day one; take orders on WhatsApp",
      delivered:
        "Arabic + English site, zero JavaScript, one-tap WhatsApp orders",
      status: "Live",
    },
    {
      id: "pos",
      title: "Point of sale",
      sub: "Flutter · desktop",
      customer: "Hilal Stadium and Bayt Altaga",
      needed: "A fast till, reliable stock and the day's real profit",
      delivered: "Flutter POS with receipt printing, stock and daily reports",
      status: "In use every day",
    },
    {
      id: "giad",
      title: "Giad Motor Services",
      sub: "Automotive · Sudan",
      customer: "Giad Motor Services",
      needed: "A website that keeps up with the business, year after year",
      delivered: "2021: the company site. 2026: product catalogue and admin",
      status: "Client since 2021",
    },
  ],

  ticker: {
    label: "Built for",
    names: [
      "Giad Motor Services",
      "Hilal Stadium",
      "Bayt Altaga",
      "Luma",
      "Baladna",
      "Majalis Alnour",
      "Oil Station Management",
    ],
  },

  delivery: {
    eyebrow: "How I deliver",
    title: "AI agents in the loop — clients get more, sooner.",
    lede: "I work with AI agents the way a workshop works with power tools: they do the repetitive part, fast, while every decision that touches the customer stays with me.",
  },

  work: {
    eyebrow: "Selected work",
    title: "Told from the customer's side.",
    intro:
      "Each project starts with who the customer was and what they really needed. The code comes after.",
    hint: "Scroll for more",
  },

  labels: {
    workOrder: "Work order",
    customer: "The customer",
    needed: "What they needed",
    decided: "What I decided",
    result: "The result",
    stack: "Built with",
    visit: "Visit",
    watch: "Watch the demo",
    more: "More detail",
    less: "Hide detail",
  },

  projects: [
    {
      id: "luma",
      index: "01",
      name: "Luma",
      nameAlt: "لُوما",
      kind: "Multi-vendor marketplace",
      year: "2026",
      status: "Live",
      url: "https://luma-sd.com",
      urlLabel: "luma-sd.com",
      title: "The Shein experience, with a Sudanese face.",
      lede: "Sudanese shoppers already know how Shein and Amazon feel. Luma set out to give them that at home — and to be among the first local brands to do it.",
      customer:
        "Luma, a new Sudanese online store, started as a one-page idea: bring the shopping experience people already know to Sudan, under a Sudanese brand.",
      needed:
        "The familiar flow — browse, filter, cart, checkout, track — in Arabic and in Sudanese identity. And since no local brand had done it yet, buyers had to trust a store they had never met; the brief put that in one line: “a trusted community, built on reviews and verification.”",
      decided: [
        "The habits people already have: search, filter by category and price, product pages with several photos, a cart, and a checkout that takes minutes.",
        "Reviews tied to a real order are marked “verified purchase”, and sellers answer them in public — what makes a first-time buyer press pay.",
        "Buyers always see where their order is: received → preparing → on the way → delivered.",
        "Stores sign up on their own portal, and an admin approves each one before it can sell, so the brand itself stays the guarantee.",
        "Uploaded photos are resized and converted to WebP, so products load on Sudanese mobile data.",
      ],
      result:
        "Live at luma-sd.com as three front doors — the shop, a seller portal and an admin dashboard — all in Arabic. The first brief had admins adding every store by hand; now stores sign up and run their own shelves, paying commission only when they sell.",
      stack: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MySQL",
        "Sequelize",
        "Google sign-in",
      ],
      shots: {
        desktop: {
          src: "luma/home-desktop",
          url: "luma-sd.com",
          alt: "Luma's Arabic storefront: “We bring you the best stores and products in one platform”, with a search bar.",
        },
        mobile: {
          src: "luma/home-mobile",
          alt: "The Luma storefront on a phone.",
        },
        extra: {
          src: "luma/seller-desktop",
          url: "seller.luma-sd.com",
          alt: "Luma's seller portal sign-in: “Start selling on Luma and run your store yourself.”",
        },
      },
    },
    {
      id: "baladna",
      index: "02",
      name: "Baladna",
      nameAlt: "بلدنا",
      kind: "Bilingual company site",
      year: "2026",
      status: "Live",
      url: "https://baladna-sd.com",
      urlLabel: "baladna-sd.com",
      title: "Honest on every claim.",
      lede: "A new Sudanese meat factory needed to look established from its first day — without claiming anything it couldn't prove.",
      customer:
        "Baladna, a meat-products factory in Nile State that opened in March 2026, selling kofta, sausages and burgers across Khartoum, Omdurman and Bahri.",
      needed:
        "Families should find it, trust it and order in one tap; supermarkets and distributors should see a serious supplier. Most of them browse on mobile data.",
      decided: [
        "Zero JavaScript: after export the page drops React's runtime — HTML from 54 KB to 25 KB, JavaScript from 103 KB to nothing (gzipped).",
        "Every product has a WhatsApp order button with the message already written.",
        "Arabic and English share one page and two dictionaries — a missing translation fails the build.",
      ],
      result:
        "Live in Arabic and English: the five products, recipes, where to buy on a map, a page for distributors and an FAQ — with structured data on every page for search engines.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Static export",
        "JSON-LD",
      ],
      shots: {
        desktop: {
          src: "baladna/en-desktop",
          url: "baladna-sd.com/en",
          alt: "Baladna's English home page: “From our country's goodness to your table.”",
        },
        mobile: {
          src: "baladna/ar-mobile",
          alt: "Baladna's Arabic home page on a phone.",
        },
        extra: {
          src: "baladna/ar-desktop",
          url: "baladna-sd.com",
          alt: "The same page in Arabic, right to left.",
        },
      },
    },
    {
      id: "majalis",
      index: "03",
      name: "Majalis Alnour",
      nameAlt: "مجالس النور",
      kind: "Lesson library · Next.js",
      year: "2026",
      status: "Live",
      url: "https://majalis-alnour.com",
      urlLabel: "majalis-alnour.com",
      title: "So the knowledge keeps spreading.",
      lede: "A Qur'an study circle wanted its lessons within everyone's reach, free — organised into series and categories, and easy to pick up where you stopped.",
      customer:
        "Majalis Alnour, a Qur'anic tafsir circle founded in Khartoum in December 2018.",
      needed:
        "Reach, with nothing in the way. Anyone who opens the site should find knowledge that is free and organised — not a pile of videos — and the circle should be able to keep adding to it without a developer.",
      decided: [
        "Every lesson sits in a series and a category, so someone who arrives at one lesson finds the whole path.",
        "The browser remembers where each person stopped watching, so picking a lesson up again takes one tap — no account, no sign-in.",
        "Built on Next.js rather than the Vite + Express of the brief: lessons travel on WhatsApp, and a shared link had to arrive with its own Arabic title, description and image.",
        "Video structured data on every lesson, so search engines can show them as video results.",
        "An Arabic admin panel for lessons, series, categories and messages — the circle keeps the library growing on its own.",
      ],
      result:
        "Live at majalis-alnour.com: free lessons, organised into series and categories, easy to share and easy to return to — and the circle adds to them without me.",
      stack: [
        "Next.js 16",
        "React 19",
        "SQLite",
        "Server Actions",
        "JWT sessions",
      ],
      shots: {
        desktop: {
          src: "majalis/home-desktop",
          url: "majalis-alnour.com",
          alt: "Majalis Alnour's Arabic home page: a lantern in an arched window beside the circle's name.",
        },
        mobile: {
          src: "majalis/home-mobile",
          alt: "The Majalis Alnour home page on a phone.",
        },
        extra: {
          src: "majalis/lesson-desktop",
          url: "majalis-alnour.com/lessons",
          alt: "The lesson library on Majalis Alnour, with every lesson listed by series.",
        },
      },
    },
    {
      id: "pos",
      index: "04",
      name: "Point of sale",
      nameAlt: "نقاط البيع",
      kind: "Flutter + Node.js",
      year: "2026",
      status: "In use every day",
      title: "Two counters, one system — shaped to each.",
      lede: "A restaurant and a stadium shop sell in very different ways. Both run the same point of sale, fitted to how their counter actually works.",
      customer:
        "Bayt Altaga, a restaurant, and the shop at Hilal Stadium — both ring up every sale on it, every day.",
      needed:
        "The restaurant needed dine-in, takeaway, pickup and delivery on one bill screen, and stock it could trust. The shop needed a quick sale screen, invoices paid more than one way, and a clear view of its cash.",
      decided: [
        "One core — sales, stock, daily closing, invoices, staff and reports — with each counter's own flow on top.",
        "At the restaurant: dine-in, takeaway, pickup and delivery are one tap on the same bill.",
        "At the shop: an invoice can be split across cash and bank transfer, and the screen flags any amount not yet allocated.",
        "Two stores — the main store and the selling floor — so stock that goes to the kitchen or the shelf is tracked separately.",
        "Printed receipts, a shift report by payment method, and sales by item.",
      ],
      result:
        "In use every day at both. Same codebase, two very different counters — which is the point: the software bends to the business, not the other way round.",
      stack: [
        "Flutter",
        "Dart",
        "Node.js",
        "Express",
        "MySQL",
        "Sequelize",
        "Receipt printing",
      ],
      shots: {
        desktop: {
          src: "pos/bayt-sale",
          url: "Bayt Altaga · restaurant",
          video: "/video/bayt-demo.mp4",
          duration: "0:28",
          alt: "Bayt Altaga's sale screen: dishes like Shami pie and taqliya, the order type — dine-in, takeaway, pickup, delivery — and payment.",
        },
        second: {
          src: "pos/hilal-sale",
          url: "Hilal Stadium · shop",
          video: "/video/hilal-demo.mp4",
          duration: "0:47",
          alt: "The Hilal Stadium shop's sale screen: products by category and the open invoice.",
        },
        extra: {
          src: "pos/hilal-split",
          url: "Hilal Stadium · split payment",
          alt: "One invoice paid two ways — cash and bank — with a warning for the amount not yet allocated.",
        },
      },
      note: "Recorded demos, cut before any screen with customer or staff details.",
    },
    {
      id: "oil",
      index: "05",
      name: "Oil Station Management",
      nameAlt: "إدارة محطة الوقود",
      kind: "Desktop · Flutter + Node.js",
      year: "2023",
      title: "Every litre accounted for.",
      lede: "A fuel station's day is meters, tankers, credit customers, staff and cash — and they all have to agree by closing time.",
      customer: "A fuel station in Sudan.",
      needed:
        "See the whole day in one place — fuel in, fuel out, who owes what, and whether the cash matches the meters — without depending on the internet.",
      decided: [
        "A card for every pump with its fuel type, meter reading and price, so each shift reads them the same way.",
        "Tanker deliveries logged with quantity, shortfall and arrival date, so a short load is on record.",
        "Credit customers with running balances in litres of petrol and diesel, and in money.",
        "Daily records, expenses, salaries with deductions, and the day's bank deposits — offline, on the station's own machine.",
      ],
      result:
        "Delivered as a Windows desktop app with its own local Node.js server — the whole station on one machine, no internet required.",
      stack: ["Flutter", "Dart", "Node.js", "Express", "MySQL", "Windows"],
      shots: {
        desktop: {
          src: "oil/pumps",
          url: "Oil Station Management",
          video: "/video/oil-demo.mp4",
          duration: "1:35",
          alt: "One card per pump — petrol or diesel, meter reading and price per litre.",
        },
        extra: {
          src: "oil/deliveries",
          url: "Oil Station Management · deliveries",
          alt: "Tanker deliveries: company, fuel type, quantity, shortfall and arrival date.",
        },
      },
      note: "A recorded demo with test data, played at 1.5× speed.",
    },
  ] as Project[],

  building: {
    eyebrow: "Now building",
    name: "Masar",
    nameAlt: "مسار",
    kind: "Workshop operating system",
    status: "In progress",
    title: "One repair order, from the gate to the hand-over.",
    body: "A workshop system for vehicle service centres, built at Enjaz. Customers follow their car and approve extra work from their phone; managers see what the workshop really costs and earns.",
    points: [
      "Live tracking — gate, check, bay, parts, QC, wash, ready — with photos from the bay.",
      "Nothing beyond the estimate is touched without the customer's priced, itemised approval.",
      "Lost time is measured by cause, so the manager fixes the real bottleneck.",
    ],
    note: "Prototype screens with demo data, drawn before the build began.",
    shots: [
      {
        src: "masar/tracking",
        alt: "Masar prototype, customer app: live tracking, an inspection report and approving extra work.",
      },
      {
        src: "masar/dashboard",
        alt: "Masar prototype, manager dashboard: vehicles delivered, on-time hand-over and where time is lost.",
      },
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Vite", "Docker"],
  },

  flutter: {
    eyebrow: "Flutter",
    title: "Most of my client work runs on Flutter.",
    intro:
      "My CV mentions it in passing. In practice it's what cashiers, store-keepers and managers use every day — on Windows desktops, Linux machines and Android tablets.",
    apps: [
      {
        name: "Restaurant & shop POS",
        body: "Sales, stock, split payments and shift reports. In use every day at Bayt Altaga and the Hilal Stadium shop.",
        tags: ["Desktop", "Node.js API"],
        year: "2026",
      },
      {
        name: "Oil Station Management",
        body: "Pump meters, tanker deliveries, credit customers, salaries and bank deposits — offline on the desktop.",
        tags: ["Windows", "Node.js API"],
        year: "2023",
      },
      {
        name: "Currex",
        body: "Currency transfers and each employee's sales, with custom profit reports.",
        tags: ["Windows", "MySQL"],
        year: "2023–24",
      },
      {
        name: "Store Manager",
        body: "Stock items, daily transactions, current stock value and profit.",
        tags: ["Windows"],
        year: "",
      },
      {
        name: "E-learning app",
        body: "Video lectures a teacher's students can watch offline — published on Google Play.",
        tags: ["Android", "Google Play"],
        year: "2022–23",
      },
    ],
    depth: {
      title: "What makes it hold up at a real counter",
      items: [
        "Thermal and A4 receipt printing",
        "Keyboard-first cashier input",
        "Screens gated by role",
        "SQLite with schema migrations",
        "Arabic, right to left, at 1280×800",
        "Signed, versioned releases",
      ],
    },
  },

  more: {
    eyebrow: "More work",
    title: "The rest of the ledger.",
    items: [
      {
        year: "2021 → 2026",
        name: "Giad Motor Services",
        body: "Helped build the company website in 2021; in 2026, added a product catalogue, an admin panel and email.",
        stack: "React · Node.js · MySQL",
        url: "http://giadmotorservices.com",
        urlLabel: "giadmotorservices.com",
      },
      {
        year: "2022–23",
        name: "Factory HR & payroll",
        body: "Workers, salaries, attendance and salary advances for a food factory.",
        stack: "React · Express · MySQL",
      },
      {
        year: "2022",
        name: "E-learning platform",
        body: "Video lectures, free PDFs and live classes through the Zoom SDK, with an admin dashboard.",
        stack: "MongoDB · Express · React · Node.js",
      },
    ] as {
      year: string;
      name: string;
      body: string;
      stack: string;
      url?: string;
      urlLabel?: string;
      status?: string;
    }[],
  },


  experience: {
    eyebrow: "Experience",
    title: "Where I've worked.",
    roles: [
      {
        when: "2026 — now",
        role: "Co-founder",
        org: "Enjaz Tech Services",
        place: "Khartoum",
        body: "Enjaz builds software for small businesses: an offline POS sold under licence, a workshop system, a school platform and websites.",
      },
      {
        when: "2022 — now",
        role: "Freelance full-stack & Flutter developer",
        org: "Self-employed",
        place: "Sudan · Egypt",
        body: "Systems for restaurants, shops, a factory, a fuel station, a currency exchange and a teacher — in Node.js, React, MySQL and Flutter.",
      },
      {
        when: "Oct — Dec 2025",
        role: "IT Admin Trainee",
        org: "Huawei — A5 Sudan office",
        place: "Port Sudan",
        body: "Company networks and the server room — switches, routers, UPS — and fixing computers for staff and managers.",
      },
      {
        when: "Mar — Apr 2023",
        role: "Backend Developer",
        org: "Ayda Pay",
        place: "Khartoum",
        body: "Built the server for the company's exam app in Node.js, Express and MySQL, until the war in Sudan stopped the work.",
      },
      {
        when: "Mar — Dec 2021",
        role: "Contract Software Developer",
        org: "Encyclomedia",
        place: "Khartoum",
        body: "Met clients and turned their needs into web apps; helped build Giad Motor Services' website.",
      },
    ],
    education: {
      title: "Education",
      degree: "BSc Information Technology — Second Class (Upper)",
      school:
        "Faculty of Mathematical Sciences and Informatics, University of Khartoum",
      when: "2017 — 2025",
    },
    languages: {
      title: "Languages",
      items: ["Arabic — native", "English — proficient"],
    },
    skills: {
      title: "Tools I use",
      groups: [
        {
          name: "Mobile & desktop",
          items: ["Flutter", "Dart", "SQLite", "Provider"],
        },
        {
          name: "Backend",
          items: [
            "Node.js",
            "Express",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Sequelize",
            "Prisma",
          ],
        },
        {
          name: "Web",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
        },
        { name: "Ops", items: ["Linux VPS", "Git", "Vercel", "Docker"] },
      ],
    },
  },

  testimonials: {
    eyebrow: "In their words",
    title: "What customers say.",
    // Empty until real quotes arrive — the section only renders when this has entries.
    items: [] as Quote[],
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell me about your customers.",
    body: "Not the features — the people who'll use it, and what a good day looks like for them. I'll take it from there.",
    whatsapp: "Message me on WhatsApp",
    email: "Send an email",
    cv: "Download CV",
    details: {
      phone: "Phone / WhatsApp",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Based in",
      locationValue: "Sudan · open to remote work",
    },
    receipt: {
      title: "New order",
      customer: "You",
      needed: "Tell me on WhatsApp",
      status: "Waiting for your message",
    },
  },

  footer: {
    thanks: "Thank you for your visit",
    note: "Designed and built by Ahmed Abdalrahman.",
  },
};

export type Dictionary = typeof en;
export default en;
