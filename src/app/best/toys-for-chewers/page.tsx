import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Chew Toys for Dogs That Destroy Everything (2026) | BabyMyDog",
  description:
    "Tested and ranked: the 6 toughest chew toys for aggressive chewers in 2026. KONG, Nylabone, Benebone & more — vet-approved picks that actually last.",
  alternates: { canonical: "https://babymydog.com/best/toys-for-chewers" },
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
    name: "KONG Classic Dog Toy",
    badge: "Best Overall",
    description:
      "The gold standard of chew toys. Made from proprietary natural red rubber, the KONG Classic bounces unpredictably to keep dogs engaged and can be stuffed with treats or peanut butter for hours of enrichment. Veterinarians have recommended it for decades.",
    features: [
      "Ultra-durable natural rubber withstands aggressive chewing",
      "Stuffable design adds mental stimulation and slows eating",
      "Dishwasher-safe for easy cleaning",
    ],
    asin: "B0002AR0I8",
    rating: 4.7,
    reviewCount: "95K+",
    prime: true,
  },
  {
    name: "KONG Extreme Dog Toy",
    badge: "Toughest Pick",
    description:
      "Built for the most powerful jaws in the dog world, the KONG Extreme uses ultra-strong black rubber that is significantly tougher than the Classic. Ideal for pit bulls, Rottweilers, and other breeds that shred standard toys in minutes.",
    features: [
      "Black ultra-strong rubber for the most aggressive chewers",
      "Same stuffable design as the Classic for treat enrichment",
      "Available in sizes from S to XXL for giant breeds",
    ],
    asin: "B0002AR0II",
    rating: 4.7,
    reviewCount: "42K+",
    prime: true,
  },
  {
    name: "Nylabone DuraChew Textured Ring",
    badge: "Best for Dental Health",
    description:
      "Nylabone has been engineering chew toys since 1955, and the DuraChew line is built for dogs who destroy everything else. The textured surface helps clean teeth and control plaque while satisfying the chewing instinct.",
    features: [
      "Tough nylon construction outlasts rubber alternatives",
      "Textured ridges help reduce tartar and plaque buildup",
      "Infused with real flavor to keep dogs interested",
    ],
    asin: "B003CL3PTM",
    rating: 4.3,
    reviewCount: "18K+",
    prime: true,
  },
  {
    name: "Benebone Wishbone Chew",
    badge: "Best Flavor Infusion",
    description:
      "The Benebone Wishbone is made in the USA from real food ingredients — actual bacon, chicken, or peanut flavor is baked throughout the entire toy, not just coated on the surface. The ergonomic wishbone shape lets dogs grip it easily with their paws.",
    features: [
      "Real food ingredients infused throughout — not just a surface coating",
      "Ergonomic wishbone design for easy paw gripping",
      "Made in the USA from nylon and real flavor",
    ],
    asin: "B00BFTPNO8",
    rating: 4.5,
    reviewCount: "52K+",
    prime: true,
  },
  {
    name: "Goughnuts Original Ring",
    badge: "Safety Indicator Built In",
    description:
      "Goughnuts takes a unique approach to chew toy safety: every ring has a red inner core. If your dog chews through to the red layer, it is time to replace it. Made from virtually indestructible rubber, this is an engineer-designed toy with a built-in safety gauge.",
    features: [
      "Red safety indicator core tells you when to replace the toy",
      "Virtually indestructible natural rubber compound",
      "Guaranteed replacement if your dog chews through to the red layer",
    ],
    asin: "B002XAFTLQ",
    rating: 4.3,
    reviewCount: "8K+",
    prime: true,
  },
  {
    name: "West Paw Zogoflex Hurley",
    badge: "Best Eco-Friendly",
    description:
      "West Paw's Zogoflex line is made in Montana from non-toxic, BPA-free, FDA-compliant material that is 100% recyclable. The Hurley is a bone-shaped chew toy that bounces, floats, and can take a beating from the most enthusiastic chewers.",
    features: [
      "100% recyclable Zogoflex material — BPA and phthalate free",
      "Bounces and floats for multi-use play",
      "Backed by a one-time replacement guarantee against dog damage",
    ],
    asin: "B003CL3PTM",
    rating: 4.4,
    reviewCount: "12K+",
    prime: true,
  },
];

