import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Products for Large & Giant Breeds (2026) | BabyMyDog",
  description:
    "Top 6 products for large and giant breed dogs in 2026. Heavy-duty beds, XL crates, joint supplements & more — built for dogs 50 lbs and up.",
  alternates: { canonical: "https://babymydog.com/best/large-dog-products" },
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
    name: "Big Barker Orthopedic Bed (XL)",
    badge: "Best Bed for Large Dogs",
    description:
      "The Big Barker is the only dog bed with a 10-year, no-flatten guarantee and clinical proof from the University of Pennsylvania that it reduces joint pain and stiffness. The 7-inch therapeutic foam supports dogs up to 200 pounds without bottoming out.",
    features: [
      "7-inch American-made therapeutic foam — supports dogs up to 200 lbs",
      "Clinically proven to reduce joint pain in a University of Pennsylvania study",
      "10-year no-flatten guarantee — the only dog bed that offers this",
    ],
    asin: "B00B2JLN2Q",
    rating: 4.7,
    reviewCount: "12K+",
    prime: true,
  },
  {
    name: "KONG Extreme XL Dog Toy",
    badge: "Toughest Toy",
    description:
      "The KONG Extreme in XL is built for the strongest jaws. Its black ultra-tough rubber compound stands up to German Shepherds, Rottweilers, and other power chewers that destroy everything else. Stuff with peanut butter or treats for hours of engagement.",
    features: [
      "Ultra-strong black rubber formulated for the most powerful chewers",
      "XL size appropriate for dogs 60 to 90+ lbs",
      "Stuffable center keeps large dogs mentally engaged and reduces boredom",
    ],
    asin: "B0002AR0II",
    rating: 4.7,
    reviewCount: "42K+",
    prime: true,
  },
  {
    name: "Outward Hound Fun Feeder XL Slow Bowl",
    badge: "Best Slow Feeder",
    description:
      "Large dogs are especially prone to bloat — a life-threatening condition often triggered by speed eating. The Fun Feeder XL's deep ridges slow eating by up to 10 times, dramatically reducing the risk of bloat, vomiting, and indigestion in big breeds.",
    features: [
      "Deep ridges slow eating by up to 10x — reduces bloat risk in large breeds",
      "Holds up to 4 cups of kibble for large-breed portions",
      "BPA, PVC, and phthalate-free with a non-slip rubber base",
    ],
    asin: "B00FPKNRCS",
    rating: 4.5,
    reviewCount: "65K+",
    prime: true,
  },
  {
    name: "Ruffwear Front Range Harness",
    badge: "Best Harness",
    description:
      "Ruffwear is the premium outdoor brand for active dogs, and the Front Range is their most versatile everyday harness. Two leash attachment points — front and back — give you control over large pullers, while padded panels distribute pressure evenly across the chest.",
    features: [
      "Two leash attachment points: front for training, back for everyday walks",
      "Padded chest and belly panels prevent chafing on large frames",
      "Four adjustment points for a custom fit on barrel-chested breeds",
    ],
    asin: "B01N10QWKX",
    rating: 4.6,
    reviewCount: "18K+",
    prime: true,
  },
  {
    name: "Cosequin DS Plus MSM Joint Supplement",
    badge: "Best Joint Support",
    description:
      "Large and giant breeds are disproportionately affected by joint issues — hip dysplasia, arthritis, and ligament injuries are common. Cosequin DS Plus MSM is the number-one vet-recommended joint supplement that combines glucosamine, chondroitin, and MSM for comprehensive joint support.",
    features: [
      "Number-one veterinarian-recommended joint health supplement",
      "Glucosamine, chondroitin, and MSM for comprehensive cartilage support",
      "Chewable tablets — easy to administer to large dogs",
    ],
    asin: "B001C4VQZY",
    rating: 4.7,
    reviewCount: "28K+",
    prime: true,
  },
  {
    name: "MidWest iCrate (48-Inch XL)",
    badge: "Best XL Crate",
    description:
      "The 48-inch MidWest iCrate is sized for breeds like German Shepherds, Golden Retrievers, and Rottweilers. It includes a divider panel, a leak-proof plastic pan, and double-door access. The fold-and-carry design makes it surprisingly portable for its size.",
    features: [
      "48-inch length accommodates dogs 91 to 110 lbs comfortably",
      "Includes divider panel for puppy training — grows with your dog",
      "Double-door design with secure slide-bolt latches",
    ],
    asin: "B000QFMYWQ",
    rating: 4.7,
    reviewCount: "85K+",
    prime: true,
  },
];

