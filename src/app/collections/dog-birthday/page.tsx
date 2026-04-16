import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dog Birthday Party: Treats, Toys & Celebration Gear (2026)",
  description:
    "Throw your pup the ultimate birthday bash with dog-safe cake mixes, birthday toys, special treats, and party supplies. Everything you need for a tail-wagging celebration.",
  alternates: {
    canonical: "https://babymydog.com/collections/dog-birthday",
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
    name: "Three Dog Bakery Birthday Cake Kit",
    badge: "Best Cake Kit",
    description:
      "Complete birthday cake kit with dog-safe cake mix, frosting, and sprinkles. Just add water and eggs for a festive, tail-wagging centerpiece your pup can actually eat.",
    features: [
      "Includes cake mix, frosting, and decorative sprinkles",
      "Human-grade, dog-safe ingredients throughout",
      "Simple preparation — just add water and an egg",
    ],
    asin: "B07BQVDJ86",
    rating: 4.3,
    reviewCount: 5400,
    prime: true,
  },
  {
    name: "KONG Classic Dog Toy",
    badge: "Birthday Treat Stuffer",
    description:
      "The iconic red rubber KONG is the perfect birthday gift — stuff it with peanut butter, kibble, or special birthday treats for hours of rewarding enrichment.",
    features: [
      "Ultra-durable natural rubber bounces unpredictably",
      "Stuff with frozen treats for extended birthday fun",
      "Available in six sizes for every breed",
    ],
    asin: "B0002AR0I8",
    rating: 4.7,
    reviewCount: 112000,
    prime: true,
  },
  {
    name: "Outward Hound Birthday Cake Plush Toy",
    badge: "Party Favorite",
    description:
      "Adorable multi-layered birthday cake squeaky toy with crinkle candles on top. Perfect for the birthday photo shoot and surprisingly durable for a plush.",
    features: [
      "Multiple squeakers and crinkle paper for engagement",
      "Layered cake design perfect for birthday photos",
      "Reinforced seams for longer-lasting play",
    ],
    asin: "B08M3Y89VK",
    rating: 4.4,
    reviewCount: 7800,
    prime: true,
  },
  {
    name: "Puppy Cake Wheat-Free Cake Mix",
    badge: "Healthier Option",
    description:
      "Wheat-free, preservative-free dog cake mix that comes in multiple flavors including peanut butter, carob, and banana. Veterinarian approved and incredibly easy to bake.",
    features: [
      "Wheat-free and preservative-free formula",
      "Available in peanut butter, carob, banana, and more",
      "Microwave-ready — bake a cake in under 5 minutes",
    ],
    asin: "B002T3FQ7S",
    rating: 4.5,
    reviewCount: 9200,
    prime: true,
  },
  {
    name: "ZippyPaws Birthday Cake Plush Toy",
    badge: "Cutest Design",
    description:
      "Brightly colored plush birthday cake with an oversized squeaker inside. The soft, huggable design makes it a favorite comfort toy long after the party is over.",
    features: [
      "Bright, Instagram-worthy birthday design",
      "Large internal squeaker dogs love",
      "Soft plush material doubles as a comfort toy",
    ],
    asin: "B01BKOC3MA",
    rating: 4.5,
    reviewCount: 6100,
    prime: true,
  },
  {
    name: "Milk-Bone Birthday Flavor Dog Biscuits",
    badge: "Special Treats",
    description:
      "Limited-edition birthday-flavored biscuits from the brand dogs have loved for over a century. Fun bone shapes with a special frosted coating that makes treat time feel like a celebration.",
    features: [
      "Special birthday flavor dogs go crazy for",
      "Crunchy texture helps clean teeth while chewing",
      "12 vitamins and minerals in every biscuit",
    ],
    asin: "B003CL3PTM",
    rating: 4.6,
    reviewCount: 15700,
    prime: true,
  },
];

