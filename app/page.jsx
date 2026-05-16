"use client";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Handshake,
  HeartPulse,
  Home,
  Landmark,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Truck,
  Utensils,
  Warehouse,
  Wheat,
} from "lucide-react";

const categories = [
  { name: "Beauty & Personal Care", icon: Sparkles, note: "Brand-sensitive daily use categories" },
  { name: "Health & Wellness", icon: HeartPulse, note: "Repeat-demand wellness retail" },
  { name: "Consumable Goods", icon: PackageCheck, note: "Inventory velocity and replenishment" },
  { name: "Kitchen & Dining", icon: Utensils, note: "Household utility and lifestyle products" },
  { name: "Household Essentials", icon: Home, note: "Staple products for practical demand" },
  { name: "Home & Living", icon: Store, note: "Marketplace-friendly living categories" },
  { name: "Grocery & Daily Use Products", icon: Wheat, note: "Routine purchase behavior" },
  { name: "Future Expansion Categories", icon: Layers3, note: "Selective growth as partnerships mature" },
];

const operatingSignals = [
  "Business Documentation Available",
  "Supplier-first communication",
  "Marketplace compliance focus",
  "Long-term retail relationship model",
];

const authorityMetrics = [
  { value: "U.S.", label: "registered business presence" },
  { value: "B2B", label: "supplier partnership focus" },
  { value: "Multi", label: "category sourcing capability" },
  { value: "Amazon", label: "current marketplace priority" },
];

const operations = [
  {
    label: "Amazon Marketplace",
    status: "Primary operating channel",
    icon: ShoppingBag,
    description:
      "Structured retail execution for catalog review, product sourcing, account discipline, and scalable marketplace operations.",
  },
  {
    label: "Walmart Marketplace",
    status: "Future expansion path",
    icon: Warehouse,
    description:
      "Planned channel growth designed to extend approved supplier relationships across additional U.S. online retail demand.",
  },
  {
    label: "Emerging Ecommerce Channels",
    status: "Selective growth roadmap",
    icon: LineChart,
    description:
      "Measured expansion into new retail environments when category fit, brand standards, and operating readiness align.",
  },
];

const partnerPoints = [
  {
    title: "Reliable Ecommerce Operations",
    copy: "Disciplined retail workflows, order visibility, organized purchasing conversations, and steady marketplace execution.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Business Relationships",
    copy: "A partnership model built for repeat purchasing, supplier alignment, and responsible growth over one-off transactions.",
    icon: Handshake,
  },
  {
    title: "Marketplace Expertise",
    copy: "Focused understanding of online marketplace retail standards, category positioning, and operational expectations.",
    icon: BadgeCheck,
  },
  {
    title: "Scalable Retail Growth",
    copy: "A category-flexible structure that can expand with inventory availability, supplier goals, and channel opportunity.",
    icon: CircleDollarSign,
  },
  {
    title: "Professional Communication",
    copy: "Clear, timely correspondence for wholesale applications, account reviews, product lists, and brand authorization requests.",
    icon: BriefcaseBusiness,
  },
  {
    title: "U.S.-Registered Business",
    copy: "A professional U.S. company identity suitable for supplier onboarding and distributor account review.",
    icon: Building2,
  },
  {
    title: "Responsible Marketplace Presentation",
    copy: "Retail activity positioned around supplier trust, brand value, and responsible marketplace presentation.",
    icon: Scale,
  },
];

const process = [
  { step: "01", title: "Supplier Review", copy: "We evaluate product fit, authorization requirements, pricing structure, and category potential." },
  { step: "02", title: "Marketplace Planning", copy: "We align sourcing decisions with marketplace readiness, inventory discipline, and channel demand." },
  { step: "03", title: "Relationship Growth", copy: "We maintain professional communication and build practical long-term wholesale purchasing relationships." },
];

const businessInfo = [
  {
    label: "Business Email",
    value: "contact@zentrocommercellc.com",
    href: "mailto:contact@zentrocommercellc.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+1 (681) 310-4847",
    href: "tel:+16813104847",
    icon: Phone,
  },
  {
    label: "USA Business Address",
    value: "30 N Gould St Ste R, Sheridan, WY 82801, USA",
    href: "https://maps.google.com/?q=30%20N%20Gould%20St%20Ste%20R%20Sheridan%20WY%2082801",
    icon: MapPin,
  },
];

