import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Summer Essentials for Dogs: Beat the Heat (2026)",
  description:
    "Keep your dog safe and cool this summer with our vet-approved picks for cooling mats, portable water bottles, paw protection boots, and more. Shop the best summer dog gear of 2026.",
  alternates: {
    canonical: "https://www.babymydog.com/collections/summer-essentials",
  },
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.3;
  return (
    <span className="inline-flex items-center gap-0.5 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill={i < full ? "currentColor" : (i === full && half ? "currentColor" : "none")} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </span>
  );
}

const amazonLink = (asin: string) =>
  `https://www.amazon.com/dp/${asin}?tag=babymydog03-20`;

const products = [
  {
    name: "Green Pet Shop Cooling Mat",
    badge: "Best Overall",
    description:
      "Pressure-activated gel cooling pad that requires no water, electricity, or refrigeration. Recharges automatically after non-use and provides hours of cooling relief.",
    features: [
      "Pressure-activated gel — no water or electricity needed",
      "Self-recharges after 15-20 minutes of non-use",
      "Available in multiple sizes for all breeds",
    ],
    asin: "B00GKNTIQG",
    rating: 4.4,
    reviewCount: 28750,
    prime: true,
  },
  {
    name: "MalsiPree Portable Dog Water Bottle",
    badge: "Best for Walks",
    description:
      "Leak-proof travel water bottle with a flip-out trough so your dog can drink comfortably on the go. One-button lock prevents spills in your bag.",
    features: [
      "One-handed operation with leak-proof lock",
      "BPA-free food-grade material",
      "Built-in trough for easy drinking",
    ],
    asin: "B07Y8WHWB7",
    rating: 4.5,
    reviewCount: 42300,
    prime: true,
  },
  {
    name: "Chuckit! Ultra Ball",
    badge: "Top Fetch Toy",
    description:
      "High-bounce, ultra-durable rubber ball designed for long-distance fetch sessions. The bright orange-blue color is easy to spot in grass and water.",
    features: [
      "High-bounce natural rubber core",
      "Compatible with Chuckit! ball launchers",
      "Floats in water for lake and pool play",
    ],
    asin: "B000F4AVPA",
    rating: 4.7,
    reviewCount: 67400,
    prime: true,
  },
  {
    name: "QUMY Dog Boots Waterproof",
    badge: "Paw Protection",
    description:
      "Rugged waterproof dog boots with anti-slip soles to protect paws from scorching pavement, sharp rocks, and hot sand during summer outings.",
    features: [
      "Anti-slip rubber soles for traction on hot surfaces",
      "Adjustable Velcro straps for secure fit",
      "Waterproof design for puddles and beaches",
    ],
    asin: "B01N0O5BB3",
    rating: 4.3,
    reviewCount: 19800,
    prime: true,
  },
  {
    name: "Ruffwear Swamp Cooler Evaporative Dog Vest",
    badge: "Premium Pick",
    description:
      "Three-layer evaporative cooling vest that uses the same principle as sweating. Soak it, wring it, and put it on your dog for instant relief from the heat.",
    features: [
      "Three-layer evaporative cooling technology",
      "UPF 50+ sun protection on the back panel",
      "Reflective trim for visibility on evening walks",
    ],
    asin: "B073W7F7WD",
    rating: 4.5,
    reviewCount: 8900,
    prime: true,
  },
  {
    name: "RUFFWEAR Trail Runner Collapsible Bowl",
    badge: "Travel Essential",
    description:
      "Ultralight collapsible bowl that folds flat for easy packing. Perfect for hikes, road trips, and park outings where your dog needs food or water on the fly.",
    features: [
      "Folds completely flat for pocket or leash carry",
      "Waterproof fabric holds both food and water",
      "Clip-on loop attaches to any bag or belt",
    ],
    asin: "B005OTZ0OC",
    rating: 4.6,
    reviewCount: 12500,
    prime: true,
  },
  {
    name: "Kurgo Wander Dog Hammock & Seat Cover",
    badge: "Car Must-Have",
    description:
      "Waterproof hammock-style car seat cover that protects your back seat from sand, mud, and wet fur after summer adventures. Easy to install and remove.",
    features: [
      "Waterproof and machine-washable fabric",
      "Converts from hammock to bench cover in seconds",
      "Non-slip backing keeps cover secure on any seat",
    ],
    asin: "B01DO8B7RK",
    rating: 4.4,
    reviewCount: 15300,
    prime: true,
  },
];

