"use client";

import type { AffiliatePartner, AffiliateLinkKey } from "@/data/affiliates/revival";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface Props {
  partner: AffiliatePartner;
  linkKey: AffiliateLinkKey;
  postSlug: string;
  variant?: "hero" | "inline" | "footer";
  heading: string;
  body: string;
  ctaLabel: string;
}

export default function AffiliateCallout({
  partner,
  linkKey,
  postSlug,
  variant = "inline",
  heading,
  body,
  ctaLabel,
}: Props) {
  const href = partner.links[linkKey];
  const margin = variant === "hero" ? "my-8" : variant === "footer" ? "mt-10 mb-2" : "my-8";

  return (
    <aside
      className={`not-prose ${margin} rounded-2xl border border-[#C4704B]/20 bg-[#FFF9F0] p-6 md:p-7`}
    >
      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-2">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#C4704B]">
          Recommended Partner &middot; {partner.name}
        </p>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Affiliate Link</p>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2 leading-snug font-display">
        {heading}
      </h3>
      <p className="text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed mb-4">{body}</p>
      <a
        href={href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        onClick={() => {
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "affiliate_click", {
              partner: partner.id,
              link_type: `callout-${variant}`,
              post_slug: postSlug,
              destination: linkKey,
            });
          }
        }}
        className="inline-flex items-center gap-1.5 text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        style={{ background: "linear-gradient(135deg, #C4704B, #A85A3A)" }}
      >
        {ctaLabel}
        <span aria-hidden="true">&rarr;</span>
      </a>
    </aside>
  );
}
