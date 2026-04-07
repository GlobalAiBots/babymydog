import Link from "next/link";
import { notFound } from "next/navigation";
import { giftGuides, getGiftGuideBySlug } from "@/data/gifts";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";
export function generateStaticParams() { return giftGuides.map(g => ({ slug: g.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGiftGuideBySlug(slug);
  if (!guide) return { title: "Not Found" };
  return { title: `${guide.title} | BabyMyDog`, alternates: { canonical: `https://babymydog.com/gifts/${guide.slug}` } };
}
export default async function GiftPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGiftGuideBySlug(slug);
  if (!guide) notFound();
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2"><Link href="/" className="hover:text-rose transition">Home</Link><span>/</span><Link href="/gifts" className="hover:text-rose transition">Gift Guides</Link><span>/</span><span className="text-charcoal font-medium">{guide.title}</span></nav>
      <h1 className="text-3xl font-bold text-charcoal mb-3" style={{fontFamily:'Playfair Display,serif'}}>{guide.title}</h1>
      <p className="text-gray-500 mb-8">{guide.description}</p>
      {slug === "dog-christmas" && <div className="mb-8"><ImagePlaceholder id="gift-christmas-hero" alt="Happy dog with Christmas plush toy" aspect="wide" className="rounded-2xl" /></div>}
      <div className="space-y-4">
        {guide.gifts.map((gift, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex items-start justify-between gap-4">
            <div><h3 className="font-bold text-charcoal">{gift.name}</h3><p className="text-gray-500 text-sm mt-1">{gift.description}</p></div>
            <div className="text-right flex-shrink-0"><p className="font-bold text-rose">{gift.price}</p><a href={`https://www.amazon.com/s?k=${encodeURIComponent(gift.name)}&tag=babymydog03-20`} target="_blank" rel="noopener noreferrer" className="text-xs text-gold-dark font-semibold hover:underline mt-1 inline-block">Buy on Amazon &rarr;</a></div>
          </div>
        ))}
      </div>
    </div>
  );
}
