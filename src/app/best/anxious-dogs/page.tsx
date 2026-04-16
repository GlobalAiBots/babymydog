import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Calming Products for Anxious Dogs (2026) | BabyMyDog",
  description:
    "Top 6 vet-approved calming products for dogs with anxiety in 2026. ThunderShirt, Adaptil, calming chews, and more — proven to reduce stress, barking, and destructive behavior.",
  alternates: { canonical: "https://babymydog.com/best/anxious-dogs" },
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
    name: "ThunderShirt Classic Anxiety Vest",
    badge: "Best Overall",
    description:
      "The ThunderShirt applies gentle, constant pressure to your dog's torso — similar to swaddling an infant — which has been shown to calm the nervous system in over 80 percent of dogs. It is the most studied and veterinarian-recommended anxiety product on the market, effective for thunderstorms, fireworks, separation anxiety, and travel stress.",
    features: [
      "Patented pressure technology calms 80%+ of dogs within minutes",
      "Drug-free — no side effects, sedation, or behavioral changes",
      "Adjustable Velcro fit for a customized snug fit on any body shape",
    ],
    asin: "B0029PY0GW",
    rating: 4.3,
    reviewCount: "38K+",
    prime: true,
  },
  {
    name: "Adaptil Calming Pheromone Diffuser",
    badge: "Best for Home Anxiety",
    description:
      "Adaptil releases a synthetic version of the dog-appeasing pheromone that mother dogs produce to comfort their puppies. Plug it into any room and it provides continuous calming coverage for up to 30 days. Backed by over 40 clinical studies, it is the most scientifically validated pheromone product available.",
    features: [
      "Synthetic dog-appeasing pheromone backed by 40+ clinical studies",
      "Covers up to 700 sq ft — one diffuser handles most rooms",
      "Odorless, drug-free, and safe around children and other pets",
    ],
    asin: "B001AY3CWU",
    rating: 4.2,
    reviewCount: "15K+",
    prime: true,
  },
  {
    name: "VetriScience Composure Calming Chews",
    badge: "Best Calming Supplement",
    description:
      "Composure combines three clinically studied calming ingredients — Colostrum Calming Complex, L-Theanine, and thiamine — in a tasty bite-sized chew. It works within 30 minutes and does not cause drowsiness, making it ideal for situational anxiety like vet visits, car rides, or thunderstorms.",
    features: [
      "Three clinically studied calming ingredients in one chew",
      "Works within 30 minutes — fast-acting for situational use",
      "Non-sedating formula lets your dog stay alert and functional",
    ],
    asin: "B002GPDKQA",
    rating: 4.4,
    reviewCount: "12K+",
    prime: true,
  },
  {
    name: "PetHonesty Calming Hemp Chews",
    badge: "Best Hemp-Based",
    description:
      "These hemp-based chews combine organic hemp, valerian root, chamomile, and L-tryptophan for a multi-pathway approach to calming. They are particularly effective for dogs with chronic or generalized anxiety rather than just situational triggers.",
    features: [
      "Organic hemp with chamomile and valerian root for multi-pathway calming",
      "Soft chew format that dogs treat like a snack",
      "Made in the USA in a GMP-certified facility with no artificial ingredients",
    ],
    asin: "B07RWCJVCY",
    rating: 4.4,
    reviewCount: "42K+",
    prime: true,
  },
  {
    name: "SmartPetLove Snuggle Puppy Heartbeat Toy",
    badge: "Best Comfort Toy",
    description:
      "The Snuggle Puppy features a battery-powered heartbeat module and a disposable heat pack that mimic the warmth and pulse of a littermate. It is remarkably effective for separation anxiety, nighttime whining, and helping newly adopted dogs feel safe in unfamiliar environments.",
    features: [
      "Real-feel pulsing heartbeat mimics the comfort of a companion",
      "Disposable heat pack adds calming warmth",
      "Machine-washable — heartbeat module removes for cleaning",
    ],
    asin: "B000S753SW",
    rating: 4.4,
    reviewCount: "32K+",
    prime: true,
  },
  {
    name: "KONG Classic Stuffable Toy",
    badge: "Best Distraction Tool",
    description:
      "A frozen, peanut-butter-stuffed KONG is the single most recommended tool by professional trainers and behaviorists for managing anxiety and destructive behavior. The act of licking and chewing releases endorphins, and the challenge of extracting food provides mental stimulation that redirects anxious energy.",
    features: [
      "Licking and chewing releases calming endorphins naturally",
      "Stuffable design provides 20-40 minutes of focused engagement",
      "Durable natural rubber lasts through heavy anxious chewing",
    ],
    asin: "B0002AR0I8",
    rating: 4.7,
    reviewCount: "95K+",
    prime: true,
  },
];

