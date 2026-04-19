import Link from "next/link";
import BrandName from "@/components/BrandName";
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

function amazonLink(pick: { asin?: string; searchQuery?: string }): string {
  // Prefer a search query (brand + model) — always lands on relevant products even if a specific ASIN changes.
  // Fall back to /dp/{asin} for legacy picks.
  if (pick.searchQuery) {
    return `https://www.amazon.com/s?k=${encodeURIComponent(pick.searchQuery)}&tag=babymydog03-20`;
  }
  return `https://www.amazon.com/dp/${pick.asin}?tag=babymydog03-20`;
}

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  const cls = size === "lg" ? "w-5 h-5" : "w-4 h-4";
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={cls} fill={i < fullStars ? "currentColor" : (i === fullStars && hasHalf ? "currentColor" : "none")} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </span>
  );
}

function PrimeBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
      Prime &middot; Free Shipping
    </span>
  );
}

export default async function ProductPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getProductCategoryBySlug(category);
  if (!cat) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": cat.title,
    "description": cat.description,
    "numberOfItems": cat.picks.length,
    "itemListElement": cat.picks.map((pick, i) => {
      const brandMatch = pick.name.match(/^([A-Z][a-zA-Z&'.]+(?:\s[A-Z][a-zA-Z&'.]+)?)\s/);
      const brand = brandMatch ? brandMatch[1] : "Various";
      return {
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Product",
          "name": pick.name,
          "description": pick.description,
          "brand": { "@type": "Brand", "name": brand },
          "review": {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": pick.rating, "bestRating": 5 },
            "author": { "@type": "Organization", "name": "BabyMyDog" },
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": pick.rating,
            "bestRating": 5,
            "reviewCount": pick.reviewCount ? parseInt(pick.reviewCount.replace(/,/g, "")) || 100 : 100,
          },
          "offers": {
            "@type": "Offer",
            "url": amazonLink(pick),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "Amazon" },
          },
        },
      };
    }),
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0" style={{ backgroundColor: '#FAF8F5' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://babymydog.com" },
          { "@type": "ListItem", "position": 2, "name": "Best Products", "item": "https://babymydog.com/best" },
          { "@type": "ListItem", "position": 3, "name": cat.title, "item": `https://babymydog.com/best/${cat.slug}` },
        ],
      }) }} />
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        {/* Breadcrumbs */}
        <nav className="text-sm text-[#1A1A1A]/40 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#D35400] transition">Home</Link><span>/</span>
          <Link href="/best" className="hover:text-[#D35400] transition">Best Products</Link><span>/</span>
          <span className="text-[#1A1A1A] font-medium">{cat.title}</span>
        </nav>

        {/* Back link */}
        <Link href="/best" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; Back to All Products
        </Link>

        <h1 className="text-[28px] md:text-[44px] font-extrabold text-[#2D2006] mb-4 leading-tight">{cat.title}</h1>
        <p className="text-[#8B7355] text-lg mb-3 max-w-2xl">{cat.description}</p>
        <p className="text-xs text-[#1A1A1A]/30 font-medium uppercase tracking-wider mb-2">Last Updated: April 2026</p>
        <p className="text-xs text-[#1A1A1A]/40 mb-4 italic">Prices accurate as of April 2026. Subject to change — always verify on Amazon before purchase.</p>

        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F39C12]/10 border border-[#F39C12]/20 rounded-full px-4 py-2 mb-6">
          <span className="text-amber-400 text-sm">&#11088;&#11088;&#11088;&#11088;&#11088;</span>
          <span className="text-[#2D2006] text-xs font-bold">Reviewed by real dog owners</span>
          <span className="text-[#8B7355] text-xs">&middot; {cat.picks.length} expert picks</span>
        </div>

        {/* Reviewer Byline */}
        <div className="flex items-center gap-3 mb-14">
          <div className="w-10 h-10 rounded-full bg-[#D35400]/10 flex items-center justify-center text-[#D35400] font-bold text-sm">BM</div>
          <div>
            <p className="text-sm font-semibold text-[#2D2006]">Reviewed by the <BrandName /> Team</p>
            <p className="text-xs text-[#8B7355]">Retired AKC breeder &amp; U.S. military veteran &middot; 20+ years with dogs</p>
          </div>
        </div>

        {/* Buying Guide */}
        {cat.buyingGuide && cat.buyingGuide.length > 0 && (
          <section className="mb-12 bg-white rounded-2xl p-6 md:p-8 border border-[#F0EEEB]" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <h2 className="text-xl md:text-2xl font-extrabold text-[#2D2006] mb-4">What to Look for in a {cat.title.replace(/^Best\s|\s\(\d+\)$/g, "").replace(/s$/, "")}</h2>
            <dl className="space-y-3">
              {cat.buyingGuide.map((g, i) => (
                <div key={i} className="flex gap-3">
                  <dt className="font-bold text-[#D35400] text-sm min-w-[110px] flex-shrink-0">{g.title}:</dt>
                  <dd className="text-[#8B7355] text-sm leading-relaxed">{g.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#F0EEEB]">
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Rank</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Product</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Best For</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Price</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium">Rating</th>
                <th className="text-left py-3 px-4 text-[#1A1A1A]/40 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {cat.picks.map((pick, i) => (
                <tr key={i} className={`border-b border-[#F0EEEB] ${i === 0 ? 'bg-[#D35400]/5' : ''}`}>
                  <td className="py-4 px-4 font-bold text-[#D35400]">#{i + 1}</td>
                  <td className="py-4 px-4 font-semibold text-[#1A1A1A]">{pick.name}</td>
                  <td className="py-4 px-4 text-[#1A1A1A]/60">{pick.badge || "—"}</td>
                  <td className="py-4 px-4 font-semibold text-[#2D6A4F] whitespace-nowrap">{pick.price || "—"}</td>
                  <td className="py-4 px-4"><StarRating rating={pick.rating} /></td>
                  <td className="py-4 px-4">
                    <a href={amazonLink(pick)} target="_blank" rel="noopener noreferrer nofollow sponsored" className="text-[#D35400] text-xs font-semibold hover:underline whitespace-nowrap">&#9733; Our Pick &mdash; View on Amazon</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Our Top Picks */}
        <section className="mb-16">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#2D2006] mb-8">Our Top Picks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cat.picks.slice(0, 3).map((pick, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                <div className="p-6 text-center">
                  {pick.badge && <span className="inline-block text-xs font-bold text-[#D35400] bg-[#D35400]/10 px-3 py-1 rounded-full mb-3">{pick.badge}</span>}
                  <h3 className="font-bold text-[#2D2006] text-xl mb-2">{pick.name}</h3>
                  {pick.price && <p className="font-extrabold text-[#2D6A4F] text-2xl mb-2">{pick.price}</p>}
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <StarRating rating={pick.rating} size="lg" />
                    <span className="text-[#2D2006] text-lg font-extrabold">{pick.rating}</span>
                  </div>
                  <p className="text-[#8B7355] text-xs mb-3">{pick.reviewCount} verified reviews</p>
                  {pick.prime && <div className="mb-3"><PrimeBadge /></div>}
                  <a href={amazonLink(pick)} target="_blank" rel="noopener noreferrer nofollow sponsored" className="inline-block text-white font-bold text-base px-6 py-3.5 rounded-xl transition-all duration-300 w-full hover:shadow-lg hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #F39C12, #D35400)', boxShadow: '0 4px 16px rgba(211,84,0,0.25)' }}>
                    Check Price on Amazon &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#2D2006]">Detailed Reviews</h2>
            <span className="text-xs text-[#1A1A1A]/40 bg-[#F0EEEB] px-3 py-1.5 rounded-full">Sorted by: Our Ranking</span>
          </div>
          {cat.picks.map((pick, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #F39C12, #D35400)' }}>#{i + 1}</span>
                      <h3 className="font-bold text-[#2D2006] text-xl">{pick.name}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <StarRating rating={pick.rating} />
                      <span className="text-[#8B7355] text-sm">({pick.reviewCount} reviews)</span>
                      {pick.prime && <PrimeBadge />}
                      {pick.price && <span className="font-extrabold text-[#2D6A4F] text-lg">{pick.price}</span>}
                    </div>
                  </div>
                  {pick.badge && <span className="text-xs font-bold text-[#D35400] bg-[#D35400]/10 px-3 py-1 rounded-full">{pick.badge}</span>}
                </div>
                <p className="text-[#8B7355] leading-relaxed mb-5 mt-4">{pick.description}</p>
                <ul className="space-y-2 mb-6">
                  {pick.features.map((f, j) => (
                    <li key={j} className="text-[#8B7355] text-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#5B7B5E]/10 flex items-center justify-center flex-shrink-0 text-[#5B7B5E] text-xs font-bold">{'\u2713'}</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={amazonLink(pick)} target="_blank" rel="noopener noreferrer nofollow sponsored" className="inline-block w-full sm:w-auto text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #F39C12, #D35400)', boxShadow: '0 4px 16px rgba(211,84,0,0.25)' }}>
                  Check Price on Amazon &rarr;
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Best For These Breeds */}
        {cat.recommendedBreeds && cat.recommendedBreeds.length > 0 && (() => {
          const breedNames: Record<string, string> = {
            "golden-retriever":"Golden Retriever","labrador-retriever":"Labrador","french-bulldog":"French Bulldog","german-shepherd":"German Shepherd","poodle":"Poodle","bulldog":"Bulldog","beagle":"Beagle","rottweiler":"Rottweiler","dachshund":"Dachshund","german-shorthaired-pointer":"GSP","pembroke-welsh-corgi":"Corgi","australian-shepherd":"Aussie","yorkshire-terrier":"Yorkie","cavalier-king-charles-spaniel":"Cavalier","doberman-pinscher":"Doberman","boxer":"Boxer","miniature-schnauzer":"Mini Schnauzer","cane-corso":"Cane Corso","great-dane":"Great Dane","shih-tzu":"Shih Tzu","siberian-husky":"Husky","bernese-mountain-dog":"Bernese","pomeranian":"Pomeranian","boston-terrier":"Boston Terrier","havanese":"Havanese","english-springer-spaniel":"Springer","shetland-sheepdog":"Sheltie","brittany":"Brittany","cocker-spaniel":"Cocker","border-collie":"Border Collie","vizsla":"Vizsla","goldendoodle":"Goldendoodle","labradoodle":"Labradoodle","maltese":"Maltese","chihuahua":"Chihuahua","pug":"Pug","weimaraner":"Weimaraner","rhodesian-ridgeback":"Ridgeback","belgian-malinois":"Belgian Malinois","newfoundland":"Newfoundland","west-highland-white-terrier":"Westie","bichon-frise":"Bichon","akita":"Akita","basset-hound":"Basset","irish-setter":"Irish Setter","dalmatian":"Dalmatian","pit-bull-terrier":"Pit Bull","australian-cattle-dog":"Blue Heeler","samoyed":"Samoyed","alaskan-malamute":"Malamute",
          };
          return (
            <section className="mb-16 bg-white rounded-2xl p-6 md:p-8 border border-[#F0EEEB]" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#2D2006] mb-2">Best For These Breeds</h2>
              <p className="text-[#8B7355] text-sm mb-5">Breed-specific guides with matching product recommendations.</p>
              <div className="flex flex-wrap gap-2">
                {cat.recommendedBreeds.map((slug) => (
                  <Link key={slug} href={`/breeds/${slug}`} className="inline-flex items-center gap-1 bg-[#D35400]/5 hover:bg-[#D35400]/15 text-[#D35400] text-sm font-semibold px-4 py-2 rounded-full transition-all">
                    {breedNames[slug] || slug}
                    <span className="text-xs">&rarr;</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        {/* How We Choose */}
        <section className="mb-16">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#2D2006] mb-8 text-center">How We Choose</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#F0EEEB' }}>
              <div className="w-12 h-12 rounded-full bg-[#D35400]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#D35400] text-xl">&#128269;</span>
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Research</h3>
              <p className="text-[#1A1A1A]/60 text-sm">We analyze thousands of verified owner reviews and compare specs across every major brand in the category.</p>
            </div>
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#F0EEEB' }}>
              <div className="w-12 h-12 rounded-full bg-[#5B7B5E]/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#5B7B5E] text-xl">&#128104;&#8205;&#9877;&#65039;</span>
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Expert Input</h3>
              <p className="text-[#1A1A1A]/60 text-sm">We consult with veterinarians, groomers, and professional trainers to validate our picks.</p>
            </div>
            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#F0EEEB' }}>
              <div className="w-12 h-12 rounded-full bg-[#D4C5A9]/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#1A1A1A]/60 text-xl">&#128737;&#65039;</span>
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">Independence</h3>
              <p className="text-[#1A1A1A]/60 text-sm">Our rankings are never influenced by brand partnerships. We only recommend products we&apos;d buy for our own dogs.</p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {(() => {
          const relatedPosts: Record<string, { title: string; href: string }[]> = {
            "dog-beds": [
              { title: "Best Dog Beds for Large Breeds", href: "/blog/best-dog-beds-for-large-breeds" },
              { title: "Signs Your Dog Needs a Better Bed", href: "/blog/signs-dog-needs-better-bed" },
              { title: "Best Bed for Great Danes", href: "/blog/best-bed-for-great-dane" },
              { title: "Best Dog Bed for Corgis", href: "/blog/best-dog-bed-for-corgi" },
            ],
            "dog-food": [
              { title: "How to Choose the Right Dog Food", href: "/blog/choose-right-dog-food" },
              { title: "Best Dog Food for Puppies", href: "/blog/best-dog-food-for-puppies" },
              { title: "Best Food for Sensitive Stomachs", href: "/blog/best-dog-food-for-sensitive-stomach" },
              { title: "Best Food for Weight Loss", href: "/blog/best-dog-food-for-weight-loss" },
              { title: "When to Switch Puppy to Adult Food", href: "/blog/when-to-switch-puppy-to-adult-food" },
            ],
            "dog-toys": [
              { title: "Best Indestructible Dog Toys", href: "/blog/indestructible-dog-toys" },
              { title: "Best Toys for Labrador Retrievers", href: "/blog/best-toys-for-labrador-retriever" },
              { title: "Best Toys for Australian Shepherds", href: "/blog/best-toys-for-australian-shepherd" },
              { title: "Best Chew Toys for Aggressive Chewers", href: "/blog/best-chew-toys-aggressive-chewers" },
            ],
            "dog-harnesses": [
              { title: "Best Harness for Dogs That Pull", href: "/blog/best-dog-harness-for-dogs-that-pull" },
              { title: "Best Harness for Dachshunds", href: "/blog/best-harness-for-dachshund" },
              { title: "Best Harness for German Shepherds", href: "/blog/best-harness-for-german-shepherd" },
              { title: "How to Stop Leash Pulling", href: "/blog/how-to-stop-dog-from-pulling-on-leash" },
            ],
            "dog-leashes": [
              { title: "How to Stop Leash Pulling", href: "/blog/how-to-stop-dog-from-pulling-on-leash" },
            ],
            "dog-grooming": [
              { title: "Dog Grooming at Home", href: "/blog/dog-grooming-at-home" },
              { title: "How Often Should I Bathe My Dog?", href: "/blog/how-often-should-i-bathe-my-dog" },
              { title: "Grooming Tools for Goldendoodles", href: "/blog/best-grooming-tools-for-goldendoodle" },
              { title: "How to Clean Dog Ears", href: "/blog/how-to-clean-dog-ears" },
            ],
            "dog-crates": [
              { title: "Best Crate for Puppy Training", href: "/blog/best-dog-crate-for-puppy-training" },
              { title: "How to Crate Train a Puppy", href: "/blog/how-to-crate-train-puppy" },
              { title: "Best Crate for Husky Puppies", href: "/blog/best-crate-for-husky-puppy" },
            ],
            "dog-supplements": [
              { title: "Do Joint Supplements Work?", href: "/blog/dog-joint-supplements-do-they-work" },
              { title: "Best Supplements for Rottweilers", href: "/blog/best-supplements-for-rottweiler" },
            ],
            "dog-dental": [
              { title: "How to Clean Dog Ears", href: "/blog/how-to-clean-dog-ears" },
            ],
            "dog-coats": [
              { title: "Winter Dog Care Tips", href: "/blog/winter-dog-care-tips" },
            ],
            "dog-boots": [
              { title: "Winter Dog Care Tips", href: "/blog/winter-dog-care-tips" },
            ],
            "dog-anxiety": [
              { title: "How to Stop Dog Barking", href: "/blog/how-to-stop-dog-from-barking" },
            ],
            "dog-bowls": [
              { title: "Best Slow Feeder for Labs", href: "/blog/best-slow-feeder-for-labs" },
            ],
            "dog-puzzle-toys": [
              { title: "Best Toys for Australian Shepherds", href: "/blog/best-toys-for-australian-shepherd" },
              { title: "Best Chew Toys for Aggressive Chewers", href: "/blog/best-chew-toys-aggressive-chewers" },
            ],
            "dog-cooling": [
              { title: "How Much Exercise Does My Dog Need?", href: "/blog/how-much-exercise-does-my-dog-need" },
            ],
            "dog-training": [
              { title: "How to Crate Train a Puppy", href: "/blog/how-to-crate-train-puppy" },
              { title: "How to Stop Leash Pulling", href: "/blog/how-to-stop-dog-from-pulling-on-leash" },
              { title: "How to Stop Dog Barking", href: "/blog/how-to-stop-dog-from-barking" },
            ],
            "puppy-essentials": [
              { title: "New Puppy Checklist", href: "/blog/new-puppy-checklist" },
              { title: "How to Crate Train a Puppy", href: "/blog/how-to-crate-train-puppy" },
              { title: "Best Dog Food for Puppies", href: "/blog/best-dog-food-for-puppies" },
            ],
          };
          const posts = relatedPosts[cat.slug];
          if (!posts) return null;
          return (
            <section className="mt-16 pt-12 border-t border-[#D4C5A9]/40 mb-16">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {posts.map(post => (
                  <Link key={post.href} href={post.href} className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D4C5A9]/30">
                    <p className="font-semibold text-[#1A1A1A] text-sm">{post.title}</p>
                    <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })()}

        {/* Newsletter Signup */}
        <section className="rounded-2xl p-10 mb-12 text-center" style={{ background: 'linear-gradient(135deg, #C4704B11 0%, #5B7B5E11 100%)' }}>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">Get Our Weekly Picks</h2>
          <p className="text-[#1A1A1A]/60 mb-6 max-w-md mx-auto">Join dog parents who get our best product finds, breed tips, and exclusive deals every Thursday.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-full border border-[#D4C5A9] text-sm focus:outline-none focus:border-[#C4704B] bg-white" />
            <button className="bg-[#D35400] hover:bg-[#b5623f] text-white font-semibold text-sm px-7 py-3 rounded-full transition whitespace-nowrap">Join the Pack</button>
          </div>
          <p className="text-xs text-[#1A1A1A]/30 mt-3">No spam, ever. Unsubscribe anytime.</p>
        </section>

        {/* Affiliate Disclosure */}
        <p className="text-[#1A1A1A]/30 text-xs italic text-center">As an Amazon Associate, <BrandName /> earns from qualifying purchases. This does not affect our editorial independence. Prices and availability are subject to change.</p>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#F0EEEB] p-3 flex items-center justify-between gap-3 md:hidden z-50" style={{ boxShadow: '0 -2px 10px rgba(0,0,0,0.08)' }}>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-[#1A1A1A]/40 truncate">Our #1 Pick</p>
          <p className="text-sm font-bold text-[#1A1A1A] truncate">{cat.picks[0].name}</p>
        </div>
        <a href={amazonLink(cat.picks[0])} target="_blank" rel="noopener noreferrer nofollow sponsored" className="bg-[#D35400] hover:bg-[#b5623f] text-white font-semibold text-xs px-5 py-2.5 rounded-full transition whitespace-nowrap flex-shrink-0">
          Check Price
        </a>
      </div>
    </div>
  );
}
