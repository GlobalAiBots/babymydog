import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories, getProductCategoryBySlug } from "@/data/products";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

export function generateStaticParams() { return productCategories.map(c => ({ category: c.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getProductCategoryBySlug(category);
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.title} — Expert Picks | BabyMyDog`,
    description: cat.description,
    alternates: { canonical: `https://babymydog.com/best/${cat.slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getProductCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        {/* Breadcrumbs */}
        <nav className="text-sm text-[#1A1A1A]/40 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#C4704B] transition">Home</Link><span>/</span>
          <Link href="/best" className="hover:text-[#C4704B] transition">Best Products</Link><span>/</span>
          <span className="text-[#1A1A1A] font-medium">{cat.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">{cat.title}</h1>
        <p className="text-[#1A1A1A]/60 text-lg mb-3 max-w-2xl">{cat.description}</p>
        <p className="text-xs text-[#1A1A1A]/30 font-medium uppercase tracking-wider mb-14">Last Updated: April 2026</p>

        {/* Our Top Picks — 3 Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Our Top Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cat.picks.slice(0, 3).map((pick, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <ImagePlaceholder id={`best-${cat.slug}-top-${i}`} alt={pick.name} aspect="landscape" className="rounded-none" />
                <div className="p-6 text-center">
                  <span className="inline-block text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-3 py-1 rounded-full mb-3">{pick.badge}</span>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-3">{pick.name}</h3>
                  <a href="#amazon" className="text-[#C4704B] text-sm font-semibold hover:underline">See on Amazon &rarr;</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Detailed Reviews</h2>
          {cat.picks.map((pick, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="md:w-[280px] flex-shrink-0">
                <ImagePlaceholder id={`best-${cat.slug}-review-${i}`} alt={pick.name} aspect="square" className="rounded-none h-full" />
              </div>
              <div className="p-8 flex-1">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                  <h3 className="font-bold text-[#1A1A1A] text-xl">{pick.name}</h3>
                  <span className="text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-4 py-1.5 rounded-full whitespace-nowrap">{pick.badge}</span>
                </div>
                <p className="text-[#1A1A1A]/60 leading-relaxed mb-5">{pick.description}</p>
                <ul className="space-y-2 mb-6">
                  {pick.features.map((f, j) => (
                    <li key={j} className="text-[#1A1A1A]/50 text-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#5B7B5E]/10 flex items-center justify-center flex-shrink-0 text-[#5B7B5E] text-xs font-bold">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#amazon" className="inline-block bg-[#C4704B] hover:bg-[#b5623f] text-white font-semibold text-sm px-7 py-3 rounded-full transition">
                  Check Price on Amazon &rarr;
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* How We Choose */}
        <section className="rounded-2xl p-10 mb-12" style={{ backgroundColor: '#F0EEEB' }}>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">How We Choose</h2>
          <p className="text-[#1A1A1A]/60 leading-relaxed">Our team researches hundreds of products, reads thousands of verified owner reviews, and consults with veterinarians and pet care professionals. We prioritize safety, durability, and real-world performance so you can shop with confidence.</p>
        </section>

        {/* Affiliate Disclaimer */}
        <p className="text-[#1A1A1A]/30 text-xs italic text-center">As an Amazon Associate, BabyMyDog earns from qualifying purchases. This does not affect our editorial independence.</p>
      </div>
    </div>
  );
}