const emailTemplates = {
  generalInquiry: {
    subject: "Business Inquiry - Zentro Commerce LLC",
    body: `Hello Zentro Commerce LLC,

I am interested in discussing a business relationship with your ecommerce retail and marketplace operations team.

Company Name:
Website:
Business Type:
Product Categories:
Message:

Regards,`,
  },
  supplierReview: {
    subject: "Wholesale Partnership Inquiry",
    body: `Hello Zentro Commerce LLC,

I am interested in discussing a supplier/distributor partnership opportunity.

Company Name:
Website:
Product Categories:
Distribution Details:

Regards,`,
  },
  wholesalePartnership: {
    subject: "Wholesale Account Review - Zentro Commerce LLC",
    body: `Hello Zentro Commerce LLC,

I would like to discuss wholesale account opportunities and product distribution alignment with Zentro Commerce LLC.

Company Name:
Website:
Available Product Lines:
Wholesale Requirements:
Preferred Next Steps:

Regards,`,
  },
};

function mailtoFor(template) {
  const params = new URLSearchParams({
    subject: template.subject,
    body: template.body,
  });

  return `mailto:contact@zentrocommercellc.com?${params.toString()}`;
}

const mailtoLinks = {
  generalInquiry: mailtoFor(emailTemplates.generalInquiry),
  supplierReview: mailtoFor(emailTemplates.supplierReview),
  wholesalePartnership: mailtoFor(emailTemplates.wholesalePartnership),
};

