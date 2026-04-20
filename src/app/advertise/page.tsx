import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise With BabyMyDog — Reach Engaged Dog Product Shoppers",
  description: "Advertise on BabyMyDog. Reach engaged dog owners actively researching products, comparisons, and buying guides. Featured placements, sponsored posts, and banner ads.",
  alternates: { canonical: "https://www.babymydog.com/advertise" },
  openGraph: {
    title: "Advertise With BabyMyDog",
    description: "Reach dog owners actively researching products and buying guides.",
    url: "https://www.babymydog.com/advertise",
    siteName: "BabyMyDog",
  },
};

export default function AdvertisePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Advertise", item: "https://www.babymydog.com/advertise" },
    ],
  };

  const mailto = "mailto:hello@babymydog.com?subject=" + encodeURIComponent("Advertising Inquiry — BabyMyDog") + "&body=" + encodeURIComponent("Hi BabyMyDog team,\n\nI'd like to learn more about advertising options. Here's a quick intro:\n\n- Company: \n- Product / Service: \n- Target audience: \n- Budget range: \n- Format of interest (featured placement / sponsored post / banner): \n\nThanks!");

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: '#FAF8F5' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <nav className="text-sm text-[#1A1A1A]/40 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#D35400] transition">Home</Link><span>/</span>
          <span className="text-[#2D2006] font-medium">Advertise</span>
        </nav>

        <section className="bg-white rounded-2xl border border-[#F0EEEB] shadow-sm p-8 md:p-12 mb-10">
          <p className="text-[#D35400] text-xs font-bold tracking-widest uppercase mb-3">Partnerships</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#2D2006] mb-4 leading-tight">Advertise With BabyMyDog</h1>
          <p className="text-[#8B7355] text-lg leading-relaxed max-w-2xl mb-6">
            Reach engaged dog owners actively researching products, reading buying guides, and comparing picks before they hit checkout. BabyMyDog is a curated editorial directory of the best dog products across 20+ categories.
          </p>
          <a href={mailto} className="inline-block bg-[#C4704B] hover:bg-[#b5623f] text-white font-bold px-6 py-3 rounded-lg transition shadow-sm">Start a Conversation</a>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "20+", label: "Product Categories" },
            { stat: "150+", label: "Curated Picks" },
            { stat: "8", label: "Filter Pages (Breed & Need)" },
            { stat: "Growing", label: "Comparison Library" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-[#F0EEEB] shadow-sm p-5 text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-[#D35400]">{s.stat}</p>
              <p className="text-[#8B7355] text-xs uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-2xl border border-[#F0EEEB] shadow-sm p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-extrabold text-[#2D2006] mb-4">Who You&apos;ll Reach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
            <div>
              <p className="font-bold text-[#2D2006] mb-2">Audience profile</p>
              <ul className="space-y-1.5 text-[#8B7355]">
                <li>&bull; Dog owners actively shopping, ages 25-55 (heavy female skew)</li>
                <li>&bull; National reach, strongest in suburban dog-owning markets</li>
                <li>&bull; Readers who reach product pages with purchase intent</li>
                <li>&bull; Mix of new-puppy owners, senior-dog owners, and breed specialists</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-[#2D2006] mb-2">Commercial intent</p>
              <ul className="space-y-1.5 text-[#8B7355]">
                <li>&bull; Reading buying guides before purchasing</li>
                <li>&bull; Comparing head-to-head product recommendations</li>
                <li>&bull; Researching breed-specific and need-specific filters</li>
                <li>&bull; Clicking through to Amazon and retailer pages</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-extrabold text-[#2D2006] mb-5">Sponsorship Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Featured Placement",
                price: "$199-599/mo",
                desc: "Your product featured on relevant category pages (e.g., Best Harnesses, Puppy Essentials). Best for premium dog brands that want direct editorial exposure.",
              },
              {
                title: "Sponsored Post",
                price: "$499-1,499",
                desc: "A dedicated long-form buying guide or review with your brand integrated naturally. Strong for new product launches and premium dog brands.",
              },
              {
                title: "Banner Ad",
                price: "$299-799/mo",
                desc: "Display placement across high-traffic category and comparison pages. 300x250 and responsive units. Monthly or quarterly commitments.",
              },
            ].map((opt) => (
              <div key={opt.title} className="bg-white rounded-2xl border border-[#F0EEEB] shadow-sm p-6 flex flex-col">
                <p className="font-extrabold text-[#2D2006] text-xl mb-1">{opt.title}</p>
                <p className="text-[#D35400] font-bold text-lg mb-3">{opt.price}</p>
                <p className="text-[#8B7355] text-sm leading-relaxed flex-1">{opt.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#8B7355]/80 italic mt-3">Pricing is a starting range. Custom packages and multi-site bundles (BarkSeeker, etc.) available.</p>
        </section>

        <section className="bg-white rounded-2xl border border-[#F0EEEB] shadow-sm p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-extrabold text-[#2D2006] mb-3">Media Kit</h2>
          <p className="text-[#8B7355] text-sm leading-relaxed mb-4 max-w-2xl">
            Current traffic numbers, top-performing categories, click-through data, and example placements are available in our media kit. We send it on request so we can tailor it to your vertical.
          </p>
          <a href={mailto} className="inline-block bg-[#F39C12] hover:bg-[#D35400] text-white font-bold px-6 py-3 rounded-lg transition shadow-sm">Request Media Kit</a>
        </section>

        <section className="rounded-2xl p-6 md:p-8 border-2" style={{ borderColor: 'rgba(196,112,75,0.3)', background: 'rgba(196,112,75,0.05)' }}>
          <h2 className="text-2xl font-extrabold text-[#2D2006] mb-3">Let&apos;s Talk</h2>
          <p className="text-[#8B7355] text-sm leading-relaxed mb-4 max-w-2xl">
            Email <a href={mailto} className="text-[#D35400] font-semibold hover:underline">hello@babymydog.com</a> with a quick note about your product and target audience. We&apos;ll reply within two business days with recommended placements and current availability.
          </p>
          <a href={mailto} className="inline-block bg-[#C4704B] hover:bg-[#b5623f] text-white font-bold px-6 py-3 rounded-lg transition shadow-sm">Email Us</a>
        </section>
      </div>
    </div>
  );
}
