import Link from "next/link";
import BrandName from "@/components/BrandName";
import { blogPosts, type BlogPost } from "@/data/blog-posts";
import AffiliateBanner from "@/components/affiliate/AffiliateBanner";
import PartnerCard from "@/components/affiliate/PartnerCard";
import { REVIVAL } from "@/data/affiliates/revival";
import type { Metadata } from "next";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Blog — Dog Care Tips & Product Reviews | BabyMyDog",
  description: "Expert tips, product reviews, and breed guides from a retired AKC breeder and dog lover.",
  alternates: { canonical: "https://www.babymydog.com/blog" },
};

const postImages: Record<string, string> = {
  "best-bed-for-great-dane": "/images/best-bed-for-great-dane.jpg",
  "best-calming-treats-for-dogs-with-anxiety": "/images/best-calming-treats-for-dogs-with-anxiety.jpg",
  "best-crate-for-husky-puppy": "/images/best-crate-for-husky-puppy.jpg",
  "best-dog-bed-for-corgi": "/images/best-dog-bed-for-corgi.jpg",
  "best-dog-beds-for-large-breeds": "/images/dog-relaxing-premium-gray-bed-with-plants.jpg",
  "best-dog-crate-for-puppy-training": "/images/boston-terrier-puppy-blue-eyes-close-up.jpg",
  "best-dog-food-for-allergies": "/images/best-dog-food-for-allergies.jpg",
  "best-dog-food-for-beagle": "/images/best-dog-food-for-beagle.jpg",
  "best-dog-food-for-english-bulldog": "/images/best-dog-food-for-english-bulldog.jpg",
  "best-dog-food-for-poodle": "/images/best-dog-food-for-poodle.jpg",
  "best-dog-food-for-puppies": "/images/golden-retriever-puppies-in-red-wagon.jpg",
  "best-dog-food-for-senior-dogs": "/images/best-dog-food-for-senior-dogs.jpg",
  "best-dog-food-for-sensitive-stomach": "/images/chocolate-lab-licking-lips-hungry.jpg",
  "best-dog-food-for-yorkshire-terrier": "/images/best-dog-food-for-yorkshire-terrier.jpg",
  "best-dog-harness-for-dogs-that-pull": "/images/goldendoodle-wearing-red-harness-and-leash.jpg",
  "best-dog-toys-for-teething-puppies": "/images/best-dog-toys-for-teething-puppies.jpg",
  "best-gps-tracker-for-dogs": "/images/woman-hiking-with-dog-ocean-cliffs.jpg",
  "best-grooming-tools-for-goldendoodle": "/images/best-grooming-tools-for-goldendoodle.jpg",
  "best-harness-for-dachshund": "/images/best-harness-for-dachshund.jpg",
  "best-harness-for-german-shepherd": "/images/best-harness-for-german-shepherd.jpg",
  "best-slow-feeder-for-labs": "/images/best-slow-feeder-for-labs.jpg",
  "best-supplements-for-rottweiler": "/images/best-supplements-for-rottweiler.jpg",
  "best-toys-for-australian-shepherd": "/images/best-toys-for-australian-shepherd.jpg",
  "best-toys-for-labrador-retriever": "/images/best-toys-for-labrador-retriever.jpg",
  "blue-buffalo-vs-purina-pro-plan": "/images/blue-buffalo-vs-purina-pro-plan.jpg",
  "choose-right-dog-food": "/images/border-collie-looking-at-food-bowl-kibble.jpg",
  "dog-car-sickness-solutions": "/images/dog-car-sickness-solutions.jpg",
  "dog-grooming-at-home": "/images/white-dog-getting-groomed-with-scissors.jpg",
  "dog-joint-supplements-do-they-work": "/images/english-bulldog-at-vet-checkup.jpg",
  "english-bulldog-care-guide": "/images/english-bulldog-laying-down-resting.jpg",
  "how-often-should-i-bathe-my-dog": "/images/poodle-professional-grooming-salon.jpg",
  "how-to-brush-dogs-teeth": "/images/how-to-brush-dogs-teeth.jpg",
  "how-to-choose-dog-breeder": "/images/vet-examining-english-bulldog-ear.jpg",
  "how-to-measure-dog-for-harness": "/images/how-to-measure-dog-for-harness.jpg",
  "how-to-stop-dog-from-pulling-on-leash": "/images/english-springer-spaniel-holding-leash-field.jpg",
  "how-to-trim-dog-nails": "/images/how-to-trim-dog-nails.jpg",
  "indestructible-dog-toys": "/images/golden-retriever-with-stuffed-toy-grass.jpg",
  "kong-classic-vs-kong-extreme": "/images/kong-classic-vs-kong-extreme.jpg",
  "new-puppy-checklist": "/images/golden-retriever-puppies-in-a-row.jpg",
  "orthopedic-vs-standard-dog-bed": "/images/orthopedic-vs-standard-dog-bed.jpg",
  "signs-dog-needs-better-bed": "/images/pug-snuggled-in-patterned-dog-bed.jpg",
  "winter-dog-care-tips": "/images/poodle-wearing-red-coat-boots-snow.jpg",
};

// Parse "April 21, 2026" → Date for sorting. Falls back to 0 if
// malformed so a bad date doesn't crash the sort.
function parseDate(s: string): number {
  const t = Date.parse(s);
  return Number.isFinite(t) ? t : 0;
}

// Sort newest first so the hub self-maintains as posts are added.
const sorted = [...blogPosts].sort((a, b) => parseDate(b.date) - parseDate(a.date));
const featured: BlogPost = sorted[0];
const recentPair: BlogPost[] = sorted.slice(1, 3);
const earlier: BlogPost[] = sorted.slice(3);

