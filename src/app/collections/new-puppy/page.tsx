import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Puppy Starter Kit: Everything You Need (2026)",
  description:
    "The ultimate new puppy checklist for 2026. From crates and training pads to food and toys, here are the essential products every puppy parent needs on day one.",
  alternates: {
    canonical: "https://babymydog.com/collections/new-puppy",
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
    name: "MidWest iCrate Starter Kit",
    badge: "Best Crate",
    description:
      "Single-door folding metal crate with a divider panel that lets you adjust the interior size as your puppy grows. Includes a leak-proof pan and a privacy cover.",
    features: [
      "Divider panel grows with your puppy",
      "Folds flat for easy storage and travel",
      "Leak-proof composite plastic pan included",
    ],
    asin: "B000QFMYWQ",
    rating: 4.7,
    reviewCount: 98400,
    prime: true,
  },
  {
    name: "Amazon Basics Dog Training Pads",
    badge: "Housetraining Pick",
    description:
      "Super-absorbent five-layer training pads with a quick-dry surface and built-in attractant to encourage your puppy to use the pad consistently.",
    features: [
      "Five-layer construction locks in moisture",
      "Built-in attractant helps direct puppy to the pad",
      "Leak-proof plastic lining protects floors",
    ],
    asin: "B00MW8G62E",
    rating: 4.4,
    reviewCount: 135000,
    prime: true,
  },
  {
    name: "Blue Buffalo Life Protection Puppy Food",
    badge: "Best Nutrition",
    description:
      "High-quality puppy kibble made with deboned chicken, whole grains, and LifeSource Bits — a precise blend of antioxidants, vitamins, and minerals for growing puppies.",
    features: [
      "Real deboned chicken is the first ingredient",
      "DHA and ARA support brain and eye development",
      "No poultry by-product meals, corn, wheat, or soy",
    ],
    asin: "B001GBIYRK",
    rating: 4.6,
    reviewCount: 45200,
    prime: true,
  },
  {
    name: "KONG Puppy Toy",
    badge: "Best Chew Toy",
    description:
      "Made with softer KONG Classic rubber customized for puppy teeth and gums. Stuff it with kibble or treats to provide mental stimulation and soothe teething discomfort.",
    features: [
      "Softer rubber formula designed for puppy teeth",
      "Stuff with treats for extended engagement",
      "Unpredictable bounce keeps puppies entertained",
    ],
    asin: "B0002AR15U",
    rating: 4.6,
    reviewCount: 52800,
    prime: true,
  },
  {
    name: "Blueberry Pet Classic Solid Color Collar",
    badge: "First Collar",
    description:
      "Durable nylon collar available in over 20 colors with a solid D-ring for leash attachment. Adjustable sizing makes it ideal for fast-growing puppies.",
    features: [
      "High-density nylon webbing with matching stitching",
      "Sturdy D-ring for leash and ID tag attachment",
      "Available in multiple sizes and 20+ colors",
    ],
    asin: "B010SQ4VYE",
    rating: 4.5,
    reviewCount: 28700,
    prime: true,
  },
  {
    name: "Zuke's Mini Naturals Training Treats",
    badge: "Best Training Treats",
    description:
      "Small, soft, low-calorie training treats made with real chicken as the first ingredient. Perfect size for repetitive reward-based training sessions with puppies.",
    features: [
      "Only 3 calories per treat — ideal for frequent rewarding",
      "Real chicken is the number-one ingredient",
      "Soft texture is easy for young puppies to chew",
    ],
    asin: "B000H0ZJHW",
    rating: 4.7,
    reviewCount: 39600,
    prime: true,
  },
  {
    name: "Nature's Miracle Stain & Odor Remover",
    badge: "Cleanup Essential",
    description:
      "Bio-enzymatic formula that breaks down urine, feces, vomit, and other organic stains at the molecular level. Eliminates odors rather than masking them, discouraging repeat marking.",
    features: [
      "Enzymatic formula destroys odor at the source",
      "Safe for use on carpets, hard floors, and upholstery",
      "Discourages re-soiling in treated areas",
    ],
    asin: "B00251GXA6",
    rating: 4.3,
    reviewCount: 71200,
    prime: true,
  },
  {
    name: "KONG Puppy Teething Stick",
    badge: "Teething Relief",
    description:
      "Ridged rubber stick designed to clean teeth and soothe sore gums during the teething phase. Fill the grooves with puppy paste or peanut butter for added appeal.",
    features: [
      "Ridged surface massages gums and cleans teeth",
      "Fill grooves with paste for extended chewing",
      "Made with KONG's puppy-formula rubber",
    ],
    asin: "B0002AR17S",
    rating: 4.4,
    reviewCount: 18900,
    prime: true,
  },
];

