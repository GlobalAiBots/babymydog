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
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-2" style={{fontFamily:'Playfair Display,serif'}}>Best Dog Products</h1>
      <p className="text-gray-500 mb-8">Expert-reviewed picks across {productCategories.length} categories. Updated for 2026.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productCategories.map(c => (
          <Link key={c.slug} href={`/best/${c.slug}`} className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all border-l-4 border-l-rose">
            <h2 className="font-bold text-charcoal group-hover:text-rose transition">{c.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{c.description}</p>
            <p className="text-rose text-sm font-semibold mt-3">{c.picks.length} expert picks &rarr;</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
