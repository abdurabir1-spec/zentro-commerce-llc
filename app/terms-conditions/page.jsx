import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Zentro Commerce LLC.",
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-ink px-5 py-12 text-parchment md:px-8">
      <section className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex text-sm font-semibold text-champagne hover:text-parchment">
          Back to Zentro Commerce LLC
        </Link>
        <div className="mt-10 rounded-[2rem] border border-champagne/18 bg-parchment/[0.035] p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Zentro Commerce LLC</p>
          <h1 className="mt-4 font-display text-4xl text-parchment md:text-6xl">Terms & Conditions</h1>
          <p className="mt-6 leading-8 text-parchment/72">
            This website is provided for informational business purposes. Zentro Commerce LLC does not sell products directly through this website and does not provide checkout, cart, or customer account functionality.
          </p>
          <div className="mt-8 space-y-7 text-parchment/72">
            <section>
              <h2 className="text-xl font-semibold text-parchment">Business Information</h2>
              <p className="mt-3 leading-8">Website content may describe company capabilities, categories of interest, and marketplace operations for supplier and wholesale relationship review.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-parchment">No Direct Sales</h2>
              <p className="mt-3 leading-8">Any business relationship, wholesale account, product sourcing arrangement, or distribution discussion must be confirmed through direct written communication with Zentro Commerce LLC.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-parchment">Contact</h2>
              <p className="mt-3 leading-8">For terms-related questions, email contact@zentrocommercellc.com.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
