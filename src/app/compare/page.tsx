import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Product Comparisons — Side-by-Side Expert Picks | BabyMyDog",
  description: "Honest head-to-head comparisons of dog products and diets. KONG Classic vs Extreme, Blue Buffalo vs Pro Plan, orthopedic vs standard beds, harness vs collar, raw vs kibble.",
  alternates: { canonical: "https://babymydog.com/compare" },
  openGraph: {
    title: "Dog Product Comparisons — Side-by-Side Expert Picks",
    description: "Honest head-to-head comparisons of dog products. Which one should you buy?",
    url: "https://babymydog.com/compare",
    siteName: "BabyMyDog",
  },
};

export default function CompareIndexPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://babymydog.com/compare" },
    ],
  };

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: '#FAF8F5' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <div className="max-w-[1100px] mx-auto px-6 py-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-[#1A1A1A]/40 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#D35400] transition">Home</Link>
          <span>/</span>
          <span className="text-[#1A1A1A] font-medium">Compare</span>
        </nav>

        <h1 className="text-[28px] md:text-[44px] font-extrabold text-[#2D2006] mb-4 leading-tight">Head-to-Head Comparisons</h1>
        <p className="text-[#8B7355] text-lg mb-10 max-w-2xl">
          Two products, one clear winner (most of the time). Side-by-side tables, honest pros and cons, and editorial verdicts that tell you which one to actually buy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {comparisons.map((c) => (
            <Link key={c.slug} href={`/compare/${c.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-[#F0EEEB] hover:-translate-y-1 transition-all duration-300 flex flex-col" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div className="px-6 py-3 text-white text-xs font-bold uppercase tracking-widest" style={{ background: 'linear-gradient(135deg, #F39C12, #D35400)' }}>
                {c.subject}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="font-extrabold text-[#2D2006] text-xl mb-3 group-hover:text-[#D35400] transition">{c.title}</h2>
                <p className="text-[#8B7355] text-sm leading-relaxed mb-4 flex-1">{c.metaDescription}</p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[#2D2006] font-bold">{c.productA.name}</span>
                    <span className="text-[#1A1A1A]/40">vs</span>
                    <span className="text-[#2D2006] font-bold">{c.productB.name}</span>
                  </div>
                  <span className="text-[#D35400] font-bold group-hover:underline">Read comparison &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-[#F0EEEB]">
          <h2 className="text-xl font-extrabold text-[#2D2006] mb-3">How we pick winners</h2>
          <p className="text-[#8B7355] text-sm leading-relaxed mb-2">
            Every comparison follows the same evaluation: price, durability or lifespan, safety, who it&apos;s actually best for, and what the credible evidence says (veterinary research, AAFCO standards, brand warranty history).
          </p>
          <p className="text-[#8B7355] text-sm leading-relaxed">
            Our verdicts aren&apos;t &quot;buy both&quot; cop-outs. When one product wins, we say so — and when the answer is genuinely &quot;it depends on your dog,&quot; we spell out exactly which dog picks which one.
          </p>
        </section>
      </div>
    </div>
  );
}
