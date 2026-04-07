import Link from "next/link";
import { notFound } from "next/navigation";
import { giftGuides, getGiftGuideBySlug } from "@/data/gifts";
import type { Metadata } from "next";

/* eslint-disable @next/next/no-img-element */

export function generateStaticParams() { return giftGuides.map(g => ({ slug: g.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGiftGuideBySlug(slug);
  if (!guide) return { title: "Not Found" };
  return { title: `${guide.title} | BabyMyDog`, alternates: { canonical: `https://babymydog.com/gifts/${guide.slug}` } };
}

const guideImages: Record<string, string> = {
  "dog-lovers": "/images/happy-dog-owner-hugging-golden-retriever.jpg",
  "new-puppy": "/images/golden-retriever-puppies-in-red-wagon.jpg",
  "dog-mom": "/images/woman-kissing-golden-retriever-outdoors.jpg",
  "dog-dad": "/images/happy-dog-owner-hugging-golden-retriever.jpg",
  "dog-christmas": "/images/dog-with-christmas-plush-toy-holiday.jpg",
};

export default async function GiftPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGiftGuideBySlug(slug);
  if (!guide) notFound();

  const heroImg = guideImages[slug];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="max-w-[900px] mx-auto px-6 py-12">

        <nav className="text-sm text-[#1A1A1A]/40 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#C4704B] transition">Home</Link><span>/</span>
          <Link href="/gifts" className="hover:text-[#C4704B] transition">Gift Guides</Link><span>/</span>
          <span className="text-[#1A1A1A] font-medium">{guide.title}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">{guide.title}</h1>
        <p className="text-[#1A1A1A]/50 mb-8">{guide.description}</p>

        {heroImg && (
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img src={heroImg} alt={guide.title} loading="eager" decoding="async" className="w-full aspect-[16/9] object-cover" />
          </div>
        )}

        <div className="space-y-4">
          {guide.gifts.map((gift, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 flex items-start justify-between gap-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div>
                <h3 className="font-bold text-[#1A1A1A]">{gift.name}</h3>
                <p className="text-[#1A1A1A]/50 text-sm mt-1">{gift.description}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-[#C4704B]">{gift.price}</p>
                <a href={`https://www.amazon.com/s?k=${encodeURIComponent(gift.name)}&tag=babymydog03-20`} target="_blank" rel="noopener noreferrer" className="text-xs text-[#C4704B] font-semibold hover:underline mt-1 inline-block">Buy on Amazon &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
