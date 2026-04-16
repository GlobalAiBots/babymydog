import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Fetch Toys for Active Dogs (2026) | BabyMyDog",
  description:
    "Our top 6 fetch toys for high-energy dogs in 2026. Chuckit, KONG Flyer, West Paw & more — tested for durability, distance, and safety.",
  alternates: { canonical: "https://babymydog.com/best/fetch-toys" },
};

function amazonLink(asin: string) {
  return `https://www.amazon.com/dp/${asin}?tag=babymydog03-20`;
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3;
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill={i < full ? "currentColor" : i === full && half ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
      <span className="text-[#8B7355] text-sm ml-1">{rating}</span>
    </span>
  );
}

const products = [
  {
    name: "Chuckit! Ultra Ball",
    badge: "Best Overall",
    description:
      "The Chuckit Ultra Ball is the most popular fetch ball in the world for good reason. Its thick natural rubber core has a high bounce, excellent buoyancy, and stands up to thousands of throws. The bright orange-and-blue color makes it easy to spot in tall grass.",
    features: [
      "High-bounce natural rubber core for unpredictable play",
      "Compatible with all Chuckit ball launchers for long-distance throws",
      "Floats in water — perfect for lake and pool play",
    ],
    asin: "B000F4AVPA",
    rating: 4.7,
    reviewCount: "78K+",
    prime: true,
  },
  {
    name: "KONG Flyer Disc",
    badge: "Best Frisbee",
    description:
      "Unlike hard plastic frisbees that can chip teeth, the KONG Flyer is made from soft, flexible natural rubber that is gentle on your dog's mouth. It flies true and straight, making it ideal for long-distance catches.",
    features: [
      "Soft natural rubber is gentle on teeth and gums",
      "Flies straight and true even in moderate wind",
      "Puncture-resistant construction for aggressive catchers",
    ],
    asin: "B0002DJWIY",
    rating: 4.4,
    reviewCount: "15K+",
    prime: true,
  },
  {
    name: "Chuckit! Kick Fetch Ball",
    badge: "Best for Soccer-Style Play",
    description:
      "The Kick Fetch is a genius hybrid — an oversized ball with grooves that let dogs grip it easily while owners can boot it with a solid kick. It rolls unpredictably, which keeps dogs engaged and adds a physical workout for both of you.",
    features: [
      "Oversized design for kicking — no bending down required",
      "Deep grooves let dogs pick it up with their mouth easily",
      "Durable foam and rubber construction floats in water",
    ],
    asin: "B00280MUVC",
    rating: 4.4,
    reviewCount: "22K+",
    prime: true,
  },
  {
    name: "West Paw Jive Ball",
    badge: "Best Eco-Friendly",
    description:
      "Made from West Paw's signature Zogoflex material in Bozeman, Montana, the Jive is a bouncy, durable ball that is 100 percent recyclable and backed by a manufacturer guarantee. Its erratic bounce pattern keeps dogs guessing.",
    features: [
      "100% recyclable Zogoflex material — BPA and phthalate free",
      "Erratic high bounce adds excitement to every throw",
      "Backed by a one-time replacement guarantee if damaged",
    ],
    asin: "B004A7X21Q",
    rating: 4.3,
    reviewCount: "6K+",
    prime: true,
  },
  {
    name: "Hyper Pet Flippy Flopper",
    badge: "Best Soft Frisbee",
    description:
      "The Flippy Flopper is a lightweight, fabric-covered foam disc that is incredibly gentle on dogs' mouths and gums. It flies up to 75 feet and floats on water, making it a versatile choice for all environments.",
    features: [
      "Multi-layer nylon and foam construction is gentle on teeth",
      "Floats on water for lake and pool play",
      "Folds flat for easy storage and travel",
    ],
    asin: "B005BX0TN4",
    rating: 4.3,
    reviewCount: "28K+",
    prime: true,
  },
  {
    name: "Chuckit! Ultra Squeaker Ball",
    badge: "Best with Sound",
    description:
      "All the durability of the original Ultra Ball with an embedded squeaker that keeps sounding off even after heavy use. The squeaker adds auditory excitement that keeps fetch-obsessed dogs coming back for more.",
    features: [
      "Built-in squeaker maintains sound through heavy chewing",
      "Same durable rubber construction as the Ultra Ball",
      "Compatible with Chuckit ball launchers for extended distance",
    ],
    asin: "B07F4JFBQC",
    rating: 4.5,
    reviewCount: "10K+",
    prime: true,
  },
];

