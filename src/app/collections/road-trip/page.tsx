import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Road Trip Ready: Travel Essentials for Dogs (2026)",
  description:
    "Plan the perfect road trip with your dog. From crash-tested harnesses and car seat covers to calming chews and collapsible bowls, these are the best dog travel products for 2026.",
  alternates: {
    canonical: "https://www.babymydog.com/collections/road-trip",
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
    name: "Kurgo Wander Dog Hammock Seat Cover",
    badge: "Best Seat Cover",
    description:
      "Waterproof hammock-style seat cover that protects your backseat from dirt, fur, drool, and scratches. Converts from hammock to bench cover and installs in under a minute.",
    features: [
      "Waterproof and machine-washable for easy cleaning",
      "Converts between hammock and bench-seat modes",
      "Non-slip backing keeps the cover firmly in place",
    ],
    asin: "B01DO8B7RK",
    rating: 4.4,
    reviewCount: 15300,
    prime: true,
  },
  {
    name: "MalsiPree Portable Dog Water Bottle",
    badge: "Hydration Pick",
    description:
      "Leak-proof travel water bottle with a one-button flip-out drinking trough. Compact enough for cup holders and easy to operate with one hand while managing your dog.",
    features: [
      "One-button lock prevents leaks in bags and cars",
      "BPA-free food-grade material is safe and durable",
      "Fits standard car cup holders",
    ],
    asin: "B07Y8WHWB7",
    rating: 4.5,
    reviewCount: 42300,
    prime: true,
  },
  {
    name: "Sleepypod Clickit Sport Safety Harness",
    badge: "Crash-Tested",
    description:
      "The only dog car harness that meets the same crash-test standards as child safety seats. Three-point design distributes force across the chest, not the neck, during sudden stops.",
    features: [
      "Crash-tested to human child seat safety standards",
      "Three-point padded design protects chest and spine",
      "Doubles as a walking harness outside the car",
    ],
    asin: "B00MXUXOV6",
    rating: 4.3,
    reviewCount: 6700,
    prime: true,
  },
  {
    name: "RUFFWEAR Trail Runner Collapsible Bowl",
    badge: "Ultralight",
    description:
      "Ultralight collapsible bowl that folds completely flat and clips to any bag, belt loop, or leash. Holds 32 ounces of food or water and is built to withstand years of travel.",
    features: [
      "Folds flat and weighs under 2 ounces",
      "Holds 32 oz — enough for large breed dogs",
      "Clip-on loop for hands-free carrying",
    ],
    asin: "B005OTZ0OC",
    rating: 4.6,
    reviewCount: 12500,
    prime: true,
  },
  {
    name: "MidWest LifeStages Folding Metal Crate",
    badge: "Travel Crate",
    description:
      "Heavy-duty folding metal crate that collapses flat for easy car storage. Includes a divider panel, leak-proof pan, and carrying handle for hassle-free travel.",
    features: [
      "Folds flat with a carrying handle for portability",
      "Divider panel adjusts interior size as needed",
      "Leak-proof composite plastic pan included",
    ],
    asin: "B000QFMYWQ",
    rating: 4.7,
    reviewCount: 98400,
    prime: true,
  },
  {
    name: "VetriScience Composure Calming Chews",
    badge: "Anxiety Relief",
    description:
      "Veterinarian-formulated calming chews with Colostrum, L-Theanine, and Thiamine to reduce travel anxiety without sedation. Works within 30 minutes and lasts up to 4 hours.",
    features: [
      "Fast-acting — calming effect within 30 minutes",
      "Non-sedating formula keeps dogs alert but relaxed",
      "Chicken liver flavor dogs readily accept",
    ],
    asin: "B002GPDKQA",
    rating: 4.4,
    reviewCount: 21600,
    prime: true,
  },
  {
    name: "Amazon Basics Dog Waste Bags with Dispenser",
    badge: "Cleanup Essential",
    description:
      "Unscented, leak-proof waste bags with a clip-on dispenser that attaches to any leash. An absolute must-have for rest stops, trailheads, and hotel grounds.",
    features: [
      "Extra-thick construction prevents tears and leaks",
      "Clip-on dispenser attaches to any leash or bag",
      "900-count value pack for extended trips",
    ],
    asin: "B00NABTGY2",
    rating: 4.6,
    reviewCount: 185000,
    prime: true,
  },
  {
    name: "Kurgo Backseat Dog Barrier",
    badge: "Car Safety",
    description:
      "Adjustable mesh barrier that keeps your dog safely in the backseat and out of the front. Universal fit works with cars, SUVs, and trucks without any permanent installation.",
    features: [
      "Adjustable design fits most vehicles universally",
      "Mesh construction allows airflow and visibility",
      "Installs and removes in seconds — no tools needed",
    ],
    asin: "B00JMKTIOY",
    rating: 4.0,
    reviewCount: 8900,
    prime: true,
  },
];