// Light cross-site promo — BabyMyDog (product recs) + BarkSeeker
// (directory) are sister sites in the same pet network.
const networkPosts = [
  {
    url: "https://www.barkseeker.com/blog/how-to-find-good-dog-groomer",
    title: "How to Find a Good Dog Groomer",
    excerpt: "What to look for in a groomer — certifications, setup, red flags, and where to find reputable options near you.",
    tag: "Grooming",
  },
  {
    url: "https://www.barkseeker.com/blog/how-to-find-good-veterinarian",
    title: "How to Find a Good Veterinarian",
    excerpt: "AAHA accreditation, what to ask on the first visit, and how to evaluate the vet you already have.",
    tag: "Vets",
  },
  {
    url: "https://www.barkseeker.com",
    title: "Find Groomers, Vets &amp; Parks Near You",
    excerpt: "BarkSeeker is our directory of 32K+ groomers, vets, and dog parks across the US. Free to search.",
    tag: "Directory",
  },
];

function PostCard({ post, compact = false }: { post: BlogPost; compact?: boolean }) {
  const hasImage = !!postImages[post.slug];
  return (
    <Link href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform flex flex-col" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
      {hasImage && (
        <div className="aspect-[16/9] overflow-hidden">
          <img src={postImages[post.slug]} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className={compact ? "p-5" : "p-6"}>
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-2.5 py-0.5 rounded-full">{post.category}</span>
          <span className="text-[#1A1A1A]/30 text-xs">{post.date}</span>
        </div>
        <h2 className={`font-bold text-[#1A1A1A] group-hover:text-[#C4704B] transition leading-snug ${compact ? "text-base" : "text-lg"}`}>{post.title}</h2>
        <p className={`text-[#1A1A1A]/50 mt-2 line-clamp-2 ${compact ? "text-xs" : "text-sm"}`}>{post.description}</p>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        <div className="mb-14">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">The <BrandName /> Blog</h1>
          <p className="text-[#1A1A1A]/50 text-lg max-w-2xl">Expert tips, product reviews, and breed guides from a retired AKC breeder and dog lover.</p>
        </div>

        {/* Recently Published label */}
        <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
          <h2 className="text-xl font-bold text-[#1A1A1A]">
            <span aria-hidden="true">✨ </span>Recently Published
          </h2>
          <span className="text-sm text-[#1A1A1A]/40">{Math.min(3, sorted.length)} newest posts</span>
        </div>

        {/* Featured post (full-width split card) */}
        <Link href={`/blog/${featured.slug}`} className="group block bg-white rounded-2xl overflow-hidden mb-6 hover:scale-[1.01] transition-transform" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
              {postImages[featured.slug] ? (
                <img src={postImages[featured.slug]} alt={featured.title} loading="eager" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full" style={{ background: featured.gradient }} />
              )}
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs font-bold text-[#C4704B] bg-[#C4704B]/10 px-2.5 py-0.5 rounded-full">{featured.category}</span>
                <span className="text-[#1A1A1A]/30 text-xs">{featured.date} &middot; {featured.readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] group-hover:text-[#C4704B] transition leading-tight">{featured.title}</h3>
              <p className="text-[#1A1A1A]/50 mt-3 leading-relaxed line-clamp-3">{featured.description}</p>
              <p className="text-[#C4704B] text-sm font-semibold mt-4 inline-flex items-center gap-1">
                Read More <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
              </p>
            </div>
          </div>
        </Link>

        {/* #2 and #3 newest posts */}
        {recentPair.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {recentPair.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        )}

        {/* Sponsored banner — Revival Animal Health */}
        <div className="my-10">
          <div className="hidden md:block">
            <AffiliateBanner partner={REVIVAL} bannerKey="evergreen728" postSlug="blog-hub" />
          </div>
          <div className="md:hidden">
            <AffiliateBanner partner={REVIVAL} bannerKey="evergreen300" postSlug="blog-hub" />
          </div>
        </div>

        {/* Earlier posts */}
        {earlier.length > 0 && (
          <>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Earlier Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {earlier.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </>
        )}

        {/* Recommended Partners */}
        <section className="mt-20">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-[#1A1A1A]">Recommended Partners</h2>
            <p className="text-sm text-[#1A1A1A]/50 mt-1">Trusted suppliers we use ourselves and recommend to fellow dog owners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PartnerCard
              partner={REVIVAL}
              tagline="Vet-Grade Supplies Since 1987"
              description="From joint supplements to vaccines, dental care, and grooming — Revival has the supplies vets and breeders trust. Free shipping over $149 and $10 off for first-time customers."
              primary={{ label: "Shop Joint Care", linkKey: "jointCare" }}
              secondary={{ label: "Get $10 Off First Order", linkKey: "discount10Off" }}
            />
          </div>
        </section>

        {/* Cross-site — BarkSeeker network */}
        <section className="mt-20">
          <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
            <h2 className="text-xl font-bold text-[#1A1A1A]">More from our network</h2>
          </div>
          <p className="text-sm text-[#1A1A1A]/50 mb-6">BabyMyDog covers products. <a href="https://www.barkseeker.com" className="text-[#C4704B] hover:underline">BarkSeeker</a> is our sister directory for finding groomers, vets, and dog parks near you.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {networkPosts.map((p) => (
              <a key={p.url} href={p.url} className="group bg-white rounded-2xl p-5 hover:scale-[1.02] transition-transform flex flex-col" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C4704B] mb-2">{p.tag} <span aria-hidden="true">↗</span></span>
                <h3 className="font-bold text-[#1A1A1A] leading-snug group-hover:text-[#C4704B] transition" dangerouslySetInnerHTML={{ __html: p.title }} />
                <p className="text-[#1A1A1A]/50 text-xs mt-2 leading-relaxed">{p.excerpt}</p>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
