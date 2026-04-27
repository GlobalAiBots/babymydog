"use client";

import { usePathname } from "next/navigation";
import { REVIVAL } from "@/data/affiliates/revival";
import AffiliateDisclosure from "./AffiliateDisclosure";
import AffiliateBanner from "./AffiliateBanner";

const COVERED_SLUGS = new Set([
  // Tier 1-3 (committed earlier)
  "dog-joint-supplements-do-they-work",
  "best-dog-food-for-senior-dogs",
  "winter-dog-care-tips",
  "best-supplements-for-rottweiler",
  "how-to-brush-dogs-teeth",
  "best-calming-treats-for-dogs-with-anxiety",
  "why-is-my-dog-scratching",
  "how-to-clean-dog-ears",
  "new-puppy-checklist",
  "best-dog-food-for-puppies",
  "dog-grooming-at-home",
  "how-often-should-i-bathe-my-dog",
  "best-dog-food-for-sensitive-stomach",
  "best-dog-beds-for-large-breeds",
  "how-much-exercise-does-my-dog-need",
  // Phase 1 promotions (default-footer → explicit inline)
  "orthopedic-vs-standard-dog-bed",
  "signs-dog-needs-better-bed",
  "best-bed-for-great-dane",
  "best-dog-bed-for-corgi",
  "best-harness-for-dachshund",
  "best-dog-food-for-allergies",
  "english-bulldog-care-guide",
  "best-dog-food-for-pit-bull",
  "how-to-stop-dog-from-barking",
  "dog-car-sickness-solutions",
  "best-dog-food-for-weight-loss",
  "how-to-trim-dog-nails",
  "best-grooming-tools-for-goldendoodle",
]);

export default function DefaultBlogPostAffiliateFooter() {
  const pathname = usePathname();
  if (!pathname || !pathname.startsWith("/blog/")) return null;
  const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
  if (!slug || COVERED_SLUGS.has(slug)) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 pb-12">
      <AffiliateDisclosure />
      <AffiliateBanner partner={REVIVAL} bannerKey="evergreen300" postSlug={slug} />
    </div>
  );
}