function SectionHeading({ eyebrow, title, copy, align = "center" }) {
  return (
    <div className={`mb-12 ${align === "left" ? "max-w-3xl text-left" : "mx-auto max-w-3xl text-center"}`}>
      <p className="mb-4 text-[0.68rem] font-extrabold uppercase tracking-[0.34em] text-champagne">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[0.95] text-smoke md:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-6 text-base leading-8 text-platinum md:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Logo({ className = "h-11 w-auto" }) {
  return <img src="/logo.svg" alt="Zentro Commerce LLC" className={className} />;
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <main className="overflow-hidden bg-ink text-smoke">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-smoke/10 bg-ink/72 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <a href="#top" aria-label="Zentro Commerce LLC home" className="shrink-0">
            <Logo className="h-11 w-auto max-w-[168px] md:h-12 md:max-w-[230px]" />
          </a>
          <div className="hidden items-center gap-8 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-smoke/62 lg:flex">
            <a className="transition hover:text-champagne" href="#top">Home</a>
            <a className="transition hover:text-champagne" href="#operations">Operations</a>
            <a className="transition hover:text-champagne" href="#categories">Categories</a>
            <a className="transition hover:text-champagne" href="#partner">Trust</a>
          </div>
          <a
            href={mailtoLinks.generalInquiry}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-champagne/35 bg-smoke/[0.035] px-4 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-smoke shadow-inner-gold transition duration-300 hover:-translate-y-0.5 hover:border-champagne hover:bg-champagne hover:text-ink hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-champagne/45 md:px-5 md:text-xs"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/24 to-transparent transition duration-700 group-hover:translate-x-full" />
            <span className="relative">Inquiries</span>
            <ArrowRight className="relative h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </a>
        </nav>
      </header>

      <section id="top" className="hero-photo fine-noise relative min-h-screen pt-20">
        <div className="absolute inset-0 executive-grid opacity-[0.16]" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-ink via-ink/84 to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="reveal max-w-4xl">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-smoke/15 bg-smoke/[0.045] px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-champagne backdrop-blur-xl">
                U.S. ecommerce distribution company
              </span>
              <span className="rounded-full border border-champagne/20 bg-champagne/10 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-smoke/80 backdrop-blur-xl">
                Supplier authorization focused
              </span>
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.89] text-smoke md:text-7xl lg:text-[6.6rem]">
              A retail partner built for supplier confidence.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-smoke/76 md:text-xl">
              Zentro Commerce LLC supports brands, wholesalers, distributors, and suppliers with professional marketplace retail operations across Amazon today and broader online channels ahead.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={mailtoLinks.supplierReview}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-smoke px-7 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-ink shadow-gold transition duration-300 hover:-translate-y-1 hover:bg-parchment hover:shadow-[0_28px_80px_rgba(232,225,210,0.2)] focus:outline-none focus:ring-2 focus:ring-champagne/45"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative">Request Supplier Review</span>
                <ArrowRight className="relative ml-3 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#operations"
                className="inline-flex items-center justify-center rounded-full border border-smoke/18 bg-smoke/[0.055] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-smoke backdrop-blur-xl transition hover:-translate-y-1 hover:border-champagne/70 hover:bg-smoke/[0.09]"
              >
                View Operations
              </a>
            </div>
          </div>

          <aside className="reveal relative ml-auto w-full max-w-xl [animation-delay:140ms]">
            <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-champagne/18 via-smoke/5 to-oxblood/20 blur-2xl" />
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5">
              <div className="rounded-[1.45rem] border border-smoke/10 bg-graphite/82 p-6 shadow-premium">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.32em] text-champagne">
                      Operational profile
                    </p>
                    <h2 className="mt-3 font-display text-4xl font-semibold leading-none text-smoke">
                      Professional Marketplace Retail Operations
                    </h2>
                  </div>
                  <img src="/favicon.svg" alt="" className="h-14 w-14 shrink-0 rounded-2xl" />
                </div>

                <div className="mt-8 grid gap-3">
                  {operatingSignals.map((item) => (
                    <div key={item} className="flex items-center justify-between gap-4 rounded-2xl border border-smoke/10 bg-smoke/[0.045] px-4 py-3">
                      <span className="text-sm font-semibold text-smoke/78">{item}</span>
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-champagne" />
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[
                    ["Retail channel", "Amazon"],
                    ["Expansion", "Walmart"],
                    ["Focus", "Wholesale"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-champagne/16 bg-champagne/[0.075] p-4">
                      <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.22em] text-champagne/90">{label}</p>
                      <p className="mt-3 text-sm font-bold text-smoke">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative border-y border-smoke/10 bg-smoke/[0.028] px-5 py-6 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-smoke/10 bg-smoke/10 lg:grid-cols-4">
          {authorityMetrics.map((metric) => (
            <div key={metric.label} className="bg-ink/88 p-4 md:flex md:items-center md:gap-4 md:p-5">
              <p className="font-display text-4xl font-semibold text-champagne">{metric.value}</p>
              <p className="mt-2 text-[0.62rem] font-bold uppercase leading-5 tracking-[0.16em] text-smoke/58 md:mt-0 md:max-w-36 md:text-xs">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-fade relative px-5 py-28 md:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Executive business position"
            title="Professional sourcing, distribution, and marketplace retail operations."
            copy="Zentro Commerce LLC is an ecommerce retail and marketplace-focused company built to work with suppliers that value organized communication, responsible brand representation, and long-term wholesale account relationships."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Sourcing Discipline", copy: "Product fit, category demand, supplier requirements, and wholesale viability are reviewed before expansion.", icon: ClipboardCheck },
              { title: "Marketplace Retail Operations", copy: "The business is informational and B2B-facing, with no shopping cart, checkout, or direct online storefront.", icon: Truck },
              { title: "Brand Compliance", copy: "Supplier standards, marketplace presentation, and professional representation guide retail activity.", icon: Landmark },
            ].map(({ title, copy, icon: Icon }) => (
              <article key={title} className="glass-panel group rounded-[1.6rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-champagne/35">
                <Icon className="mb-8 h-7 w-7 text-champagne" />
                <h3 className="font-display text-3xl font-semibold leading-none text-smoke">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-platinum">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="operations" className="relative px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Marketplace operations"
            title="A channel strategy designed for measured retail growth."
            copy="The company operates with a marketplace-first model: build trust, source responsibly, represent supplier products professionally, and expand channels only where operational fit is strong."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {operations.map(({ label, status, description, icon: Icon }, index) => (
              <article
                key={label}
                className="group relative overflow-hidden rounded-[1.75rem] border border-smoke/12 bg-gradient-to-br from-smoke/[0.075] via-graphite to-oxblood/20 p-7 shadow-premium transition duration-300 hover:-translate-y-1 hover:border-champagne/40"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/70 to-transparent" />
                <div className="mb-10 flex items-center justify-between">
                  <Icon className="h-8 w-8 text-champagne" />
                  <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-smoke/36">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-champagne">{status}</p>
                <h3 className="mt-4 font-display text-4xl font-semibold leading-none text-smoke">{label}</h3>
                <p className="mt-6 leading-8 text-platinum">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="section-fade relative px-5 py-28 md:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Product category coverage"
              title="Practical product categories with repeat retail demand."
              copy="Zentro Commerce LLC is built for category flexibility while keeping supplier standards, marketplace fit, and operational consistency at the center of sourcing decisions."
            />
            <div className="rounded-[1.5rem] border border-smoke/10 bg-smoke/[0.035] p-6">
              <p className="text-sm leading-8 text-platinum">
                The company is not a direct online store. Category presentation is intended for wholesale review, supplier onboarding, distributor evaluation, and brand partnership conversations.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ name, icon: Icon, note }) => (
              <article
                key={name}
                className="group min-h-52 rounded-[1.35rem] border border-smoke/10 bg-smoke/[0.035] p-6 shadow-inner-gold transition duration-300 hover:-translate-y-1 hover:border-champagne/45 hover:bg-smoke/[0.06]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-champagne/25 bg-ink text-champagne transition group-hover:bg-champagne group-hover:text-ink">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-extrabold leading-7 text-smoke">{name}</h3>
                <p className="mt-4 text-sm leading-6 text-platinum">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partner" className="relative px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Supplier confidence system"
            title="Trust signals that support wholesale authorization decisions."
            copy="Every section is designed to communicate the same business reality: Zentro Commerce LLC is professionally operated, supplier-aware, and built for credible marketplace retail relationships."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerPoints.map(({ title, copy, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-[1.45rem] border border-smoke/10 bg-gradient-to-br from-smoke/[0.06] to-smoke/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-champagne/40"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-champagne/20 text-champagne transition group-hover:bg-champagne group-hover:text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold leading-7 text-smoke">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-platinum">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-fade relative px-5 py-28 md:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Partnership flow"
            title="A clear path from supplier review to retail growth."
            copy="The preferred relationship is simple, documented, and professional: supplier fit, marketplace planning, then long-term account growth."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {process.map((item) => (
              <article key={item.step} className="relative rounded-[1.6rem] border border-smoke/10 bg-graphite/72 p-7">
                <p className="font-display text-6xl font-semibold leading-none text-champagne/35">{item.step}</p>
                <h3 className="mt-8 text-2xl font-extrabold text-smoke">{item.title}</h3>
                <p className="mt-4 leading-8 text-platinum">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-smoke/12 bg-smoke/[0.035] shadow-premium">
          <div className="grid gap-10 p-7 md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.34em] text-champagne">
                Business information
              </p>
              <h2 className="mt-5 font-display text-5xl font-semibold leading-[0.95] text-smoke md:text-6xl">
                Wholesale and supplier partnership inquiries.
              </h2>
              <p className="mt-6 leading-8 text-platinum">
                Contact Zentro Commerce LLC by email for wholesale account review, supplier onboarding, brand authorization, distributor communication, and marketplace retail partnership discussions.
              </p>
              <a
                href={mailtoLinks.wholesalePartnership}
                className="group relative mt-8 inline-flex items-center gap-3 overflow-hidden rounded-full bg-champagne px-6 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-ink shadow-gold transition duration-300 hover:-translate-y-1 hover:bg-parchment hover:shadow-[0_28px_80px_rgba(187,148,87,0.26)] focus:outline-none focus:ring-2 focus:ring-champagne/45"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/34 to-transparent transition duration-700 group-hover:translate-x-full" />
                <span className="relative">Email for Wholesale Review</span>
                <Mail className="relative h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="grid gap-4">
              {businessInfo.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "USA Business Address" ? "_blank" : undefined}
                  rel={label === "USA Business Address" ? "noreferrer" : undefined}
                  className="group flex min-w-0 gap-5 rounded-[1.35rem] border border-smoke/12 bg-ink/52 p-5 transition hover:-translate-y-0.5 hover:border-champagne/45 hover:bg-smoke/[0.055]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-champagne/20 text-champagne transition group-hover:bg-champagne group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-champagne">{label}</span>
                    <span className="mt-2 block break-words leading-7 text-smoke/86 [overflow-wrap:anywhere]">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-smoke/10 px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo className="h-12 w-auto max-w-[230px]" />
            <a className="mt-3 block text-sm font-semibold text-champagne hover:text-parchment" href="mailto:contact@zentrocommercellc.com">
              contact@zentrocommercellc.com
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-smoke/58">
            <a className="transition hover:text-champagne" href="/privacy-policy">Privacy Policy</a>
            <a className="transition hover:text-champagne" href="/terms-conditions">Terms & Conditions</a>
            <span>&copy; {year} Zentro Commerce LLC. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