const faqs = [
  {
    question: "How hot is too hot for dogs?",
    answer:
      "Most veterinarians agree that once the outside temperature exceeds 85 degrees Fahrenheit (29 degrees Celsius), you should exercise extreme caution with your dog. Pavement temperatures can be 40-60 degrees hotter than the air temperature, meaning a 90-degree day can produce 150-degree asphalt that will burn paw pads in under a minute. Brachycephalic breeds like French Bulldogs, Pugs, and Bulldogs are at even higher risk because their shortened airways make panting less efficient. A simple test: place the back of your hand on the pavement for seven seconds. If it is too hot for your hand, it is too hot for your dog's paws.",
  },
  {
    question: "What are the signs of heatstroke in dogs?",
    answer:
      "Heatstroke is a medical emergency. Early signs include excessive panting, drooling, bright red gums, and restlessness. As it progresses, you may notice vomiting, diarrhea, stumbling or loss of coordination, glazed eyes, and lethargy. In severe cases, dogs can collapse or have seizures. If you suspect heatstroke, move your dog to a cool area immediately, offer small amounts of cool (not ice-cold) water, place wet towels on the neck and groin area, and get to a veterinarian as quickly as possible. Do not submerge your dog in ice water, as this can cause blood vessels to constrict and actually trap heat inside the body.",
  },
  {
    question: "What is the best time to walk dogs in summer?",
    answer:
      "The safest times to walk your dog during summer are early morning (before 8 AM) and late evening (after 7 PM), when temperatures are lower and pavement has had time to cool. During peak summer heat, midday walks between 11 AM and 4 PM should be avoided entirely. Even on cooler summer days, always bring water, watch for signs of overheating, and keep walks shorter than usual. Dogs with thick double coats, senior dogs, puppies, and brachycephalic breeds need extra caution and may benefit from even earlier or later walk times.",
  },
];

