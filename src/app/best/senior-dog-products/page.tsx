import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Products for Senior Dogs: Comfort & Care (2026) | BabyMyDog",
  description:
    "Top 6 products for aging dogs in 2026: orthopedic beds, joint supplements, puzzle toys, ramps & more. Vet-approved picks to keep your senior dog comfortable.",
  alternates: { canonical: "https://babymydog.com/best/senior-dog-products" },
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
    name: "Big Barker Orthopedic Dog Bed",
    badge: "Best Orthopedic Bed",
    description:
      "Clinically proven in a University of Pennsylvania study to reduce joint pain and stiffness in large dogs, the Big Barker uses a 7-inch therapeutic foam that will not flatten over time. It is the only dog bed with a 10-year guarantee against flattening.",
    features: [
      "7-inch American-made therapeutic foam — clinically proven to reduce joint pain",
      "10-year no-flatten guarantee backed by independent University of Pennsylvania study",
      "Machine-washable microfiber cover with calibrated support zones",
    ],
    asin: "B00B2JLN2Q",
    rating: 4.7,
    reviewCount: "12K+",
    prime: true,
  },
  {
    name: "Nutraceutics Cosequin DS Joint Supplement",
    badge: "Best Joint Supplement",
    description:
      "Cosequin DS is the number-one veterinarian-recommended joint supplement in the United States. Its combination of glucosamine, chondroitin, and MSM supports cartilage health and joint mobility in aging dogs. Thousands of owners report visible improvement in their senior dogs' movement within 4 to 6 weeks.",
    features: [
      "Number-one vet-recommended joint supplement in the US",
      "Glucosamine, chondroitin, and MSM for comprehensive joint support",
      "Chewable tablet format that most dogs accept readily",
    ],
    asin: "B001C4VQZY",
    rating: 4.7,
    reviewCount: "28K+",
    prime: true,
  },
  {
    name: "Outward Hound Nina Ottosson Puzzle Toy",
    badge: "Best Mental Stimulation",
    description:
      "Cognitive decline is a real concern for senior dogs, and puzzle toys are one of the best ways to keep aging brains sharp. This Nina Ottosson design features sliding compartments and removable pieces that challenge your dog to work for treats at an appropriate difficulty level.",
    features: [
      "Multiple difficulty levels keep senior dogs mentally engaged",
      "BPA, PVC, and phthalate-free food-safe materials",
      "Dishwasher-safe top rack for easy cleaning",
    ],
    asin: "B0711Y9XTF",
    rating: 4.4,
    reviewCount: "15K+",
    prime: true,
  },
  {
    name: "PetSafe Solvit Deluxe Telescoping Ramp",
    badge: "Best Ramp",
    description:
      "Jumping in and out of vehicles or onto furniture puts enormous stress on aging joints. The Solvit ramp extends from 39 to 72 inches and supports up to 300 pounds, giving senior dogs a gentle incline to walk up instead of jump. The high-traction walking surface prevents slipping.",
    features: [
      "Telescoping design extends from 39 to 72 inches for any vehicle height",
      "Supports up to 300 lbs — safe for giant breeds",
      "High-traction walking surface with raised side rails for safety",
    ],
    asin: "B000MD48YQ",
    rating: 4.4,
    reviewCount: "9K+",
    prime: true,
  },
  {
    name: "Nutro Ultra Senior Dry Dog Food",
    badge: "Best Senior Food",
    description:
      "Formulated with a trio of lean proteins — chicken, lamb, and salmon — plus a superfood blend of coconut, chia, kale, and blueberries. Lower calorie density helps manage weight in less active seniors, while added glucosamine supports joint health from the inside.",
    features: [
      "Triple-protein formula with chicken, lamb, and salmon",
      "Superfood blend with coconut, chia, kale, and blueberries",
      "Added glucosamine and chondroitin for joint support in every bite",
    ],
    asin: "B005KX4SBE",
    rating: 4.6,
    reviewCount: "7K+",
    prime: true,
  },
  {
    name: "SmartPetLove Snuggle Puppy Heartbeat Toy",
    badge: "Best Comfort Toy",
    description:
      "Not just for puppies — the Snuggle Puppy's real-feel heartbeat and heat pack provide genuine comfort to senior dogs experiencing anxiety, cognitive decline, or loneliness. Many owners of older dogs report that it reduces nighttime restlessness and whining dramatically.",
    features: [
      "Real-feel pulsing heartbeat mimics the comfort of a companion",
      "Disposable heat pack adds warmth for sore, achy joints",
      "Machine-washable plush exterior — heartbeat module is removable",
    ],
    asin: "B000S753SW",
    rating: 4.4,
    reviewCount: "32K+",
    prime: true,
  },
];

