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
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
        <Link href="/" className="hover:text-rose transition">Home</Link><span>/</span>
        <Link href="/best" className="hover:text-rose transition">Best Products</Link><span>/</span>
        <span className="text-charcoal font-medium">{cat.title}</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-3" style={{fontFamily:'Playfair Display,serif'}}>{cat.title}</h1>
      <p className="text-gray-500 mb-8">{cat.description}</p>
      <div className="space-y-6 mb-10">
        {cat.picks.map((pick, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm border-l-4 border-l-rose">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-charcoal text-lg">{pick.name}</h3>
              <span className="text-xs font-bold text-rose bg-rose/10 px-2.5 py-1 rounded-full whitespace-nowrap">{pick.badge}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{pick.description}</p>
            <ul className="space-y-1 mb-4">
              {pick.features.map((f, j) => <li key={j} className="text-gray-500 text-xs flex items-start gap-2"><span className="text-rose">&#10003;</span>{f}</li>)}
            </ul>
            <a href="#amazon" className="inline-block bg-gold hover:bg-gold-dark text-charcoal font-bold text-sm px-5 py-2.5 rounded-lg transition shadow-sm">View on Amazon &rarr;</a>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-xs italic">As an Amazon Associate, BabyMyDog earns from qualifying purchases.</p>
    </div>
  );
}