const faqs = [
  {
    question: "How do I throw a dog birthday party?",
    answer:
      "Throwing a dog birthday party is easier than you might think. Start by choosing a safe, enclosed space like your backyard or a fenced dog park. Invite a few dog friends your pup already knows and gets along with — keeping the guest list small reduces stress and the chance of conflicts. Prepare a dog-safe cake (there are great mixes that just need water and an egg), pick up some birthday toys, and have plenty of fresh water available. Keep the party short — 60 to 90 minutes is plenty for dogs — and supervise all interactions. Fun activities include a treat treasure hunt (hide treats around the yard), a small agility course with household items, or simply letting the dogs play together while you snap photos. Always have cleanup supplies ready, and consider sending guests home with a small doggy goodie bag.",
  },
  {
    question: "What are the best birthday treats for dogs?",
    answer:
      "The best birthday treats are ones that feel special but are still safe for dogs. Dog-specific cake mixes made with ingredients like peanut butter, banana, pumpkin, and oat flour are a great centerpiece. For individual treats, consider frozen banana slices dipped in plain yogurt, small pieces of cooked chicken or salmon, blueberries, watermelon chunks (seedless), or commercial birthday-themed dog biscuits. Avoid chocolate, xylitol (found in many sugar-free products), grapes, raisins, onions, and macadamia nuts — all of these are toxic to dogs. If your dog has food sensitivities or allergies, stick with single-ingredient treats like freeze-dried liver or sweet potato chews.",
  },
  {
    question: "Are there dog-safe cake recipes I can make at home?",
    answer:
      "Absolutely. A simple and popular dog birthday cake recipe uses 1 cup of whole wheat flour (or oat flour for grain-sensitive dogs), 1 teaspoon of baking soda, one-quarter cup of peanut butter (make sure it contains no xylitol), one-quarter cup of vegetable oil, 1 cup of shredded carrots, 1 egg, and one-third cup of honey. Mix the dry ingredients, combine the wet ingredients separately, then fold them together. Pour into a greased round cake pan and bake at 350 degrees Fahrenheit for about 25 minutes. For frosting, blend plain Greek yogurt with a tablespoon of peanut butter. You can also use mashed banana or pumpkin puree as a frosting base. Let the cake cool completely before frosting and serving. Always check that every ingredient is dog-safe before baking.",
  },
];

export default function DogBirthdayPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://babymydog.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Collections",
        item: "https://babymydog.com/collections",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dog Birthday Party",
        item: "https://babymydog.com/collections/dog-birthday",
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
          <Link
            href="/collections"
            className="inline-flex items-center gap-1 text-sm font-medium mb-6 hover:underline"
            style={{ color: "#D35400" }}
          >
            ← Back to Collections
          </Link>

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
                Dog Birthday Party
              </li>
            </ol>
          </nav>

          <h1
            className="text-[28px] md:text-[44px] font-extrabold leading-tight mb-6"
            style={{ color: "#2D2006", fontFamily: "'DM Serif Display', serif" }}
          >
            Dog Birthday Party: Treats, Toys & Celebration Gear (2026)
          </h1>

          <div className="prose max-w-none mb-12" style={{ color: "#2D2006" }}>
            <p className="text-lg leading-relaxed mb-4">
              Your dog has been there for every good day and every bad one, greeting you at the door with a wagging tail regardless of what the world threw at you. So when their birthday (or gotcha day) rolls around, why not throw them a celebration they deserve? Dog birthday parties have gone from niche novelty to mainstream tradition, and honestly, they might be the purest form of joy you can experience as a pet parent.
            </p>
            <p className="leading-relaxed mb-4">
              The best part about planning a dog birthday party is that your guest of honor has incredibly simple standards. They do not care about matching napkins, balloon arches, or a Pinterest-perfect aesthetic. What they care about is treats, toys, attention, and maybe a few canine friends to romp around with. That said, there is something undeniably fun about going all-out with a dog-safe cake, themed toys, and a photo session that will absolutely dominate your Instagram feed for the next week.
            </p>
            <p className="leading-relaxed mb-4">
              Safety should always be at the center of your party planning. If you are inviting other dogs, make sure all guests are up to date on vaccinations and have solid temperaments around other animals. Keep human food well out of reach — birthday parties mean tables full of snacks, and a curious nose can find chocolate, grapes, or xylitol-sweetened treats in seconds. Stick to dog-specific treats and cakes made from safe ingredients like peanut butter, pumpkin, banana, and oat flour.
            </p>
            <p className="leading-relaxed">
              We have rounded up the best birthday products for dogs in 2026, from cake mixes that take five minutes to prepare to squeaky birthday toys your pup will carry around for months. Whether you are planning an elaborate backyard bash or a quiet celebration for two, these picks will make your dog&apos;s special day one to remember.
            </p>
          </div>

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

                  <h3 className="text-xl font-bold mb-2" style={{ color: "#2D2006" }}>
                    {product.name}
                  </h3>

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
                      <li key={i} className="text-sm flex items-start gap-2" style={{ color: "#2D2006" }}>
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

          <section className="mb-16">
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "#2D2006", fontFamily: "'DM Serif Display', serif" }}
            >
              Related Reads
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/breeds/golden-retriever"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Golden Retriever Breed Guide
              </Link>
              <Link
                href="/gifts/dog-lovers"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Best Gifts for Dog Lovers
              </Link>
              <Link
                href="/blog/dog-birthday-party-ideas"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Dog Birthday Party Ideas
              </Link>
            </div>
          </section>

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
              Find the Perfect Gift for Your Pup
            </h2>
            <p className="mb-6" style={{ color: "#8B7355" }}>
              Take our quick quiz to get personalized product recommendations based on your dog&apos;s breed, size, and personality.
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