const faqs = [
  {
    q: "How do I choose the right size fetch toy for my dog?",
    a: "The fetch toy should be large enough that your dog cannot accidentally swallow it but small enough to carry comfortably. For most medium to large breeds like Golden Retrievers and Australian Shepherds, a standard or large-size ball works well. Small breeds do better with mini or small sizes. When in doubt, go one size up for safety.",
  },
  {
    q: "Are tennis balls safe for dogs to fetch with?",
    a: "Regular tennis balls are not ideal for dogs. The fuzzy felt covering acts like sandpaper on teeth over time, wearing down enamel. Tennis balls can also become a choking hazard when the rubber shell compresses. Purpose-built fetch balls like the Chuckit Ultra are made from pet-safe rubber without the abrasive coating and are designed to resist compression.",
  },
  {
    q: "How much fetch is too much for my dog?",
    a: "Most healthy adult dogs can handle 15 to 30 minutes of active fetch per session, with breaks every 5 to 10 minutes. Watch for signs of overexertion — heavy panting, limping, or reluctance to chase. Puppies and senior dogs need shorter sessions. Always bring water and avoid fetching during the hottest part of the day to prevent heatstroke.",
  },
];

export default function FetchToysPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Best Products", item: "https://babymydog.com/best" },
      { "@type": "ListItem", position: 3, name: "Best Fetch Toys", item: "https://babymydog.com/best/fetch-toys" },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <nav className="text-sm text-[#8B7355] mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#D35400] transition">Home</Link><span>/</span>
          <Link href="/best" className="hover:text-[#D35400] transition">Best Products</Link><span>/</span>
          <span className="text-[#2D2006] font-medium">Fetch Toys</span>
        </nav>

        <Link href="/best" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; Back to All Products
        </Link>

        <h1 className="font-extrabold text-[28px] md:text-[44px] text-[#2D2006] mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Best Fetch Toys for Active Dogs (2026)
        </h1>

        <div className="prose max-w-3xl text-[#8B7355] leading-relaxed mb-14 space-y-4">
          <p>
            Fetch is more than a game — it is the single most effective way to exercise high-energy breeds like Golden Retrievers, Australian Shepherds, Border Collies, and Labrador Retrievers. A good 20-minute fetch session can burn as much energy as an hour-long walk, making it the go-to activity for busy dog owners who need to tire out their companions quickly.
          </p>
          <p>
            But not all fetch toys are created equal. Standard tennis balls wear down tooth enamel, cheap rubber balls split after a few sessions, and hard plastic frisbees can chip teeth on bad catches. The best fetch toys in 2026 are engineered specifically for dogs: non-toxic materials, high visibility colors, and construction that can survive thousands of throws and catches.
          </p>
          <p>
            After testing dozens of options and analyzing over 150,000 verified owner reviews, we narrowed our picks to six standout fetch toys. The Chuckit Ultra Ball earns our top spot for its unmatched combination of durability, bounce, and compatibility with ball launchers. For frisbee lovers, the KONG Flyer delivers the flight performance of a hard disc with soft rubber that protects teeth and gums.
          </p>
          <p>
            Every toy on this list is water-safe, made from non-toxic materials, and designed to be highly visible so you never lose it in the grass. We include direct Amazon links for easy purchasing and real-time price checks.
          </p>
        </div>

        <section className="space-y-8 mb-16">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)" }}>#{i + 1}</span>
                      <h3 className="font-bold text-[#2D2006] text-xl">{p.name}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <StarRating rating={p.rating} />
                      <span className="text-[#8B7355] text-sm">({p.reviewCount} reviews)</span>
                      {p.prime && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                          Prime
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D35400] bg-[#D35400]/10 px-3 py-1 rounded-full">{p.badge}</span>
                </div>
                <p className="text-[#8B7355] leading-relaxed mb-5 mt-4">{p.description}</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, j) => (
                    <li key={j} className="text-[#8B7355] text-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#5B7B5E]/10 flex items-center justify-center flex-shrink-0 text-[#5B7B5E] text-xs font-bold">{"\u2713"}</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer nofollow sponsored" className="inline-block text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}>
                  Check Price on Amazon &rarr;
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#2D2006] mb-8" style={{ fontFamily: "'DM Serif Display', serif" }}>Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <summary className="cursor-pointer p-6 font-semibold text-[#2D2006] flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 text-[#D35400] group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-6 text-[#8B7355] leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-16 pt-12 border-t border-[#D35400]/10">
          <h2 className="text-xl font-bold text-[#2D2006] mb-6">Related Breeds &amp; Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/breeds/golden-retriever" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Golden Retriever Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/australian-shepherd" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Australian Shepherd Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/best-toys-for-labrador-retriever" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Best Toys for Labrador Retrievers</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/how-much-exercise-does-my-dog-need" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">How Much Exercise Does My Dog Need?</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(211,84,0,0.07), rgba(91,123,94,0.07))" }}>
          <h2 className="text-2xl font-bold text-[#2D2006] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>Find the Perfect Fetch Toy for Your Dog</h2>
          <p className="text-[#8B7355] mb-6 max-w-lg mx-auto">Answer a few quick questions about your dog&apos;s breed, energy level, and play style to get personalized recommendations.</p>
          <Link href="/quiz" className="inline-block text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}>
            Take the Quiz &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
