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

const TAG = "babymydog03-20";

function amazonProductUrl(asin: string): string {
  return `https://www.amazon.com/dp/${asin}?tag=${TAG}`;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < full ? 'text-[#F0C75E]' : i === full && hasHalf ? 'text-[#F0C75E]' : 'text-[#1A1A1A]/15'}`} fill="currentColor" viewBox="0 0 20 20">
          {i < full ? (
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          ) : i === full && hasHalf ? (
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          ) : (
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          )}
        </svg>
      ))}
    </span>
  );
}

function PrimeBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#00708D] bg-[#00708D]/8 px-2 py-0.5 rounded">
      <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l2.09 4.26L15 6.27l-3.5 3.41.83 4.82L8 12.27l-4.33 2.23.83-4.82L1 6.27l4.91-1.01z"/></svg>
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

        {/* Quick-Pick Summary Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Our Top Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cat.picks.slice(0, 3).map((pick, i) => (
              <a key={i} href={amazonProductUrl(pick.asin)} target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <ImagePlaceholder id={`best-${cat.slug}-top-${i}`} alt={pick.name} aspect="landscape" className="rounded-none" />
                <div className="p-5">
                  <span className="inline-block text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-3 py-1 rounded-full mb-2">{pick.badge}</span>
                  <h3 className="font-bold text-[#1A1A1A] text-base mb-2 group-hover:text-[#C4704B] transition">{pick.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={pick.rating} />
                    <span className="text-xs text-[#1A1A1A]/40">{pick.reviewCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#1A1A1A]">{pick.price}</span>
                    {pick.prime && <PrimeBadge />}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Detailed Reviews</h2>
          {cat.picks.map((pick, i) => (
            <div key={i} id={pick.asin} className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              {/* Badge + Number Header */}
              <div className="flex items-center gap-3 px-8 pt-6 pb-0">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#C4704B] text-white text-sm font-bold flex-shrink-0">{i + 1}</span>
                <span className="text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-3 py-1 rounded-full">{pick.badge}</span>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-[300px] flex-shrink-0 p-6">
                  <ImagePlaceholder id={`best-${cat.slug}-review-${i}`} alt={pick.name} aspect="square" className="rounded-xl" />
                </div>
                <div className="p-6 md:p-8 flex-1 md:pl-0">
                  <h3 className="font-bold text-[#1A1A1A] text-xl md:text-2xl mb-2">{pick.name}</h3>

                  {/* Rating + Reviews + Prime */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <StarRating rating={pick.rating} />
                    <span className="text-sm text-[#1A1A1A]/50">{pick.rating}</span>
                    <span className="text-sm text-[#1A1A1A]/30">({pick.reviewCount} reviews)</span>
                    {pick.prime && <PrimeBadge />}
                  </div>

                  {/* Price */}
                  <div className="mb-5">
                    <span className="text-2xl font-bold text-[#1A1A1A]">{pick.price}</span>
                    <span className="text-sm text-[#1A1A1A]/30 ml-2">on Amazon</span>
                  </div>

                  <p className="text-[#1A1A1A]/60 leading-relaxed mb-5">{pick.description}</p>

                  <ul className="space-y-2 mb-6">
                    {pick.features.map((f, j) => (
                      <li key={j} className="text-[#1A1A1A]/50 text-sm flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#5B7B5E]/10 flex items-center justify-center flex-shrink-0 text-[#5B7B5E] text-xs font-bold mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href={amazonProductUrl(pick.asin)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#C4704B] hover:bg-[#b5623f] text-white font-semibold text-sm px-7 py-3 rounded-full transition">
                    Check Price on Amazon
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
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
