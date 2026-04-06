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
          {productCategories.map(c => (
            <Link
              key={c.slug}
              href={`/best/${c.slug}`}
              className="group bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <ImagePlaceholder id={`best-cat-${c.slug}`} alt={c.title} aspect="landscape" className="rounded-none" />
              <div className="p-6">
                <h2 className="font-bold text-[#1A1A1A] text-lg group-hover:text-[#C4704B] transition">{c.title}</h2>
                <p className="text-[#1A1A1A]/50 text-sm mt-2 leading-relaxed">{c.description}</p>
                <p className="text-[#C4704B] text-sm font-semibold mt-4 inline-flex items-center gap-1">
                  {c.picks.length} expert picks <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
