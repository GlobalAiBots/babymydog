import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dental Products for Dogs: Complete Oral Care (2026) | BabyMyDog",
  description:
    "Top 6 dog dental care products in 2026. Toothpaste, dental treats, water additives & more — vet-recommended picks to prevent periodontal disease.",
  alternates: { canonical: "https://babymydog.com/best/dental-care" },
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
    name: "Virbac CET Enzymatic Toothpaste",
    badge: "Best Toothpaste",
    description:
      "Virbac CET is the number-one veterinarian-recommended dog toothpaste in the United States. Its patented dual-enzyme system (glucose oxidase and lactoperoxidase) actively breaks down plaque without requiring rinsing. The poultry flavor means most dogs actually look forward to brushing time.",
    features: [
      "Patented dual-enzyme system breaks down plaque between brushings",
      "No rinsing required — safe to swallow, unlike human toothpaste",
      "Poultry flavor that dogs love — makes daily brushing easier",
    ],
    asin: "B001GBIYRK",
    rating: 4.6,
    reviewCount: "18K+",
    prime: true,
  },
  {
    name: "Greenies Original Dental Treats",
    badge: "Best Dental Treat",
    description:
      "Greenies are the first and only dental treat accepted by the Veterinary Oral Health Council (VOHC) for both plaque and tartar control. The unique chewy texture cleans down to the gumline as your dog chews, and one treat per day provides clinically proven dental benefits.",
    features: [
      "VOHC accepted for both plaque and tartar control — the only dental treat with this distinction",
      "Chewy texture cleans teeth down to the gumline",
      "Made with natural, easily digestible ingredients plus vitamins and minerals",
    ],
    asin: "B000CAQG5A",
    rating: 4.7,
    reviewCount: "68K+",
    prime: true,
  },
  {
    name: "Arm & Hammer Dental Rinse for Dogs",
    badge: "Best Water Additive",
    description:
      "If your dog will not tolerate brushing, a water additive is the next best thing. Arm & Hammer's dental rinse uses baking soda to neutralize odor-causing bacteria and reduce plaque buildup with every drink. It is tasteless, odorless, and most dogs accept it without any resistance.",
    features: [
      "Baking soda formula neutralizes bacteria and freshens breath",
      "Tasteless and odorless — dogs drink normally without detecting it",
      "Simply add to water bowl daily for passive dental care",
    ],
    asin: "B01CVPNXQE",
    rating: 4.3,
    reviewCount: "22K+",
    prime: true,
  },
  {
    name: "Nylabone Advanced Oral Care Dental Chew",
    badge: "Best Chew for Dental Health",
    description:
      "Nylabone's dental chew combines the durability of their classic nylon toys with a textured surface specifically designed to scrape away plaque and tartar as your dog chews. The bristle-like nubs work like a toothbrush, making it ideal for dogs who refuse traditional brushing.",
    features: [
      "Bristle-like nubs clean teeth mechanically during normal chewing",
      "Duraclean nylon lasts significantly longer than edible dental chews",
      "Dipped in real flavor to encourage consistent chewing",
    ],
    asin: "B003CL3PTM",
    rating: 4.3,
    reviewCount: "18K+",
    prime: true,
  },
  {
    name: "TropiClean Fresh Breath Dental Kit",
    badge: "Best Starter Kit",
    description:
      "This all-in-one kit includes a gel toothpaste, finger brush, and full-size toothbrush — everything you need to start a dental care routine. The TropiClean gel uses a natural, VOHC-accepted formula that helps control plaque when used as directed.",
    features: [
      "Complete kit with gel, finger brush, and standard toothbrush",
      "Natural gel formula with green tea extract for antioxidant support",
      "Finger brush included for dogs new to tooth brushing",
    ],
    asin: "B00A5RWK3S",
    rating: 4.3,
    reviewCount: "14K+",
    prime: true,
  },
  {
    name: "Petsmile Professional Toothpaste",
    badge: "Best Premium Option",
    description:
      "Petsmile is the only toothpaste with the VOHC seal of acceptance, meaning it has been independently verified to control plaque when applied as directed. Its proprietary Calprox formula dissolves the protein pellicle that plaque adheres to, providing a fundamentally different cleaning mechanism than enzymatic pastes.",
    features: [
      "Only toothpaste with the VOHC seal of acceptance",
      "Proprietary Calprox formula dissolves the protein layer plaque adheres to",
      "London Broil flavor that dogs find irresistible",
    ],
    asin: "B073PGP9L2",
    rating: 4.0,
    reviewCount: "5K+",
    prime: true,
  },
];

