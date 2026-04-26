"use client";

import { useState } from "react";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string; icon: string }[];
}

const questions: Question[] = [
  {
    id: "size",
    question: "How big is your dog?",
    options: [
      { label: "Small (under 25 lbs)", value: "small", icon: "🐕" },
      { label: "Medium (25-55 lbs)", value: "medium", icon: "🦮" },
      { label: "Large (55-90 lbs)", value: "large", icon: "🐕‍🦺" },
      { label: "Giant (90+ lbs)", value: "giant", icon: "🐾" },
    ],
  },
  {
    id: "age",
    question: "How old is your dog?",
    options: [
      { label: "Puppy (under 1 year)", value: "puppy", icon: "🍼" },
      { label: "Young adult (1-3 years)", value: "young", icon: "⚡" },
      { label: "Adult (3-7 years)", value: "adult", icon: "🏠" },
      { label: "Senior (7+ years)", value: "senior", icon: "🤍" },
    ],
  },
  {
    id: "energy",
    question: "What's their energy level?",
    options: [
      { label: "Couch potato — naps all day", value: "low", icon: "😴" },
      { label: "Moderate — daily walks are enough", value: "moderate", icon: "🚶" },
      { label: "High — needs lots of exercise", value: "high", icon: "🏃" },
      { label: "Hyperactive — never stops moving", value: "very-high", icon: "🔥" },
    ],
  },
  {
    id: "concern",
    question: "What's your biggest concern right now?",
    options: [
      { label: "Comfort & sleep quality", value: "comfort", icon: "🛏️" },
      { label: "Nutrition & health", value: "nutrition", icon: "🥩" },
      { label: "Training & behavior", value: "training", icon: "🎓" },
      { label: "Anxiety & stress", value: "anxiety", icon: "💆" },
      { label: "Grooming & hygiene", value: "grooming", icon: "✂️" },
      { label: "Exercise & outdoor fun", value: "exercise", icon: "🌳" },
    ],
  },
  {
    id: "lifestyle",
    question: "What's your lifestyle like?",
    options: [
      { label: "Apartment dweller", value: "apartment", icon: "🏢" },
      { label: "House with yard", value: "yard", icon: "🏡" },
      { label: "Active / outdoors a lot", value: "active", icon: "🥾" },
      { label: "Lots of car travel", value: "travel", icon: "🚗" },
    ],
  },
];

interface Recommendation {
  category: string;
  slug: string;
  reason: string;
  icon: string;
}

