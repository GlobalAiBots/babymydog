import Link from "next/link";
import { notFound } from "next/navigation";
import { productCategories, getProductCategoryBySlug } from "@/data/products";
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
    <div className="min-h-screen" style={{ backgroundColor: '#FFF9F0' }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-400 mb-8 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#E8637A] transition">Home</Link><span>/</span>
          <Link href="/best" className="hover:text-[#E8637A] transition">Best Products</Link><span>/</span>
          <span className="text-[#4A1942] font-medium">{cat.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#4A1942] mb-4" style={{ fontFamily: 'Playfair Display,serif' }}>{cat.title}</h1>
        <p className="text-gray-500 text-lg mb-10">{cat.description}</p>

        {/* Our Top Picks Summary */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-[#4A1942] mb-5" style={{ fontFamily: 'Playfair Display,serif' }}>Our Top Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cat.picks.slice(0, 3).map((pick, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow text-center">
                <span className="inline-block text-xs font-bold text-[#E8637A] bg-[#E8637A]/10 px-3 py-1 rounded-full mb-3">{pick.badge}</span>
                <h3 className="font-bold text-[#4A1942] text-lg mb-3" style={{ fontFamily: 'Playfair Display,serif' }}>{pick.name}</h3>
                <a href="#amazon" className="text-[#E8637A] text-sm font-semibold hover:underline">See on Amazon &rarr;</a>
              </div>
            ))}
          </div>
        </div>

        {/* Full Product Reviews */}
        <div className="space-y-8 mb-12">
          {cat.picks.map((pick, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border-l-4 border-l-[#E8637A]">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <h3 className="font-bold text-[#4A1942] text-2xl" style={{ fontFamily: 'Playfair Display,serif' }}>{pick.name}</h3>
                <span className="text-xs font-bold text-[#E8637A] bg-[#E8637A]/10 px-4 py-1.5 rounded-full whitespace-nowrap">{pick.badge}</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">{pick.description}</p>
              <ul className="space-y-2 mb-6">
                {pick.features.map((f, j) => (
                  <li key={j} className="text-gray-500 text-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#E8637A]/10 flex items-center justify-center flex-shrink-0 text-[#E8637A] text-xs font-bold">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#amazon" className="inline-block bg-[#E8637A] hover:bg-[#d4566b] text-white font-bold text-sm px-7 py-3 rounded-full transition shadow-sm hover:shadow-xl">
                Check Price on Amazon &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* How We Choose */}
        <div className="rounded-2xl p-8 mb-10" style={{ backgroundColor: 'rgba(74, 25, 66, 0.08)' }}>
          <h2 className="text-xl font-bold text-[#4A1942] mb-4" style={{ fontFamily: 'Playfair Display,serif' }}>How We Choose</h2>
          <p className="text-gray-600 leading-relaxed">Our team researches hundreds of products, reads thousands of verified owner reviews, and consults with veterinarians and pet care professionals. We prioritize safety, durability, and real-world performance so you can shop with confidence.</p>
        </div>

        {/* Affiliate Disclaimer */}
        <p className="text-gray-400 text-xs italic text-center">As an Amazon Associate, BabyMyDog earns from qualifying purchases. This does not affect our editorial independence.</p>
      </div>
    </div>
  );
}