const faqs = [
  {
    question: "What do I need before bringing a puppy home?",
    answer:
      "Before your puppy arrives, you should have a properly sized crate, training pads, high-quality puppy food, food and water bowls, a collar and leash, an ID tag with your phone number, enzymatic cleaner for accidents, and a few safe chew toys. It also helps to puppy-proof at least one room by covering electrical cords, removing small objects that could be swallowed, and securing trash cans. Having everything ready before pickup day reduces stress for both you and the puppy and lets you focus on bonding instead of scrambling to the pet store.",
  },
  {
    question: "What is the best crate size for a puppy?",
    answer:
      "The ideal crate should be large enough for your puppy to stand up, turn around, and lie down comfortably, but not so large that they can use one end as a bathroom and the other as a bed. Many owners buy an adult-sized crate with a divider panel that can be adjusted as the puppy grows. For example, a Labrador puppy may start with the divider set to create a 24-inch space and gradually expand to the full 42-inch crate as they reach adult size. This saves money and ensures the crate is always the right fit during training.",
  },
  {
    question: "When should I start training my puppy?",
    answer:
      "Training should begin the moment your puppy comes home, typically around 8 weeks of age. Start with simple commands like sit, their name recall, and crate training. Puppies have short attention spans, so keep sessions to 5 minutes or less and use high-value treats for positive reinforcement. Socialization is also critical between 8 and 16 weeks, which is the prime window for exposing your puppy to new people, sounds, surfaces, and other vaccinated dogs. Formal puppy classes can start as early as 8 weeks, provided the trainer requires proof of initial vaccinations for all attendees.",
  },
];

export default function NewPuppyPage() {
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
        name: "New Puppy Starter Kit",
        item: "https://babymydog.com/collections/new-puppy",
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
                New Puppy Starter Kit
              </li>
            </ol>
          </nav>

          <h1
            className="text-[28px] md:text-[44px] font-extrabold leading-tight mb-6"
            style={{ color: "#2D2006", fontFamily: "'DM Serif Display', serif" }}
          >
            New Puppy Starter Kit: Everything You Need (2026)
          </h1>

          <div className="prose max-w-none mb-12" style={{ color: "#2D2006" }}>
            <p className="text-lg leading-relaxed mb-4">
              Bringing a new puppy home is one of the most exciting experiences a family can share, but the first few weeks can also be overwhelming without the right preparation. Those tiny paws come with enormous needs: a safe space to sleep, nutritious food for explosive growth, gentle toys to soothe teething pain, and reliable training tools to build good habits from day one. The decisions you make in the first month set the foundation for years of health, behavior, and happiness.
            </p>
            <p className="leading-relaxed mb-4">
              Crate training is one of the most valuable investments you can make for your puppy. Far from being a punishment, a properly introduced crate becomes your puppy&apos;s den — a quiet, secure space where they can rest without anxiety. Most puppies take to a crate within a few days when it is paired with positive associations like meals, treats, and calm praise. The crate also accelerates housetraining dramatically because dogs naturally avoid soiling their sleeping area, which teaches bladder control faster than pads alone.
            </p>
            <p className="leading-relaxed mb-4">
              Nutrition during the first year is critical because puppies grow at an astonishing rate. A Labrador Retriever puppy, for example, can gain two to three pounds per week during its fastest growth phase. Puppy-specific formulas provide the elevated protein, fat, calcium, and DHA that developing bones, muscles, and brains demand. Feeding the wrong food — or the right food in the wrong amounts — can lead to orthopedic problems, especially in large and giant breeds. Always follow the feeding guidelines on the bag and consult your veterinarian if you are unsure.
            </p>
            <p className="leading-relaxed mb-4">
              Teething is another universal puppy experience that catches many first-time owners off guard. Between three and six months of age, puppies lose their 28 baby teeth and grow 42 adult teeth, a process that causes significant gum discomfort and an almost irresistible urge to chew. Without appropriate outlets, puppies will redirect that urge onto furniture, shoes, and hands. Providing a rotation of safe chew toys — rubber, rope, and frozen options — protects your belongings and teaches your puppy what is acceptable to gnaw on.
            </p>
            <p className="leading-relaxed">
              We assembled this starter kit based on years of experience helping new puppy parents and thousands of verified reviews. Every product has been chosen for durability, safety, and real-world effectiveness. Whether you are bringing home a tiny Chihuahua or a boisterous Golden Retriever, these essentials will give you and your new best friend the strongest possible start.
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
                href="/breeds/labrador-retriever"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Labrador Retriever Breed Guide
              </Link>
              <Link
                href="/blog/new-puppy-checklist"
                className="inline-block text-sm font-medium px-4 py-2 rounded-lg border hover:shadow-md transition-shadow"
                style={{ borderColor: "#F0E6D6", color: "#D35400" }}
              >
                Complete New Puppy Checklist
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
              Not Sure What Your Puppy Needs?
            </h2>
            <p className="mb-6" style={{ color: "#8B7355" }}>
              Take our quick quiz and get a personalized product list based on your puppy&apos;s breed, age, and size.
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
