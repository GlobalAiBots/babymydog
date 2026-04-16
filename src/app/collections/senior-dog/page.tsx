import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Senior Dog Comfort: Best Products for Aging Pups (2026)",
  description:
    "Help your aging dog live comfortably with orthopedic beds, joint supplements, ramps, and senior-specific nutrition. Vet-recommended products for senior dogs in 2026.",
  alternates: {
    canonical: "https://babymydog.com/collections/senior-dog",
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
    name: "Big Barker Orthopedic Dog Bed",
    badge: "Best Overall",
    description:
      "American-made orthopedic bed with 7 inches of therapeutic foam designed specifically for large and giant breed dogs. Clinically proven to reduce joint pain and stiffness.",
    features: [
      "7-inch therapeutic foam that won't flatten over time",
      "Calibrated for dogs over 50 lbs with joint issues",
      "Machine-washable microfiber cover with non-slip bottom",
    ],
    asin: "B00B2JLN2Q",
    rating: 4.7,
    reviewCount: 14200,
    prime: true,
  },
  {
    name: "Nutramax Cosequin DS Plus MSM",
    badge: "Best Joint Supplement",
    description:
      "The number-one veterinarian-recommended joint health supplement combining glucosamine, chondroitin, and MSM to support cartilage production and comfortable mobility.",
    features: [
      "Glucosamine + chondroitin + MSM triple formula",
      "Number-one vet-recommended joint supplement brand",
      "Chewable tablets dogs take like treats",
    ],
    asin: "B001C4VQZY",
    rating: 4.6,
    reviewCount: 33500,
    prime: true,
  },
  {
    name: "Outward Hound Nina Ottosson Dog Puzzle",
    badge: "Mental Stimulation",
    description:
      "Interactive puzzle toy with sliding compartments and removable covers that challenge your senior dog's brain. Mental engagement helps slow cognitive decline in aging dogs.",
    features: [
      "Multiple difficulty levels keep dogs engaged",
      "BPA, PVC, and phthalate-free materials",
      "Dishwasher-safe for easy cleaning",
    ],
    asin: "B0711Y9XTF",
    rating: 4.5,
    reviewCount: 22100,
    prime: true,
  },
  {
    name: "PetSafe Solvit Deluxe Telescoping Ramp",
    badge: "Mobility Aid",
    description:
      "Lightweight telescoping ramp that extends up to 70 inches, making it easy for senior dogs to get in and out of vehicles, onto beds, or up stairs without jumping.",
    features: [
      "Extends from 39 to 70 inches with locking mechanism",
      "High-traction walking surface prevents slipping",
      "Supports dogs up to 300 lbs",
    ],
    asin: "B000MD48YQ",
    rating: 4.4,
    reviewCount: 11800,
    prime: true,
  },
  {
    name: "Nutro Ultra Senior Dry Dog Food",
    badge: "Senior Nutrition",
    description:
      "Premium senior formula with a blend of 15 superfoods, lean proteins from chicken, lamb, and salmon, and reduced calories to maintain healthy weight in less active older dogs.",
    features: [
      "Trio of proteins from chicken, lamb, and salmon",
      "15 superfoods including coconut, chia, and kale",
      "Reduced calories support healthy weight management",
    ],
    asin: "B005KX4SBE",
    rating: 4.5,
    reviewCount: 8600,
    prime: true,
  },
  {
    name: "Greenies Senior Dental Dog Treats",
    badge: "Dental Health",
    description:
      "Dental chews formulated with a softer texture for aging teeth while still providing effective plaque and tartar removal. Supports fresh breath and overall oral health.",
    features: [
      "Softer texture designed for senior teeth and gums",
      "VOHC accepted for plaque and tartar control",
      "Added vitamins and minerals for senior dogs",
    ],
    asin: "B000CAQG5A",
    rating: 4.6,
    reviewCount: 19400,
    prime: true,
  },
  {
    name: "SmartPetLove Snuggle Puppy Behavioral Aid",
    badge: "Comfort & Anxiety",
    description:
      "Plush toy with a real-feel heartbeat and optional heat pack that reduces anxiety, loneliness, and stress in senior dogs — especially helpful for dogs experiencing cognitive changes.",
    features: [
      "Real-feel pulsing heartbeat calms anxious dogs",
      "Disposable heat pack mimics body warmth",
      "Machine-washable with removable heartbeat module",
    ],
    asin: "B000S753SW",
    rating: 4.4,
    reviewCount: 27300,
    prime: true,
  },
];

