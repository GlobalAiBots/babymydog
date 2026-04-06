import Link from "next/link";
import { productCategories } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dog Products (2026) — Expert Reviews | BabyMyDog",
  description: "Expert-reviewed dog products across 15 categories. Find the best beds, food, toys, grooming tools, and more for your dog.",
  alternates: { canonical: "https://babymydog.com/best" },
};

export default function BestPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF9F0' }}>
      <div className="max-w-5xl mx-auto px-4 py-14">
        <h1 className="text-3xl md:text-5xl font-bold text-[#4A1942] mb-3" style={{ fontFamily: 'Playfair Display,serif' }}>Best Dog Products</h1>
        <p className="text-gray-500 text-lg mb-10">Expert-reviewed picks across {productCategories.length} categories. Updated for 2026.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productCategories.map(c => (
            <Link key={c.slug} href={`/best/${c.slug}`} className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-l-[#E8637A]">
              <h2 className="font-bold text-[#4A1942] text-lg group-hover:text-[#E8637A] transition" style={{ fontFamily: 'Playfair Display,serif' }}>{c.title}</h2>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">{c.description}</p>
              <p className="text-[#E8637A] text-sm font-semibold mt-4">{c.picks.length} expert picks &rarr;</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
