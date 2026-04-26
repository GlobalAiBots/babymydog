/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BrandName from "@/components/BrandName";
import AffiliateDisclosure from "@/components/affiliate/AffiliateDisclosure";
import AffiliateCallout from "@/components/affiliate/AffiliateCallout";
import AffiliateInlineLink from "@/components/affiliate/AffiliateInlineLink";
import { REVIVAL } from "@/data/affiliates/revival";
import type { Metadata } from "next";

const POST_SLUG = "how-to-brush-dogs-teeth";

export const metadata: Metadata = {
  title: "How to Brush Your Dog's Teeth: A Step-by-Step Guide | BabyMyDog",
  description: "How to brush your dog's teeth — the exact step-by-step process, what toothbrush and toothpaste to use, and how often it actually needs to happen.",
  alternates: { canonical: "https://www.babymydog.com/blog/how-to-brush-dogs-teeth" },
  openGraph: {
    title: "How to Brush Your Dog's Teeth: A Step-by-Step Guide",
    description: "How to brush your dog's teeth — the exact step-by-step process, what toothbrush and toothpaste to use, and how often it actually needs to happen.",
    url: "https://www.babymydog.com/blog/how-to-brush-dogs-teeth",
    siteName: "BabyMyDog",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Brush Your Dog's Teeth: A Step-by-Step Guide",
    description: "How to brush your dog's teeth — the exact step-by-step process, what toothbrush and toothpaste to use, and how often it actually needs to happen.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Brush Your Dog's Teeth: A Step-by-Step Guide",
  description: "How to brush your dog's teeth — the exact step-by-step process, what toothbrush and toothpaste to use, and how often it actually needs to happen.",
  datePublished: "2026-04-20",
  dateModified: "2026-04-20",
  author: { "@type": "Organization", name: "BabyMyDog" },
  publisher: { "@type": "Organization", name: "BabyMyDog", url: "https://www.babymydog.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.babymydog.com/blog/how-to-brush-dogs-teeth" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I brush my dog's teeth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daily is ideal — that's what veterinary dentists actually recommend. Realistically, 3 to 4 times per week is the threshold where you'll see meaningful reduction in plaque and tartar. Anything less than twice a week has limited benefit.",
      },
    },
    {
      "@type": "Question",
      name: "Is dog toothpaste necessary or can I use baking soda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use dog toothpaste. Baking soda is harsh on the gums, has an unpleasant taste that makes future brushing harder, and the high sodium content can be problematic if swallowed in volume. Enzymatic dog toothpaste is inexpensive, safe to swallow, and dogs actually like the flavor. Never use human toothpaste — many contain xylitol, which is toxic to dogs even in small amounts.",
      },
    },
    {
      "@type": "Question",
      name: "At what age should I start brushing my puppy's teeth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start around 8 to 12 weeks, even though baby teeth will be replaced. The point is acclimation — getting your puppy used to having their mouth handled. Use a finger brush with a small amount of puppy-safe enzymatic toothpaste, and keep sessions short and positive.",
      },
    },
  ],
};

