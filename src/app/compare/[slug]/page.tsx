import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons, getComparisonBySlug, type ComparisonPage } from "@/data/comparisons";
import type { Metadata } from "next";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cmp = getComparisonBySlug(slug);
  if (!cmp) return { title: "Comparison Not Found" };
  return {
    title: cmp.metaTitle,
    description: cmp.metaDescription,
    alternates: { canonical: `https://babymydog.com/compare/${cmp.slug}` },
    openGraph: { title: cmp.metaTitle, description: cmp.metaDescription, url: `https://babymydog.com/compare/${cmp.slug}`, siteName: "BabyMyDog", type: "article" },
  };
}

const AFFILIATE_TAG = "babymydog03-20";
const amazonLink = (q: string) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}&tag=${AFFILIATE_TAG}`;

const BREED_NAMES: Record<string, string> = {
  "golden-retriever":"Golden Retriever","labrador-retriever":"Labrador","french-bulldog":"French Bulldog","german-shepherd":"German Shepherd","poodle":"Poodle","bulldog":"Bulldog","beagle":"Beagle","rottweiler":"Rottweiler","dachshund":"Dachshund","pembroke-welsh-corgi":"Corgi","australian-shepherd":"Aussie","yorkshire-terrier":"Yorkie","cavalier-king-charles-spaniel":"Cavalier","doberman-pinscher":"Doberman","boxer":"Boxer","great-dane":"Great Dane","shih-tzu":"Shih Tzu","siberian-husky":"Husky","bernese-mountain-dog":"Bernese","pomeranian":"Pomeranian","boston-terrier":"Boston Terrier","havanese":"Havanese","border-collie":"Border Collie","vizsla":"Vizsla","goldendoodle":"Goldendoodle","labradoodle":"Labradoodle","maltese":"Maltese","chihuahua":"Chihuahua","pug":"Pug","weimaraner":"Weimaraner","belgian-malinois":"Belgian Malinois","newfoundland":"Newfoundland","bichon-frise":"Bichon","akita":"Akita","basset-hound":"Basset","irish-setter":"Irish Setter","dalmatian":"Dalmatian","pit-bull-terrier":"Pit Bull","samoyed":"Samoyed","alaskan-malamute":"Malamute",
};

const CATEGORY_NAMES: Record<string, string> = {
  "dog-beds":"Dog Beds","dog-food":"Dog Food","dog-treats":"Dog Treats","dog-toys":"Dog Toys","dog-harnesses":"Dog Harnesses","dog-leashes":"Dog Leashes","dog-cameras":"Dog Cameras","dog-dental":"Dog Dental","dog-supplements":"Dog Supplements","dog-boots":"Dog Boots","dog-training":"Dog Training","dog-collars":"Dog Collars","dog-coats":"Dog Coats","dog-raincoats":"Dog Raincoats","dog-grooming":"Dog Grooming","dog-bowls":"Dog Bowls","dog-crates":"Dog Crates","dog-anxiety":"Dog Anxiety","dog-car-seats":"Dog Car Seats","dog-puzzle-toys":"Dog Puzzle Toys",
};

function ProductCard({ product, label, isWinner }: { product: ComparisonPage["productA"]; label: string; isWinner: boolean }) {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden ${isWinner ? 'ring-2 ring-[#D35400]' : 'border border-[#F0EEEB]'}`} style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
      <div className={`px-6 py-3 text-white text-xs font-bold uppercase tracking-widest ${isWinner ? '' : 'bg-[#8B7355]'}`} style={isWinner ? { background: 'linear-gradient(135deg, #F39C12, #D35400)' } : undefined}>
        {label} {isWinner && " · Our Pick"}
      </div>
      <div className="p-6">
        <h3 className="font-extrabold text-[#2D2006] text-xl mb-2">{product.name}</h3>
        <p className="font-extrabold text-[#2D6A4F] text-2xl mb-4">{product.price}</p>
        <p className="text-[#8B7355] text-sm italic mb-4">{product.bestFor}</p>

        <div className="mb-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F] mb-2">Pros</p>
          <ul className="space-y-1.5">
            {product.pros.map((p, i) => (
              <li key={i} className="text-[#1A1A1A] text-sm flex items-start gap-2">
                <span className="text-[#2D6A4F] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D35400] mb-2">Cons</p>
          <ul className="space-y-1.5">
            {product.cons.map((c, i) => (
              <li key={i} className="text-[#8B7355] text-sm flex items-start gap-2">
                <span className="text-[#D35400] font-bold flex-shrink-0 mt-0.5">&#8722;</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <a href={amazonLink(product.searchQuery)} target="_blank" rel="noopener noreferrer nofollow sponsored" className="block text-white font-bold text-center text-base px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #F39C12, #D35400)', boxShadow: '0 4px 16px rgba(211,84,0,0.25)' }}>
          &#9733; Our Pick &mdash; View on Amazon
        </a>
      </div>
    </div>
  );
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cmp = getComparisonBySlug(slug);
  if (!cmp) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://babymydog.com/compare" },
      { "@type": "ListItem", position: 3, name: cmp.title, item: `https://babymydog.com/compare/${cmp.slug}` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cmp.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cmp.title,
    description: cmp.metaDescription,
    datePublished: "2026-04-19",
    author: { "@type": "Organization", name: "BabyMyDog" },
    publisher: { "@type": "Organization", name: "BabyMyDog", url: "https://babymydog.com" },
  };

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: '#FAF8F5' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleLd, breadcrumbLd, faqLd]) }} />

      <div className="max-w-[1100px] mx-auto px-6 py-16">
        {/* Breadcrumbs */}
        <nav className="text-sm text-[#1A1A1A]/40 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#D35400] transition">Home</Link>
          <span>/</span>
          <Link href="/compare" className="hover:text-[#D35400] transition">Compare</Link>
          <span>/</span>
          <span className="text-[#1A1A1A] font-medium">{cmp.subject}</span>
        </nav>

        <Link href="/compare" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; All Comparisons
        </Link>

        <h1 className="text-[28px] md:text-[44px] font-extrabold text-[#2D2006] mb-4 leading-tight">{cmp.title}</h1>
        <p className="text-xs text-[#1A1A1A]/30 font-medium uppercase tracking-wider mb-6">Last Updated: April 2026</p>

        {/* Intro */}
        <div className="text-[#8B7355] leading-relaxed space-y-4 mb-10 text-lg max-w-3xl">
          {cmp.intro.split(/\n\n+/).map((p, i) => <p key={i}>{p.trim()}</p>)}
        </div>

        {/* Side-by-side product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <ProductCard product={cmp.productA} label={cmp.productA.name} isWinner={cmp.verdictWinner === "a" || cmp.verdictWinner === "both"} />
          <ProductCard product={cmp.productB} label={cmp.productB.name} isWinner={cmp.verdictWinner === "b" || cmp.verdictWinner === "both"} />
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#F0EEEB] mb-12" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <div className="p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-extrabold text-[#2D2006] mb-4">Side-by-Side</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#F0EEEB]">
                    <th className="text-left py-3 pr-4 text-[#1A1A1A]/40 font-medium uppercase tracking-wider text-xs">Attribute</th>
                    <th className="text-left py-3 px-4 text-[#2D2006] font-bold">{cmp.productA.name}</th>
                    <th className="text-left py-3 px-4 text-[#2D2006] font-bold">{cmp.productB.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {cmp.comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-[#F0EEEB]">
                      <td className="py-3 pr-4 font-semibold text-[#1A1A1A]/70">{row.attribute}</td>
                      <td className={`py-3 px-4 ${row.winner === "a" ? 'font-bold text-[#2D6A4F]' : 'text-[#8B7355]'}`}>
                        {row.winner === "a" && "\u2713 "}{row.a}
                      </td>
                      <td className={`py-3 px-4 ${row.winner === "b" ? 'font-bold text-[#2D6A4F]' : 'text-[#8B7355]'}`}>
                        {row.winner === "b" && "\u2713 "}{row.b}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Body */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-[#1A1A1A] leading-relaxed space-y-5">
            {cmp.body.split(/\n\n+/).map((block, i) => {
              const trimmed = block.trim();
              if (trimmed.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-extrabold text-[#2D2006] mt-8 mb-3">{trimmed.slice(3)}</h2>;
              }
              return (
                <p key={i} className="text-[#8B7355] leading-relaxed" dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*([^*]+)\*\*/g, "<strong class='text-[#1A1A1A]'>$1</strong>") }} />
              );
            })}
          </div>
        </article>

        {/* Verdict */}
        <section className="mb-12 rounded-2xl p-6 md:p-8" style={{ background: 'linear-gradient(135deg, rgba(243,156,18,0.08), rgba(211,84,0,0.05))', border: '2px solid rgba(211,84,0,0.2)' }}>
          <h2 className="text-xl md:text-2xl font-extrabold text-[#2D2006] mb-3 flex items-center gap-2">
            <span className="text-[#D35400]">&#127942;</span> Our Verdict
          </h2>
          <p className="text-[#1A1A1A] leading-relaxed text-base md:text-lg">{cmp.verdict}</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#2D2006] mb-5">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {cmp.faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-[#F0EEEB] rounded-xl overflow-hidden">
                <summary className="cursor-pointer px-5 py-4 font-semibold text-[#2D2006] hover:text-[#D35400] transition list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-[#D35400] ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
                </summary>
                <div className="px-5 pb-4 text-[#8B7355] text-sm leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* Related: Categories + Breeds */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {cmp.relatedCategories.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-[#F0EEEB]">
              <p className="text-xs font-bold tracking-widest uppercase text-[#D35400] mb-3">See Our Top Picks</p>
              <div className="flex flex-wrap gap-2">
                {cmp.relatedCategories.map((slug) => (
                  <Link key={slug} href={`/best/${slug}`} className="inline-flex items-center gap-1 bg-[#D35400]/5 hover:bg-[#D35400]/15 text-[#D35400] text-sm font-semibold px-4 py-2 rounded-full transition">
                    Best {CATEGORY_NAMES[slug] || slug} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          )}
          {cmp.relatedBreeds.length > 0 && (
            <div className="bg-white rounded-2xl p-6 border border-[#F0EEEB]">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5B7B5E] mb-3">Breed Guides</p>
              <div className="flex flex-wrap gap-2">
                {cmp.relatedBreeds.map((slug) => (
                  <Link key={slug} href={`/breeds/${slug}`} className="inline-flex items-center gap-1 bg-[#5B7B5E]/10 hover:bg-[#5B7B5E]/20 text-[#5B7B5E] text-sm font-semibold px-4 py-2 rounded-full transition">
                    {BREED_NAMES[slug] || slug} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* More Comparisons */}
        <section className="bg-white rounded-2xl p-6 md:p-8 border border-[#F0EEEB]">
          <h2 className="text-xl font-extrabold text-[#2D2006] mb-4">More Comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comparisons.filter((c) => c.slug !== cmp.slug).slice(0, 4).map((c) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} className="block p-4 rounded-xl border border-[#F0EEEB] hover:border-[#D35400] hover:bg-[#D35400]/5 transition">
                <p className="font-bold text-[#2D2006] text-sm">{c.title}</p>
                <p className="text-[#8B7355] text-xs mt-1 line-clamp-2">{c.metaDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        <p className="text-xs text-[#1A1A1A]/40 italic text-center mt-8">
          Prices accurate as of April 2026. As an Amazon Associate we earn from qualifying purchases. Always verify on Amazon before purchase.
        </p>
      </div>
    </div>
  );
}