function getRecommendations(answers: Record<string, string>): Recommendation[] {
  const recs: Recommendation[] = [];

  // Concern-based primary recommendations
  const concernMap: Record<string, Recommendation[]> = {
    comfort: [
      { category: "Dog Beds", slug: "dog-beds", reason: "A quality bed supports joints and improves sleep", icon: "🛏️" },
      { category: "Dog Crates", slug: "dog-crates", reason: "A cozy den for naps and alone time", icon: "🏠" },
    ],
    nutrition: [
      { category: "Dog Food", slug: "dog-food", reason: "Premium nutrition tailored to your dog's needs", icon: "🥩" },
      { category: "Dog Supplements", slug: "dog-supplements", reason: "Fill nutritional gaps and support health", icon: "💊" },
      { category: "Dog Bowls & Feeders", slug: "dog-bowls", reason: "Elevated or slow-feed bowls improve digestion", icon: "🥣" },
    ],
    training: [
      { category: "Dog Training Tools", slug: "dog-training", reason: "Positive reinforcement tools that actually work", icon: "🎓" },
      { category: "Dog Treats", slug: "dog-treats", reason: "High-value training treats for motivation", icon: "🦴" },
      { category: "Dog Collars & Tags", slug: "dog-collars", reason: "Proper collar fit is essential for training", icon: "📿" },
    ],
    anxiety: [
      { category: "Dog Anxiety & Calming", slug: "dog-anxiety", reason: "Calming aids for thunder, separation, and travel anxiety", icon: "💆" },
      { category: "Dog Puzzle Toys", slug: "dog-puzzle-toys", reason: "Mental stimulation reduces stress and boredom", icon: "🧩" },
      { category: "Dog Crates", slug: "dog-crates", reason: "A safe den space can reduce anxiety", icon: "🏠" },
    ],
    grooming: [
      { category: "Dog Grooming & Cleanup", slug: "dog-grooming", reason: "Keep your pup clean and healthy between groomer visits", icon: "✂️" },
      { category: "Dog Dental Care", slug: "dog-dental", reason: "Dental health prevents bigger problems down the road", icon: "🦷" },
    ],
    exercise: [
      { category: "Dog Toys", slug: "dog-toys", reason: "Durable toys for active play sessions", icon: "🎾" },
      { category: "Dog Harnesses", slug: "dog-harnesses", reason: "A proper harness makes walks safer and more comfortable", icon: "🦺" },
      { category: "Dog Leashes", slug: "dog-leashes", reason: "The right leash for your walking style", icon: "🔗" },
    ],
  };

  recs.push(...(concernMap[answers.concern] || concernMap.comfort));

  // Age-based additions
  if (answers.age === "puppy") {
    recs.push({ category: "Dog Training Tools", slug: "dog-training", reason: "Start training early for a well-behaved adult dog", icon: "🎓" });
    recs.push({ category: "Dog Treats", slug: "dog-treats", reason: "Soft training treats are essential for puppies", icon: "🦴" });
  }
  if (answers.age === "senior") {
    recs.push({ category: "Dog Supplements", slug: "dog-supplements", reason: "Joint supplements help senior dogs stay mobile", icon: "💊" });
    recs.push({ category: "Dog Beds", slug: "dog-beds", reason: "Orthopedic beds ease pressure on aging joints", icon: "🛏️" });
  }

  // Energy-based additions
  if (answers.energy === "high" || answers.energy === "very-high") {
    recs.push({ category: "Dog Toys", slug: "dog-toys", reason: "Tough toys for aggressive chewers and active dogs", icon: "🎾" });
    recs.push({ category: "Dog Puzzle Toys", slug: "dog-puzzle-toys", reason: "Mental stimulation tires out high-energy dogs", icon: "🧩" });
  }

  // Lifestyle-based additions
  if (answers.lifestyle === "travel") {
    recs.push({ category: "Dog Car Safety", slug: "dog-car-seats", reason: "Keep your dog safe and secure on road trips", icon: "🚗" });
  }
  if (answers.lifestyle === "active") {
    recs.push({ category: "Dog Boots", slug: "dog-boots", reason: "Protect paws on trails, hot pavement, and rough terrain", icon: "🥾" });
    recs.push({ category: "Dog Harnesses", slug: "dog-harnesses", reason: "Adventure-ready harnesses with handles and storage", icon: "🦺" });
  }
  if (answers.lifestyle === "apartment") {
    recs.push({ category: "Dog Crates", slug: "dog-crates", reason: "Space-efficient crates for apartment living", icon: "🏠" });
  }

  // Weather
  if (answers.size === "small") {
    recs.push({ category: "Dog Coats & Apparel", slug: "dog-coats", reason: "Small dogs lose heat fast — keep them warm", icon: "🧥" });
  }

  // Deduplicate by slug, keep first occurrence
  const seen = new Set<string>();
  return recs.filter((r) => {
    if (seen.has(r.slug)) return false;
    seen.add(r.slug);
    return true;
  }).slice(0, 6);
}

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function handleAnswer(questionId: string, value: string) {
    const next = { ...answers, [questionId]: value };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  const progress = done ? 100 : (step / questions.length) * 100;
  const recommendations = done ? getRecommendations(answers) : [];

  return (
    <div className="min-h-screen" style={{ background: "#FAF8F5" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.babymydog.com" },
          { "@type": "ListItem", position: 2, name: "Product Quiz", item: "https://www.babymydog.com/quiz" },
        ],
      }) }} />

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[#D35400] text-sm font-bold tracking-wider uppercase mb-2">Personalized Picks</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2D2006] tracking-tight">
            {done ? "Your Personalized Picks" : "What Does Your Dog Need?"}
          </h1>
          <p className="text-[#2D2006]/50 mt-2">
            {done ? "Based on your answers, here's what we recommend." : "Answer 5 quick questions and we'll recommend the perfect products."}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#2D2006]/10 rounded-full h-2 mb-10 overflow-hidden">
          <div className="h-full bg-[#D35400] rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>

        {!done ? (
          /* Question */
          <div key={step} className="animate-fade-in">
            <p className="text-sm text-[#2D2006]/40 mb-2 font-semibold">Question {step + 1} of {questions.length}</p>
            <h2 className="text-2xl font-bold text-[#2D2006] mb-6">{questions[step].question}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {questions[step].options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(questions[step].id, opt.value)}
                  className="group text-left bg-white rounded-2xl p-5 border-2 border-transparent hover:border-[#D35400] hover:shadow-lg transition-all duration-200 cursor-pointer"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-2xl block mb-2">{opt.icon}</span>
                  <span className="font-bold text-[#2D2006] text-sm group-hover:text-[#D35400] transition">{opt.label}</span>
                </button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="mt-6 text-sm text-[#2D2006]/40 hover:text-[#D35400] transition">
                &larr; Back
              </button>
            )}
          </div>
        ) : (
          /* Results */
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {recommendations.map((rec) => (
                <Link
                  key={rec.slug}
                  href={`/products/${rec.slug}`}
                  className="group bg-white rounded-2xl p-6 border-2 border-transparent hover:border-[#D35400] hover:shadow-lg transition-all duration-200"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-3xl block mb-3">{rec.icon}</span>
                  <h3 className="font-bold text-[#2D2006] group-hover:text-[#D35400] transition mb-1">{rec.category}</h3>
                  <p className="text-sm text-[#2D2006]/50 leading-relaxed">{rec.reason}</p>
                  <span className="inline-block mt-3 text-[#D35400] text-sm font-bold group-hover:translate-x-1 transition-transform">See our picks &rarr;</span>
                </Link>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 mb-8 text-center" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <p className="text-[#2D2006]/50 text-sm mb-3">Want breed-specific recommendations?</p>
              <Link href="/breeds" className="inline-block bg-[#5B7B5E] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#4a6a4d] transition">
                Browse 50 Breed Guides &rarr;
              </Link>
            </div>

            <div className="text-center">
              <button onClick={restart} className="text-sm text-[#2D2006]/40 hover:text-[#D35400] transition">
                Retake quiz &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Bottom nav */}
        <div className="mt-16 pt-8 border-t border-[#2D2006]/10 text-center">
          <p className="text-[#2D2006]/30 text-xs mb-3">Or browse directly:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Beds", slug: "dog-beds" }, { label: "Food", slug: "dog-food" },
              { label: "Toys", slug: "dog-toys" }, { label: "Treats", slug: "dog-treats" },
              { label: "Grooming", slug: "dog-grooming" }, { label: "Harnesses", slug: "dog-harnesses" },
              { label: "Training", slug: "dog-training" }, { label: "Supplements", slug: "dog-supplements" },
              { label: "Anxiety", slug: "dog-anxiety" }, { label: "Car Safety", slug: "dog-car-seats" },
            ].map((c) => (
              <Link key={c.slug} href={`/products/${c.slug}`} className="text-xs bg-white border border-[#2D2006]/10 rounded-full px-3 py-1.5 text-[#2D2006]/50 hover:text-[#D35400] hover:border-[#D35400] transition">
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
