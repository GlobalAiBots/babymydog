import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puppy Starter Kit: Everything Your New Puppy Needs (2026) | BabyMyDog",
  description:
    "The complete 2026 new puppy checklist: crate, training pads, food, toys, collar & more. 8 vet-approved essentials every puppy parent needs from day one.",
  alternates: { canonical: "https://babymydog.com/best/puppy-essentials" },
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
    name: "MidWest iCrate Starter Kit",
    badge: "Best Crate",
    description:
      "The MidWest iCrate is the best-selling dog crate on Amazon for a reason. It comes with a divider panel that lets you adjust the interior size as your puppy grows, eliminating the need to buy multiple crates. The fold-and-carry design makes it easy to store or travel with.",
    features: [
      "Adjustable divider panel grows with your puppy — buy one crate for life",
      "Double door design with slide-bolt latches for easy access",
      "Fold-flat design with carrying handle for travel and storage",
    ],
    asin: "B000QFMYWQ",
    rating: 4.7,
    reviewCount: "85K+",
    prime: true,
  },
  {
    name: "Nature's Miracle Training Pads",
    badge: "Best Training Pads",
    description:
      "These super-absorbent pads feature a built-in attractant that draws puppies to the pad, making housetraining significantly easier. The leak-proof plastic backing protects your floors, and the quick-dry top layer prevents tracking.",
    features: [
      "Built-in attractant guides puppies to the correct spot",
      "Super-absorbent core locks in moisture and controls odor",
      "Leak-proof plastic backing protects hardwood and carpet",
    ],
    asin: "B004R14HV8",
    rating: 4.5,
    reviewCount: "42K+",
    prime: true,
  },
  {
    name: "Blue Buffalo Life Protection Puppy",
    badge: "Best Puppy Food",
    description:
      "Blue Buffalo Life Protection is formulated with real deboned chicken, DHA for brain development, and a precise blend of antioxidants, vitamins, and minerals selected by veterinarians. It contains no chicken by-product meals, corn, wheat, or soy.",
    features: [
      "Real deboned chicken as the first ingredient — no by-products",
      "DHA and ARA for healthy brain and eye development",
      "LifeSource Bits: antioxidant-rich kibble blend created by veterinarians",
    ],
    asin: "B001GBIYRK",
    rating: 4.7,
    reviewCount: "32K+",
    prime: true,
  },
  {
    name: "KONG Puppy Toy",
    badge: "Best Puppy Toy",
    description:
      "The KONG Puppy is made from a softer, puppy-specific rubber formula that is gentle on baby teeth and gums while still being durable enough for enthusiastic chewers. Stuff it with treats to keep your puppy occupied during crate training.",
    features: [
      "Softer rubber formula designed specifically for puppy teeth and gums",
      "Stuffable design keeps puppies engaged and reduces destructive chewing",
      "Unpredictable bounce adds excitement and stimulates play instincts",
    ],
    asin: "B0002AR15U",
    rating: 4.6,
    reviewCount: "22K+",
    prime: true,
  },
  {
    name: "Blueberry Pet Classic Dog Collar",
    badge: "Best First Collar",
    description:
      "A durable, stylish nylon collar available in over 20 colors and multiple sizes. The high-density webbing resists fraying, and the classic buckle design makes it easy to adjust as your puppy grows during those rapid first months.",
    features: [
      "High-density nylon webbing resists wear, fraying, and fading",
      "Available in 20+ colors to match any personality",
      "D-ring and quick-release buckle for easy leash attachment",
    ],
    asin: "B010SQ4VYE",
    rating: 4.5,
    reviewCount: "18K+",
    prime: true,
  },
  {
    name: "Zuke's Mini Naturals Training Treats",
    badge: "Best Training Treats",
    description:
      "At under 3 calories per treat, Zuke's Minis are the gold standard for puppy training. They are soft, tiny, and come in flavors dogs go crazy for. Professional trainers love them because you can use dozens per session without overfeeding.",
    features: [
      "Less than 3 calories per treat — perfect for frequent reward training",
      "Soft texture for quick eating so training stays fast-paced",
      "Made in the USA with real chicken, no corn, wheat, or soy",
    ],
    asin: "B000H0ZJHW",
    rating: 4.6,
    reviewCount: "35K+",
    prime: true,
  },
  {
    name: "KONG Puppy Teething Stick",
    badge: "Best for Teething",
    description:
      "Designed specifically for teething puppies aged 2 to 9 months, this stick features soft rubber nubs and grooves that massage sore gums and help clean developing teeth. Fill the grooves with puppy paste or peanut butter for extra soothing.",
    features: [
      "Soft rubber nubs massage and soothe sore teething gums",
      "Grooves can be filled with paste for extended engagement",
      "Ridged texture helps clean teeth and establish dental health early",
    ],
    asin: "B0002AR17S",
    rating: 4.4,
    reviewCount: "8K+",
    prime: true,
  },
  {
    name: "Outward Hound Fun Feeder Slow Bowl",
    badge: "Best Slow Feeder",
    description:
      "Puppies tend to inhale their food, which can lead to vomiting, choking, and bloat. The Fun Feeder's maze-like ridges slow eating by up to 10 times, turning mealtime into a mental challenge that promotes healthy digestion.",
    features: [
      "Ridged design slows eating by up to 10x to prevent bloat and vomiting",
      "BPA, PVC, and phthalate-free food-safe material",
      "Non-slip base prevents sliding during enthusiastic eating",
    ],
    asin: "B00FPKNRCS",
    rating: 4.5,
    reviewCount: "65K+",
    prime: true,
  },
];