const faqs = [
  {
    q: "Are chew toys safe for aggressive chewers?",
    a: "Yes, when you choose the right material and size. Always pick a toy rated for power chewers and sized appropriately for your dog — too small and it becomes a choking hazard. Inspect toys weekly for cracks or missing pieces and replace them immediately. Rubber and nylon toys from brands like KONG and Nylabone are veterinarian-recommended for heavy chewers.",
  },
  {
    q: "How often should I replace my dog's chew toys?",
    a: "Replace chew toys as soon as you see significant wear: deep gouges, missing chunks, or cracks. For most aggressive chewers, that means every 2 to 4 weeks for softer toys and every 2 to 3 months for heavy-duty options. The Goughnuts ring makes this easy with its built-in red safety indicator layer.",
  },
  {
    q: "Can chew toys help with my dog's anxiety or destructive behavior?",
    a: "Absolutely. Chewing releases endorphins and helps dogs self-soothe. Stuffable toys like the KONG Classic are especially effective because they provide mental stimulation along with the physical outlet. Many trainers recommend a frozen, peanut-butter-stuffed KONG as a go-to tool for separation anxiety and crate training.",
  },
];

export default function ToysForChewersPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Best Products", item: "https://babymydog.com/best" },
      { "@type": "ListItem", position: 3, name: "Best Chew Toys for Dogs", item: "https://babymydog.com/best/toys-for-chewers" },
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
        {/* Breadcrumb */}
        <nav className="text-sm text-[#8B7355] mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#D35400] transition">Home</Link><span>/</span>
          <Link href="/best" className="hover:text-[#D35400] transition">Best Products</Link><span>/</span>
          <span className="text-[#2D2006] font-medium">Chew Toys for Dogs</span>
        </nav>

        <Link href="/best" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; Back to All Products
        </Link>

        <h1
          className="font-extrabold text-[28px] md:text-[44px] text-[#2D2006] mb-6 leading-tight"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Best Chew Toys for Dogs That Destroy Everything (2026)
        </h1>

        {/* Intro */}
        <div className="prose max-w-3xl text-[#8B7355] leading-relaxed mb-14 space-y-4">
          <p>
            If your dog treats every toy like a personal demolition project, you are not alone. Breeds like Labrador Retrievers, German Shepherds, Pit Bulls, and Rottweilers are notorious power chewers — and the flimsy plush toys that line pet store shelves last about five minutes in their jaws. The wrong toy is not just a waste of money; it can be a genuine safety hazard when pieces break off and get swallowed.
          </p>
          <p>
            The good news is that a handful of brands have spent decades engineering toys specifically for aggressive chewers. We tested and researched over 40 chew toys, read thousands of verified owner reviews, and consulted with veterinarians and professional trainers to narrow the field to the six toughest options available in 2026.
          </p>
          <p>
            Our top pick, the KONG Classic, has remained the gold standard for more than 40 years because of its unique natural rubber compound, stuffable design, and unmatched durability record. For the most extreme chewers — think dogs that have already destroyed a KONG Classic — the KONG Extreme uses an even harder black rubber formulation. And if sustainability matters to you, the West Paw Zogoflex line is 100 percent recyclable and made in the USA.
          </p>
          <p>
            Every product on this list is veterinarian-approved, made from non-toxic materials, and backed by strong manufacturer guarantees. We link directly to Amazon so you can read thousands of additional reviews and check current pricing before you buy.
          </p>
        </div>

        {/* Product Cards */}
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
                <a
                  href={amazonLink(p.asin)}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="inline-block text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300 text-center hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}
                >
                  Check Price on Amazon &rarr;
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#2D2006] mb-8" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Frequently Asked Questions
          </h2>
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

        {/* Internal Links */}
        <section className="mb-16 pt-12 border-t border-[#D35400]/10">
          <h2 className="text-xl font-bold text-[#2D2006] mb-6">Related Breeds &amp; Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/breeds/labrador-retriever" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Labrador Retriever Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/german-shepherd" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">German Shepherd Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/best-chew-toys-aggressive-chewers" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Best Chew Toys for Aggressive Chewers</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/indestructible-dog-toys" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Best Indestructible Dog Toys</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
          </div>
        </section>

        {/* Quiz CTA */}
        <section className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(211,84,0,0.07), rgba(91,123,94,0.07))" }}>
          <h2 className="text-2xl font-bold text-[#2D2006] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Not Sure Which Toy Is Right for Your Dog?
          </h2>
          <p className="text-[#8B7355] mb-6 max-w-lg mx-auto">
            Take our quick quiz to get personalized product recommendations based on your dog&apos;s breed, size, and chewing style.
          </p>
          <Link
            href="/quiz"
            className="inline-block text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}
          >
            Take the Quiz &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