export default function HowToBrushDogsTeeth() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.babymydog.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.babymydog.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "How to Brush Your Dog's Teeth", "item": "https://www.babymydog.com/blog/how-to-brush-dogs-teeth" },
        ],
      }) }} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-400 mb-6 flex flex-wrap gap-2">
          <Link href="/" className="hover:text-[#C4704B] transition">Home</Link><span>/</span>
          <Link href="/blog" className="hover:text-[#C4704B] transition">Blog</Link><span>/</span>
          <span className="text-[#1A1A1A] font-medium">How to Brush Your Dog&apos;s Teeth</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 leading-tight font-display">
          How to Brush Your Dog&apos;s Teeth: A Step-by-Step Guide
        </h1>
        <p className="text-gray-400 text-sm mb-2">By the <BrandName /> Team &middot; Retired AKC breeder &amp; U.S. military veteran</p>
        <p className="text-gray-400 text-sm mb-4">April 20, 2026 &middot; Dental Care &middot; 7 min read</p>

        <AffiliateDisclosure />

        <div className="prose prose-gray max-w-none text-[#1A1A1A] leading-relaxed space-y-6">

          <p>
            Most dog owners know they should be brushing their dog&apos;s teeth. Almost none of us actually do it. According to AVMA estimates, more than 80 percent of dogs show signs of periodontal disease by age three &mdash; and the cost of professional dental cleanings (often $500 to $1,500 with anesthesia) is a direct consequence of skipping the two-minute daily brush.
          </p>
          <p>
            The good news is that brushing your dog&apos;s teeth is genuinely simple once you and your dog get used to it. The hard part isn&apos;t the technique &mdash; it&apos;s building the habit on both sides of the leash. Here&apos;s the exact process I&apos;ve used to get every dog I&apos;ve raised comfortable with toothbrushing, and what to do if you&apos;re starting with an adult dog who&apos;s never had it done.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-display">Why It Matters</h2>

          <p>
            Periodontal disease isn&apos;t just bad breath. The bacteria that cause it enter the bloodstream through inflamed gums and have been linked to heart disease, kidney damage, and liver problems. Per AVMA data, more than 80 percent of dogs over age three have some form of dental disease, making it the single most common health condition in adult dogs.
          </p>
          <p>
            Daily plaque becomes tartar within 24 to 72 hours. Once tartar mineralizes onto the tooth, brushing alone can&apos;t remove it &mdash; that requires a professional cleaning under anesthesia. The whole point of regular brushing is interrupting that cycle before tartar forms in the first place.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-display">What You Need</h2>

          <p>
            The supply list is short and inexpensive:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Enzymatic dog toothpaste.</strong> The enzymes break down plaque even when you can&apos;t reach every surface, and dogs find the flavors (poultry, beef, peanut butter) actually appealing. <strong>Critical: never use human toothpaste.</strong> Most human toothpastes contain xylitol, an artificial sweetener that is acutely toxic to dogs &mdash; even small amounts can cause life-threatening hypoglycemia and liver failure. Also avoid fluoride toothpastes, which dogs swallow.</li>
            <li><strong>A finger brush or dual-head dog toothbrush.</strong> Finger brushes (silicone caps that fit over your index finger) are the easiest starting tool because they let you feel what you&apos;re doing. Dual-head brushes have a small bristle head for front teeth and a larger head for molars.</li>
            <li><strong>A treat your dog loves.</strong> The session ends with a high-value reward every single time. This is non-negotiable for building the habit.</li>
          </ul>
          <p>
            For a curated list of the dental products I actually recommend, browse our <Link href="/products/dog-dental" className="text-[#C4704B] hover:underline font-semibold">best dog dental care products guide</Link>. For the vet-supply side of the catalog &mdash; chlorhexidine rinses, dental gels, and the brushes most groomers actually use &mdash; <AffiliateInlineLink partner={REVIVAL} linkKey="dentalDog" postSlug={POST_SLUG}>Revival Animal Health&apos;s dental category</AffiliateInlineLink> stocks the professional-grade options.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-display">Step-by-Step: The First Session</h2>

          <p>
            For your dog&apos;s first encounter with a toothbrush, the goal is not to brush. The goal is to make this a positive experience so the next session is easier. Here&apos;s what session one looks like:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Sit on the floor with your dog calmly beside you. Don&apos;t loom over them.</li>
            <li>Put a small dab of enzymatic toothpaste on your finger. Let your dog lick it off. The flavor sells itself &mdash; most dogs love it.</li>
            <li>Once they&apos;re into it, put another dab on your finger and gently lift their lip. Rub it on a single canine tooth (the long pointy ones in front).</li>
            <li>Stop. Treat. End the session on a positive note.</li>
          </ol>
          <p>
            That&apos;s it. The whole interaction takes 90 seconds. You&apos;re not trying to clean teeth yet &mdash; you&apos;re building the association: lip-lift means tasty thing happens.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-display">Building the Routine: Week-by-Week</h2>

          <p>
            <strong>Week 1:</strong> Daily 90-second sessions. Toothpaste on finger only. Touch a few teeth without brushing motion. End with treat.
          </p>
          <p>
            <strong>Week 2:</strong> Introduce the finger brush. Same approach &mdash; let them lick paste off it first, then gently swipe two or three teeth. Front teeth only, no back molars yet. Always end with treat.
          </p>
          <p>
            <strong>Week 3:</strong> Move to a soft-bristled dog toothbrush if you&apos;re using one. Brush the outer surface of the front teeth with small circular motions for about 15 seconds. Treat.
          </p>
          <p>
            <strong>Week 4 onward:</strong> Add the molars (the big back teeth where most tartar builds up). Brush the outer surfaces only &mdash; you don&apos;t need to reach the inside surfaces because the tongue keeps them relatively clean. Aim for 30 to 60 seconds total per session. The outer surfaces of the upper canines and back molars are where 80 percent of dental disease starts &mdash; focus your time there.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-display">How Often Brushing Actually Needs to Happen</h2>

          <p>
            Veterinary dental specialists recommend daily brushing as the gold standard. In the real world, that&apos;s a tough ask for most owners &mdash; and dogs. The realistic threshold for meaningful benefit is 3 to 4 times per week. Below twice a week, you&apos;re mostly just going through the motions without much measurable impact on plaque accumulation.
          </p>
          <p>
            Pick a consistent time of day &mdash; right before bed works well for most households &mdash; and tie it to an existing routine. Brushing immediately after the last potty break of the night turns it into part of the bedtime ritual instead of a standalone task you&apos;ll forget.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-display">When to Skip Brushing</h2>

          <p>
            Stop brushing and call your vet if you see any of these:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bleeding from the gums during normal brushing pressure (a small amount the first few sessions is okay; ongoing bleeding is not)</li>
            <li>Visible swelling along the gumline</li>
            <li>Loose or wobbly teeth</li>
            <li>Pus or foul-smelling discharge near the gums</li>
            <li>Your dog flinching or yelping when you touch a specific tooth</li>
          </ul>
          <p>
            These are signs of advanced periodontal disease that needs professional attention. Brushing aggressively at this stage causes pain and doesn&apos;t fix the underlying issue. Get the cleaning done first, then resume home brushing once your dog has healed.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-display">Alternatives When Brushing Isn&apos;t Working</h2>

          <p>
            Some dogs &mdash; particularly rescues with mouth trauma history, or fear-aggressive dogs &mdash; will never tolerate brushing. That&apos;s okay. You have backup options:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>VOHC-approved dental chews</strong> (Greenies, Virbac C.E.T. Veggiedent) carry the Veterinary Oral Health Council seal, which means there&apos;s real efficacy data behind them.</li>
            <li><strong>Water additives</strong> like Healthymouth or TropiClean Fresh Breath are nearly invisible to your dog &mdash; you just add them to the water bowl.</li>
            <li><strong>Dental wipes</strong> are an in-between option for dogs who tolerate finger contact but not a brush.</li>
            <li><strong>Annual professional cleanings</strong> become non-negotiable if home care isn&apos;t happening. Skipping them risks expensive extractions later.</li>
          </ul>
          <p>
            None of these match daily brushing for plaque control, but they&apos;re meaningfully better than nothing.
          </p>

          <h2 className="text-2xl font-bold text-[#1A1A1A] mt-10 mb-4 font-display">Final Thoughts</h2>

          <p>
            The dogs whose owners brush their teeth regularly almost never need expensive dental work. The dogs whose owners don&apos;t are the ones racking up $1,500 cleaning bills and losing teeth at age seven. Two minutes a day, 3 to 4 times a week. That&apos;s the entire ask, and it pays back massively over your dog&apos;s lifetime.
          </p>
          <p>
            Start slow, treat generously, and be patient. If you&apos;re building these habits in with a brand-new puppy, our <Link href="/products/puppy-essentials" className="text-[#C4704B] hover:underline font-semibold">puppy essentials checklist</Link> covers the rest of the gear that should land at your house in the first month. The earlier you start, the easier the lifetime habit becomes.
          </p>

          <AffiliateCallout
            partner={REVIVAL}
            linkKey="catDental"
            postSlug={POST_SLUG}
            variant="footer"
            heading="Got a Cat Too? Revival Stocks Feline Dental Care"
            body="Many dog households also have a cat &mdash; and feline dental disease is even more common than canine. Revival's cat-specific dental line carries the toothpastes, finger brushes, and water additives that a typical pet store skips. Worth a look while you're already on a dental kick."
            ctaLabel="Browse Cat Dental at Revival"
          />

        </div>
      </article>
    </>
  );
}