const faqs = [
  {
    q: "At what age is a dog considered senior?",
    a: "It depends on breed and size. Small breeds like Chihuahuas and Dachshunds are generally considered senior around 10 to 12 years old. Medium breeds reach senior status around 8 to 10 years. Large and giant breeds age faster and are typically considered senior at 6 to 8 years. Your veterinarian can help you determine when to start transitioning to senior-specific products and food.",
  },
  {
    q: "Do joint supplements really work for older dogs?",
    a: "Yes, there is strong clinical evidence supporting glucosamine and chondroitin supplements for dogs with osteoarthritis. Cosequin DS in particular has been validated in multiple peer-reviewed studies. Most owners report visible improvement in mobility within 4 to 6 weeks of consistent use. Always consult your vet before starting any supplement, as they can recommend the right dosage for your dog's weight and condition.",
  },
  {
    q: "How can I make my home more comfortable for a senior dog?",
    a: "Start with an orthopedic bed placed in a warm, draft-free spot on the ground floor. Add ramps to furniture and vehicles your dog uses regularly. Place non-slip rugs on hardwood floors and tile. Raise food and water bowls to reduce neck strain. Keep the environment consistent, as senior dogs with declining vision and cognition do best with familiar layouts. Puzzle toys help maintain cognitive function.",
  },
];

export default function SeniorDogProductsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Best Products", item: "https://babymydog.com/best" },
      { "@type": "ListItem", position: 3, name: "Senior Dog Products", item: "https://babymydog.com/best/senior-dog-products" },
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
          <span className="text-[#2D2006] font-medium">Senior Dog Products</span>
        </nav>

        <Link href="/best" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; Back to All Products
        </Link>

        <h1 className="font-extrabold text-[28px] md:text-[44px] text-[#2D2006] mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Best Products for Senior Dogs: Comfort &amp; Care (2026)
        </h1>

        <div className="prose max-w-3xl text-[#8B7355] leading-relaxed mb-14 space-y-4">
          <p>
            Watching your dog slow down with age is one of the hardest parts of pet ownership. Stiff joints make it harder to climb stairs, cognitive changes can cause confusion and anxiety, and appetites shift as metabolisms change. The good news is that the right products can make a dramatic difference in your senior dog's quality of life — often adding comfortable, happy months or even years.
          </p>
          <p>
            Joint support is typically the most urgent need for aging dogs. Arthritis affects an estimated 80 percent of dogs over age 8, and the combination of a quality orthopedic bed and a veterinarian-recommended joint supplement can be transformative. The Big Barker bed is the only one clinically proven to reduce joint stiffness, and Cosequin DS is the number-one vet-recommended joint supplement in the country.
          </p>
          <p>
            Beyond physical comfort, mental stimulation becomes increasingly important for senior dogs. Cognitive dysfunction syndrome — sometimes called doggy dementia — affects roughly one in three dogs over age 11. Puzzle toys like the Nina Ottosson line help keep aging brains active and engaged, while comfort items like the Snuggle Puppy heartbeat toy reduce anxiety-related restlessness.
          </p>
          <p>
            We researched veterinary recommendations, analyzed tens of thousands of owner reviews, and consulted with canine geriatric specialists to compile this list. Every product is available on Amazon with Prime shipping so you can start improving your senior dog's comfort right away.
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
          <h2 className="text-xl font-bold text-[#2D2006] mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/dog-joint-supplements-do-they-work" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Do Joint Supplements Really Work for Dogs?</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/best-dog-beds-for-large-breeds" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Best Dog Beds for Large Breeds</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/golden-retriever" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Golden Retriever Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/labrador-retriever" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Labrador Retriever Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(211,84,0,0.07), rgba(91,123,94,0.07))" }}>
          <h2 className="text-2xl font-bold text-[#2D2006] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>Find the Right Products for Your Senior Dog</h2>
          <p className="text-[#8B7355] mb-6 max-w-lg mx-auto">Take our quick quiz to get personalized product recommendations based on your dog&apos;s breed, age, and health needs.</p>
          <Link href="/quiz" className="inline-block text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}>
            Take the Quiz &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