const faqs = [
  {
    question: "When is a dog considered senior?",
    answer:
      "The age at which a dog is considered senior depends largely on their size and breed. Small dogs (under 20 pounds) are generally classified as senior around 10 to 12 years of age. Medium dogs (20 to 50 pounds) typically enter their senior years between 8 and 10. Large breeds (50 to 90 pounds) are considered senior by age 7 or 8, while giant breeds like Great Danes and Saint Bernards may be classified as senior as early as 5 or 6 years old. Your veterinarian can help determine when your specific dog should transition to senior care protocols, including more frequent wellness exams and bloodwork.",
  },
  {
    question: "What are the best supplements for old dogs?",
    answer:
      "The most widely recommended supplements for senior dogs include glucosamine and chondroitin for joint support, omega-3 fatty acids (fish oil) for anti-inflammatory benefits and coat health, and probiotics for digestive health. Some veterinarians also recommend SAMe (S-adenosylmethionine) for cognitive support in dogs showing signs of confusion or disorientation. Coenzyme Q10 may support heart health in breeds prone to cardiac issues. Always consult your veterinarian before starting any supplement regimen, as some can interact with medications or may not be appropriate for dogs with certain health conditions like kidney or liver disease.",
  },
  {
    question: "How can I keep my senior dog comfortable?",
    answer:
      "Keeping a senior dog comfortable involves several key adjustments to their environment and routine. Provide an orthopedic bed that supports achy joints and is easy to get into and out of. Use ramps or steps to help them access furniture, cars, and elevated food bowls to reduce neck strain. Maintain a consistent routine, as senior dogs can become anxious with sudden changes. Keep the house warm, since aging dogs lose body heat more easily. Adjust exercise to shorter, gentler walks rather than eliminating activity entirely — movement is essential for joint flexibility and mental health. Non-slip rugs on hardwood floors prevent dangerous falls, and raised food and water bowls reduce strain on the neck and spine.",
  },
];

export default function SeniorDogPage() {
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
        name: "Senior Dog Comfort",
        item: "https://babymydog.com/collections/senior-dog",
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
                Senior Dog Comfort
              </li>
            </ol>
          </nav>

          <h1
            className="text-[28px] md:text-[44px] font-extrabold leading-tight mb-6"
            style={{ color: "#2D2006", fontFamily: "'DM Serif Display', serif" }}
          >
            Senior Dog Comfort: Best Products for Aging Pups (2026)
          </h1>

          <div className="prose max-w-none mb-12" style={{ color: "#2D2006" }}>
            <p className="text-lg leading-relaxed mb-4">
              Watching your dog grow older is one of the bittersweet realities of pet ownership. The puppy that once bounded endlessly across the yard may now pause at the bottom of the stairs or take a little longer to stand up after a nap. These changes are normal, but they are also signals that your dog needs adjusted care, a more supportive environment, and products specifically designed for aging bodies and minds.
            </p>
            <p className="leading-relaxed mb-4">
              Joint health is the single biggest concern for most senior dog owners, and for good reason. Osteoarthritis affects an estimated 20 percent of dogs over the age of one, and that number climbs sharply with age. By the time a large-breed dog reaches 8 or 9 years old, there is a high probability they are dealing with some degree of joint degeneration. The good news is that a combination of orthopedic bedding, joint supplements, appropriate exercise, and weight management can dramatically slow the progression and improve day-to-day comfort. An orthopedic bed alone can make a visible difference in how easily your dog rises in the morning.
            </p>
            <p className="leading-relaxed mb-4">
              Cognitive changes are another area that deserves attention. Canine Cognitive Dysfunction (CCD) is the dog equivalent of dementia, and it affects a significant percentage of dogs over 11 years old. Symptoms include disorientation, changes in sleep patterns, forgetting previously learned commands, staring at walls, and increased anxiety — especially at night. While there is no cure, mental stimulation through puzzle toys, continued training, and social interaction can help maintain cognitive function longer. Some supplements and prescription diets containing medium-chain triglycerides (MCTs) have also shown promise in supporting brain health in aging dogs.
            </p>
            <p className="leading-relaxed mb-4">
              Nutrition shifts are essential as dogs enter their senior years. Older dogs typically need fewer calories because their metabolism slows and their activity level decreases, but they still need high-quality protein to maintain muscle mass. Senior-specific formulas address this balance while adding joint-supporting nutrients like glucosamine, omega-3 fatty acids, and antioxidants that combat cellular aging. Dental health also becomes more critical, as years of plaque accumulation and weakening gums can lead to painful infections that affect appetite and overall wellbeing.
            </p>
            <p className="leading-relaxed">
              This collection brings together the most effective and highly rated products for senior dogs in 2026. Every item has been chosen to address a specific aspect of aging — from physical comfort and mobility to mental engagement and nutritional support. Your senior dog gave you their best years. These products help you give them the most comfortable ones in return.
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
                href="/breeds/dachshund"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Dachshund Breed Guide
              </Link>
              <Link
                href="/best/senior-dog-products"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Best Senior Dog Products
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
              Need Help Choosing the Right Products?
            </h2>
            <p className="mb-6" style={{ color: "#8B7355" }}>
              Take our quick quiz to get personalized recommendations tailored to your senior dog&apos;s breed, size, and specific needs.
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
