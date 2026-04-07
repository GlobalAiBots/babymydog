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

function amazonLink(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=babymydog03-20`;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill={i < fullStars ? "currentColor" : (i === fullStars && hasHalf ? "currentColor" : "none")} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
      <span className="text-[#1A1A1A]/50 text-sm ml-1">{rating}</span>
    </span>
  );
}

function PrimeBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
      Prime
    </span>
  );
}

export default async function ProductPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getProductCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        <nav className="text-sm text-[#1A1A1A]/40 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#C4704B] transition">Home</Link><span>/</span>
          <Link href="/best" className="hover:text-[#C4704B] transition">Best Products</Link><span>/</span>
          <span className="text-[#1A1A1A] font-medium">{cat.title}</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">{cat.title}</h1>
        <p className="text-[#1A1A1A]/60 text-lg mb-3 max-w-2xl">{cat.description}</p>
        <p className="text-xs text-[#1A1A1A]/30 font-medium uppercase tracking-wider mb-14">Last Updated: April 2026</p>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0EEEB]">
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Rank</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Product</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Best For</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Price</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Rating</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {cat.picks.map((pick, i) => (
                <tr key={i} className={`border-b border-[#F0EEEB] ${i === 0 ? 'bg-[#C4704B]/5' : ''}`}>
                  <td className="py-4 px-4 font-bold text-[#C4704B]">#{i + 1}</td>
                  <td className="py-4 px-4 font-semibold text-[#1A1A1A]">{pick.name}</td>
                  <td className="py-4 px-4 text-[#1A1A1A]/60">{pick.badge}</td>
                  <td className="py-4 px-4 font-bold text-[#1A1A1A]">{pick.price}</td>
                  <td className="py-4 px-4"><StarRating rating={pick.rating} /></td>
                  <td className="py-4 px-4">
                    <a href={amazonLink(pick.asin)} target="_blank" rel="noopener noreferrer" className="text-[#C4704B] text-xs font-semibold hover:underline whitespace-nowrap">View on Amazon &rarr;</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Our Top Picks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Our Top Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cat.picks.slice(0, 3).map((pick, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <ImagePlaceholder id={`best-${cat.slug}-top-${i}`} alt={pick.name} aspect="landscape" className="rounded-none" />
                <div className="p-6 text-center">
                  <span className="inline-block text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-3 py-1 rounded-full mb-2">{pick.badge}</span>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">{pick.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <StarRating rating={pick.rating} />
                    <span className="text-[#1A1A1A]/40 text-xs">({pick.reviewCount})</span>
                  </div>
                  <p className="text-xl font-bold text-[#1A1A1A] mb-3">{pick.price}</p>
                  {pick.prime && <div className="mb-3"><PrimeBadge /></div>}
                  <a href={amazonLink(pick.asin)} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C4704B] hover:bg-[#b5623f] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition w-full">
                    Check Price &rarr;
                  </a>
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
              <div className="md:w-[280px] flex-shrink-0 relative">
                <ImagePlaceholder id={`best-${cat.slug}-review-${i}`} alt={pick.name} aspect="square" className="rounded-none h-full" />
                <span className="absolute top-4 left-4 bg-[#C4704B] text-white text-xs font-bold px-3 py-1.5 rounded-full">#{i + 1}</span>
              </div>
              <div className="p-8 flex-1">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-3">
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] text-xl">{pick.name}</h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <StarRating rating={pick.rating} />
                      <span className="text-[#1A1A1A]/40 text-sm">({pick.reviewCount} reviews)</span>
                      {pick.prime && <PrimeBadge />}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#1A1A1A]">{pick.price}</span>
                    <span className="block text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-3 py-1 rounded-full mt-1">{pick.badge}</span>
                  </div>
                </div>
                <p className="text-[#1A1A1A]/60 leading-relaxed mb-5 mt-4">{pick.description}</p>
                <ul className="space-y-2 mb-6">
                  {pick.features.map((f, j) => (
                    <li key={j} className="text-[#1A1A1A]/50 text-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#5B7B5E]/10 flex items-center justify-center flex-shrink-0 text-[#5B7B5E] text-xs font-bold">{'\u2713'}</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={amazonLink(pick.asin)} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C4704B] hover:bg-[#b5623f] text-white font-semibold text-sm px-7 py-3 rounded-full transition">
                  Check Price on Amazon &rarr;
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* How We Choose */}
        <section className="rounded-2xl p-10 mb-12" style={{ backgroundColor: '#F0EEEB' }}>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">How We Choose</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#1A1A1A]/60 leading-relaxed">
            <div>
              <p className="font-bold text-[#1A1A1A] mb-1">Research</p>
              <p>We analyze thousands of verified owner reviews and compare specs across every major brand in the category.</p>
            </div>
            <div>
              <p className="font-bold text-[#1A1A1A] mb-1">Expert Input</p>
              <p>We consult with veterinarians, groomers, and professional trainers to validate our picks.</p>
            </div>
            <div>
              <p className="font-bold text-[#1A1A1A] mb-1">Independence</p>
              <p>Our rankings are never influenced by brand partnerships. We only recommend products we&apos;d buy for our own dogs.</p>
            </div>
          </div>
        </section>

        <p className="text-[#1A1A1A]/30 text-xs italic text-center">As an Amazon Associate (tag: babymydog03-20), BabyMyDog earns from qualifying purchases. Prices shown are approximate and may vary. This does not affect our editorial independence.</p>
      </div>
    </div>
  );
}