const faqs = [
  {
    q: "How often should I brush my dog's teeth?",
    a: "Veterinarians recommend brushing your dog's teeth daily for the best results. If daily brushing is not possible, aim for at least three times per week to meaningfully reduce plaque and tartar buildup. Supplement brushing with dental treats, water additives, and annual professional cleanings. Even imperfect brushing is dramatically better than no brushing at all.",
  },
  {
    q: "What are the signs of dental disease in dogs?",
    a: "Watch for bad breath (the most common early sign), red or swollen gums, yellow-brown tartar buildup on teeth, difficulty eating or chewing on one side, drooling, pawing at the mouth, and loose or missing teeth. By the time most owners notice symptoms, the disease is already moderate to advanced. Regular dental exams and preventive care are the best defense against periodontal disease.",
  },
  {
    q: "Can I use human toothpaste on my dog?",
    a: "Absolutely not. Human toothpaste contains fluoride and xylitol, both of which are toxic to dogs. Dogs cannot spit, so they swallow everything used in their mouth. Always use a toothpaste specifically formulated for dogs, like Virbac CET or Petsmile, which are designed to be safe when swallowed and contain enzymes that continue working after application.",
  },
];

export default function DentalCarePage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Best Products", item: "https://babymydog.com/best" },
      { "@type": "ListItem", position: 3, name: "Dental Care Products", item: "https://babymydog.com/best/dental-care" },
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
          <span className="text-[#2D2006] font-medium">Dental Care Products</span>
        </nav>

        <Link href="/best" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; Back to All Products
        </Link>

        <h1 className="font-extrabold text-[28px] md:text-[44px] text-[#2D2006] mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Best Dental Products for Dogs: Complete Oral Care (2026)
        </h1>

        <div className="prose max-w-3xl text-[#8B7355] leading-relaxed mb-14 space-y-4">
          <p>
            Dental disease is the most common health condition in adult dogs, affecting over 80 percent of dogs by age three. Left untreated, periodontal disease does not just cause bad breath and tooth loss — the bacteria can enter the bloodstream and damage the heart, kidneys, and liver. Yet dental care remains the most overlooked aspect of dog health for most owners.
          </p>
          <p>
            The cornerstone of canine dental health is daily brushing with an enzymatic toothpaste designed specifically for dogs. Virbac CET is the most recommended by veterinarians because its dual-enzyme formula continues breaking down plaque between brushings. For dogs who resist the toothbrush, dental treats like Greenies provide mechanical cleaning with every chew, and water additives offer completely passive protection.
          </p>
          <p>
            The ideal dental care routine combines multiple approaches: daily brushing, regular dental treats, a water additive for baseline protection, and annual professional cleanings at your vet. This multi-layer strategy catches what any single product might miss and gives your dog the best chance at keeping their teeth healthy throughout their entire life.
          </p>
          <p>
            We researched VOHC-accepted products, reviewed veterinary dental guidelines, and analyzed thousands of owner experiences to compile this list. Every product is available on Amazon with Prime shipping, and we clearly note which products carry the coveted VOHC seal of acceptance — the gold standard for proven dental efficacy in pets.
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
            <Link href="/blog/how-to-clean-dog-ears" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">How to Clean Dog Ears Safely</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/dog-grooming-at-home" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Complete Dog Grooming at Home Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/french-bulldog" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">French Bulldog Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/dachshund" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Dachshund Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(211,84,0,0.07), rgba(91,123,94,0.07))" }}>
          <h2 className="text-2xl font-bold text-[#2D2006] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>Find the Right Dental Products for Your Dog</h2>
          <p className="text-[#8B7355] mb-6 max-w-lg mx-auto">Take our quick quiz to get a personalized dental care plan based on your dog&apos;s breed, age, and current oral health.</p>
          <Link href="/quiz" className="inline-block text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}>
            Take the Quiz &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