const faqs = [
  {
    q: "What size crate does a large dog need?",
    a: "Your dog should be able to stand up, turn around, and lie down comfortably. For most large breeds (60 to 90 lbs) like German Shepherds and Golden Retrievers, a 42 to 48-inch crate works well. Giant breeds like Great Danes and Mastiffs need 54-inch crates. Use the divider panel during puppyhood and expand the space as your dog grows. A crate that is too large can actually hinder housetraining.",
  },
  {
    q: "When should I start giving my large dog joint supplements?",
    a: "Many veterinarians recommend starting joint supplements for large breeds as early as age 1 to 2, especially for breeds predisposed to hip dysplasia like German Shepherds, Rottweilers, and Labrador Retrievers. Early supplementation can help protect cartilage before significant damage occurs. Consult your vet for breed-specific guidance — they may recommend starting even earlier for giant breeds.",
  },
  {
    q: "Why do large dogs need a slow feeder bowl?",
    a: "Large and giant breeds are significantly more prone to gastric dilatation-volvulus (bloat), a life-threatening condition where the stomach fills with gas and can twist on itself. Speed eating is a major risk factor. A slow feeder bowl forces your dog to work around ridges and obstacles, slowing consumption by up to 10 times. This reduces air intake and gives the stomach time to process food safely.",
  },
];

export default function LargeDogProductsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Best Products", item: "https://babymydog.com/best" },
      { "@type": "ListItem", position: 3, name: "Large Dog Products", item: "https://babymydog.com/best/large-dog-products" },
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
          <span className="text-[#2D2006] font-medium">Large Dog Products</span>
        </nav>

        <Link href="/best" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; Back to All Products
        </Link>

        <h1 className="font-extrabold text-[28px] md:text-[44px] text-[#2D2006] mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Best Products for Large &amp; Giant Breeds (2026)
        </h1>

        <div className="prose max-w-3xl text-[#8B7355] leading-relaxed mb-14 space-y-4">
          <p>
            Owning a large or giant breed dog comes with unique challenges that standard pet products simply are not designed to handle. A bed built for a 30-pound dog will flatten under a German Shepherd in weeks. A harness designed for a Beagle will chafe a Rottweiler's deep chest. And standard-size toys become choking hazards for dogs with powerful jaws and wide mouths.
          </p>
          <p>
            Large breeds also face specific health concerns. Hip dysplasia, bloat, and joint deterioration are significantly more common in dogs over 50 pounds, and the right products can meaningfully reduce these risks. A slow feeder bowl reduces the speed eating that triggers bloat. An orthopedic bed supports joints that carry far more weight than they were designed for. And starting joint supplements early can protect cartilage before the damage becomes irreversible.
          </p>
          <p>
            We tested, researched, and reviewed products specifically designed for large and giant breeds — German Shepherds, Golden Retrievers, Rottweilers, Great Danes, Mastiffs, and similar dogs. Every product on this list is rated for dogs 50 pounds and up, built from heavy-duty materials, and backed by thousands of verified owner reviews from large-breed households.
          </p>
          <p>
            Whether you are outfitting a new large-breed puppy or upgrading your adult dog's gear, these six essentials represent the best quality-to-value options available in 2026. All links go directly to Amazon for real-time pricing and Prime delivery.
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
            <Link href="/breeds/german-shepherd" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">German Shepherd Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/golden-retriever" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Golden Retriever Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/rottweiler" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Rottweiler Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/best-dog-beds-for-large-breeds" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Best Dog Beds for Large Breeds</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(211,84,0,0.07), rgba(91,123,94,0.07))" }}>
          <h2 className="text-2xl font-bold text-[#2D2006] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>Find Products Sized for Your Big Dog</h2>
          <p className="text-[#8B7355] mb-6 max-w-lg mx-auto">Take our quick quiz and get personalized recommendations for your large or giant breed based on their specific needs.</p>
          <Link href="/quiz" className="inline-block text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}>
            Take the Quiz &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