export default function SummerEssentialsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.babymydog.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Collections",
        item: "https://www.babymydog.com/collections",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Summer Essentials",
        item: "https://www.babymydog.com/collections/summer-essentials",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Back Link */}
          <Link
            href="/collections"
            className="inline-flex items-center gap-1 text-sm font-medium mb-6 hover:underline"
            style={{ color: "#D35400" }}
          >
            ← Back to Collections
          </Link>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm" style={{ color: "#8B7355" }}>
              <li>
                <Link href="/" className="hover:underline" style={{ color: "#D35400" }}>
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/collections" className="hover:underline" style={{ color: "#D35400" }}>
                  Collections
                </Link>
              </li>
              <li>/</li>
              <li className="font-medium" style={{ color: "#2D2006" }}>
                Summer Essentials
              </li>
            </ol>
          </nav>

          {/* H1 */}
          <h1
            className="text-[28px] md:text-[44px] font-extrabold leading-tight mb-6"
            style={{ color: "#2D2006", fontFamily: "'DM Serif Display', serif" }}
          >
            Summer Essentials for Dogs: Beat the Heat (2026)
          </h1>

          {/* Intro */}
          <div className="prose max-w-none mb-12" style={{ color: "#2D2006" }}>
            <p className="text-lg leading-relaxed mb-4">
              Summer is a season of adventure for dogs and their owners, but rising temperatures bring real dangers that every pet parent needs to take seriously. From scorching pavement that can blister paw pads in seconds to the invisible threat of heatstroke, warm weather demands extra preparation and the right gear to keep your four-legged companion safe, hydrated, and comfortable.
            </p>
            <p className="leading-relaxed mb-4">
              Dogs regulate their body temperature primarily through panting, a far less efficient mechanism than human sweating. This means they overheat faster than we do, especially during exercise or prolonged sun exposure. Brachycephalic breeds like French Bulldogs, Pugs, and Bulldogs face an even greater disadvantage because their shortened airways make panting significantly harder. Double-coated breeds such as Siberian Huskies and Golden Retrievers carry an insulating undercoat that, while helpful in winter, can trap dangerous levels of heat in July and August.
            </p>
            <p className="leading-relaxed mb-4">
              Hydration is the single most important factor in summer dog safety. A dehydrated dog can develop organ damage within hours, and many owners underestimate how much water their pet needs during warm weather. As a general rule, dogs require roughly one ounce of water per pound of body weight per day under normal conditions, and that number can double or triple during hot weather or vigorous exercise. Carrying a portable water bottle on every walk, hike, and car ride is no longer optional during summer months — it is essential.
            </p>
            <p className="leading-relaxed mb-4">
              Paw protection is another area that often gets overlooked. Asphalt and concrete absorb and radiate heat at alarming rates. On a 95-degree day, pavement surface temperatures can exceed 150 degrees Fahrenheit, hot enough to cause second-degree burns on unprotected paw pads. Dog boots or booties provide a reliable barrier, and they also protect against sharp shells at the beach, rough trail surfaces, and hot sand. If your dog will not tolerate boots, paw wax can provide a lighter layer of protection for shorter outings.
            </p>
            <p className="leading-relaxed">
              We have tested and researched dozens of summer dog products to bring you this curated collection of the best gear for keeping your dog cool, hydrated, and protected all season long. Every product below has been selected based on durability, real-world performance, and thousands of verified owner reviews. Whether you are planning beach days, hiking trips, or just trying to survive daily walks in the heat, these essentials will help your dog thrive this summer.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {products.map((product) => (
              <div
                key={product.asin}
                className="rounded-2xl border p-6 flex flex-col justify-between"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#F0E6D6",
                  boxShadow: "0 2px 12px rgba(45,32,6,0.06)",
                }}
              >
                {/* Badge */}
                <div>
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3"
                    style={{
                      background: "linear-gradient(135deg, #F39C12, #D35400)",
                      color: "#FFFFFF",
                    }}
                  >
                    {product.badge}
                  </span>

                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#2D2006" }}
                  >
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <StarRating rating={product.rating} />
                    <span className="font-bold text-sm" style={{ color: "#2D2006" }}>
                      {product.rating}
                    </span>
                    <span className="text-sm" style={{ color: "#8B7355" }}>
                      ({product.reviewCount.toLocaleString()} reviews)
                    </span>
                  </div>

                  {product.prime && (
                    <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700 mb-3">
                      Prime
                    </span>
                  )}

                  <p className="text-sm mb-3" style={{ color: "#8B7355" }}>
                    {product.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "#2D2006" }}
                      >
                        <span style={{ color: "#5B7B5E" }}>&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={amazonLink(product.asin)}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block w-full text-center text-white font-bold py-3 rounded-xl transition-transform hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #F39C12, #D35400)",
                    boxShadow: "0 6px 20px rgba(211,84,0,0.3)",
                  }}
                >
                  Check Price on Amazon →
                </a>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-6"
              style={{ color: "#2D2006", fontFamily: "'DM Serif Display', serif" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-xl border p-4 group"
                  style={{ borderColor: "#F0E6D6", backgroundColor: "#FFFFFF" }}
                >
                  <summary
                    className="font-bold cursor-pointer list-none flex items-center justify-between"
                    style={{ color: "#2D2006" }}
                  >
                    {faq.question}
                    <span className="ml-2 text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "#8B7355" }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="mb-16">
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#2D2006", fontFamily: "'DM Serif Display', serif" }}
            >
              Related Reads
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/breeds/french-bulldog"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                French Bulldog Breed Guide
              </Link>
              <Link
                href="/breeds/siberian-husky"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Siberian Husky Breed Guide
              </Link>
              <Link
                href="/blog/summer-dog-safety-tips"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Summer Dog Safety Tips
              </Link>
              <Link
                href="/blog/best-dog-beaches"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Best Dog-Friendly Beaches
              </Link>
            </div>
          </section>

          {/* Quiz CTA */}
          <section
            className="rounded-2xl p-8 text-center mb-8"
            style={{
              background: "linear-gradient(135deg, #FFF8F0, #FDE8D0)",
              border: "2px solid #F0E6D6",
            }}
          >
            <h2
              className="text-2xl md:text-3xl font-extrabold mb-3"
              style={{ color: "#2D2006", fontFamily: "'DM Serif Display', serif" }}
            >
              Not Sure What Your Dog Needs?
            </h2>
            <p className="mb-6" style={{ color: "#8B7355" }}>
              Take our quick quiz to get personalized product recommendations based on your dog&apos;s breed, size, and lifestyle.
            </p>
            <Link
              href="/quiz"
              className="inline-block text-white font-bold py-3 px-8 rounded-xl transition-transform hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #F39C12, #D35400)",
                boxShadow: "0 6px 20px rgba(211,84,0,0.3)",
              }}
            >
              Take the Quiz →
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
