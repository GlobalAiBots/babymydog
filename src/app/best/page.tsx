import Link from "next/link";
import { productCategories } from "@/data/products";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dog Products (2026) — Expert Reviews | BabyMyDog",
  description: "Expert-reviewed dog products across 15 categories. Find the best beds, food, toys, grooming tools, and more for your dog.",
  alternates: { canonical: "https://babymydog.com/best" },
};

export default function BestPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-3">Best Dog Products</h1>
        <p className="text-[#1A1A1A]/50 text-lg mb-14">Expert-reviewed picks across {productCategories.length} categories. Updated for 2026.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map(c => {
            const prices = c.picks.map(p => parseFloat(p.price.replace('$', '').replace(',', '')));
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);
            const topRating = Math.max(...c.picks.map(p => p.rating));
            return (
              <Link
                key={c.slug}
                href={`/best/${c.slug}`}
                className="group bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              >
                <ImagePlaceholder id={`best-cat-${c.slug}`} alt={c.title} aspect="landscape" className="rounded-none" />
                <div className="p-6">
                  <h2 className="font-bold text-[#1A1A1A] text-lg group-hover:text-[#C4704B] transition">{c.title}</h2>
                  <p className="text-[#1A1A1A]/50 text-sm mt-2 leading-relaxed line-clamp-2">{c.description}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-[#1A1A1A]/40">
                    <span className="font-semibold text-[#1A1A1A]/60">${minPrice.toFixed(0)}&ndash;${maxPrice.toFixed(0)}</span>
                    <span>&middot;</span>
                    <span className="inline-flex items-center gap-0.5">
                      <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                      Up to {topRating}
                    </span>
                  </div>
                  <p className="text-[#C4704B] text-sm font-semibold mt-3 inline-flex items-center gap-1">
                    {c.picks.length} expert picks <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
