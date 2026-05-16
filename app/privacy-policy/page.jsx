import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Zentro Commerce LLC.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-ink px-5 py-12 text-parchment md:px-8">
      <section className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex text-sm font-semibold text-champagne hover:text-parchment">
          Back to Zentro Commerce LLC
        </Link>
        <div className="mt-10 rounded-[2rem] border border-champagne/18 bg-parchment/[0.035] p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">Zentro Commerce LLC</p>
          <h1 className="mt-4 font-display text-4xl text-parchment md:text-6xl">Privacy Policy</h1>
          <p className="mt-6 leading-8 text-parchment/72">
            Zentro Commerce LLC uses business contact information only for professional communication with suppliers, wholesalers, distributors, brands, and business partners. We do not operate a direct online store, shopping cart, or customer account system on this website.
          </p>
          <div className="mt-8 space-y-7 text-parchment/72">
            <section>
              <h2 className="text-xl font-semibold text-parchment">Information We Receive</h2>
              <p className="mt-3 leading-8">When you email us, we may receive your name, company, email address, phone number, and business inquiry details.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-parchment">How We Use Information</h2>
              <p className="mt-3 leading-8">Information is used to respond to inquiries, evaluate business relationships, maintain supplier communication, and support wholesale account discussions.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-parchment">Contact</h2>
              <p className="mt-3 leading-8">For privacy-related questions, email contact@zentrocommercellc.com.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
