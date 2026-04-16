import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Products for Small Dogs & Toy Breeds (2026) | BabyMyDog",
  description:
    "Top 6 products designed for small dogs and toy breeds in 2026. Calming beds, small-breed food, mini toys, harnesses & more — sized for dogs under 25 lbs.",
  alternates: { canonical: "https://babymydog.com/best/small-dog-products" },
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
    name: "Best Friends by Sheri Calming Donut Bed",
    badge: "Best Bed",
    description:
      "This round, donut-shaped bed is designed to mimic the feeling of being cuddled, which is especially calming for small dogs prone to anxiety. The raised rim supports the head and neck, while the super-soft faux fur creates a warm, secure nesting spot that small breeds instinctively love.",
    features: [
      "Deep donut shape creates a sense of security for anxious small dogs",
      "Ultra-soft faux shag fur keeps small dogs warm and comfortable",
      "Machine-washable and dryer-safe for easy maintenance",
    ],
    asin: "B07B4LH4Y6",
    rating: 4.5,
    reviewCount: "72K+",
    prime: true,
  },
  {
    name: "Wellness CORE Small Breed Dog Food",
    badge: "Best Small-Breed Food",
    description:
      "Small dogs have faster metabolisms and need more calorie-dense food than large breeds. Wellness CORE Small Breed delivers high protein from deboned turkey and chicken in a smaller kibble size that tiny mouths can chew comfortably. Grain-free formula supports digestive health.",
    features: [
      "Higher protein and calorie density designed for fast small-breed metabolisms",
      "Smaller kibble size for tiny mouths — reduces choking risk",
      "Grain-free with probiotics for sensitive digestive systems",
    ],
    asin: "B004LKLY2A",
    rating: 4.6,
    reviewCount: "14K+",
    prime: true,
  },
  {
    name: "KONG Classic Small Dog Toy",
    badge: "Best Toy",
    description:
      "The same virtually indestructible KONG formula in a small size that is perfect for French Bulldogs, Dachshunds, and other toy breeds. Stuff with treats or peanut butter to keep small dogs entertained during alone time or crate training.",
    features: [
      "Durable natural rubber sized for dogs under 20 lbs",
      "Stuffable design provides mental enrichment and reduces boredom",
      "Unpredictable bounce keeps small dogs engaged during play",
    ],
    asin: "B0002AR0I8",
    rating: 4.7,
    reviewCount: "95K+",
    prime: true,
  },
  {
    name: "Puppia Soft Dog Harness",
    badge: "Best Harness",
    description:
      "Small dogs are prone to tracheal collapse, which makes traditional collars dangerous for walks. The Puppia Soft Harness distributes pressure across the chest instead of the throat, with a breathable air-mesh fabric that is gentle on small frames. It is the most recommended harness for toy breeds.",
    features: [
      "Chest-distributing design protects fragile tracheas in small breeds",
      "Breathable air-mesh fabric prevents overheating",
      "Step-in design makes it easy to put on wiggly small dogs",
    ],
    asin: "B003AL26DK",
    rating: 4.4,
    reviewCount: "25K+",
    prime: true,
  },
  {
    name: "Virbac C.E.T. Enzymatic Toothpaste",
    badge: "Best Dental Care",
    description:
      "Small breeds are disproportionately affected by dental disease — their crowded mouths accumulate plaque and tartar faster than large breeds. Virbac CET uses a dual-enzyme system to break down plaque without brushing, and the poultry flavor means most small dogs actually enjoy the process.",
    features: [
      "Dual-enzyme system breaks down plaque without requiring brushing",
      "Poultry flavor that dogs love — makes dental care stress-free",
      "Veterinarian-recommended for daily use in breeds prone to dental disease",
    ],
    asin: "B001GBIYRK",
    rating: 4.6,
    reviewCount: "18K+",
    prime: true,
  },
  {
    name: "Outward Hound Hide-A-Squirrel Puzzle Toy",
    badge: "Best Puzzle Toy",
    description:
      "Small dogs have strong prey drives and love to hunt, and the Hide-A-Squirrel taps into that instinct perfectly. Stuff the squeaky squirrels into the plush tree trunk and watch your dog work to extract them. It provides both mental stimulation and satisfying squeaky-toy fun in one package.",
    features: [
      "Engages natural prey drive with a hide-and-seek challenge",
      "Multiple squeaky squirrels provide replaceable interactive play",
      "Soft plush construction is gentle for small mouths",
    ],
    asin: "B0002I0RHW",
    rating: 4.5,
    reviewCount: "58K+",
    prime: true,
  },
];