const faqs = [
  {
    q: "What do I need before bringing a puppy home?",
    a: "At minimum, you need a crate with a divider, puppy food recommended by your vet, food and water bowls, a collar and leash, training pads, enzymatic cleaner for accidents, chew toys, and training treats. Having everything set up before your puppy arrives reduces stress for both of you and sets the stage for successful housetraining from day one.",
  },
  {
    q: "When should I start crate training my puppy?",
    a: "Start crate training the first night. Puppies as young as 8 weeks can begin learning that the crate is a safe, positive space. Keep sessions short at first — 10 to 15 minutes — and always associate the crate with good things like treats and stuffed KONGs. Never use the crate as punishment. Most puppies accept the crate within a few days when introduced gradually.",
  },
  {
    q: "How much should I feed my new puppy?",
    a: "Follow the feeding guidelines on your puppy food package as a starting point, then adjust based on your vet's recommendations. Most puppies under 6 months eat three meals per day, then transition to two meals a day after 6 months. Avoid free-feeding, as it makes housetraining harder and can lead to overeating. Always provide fresh water.",
  },
];

export default function PuppyEssentialsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Best Products", item: "https://babymydog.com/best" },
      { "@type": "ListItem", position: 3, name: "Puppy Essentials", item: "https://babymydog.com/best/puppy-essentials" },
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
          <span className="text-[#2D2006] font-medium">Puppy Essentials</span>
        </nav>

        <Link href="/best" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; Back to All Products
        </Link>

        <h1 className="font-extrabold text-[28px] md:text-[44px] text-[#2D2006] mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Puppy Starter Kit: Everything Your New Puppy Needs (2026)
        </h1>

        <div className="prose max-w-3xl text-[#8B7355] leading-relaxed mb-14 space-y-4">
          <p>
            Bringing a new puppy home is one of the most exciting experiences in a dog owner's life — and one of the most overwhelming. The pet product market is enormous, and it is easy to overspend on things you do not need while forgetting essentials that make those first weeks dramatically easier. We put together this curated list of eight must-have products so you can skip the guesswork and focus on bonding with your new best friend.
          </p>
          <p>
            The foundation of any successful puppy setup is a quality crate. The MidWest iCrate has been the top recommendation from trainers and veterinarians for years because its adjustable divider grows with your puppy — buy it once and you are set for life. Pair it with a stuffable KONG Puppy toy and Zuke's Mini training treats, and you have the core tools for crate training, housetraining, and basic obedience.
          </p>
          <p>
            Nutrition is equally critical during these rapid-growth months. Blue Buffalo Life Protection Puppy provides the DHA, antioxidants, and high-quality protein that developing bodies need, while the Outward Hound Fun Feeder prevents the speed-eating that causes vomiting and bloat in enthusiastic puppies. Add a Blueberry Pet collar, Nature's Miracle training pads, and a KONG Teething Stick, and your puppy starter kit is complete.
          </p>
          <p>
            Every product on this page has been researched, reviewed by our team, and confirmed through thousands of verified owner ratings on Amazon. We link directly to each product so you can check current pricing and read additional reviews before you buy.
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
            <Link href="/blog/new-puppy-checklist" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">New Puppy Checklist: Complete Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/how-to-crate-train-puppy" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">How to Crate Train a Puppy</p>
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
          <h2 className="text-2xl font-bold text-[#2D2006] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>Not Sure What Your Puppy Needs?</h2>
          <p className="text-[#8B7355] mb-6 max-w-lg mx-auto">Take our quick quiz and get a personalized shopping list based on your puppy&apos;s breed, age, and size.</p>
          <Link href="/quiz" className="inline-block text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}>
            Take the Quiz &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