const faqs = [
  {
    question: "How do I keep my dog calm in the car?",
    answer:
      "Keeping a dog calm during car rides starts with gradual desensitization. Begin with short drives around the block and slowly increase the duration over days or weeks, always pairing the experience with positive rewards like treats and calm praise. A well-ventilated crate or crash-tested harness gives dogs a secure, contained space that reduces anxiety. Calming chews containing ingredients like L-Theanine and Colostrum can take the edge off without sedation. Avoid feeding a full meal right before driving to prevent nausea, and keep the car at a comfortable temperature with fresh air flowing. Playing soft music or audiobooks can also help mask unfamiliar road noise. For dogs with severe car anxiety, consult your veterinarian — they may recommend prescription anti-anxiety medication for longer trips.",
  },
  {
    question: "What is the best car setup for traveling with a dog?",
    answer:
      "The ideal car setup depends on your dog's size and temperament, but the core elements are the same: restraint, protection, hydration, and comfort. Start with either a secured crate in the cargo area or a crash-tested harness that clips into the seatbelt system — an unrestrained dog is a projectile in an accident and a distraction while driving. Cover the backseat with a waterproof hammock or seat cover to protect upholstery from fur, drool, and dirty paws. Keep a portable water bottle and collapsible bowl within reach for hydration stops. A backseat barrier prevents your dog from climbing into the front seat. Pack waste bags, paper towels, and a spare towel for inevitable messes. Finally, bring your dog's familiar blanket or bed to provide a comforting scent in an unfamiliar environment.",
  },
  {
    question: "How often should I stop on road trips with a dog?",
    answer:
      "Plan to stop every two to three hours for a 10-to-15-minute break. During each stop, let your dog walk around on a leash to stretch their legs, relieve themselves, and drink fresh water. Puppies, senior dogs, and dogs with medical conditions may need more frequent stops — every 60 to 90 minutes is reasonable for these groups. Always choose safe stopping locations away from busy roads, and never leave your dog unattended in a parked car, even with windows cracked — interior temperatures can reach dangerous levels within minutes. Rest areas with grassy patches are ideal, and many highway rest stops now include designated pet relief areas. Keep your dog leashed at all times during stops, even if they have excellent recall, as unfamiliar environments can trigger unpredictable behavior.",
  },
];

export default function RoadTripPage() {
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
        name: "Road Trip Essentials",
        item: "https://www.babymydog.com/collections/road-trip",
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
                Road Trip Essentials
              </li>
            </ol>
          </nav>

          <h1
            className="text-[28px] md:text-[44px] font-extrabold leading-tight mb-6"
            style={{ color: "#2D2006", fontFamily: "'DM Serif Display', serif" }}
          >
            Road Trip Ready: Travel Essentials for Dogs (2026)
          </h1>

          <div className="prose max-w-none mb-12" style={{ color: "#2D2006" }}>
            <p className="text-lg leading-relaxed mb-4">
              There is something deeply satisfying about loading up the car, rolling down the windows, and hitting the open road with your dog riding shotgun — or more accurately, safely secured in the backseat. Road trips with dogs have become one of the most popular ways to travel in recent years, and for good reason. No cargo holds, no size restrictions, no sedation protocols. Just you, your best friend, and the highway ahead. But a successful dog road trip requires more planning than tossing a leash in the trunk and hoping for the best.
            </p>
            <p className="leading-relaxed mb-4">
              Safety is the non-negotiable foundation of every dog road trip. An unrestrained 60-pound dog in a 35-mph collision becomes a 2,700-pound projectile — a danger to themselves and every human in the vehicle. Crash-tested harnesses and properly secured crates are not optional accessories; they are the canine equivalent of seatbelts. The Center for Pet Safety has tested dozens of restraint systems, and only a handful meet meaningful safety standards. Investing in a properly rated harness or crate is one of the best decisions you can make before your first mile.
            </p>
            <p className="leading-relaxed mb-4">
              Your car setup matters almost as much as the destination. A waterproof seat cover protects your interior from the inevitable combination of drool, dirt, sand, and wet fur that accumulates during any adventure. A backseat barrier keeps curious dogs from climbing into the front seat and interfering with driving. Portable water bottles and collapsible bowls ensure hydration is always within reach, because rest stops do not always have convenient water sources. And waste bags — lots of them — because being a responsible dog owner does not take a vacation just because you are on one.
            </p>
            <p className="leading-relaxed mb-4">
              Car anxiety is a real challenge for many dogs. Some associate the car with stressful vet visits, while others simply struggle with motion or the unfamiliar sensory overload of a moving vehicle. Gradual desensitization works for most dogs: start with sitting in the parked car with treats, progress to short drives around the block, and slowly extend the distance. For dogs that need extra support, veterinarian-formulated calming chews can reduce anxiety without causing drowsiness, keeping your dog relaxed but alert enough to enjoy the journey.
            </p>
            <p className="leading-relaxed">
              We have assembled the ultimate road trip kit for dogs based on thousands of miles of real-world testing and tens of thousands of verified reviews. Every product on this list addresses a specific travel need — safety, comfort, hydration, cleanliness, or anxiety management. Whether you are driving two hours to the coast or two days across the country, these essentials will make the trip safer and more enjoyable for everyone in the car.
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
                href="/breeds/labrador-retriever"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Labrador Retriever Breed Guide
              </Link>
              <Link
                href="/best/dog-car-seats"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Best Dog Car Seats
              </Link>
              <Link
                href="/blog/dog-road-trip-tips"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Dog Road Trip Tips & Checklist
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
              Not Sure What Your Dog Needs for Travel?
            </h2>
            <p className="mb-6" style={{ color: "#8B7355" }}>
              Take our quick quiz to get personalized travel gear recommendations based on your dog&apos;s breed, size, and travel style.
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