const faqs = [
  {
    q: "Why do small dogs need different products than large dogs?",
    a: "Small dogs have unique physical needs. Their faster metabolisms require more calorie-dense food. Their fragile tracheas make chest harnesses safer than neck collars. Their crowded mouths make dental care more critical. And their smaller bodies lose heat faster, making cozy beds more important. Products designed for small dogs address all of these breed-specific concerns.",
  },
  {
    q: "What is the best harness for a small dog that pulls?",
    a: "A front-clip harness like the Puppia Soft or a small-sized Ruffwear Front Range gives you gentle steering control without putting pressure on the trachea. For small dogs, a chest-distributing harness is especially important because toy breeds are prone to tracheal collapse — a condition that can be triggered or worsened by pulling against a traditional collar.",
  },
  {
    q: "How often should I brush my small dog's teeth?",
    a: "Veterinarians recommend daily brushing for small breeds because their crowded mouths accumulate plaque and tartar faster than larger dogs. If daily brushing is not realistic, aim for at least three times per week. Use an enzymatic toothpaste like Virbac CET that continues working after application. Dental treats and regular veterinary cleanings should supplement — not replace — brushing.",
  },
];

export default function SmallDogProductsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Best Products", item: "https://babymydog.com/best" },
      { "@type": "ListItem", position: 3, name: "Small Dog Products", item: "https://babymydog.com/best/small-dog-products" },
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
          <span className="text-[#2D2006] font-medium">Small Dog Products</span>
        </nav>

        <Link href="/best" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; Back to All Products
        </Link>

        <h1 className="font-extrabold text-[28px] md:text-[44px] text-[#2D2006] mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Best Products for Small Dogs &amp; Toy Breeds (2026)
        </h1>

        <div className="prose max-w-3xl text-[#8B7355] leading-relaxed mb-14 space-y-4">
          <p>
            Small dogs and toy breeds like French Bulldogs, Dachshunds, Chihuahuas, and Pembroke Welsh Corgis make up some of the most popular breeds in the country, but the pet product market still skews heavily toward medium and large dogs. Standard-sized bowls are too deep, regular kibble is too big to chew comfortably, and collars can put dangerous pressure on delicate tracheas.
          </p>
          <p>
            Small breeds also have distinct health profiles that change what they need from their products. Their faster metabolisms mean they burn calories quicker and need nutrient-dense food. Their crowded mouths make dental disease the number-one health concern — over 80 percent of small dogs show signs of periodontal disease by age three. And their smaller body mass means they lose heat faster, making warm, secure beds a genuine health need rather than a luxury.
          </p>
          <p>
            We researched and reviewed products specifically engineered for dogs under 25 pounds. The Puppia Soft Harness protects fragile tracheas. Wellness CORE Small Breed provides the calorie density and kibble size that tiny dogs need. And the Best Friends by Sheri donut bed creates the warm, secure nesting environment that small breeds instinctively crave.
          </p>
          <p>
            Every recommendation on this list has been validated through thousands of verified owner reviews from small-dog households, veterinary input, and our own research. We link directly to Amazon so you can check sizing, read reviews, and compare pricing before purchasing.
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
            <Link href="/breeds/french-bulldog" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">French Bulldog Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/dachshund" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Dachshund Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/pembroke-welsh-corgi" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Pembroke Welsh Corgi Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/best-dog-food-for-sensitive-stomach" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Best Dog Food for Sensitive Stomachs</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(211,84,0,0.07), rgba(91,123,94,0.07))" }}>
          <h2 className="text-2xl font-bold text-[#2D2006] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>Find the Perfect Products for Your Small Dog</h2>
          <p className="text-[#8B7355] mb-6 max-w-lg mx-auto">Take our quick quiz to get personalized recommendations based on your small dog&apos;s breed, age, and unique needs.</p>
          <Link href="/quiz" className="inline-block text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}>
            Take the Quiz &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