const faqs = [
  {
    q: "How do I know if my dog has anxiety?",
    a: "Common signs include excessive barking or whining, destructive behavior when left alone, panting or pacing, trembling, hiding, loss of appetite, and inappropriate elimination. Some dogs also show subtle signs like lip licking, yawning, or whale eye (showing the whites of their eyes). If these behaviors are frequent or intense, consult your veterinarian — anxiety is a medical condition that benefits from professional diagnosis and a treatment plan.",
  },
  {
    q: "Can I use multiple calming products together?",
    a: "Yes, many veterinarians recommend a layered approach. For example, you might use an Adaptil diffuser for baseline home comfort, add a ThunderShirt during storms or fireworks, and give calming chews before a vet visit. Since most calming products work through different mechanisms (pressure, pheromones, supplements), they complement rather than interfere with each other. Always check with your vet before combining supplements with prescription medications.",
  },
  {
    q: "Do calming products replace professional training?",
    a: "No. Calming products are tools that reduce the intensity of anxiety, making it easier for your dog to learn and respond to training. For the best results, combine calming products with desensitization training, counterconditioning, and — in severe cases — veterinary behavioral consultation. Think of products as the support system that makes the real work of behavioral modification possible.",
  },
];

export default function AnxiousDogsPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://babymydog.com" },
      { "@type": "ListItem", position: 2, name: "Best Products", item: "https://babymydog.com/best" },
      { "@type": "ListItem", position: 3, name: "Calming Products for Anxious Dogs", item: "https://babymydog.com/best/anxious-dogs" },
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
          <span className="text-[#2D2006] font-medium">Calming Products for Anxious Dogs</span>
        </nav>

        <Link href="/best" className="inline-flex items-center gap-1 text-sm text-[#D35400] font-semibold hover:underline mb-6">
          &larr; Back to All Products
        </Link>

        <h1 className="font-extrabold text-[28px] md:text-[44px] text-[#2D2006] mb-6 leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Best Calming Products for Anxious Dogs (2026)
        </h1>

        <div className="prose max-w-3xl text-[#8B7355] leading-relaxed mb-14 space-y-4">
          <p>
            Dog anxiety is far more common than most people realize. Studies suggest that over 70 percent of dogs display some form of anxiety-related behavior, whether triggered by thunderstorms, separation, loud noises, travel, or unfamiliar environments. Breeds like German Shepherds, Border Collies, and rescue dogs are particularly susceptible, but anxiety can affect any dog regardless of breed or background.
          </p>
          <p>
            The impact goes beyond occasional whining. Chronic anxiety leads to destructive behavior, excessive barking, self-harm from obsessive licking, digestive issues, and a significantly diminished quality of life. The good news is that the science of canine anxiety management has advanced dramatically, and there are now multiple evidence-backed, drug-free products that can make a real difference.
          </p>
          <p>
            Our top pick, the ThunderShirt, uses patented pressure technology that has been shown to calm over 80 percent of dogs — similar to how a weighted blanket works for humans. For home-based anxiety, the Adaptil pheromone diffuser is backed by over 40 clinical studies and provides continuous, invisible calming support. And for situational triggers like vet visits or car rides, fast-acting calming chews from VetriScience work within 30 minutes.
          </p>
          <p>
            We consulted with veterinary behaviorists, analyzed clinical research, and reviewed tens of thousands of owner experiences to compile this list. Every product is available on Amazon with Prime shipping, and none require a prescription. However, we always recommend discussing your dog's anxiety with your veterinarian to rule out underlying medical causes and develop a comprehensive treatment plan.
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
            <Link href="/breeds/german-shepherd" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">German Shepherd Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/how-to-stop-dog-from-barking" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">How to Stop Dog Barking</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/blog/how-to-crate-train-puppy" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">How to Crate Train a Puppy</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
            <Link href="/breeds/labrador-retriever" className="block bg-white rounded-xl p-5 hover:shadow-md transition border border-[#D35400]/10">
              <p className="font-semibold text-[#2D2006] text-sm">Labrador Retriever Breed Guide</p>
              <p className="text-[#D35400] text-xs mt-1">Read more &rarr;</p>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, rgba(211,84,0,0.07), rgba(91,123,94,0.07))" }}>
          <h2 className="text-2xl font-bold text-[#2D2006] mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>Help Your Anxious Dog Feel Better</h2>
          <p className="text-[#8B7355] mb-6 max-w-lg mx-auto">Take our quick quiz to get personalized calming product recommendations based on your dog&apos;s triggers and behavior.</p>
          <Link href="/quiz" className="inline-block text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #F39C12, #D35400)", boxShadow: "0 6px 20px rgba(211,84,0,0.3)" }}>
            Take the Quiz &rarr;
          </Link>
        </section>
      </div>
    </div>
  );
}
