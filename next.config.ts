import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Renamed product category slugs — preserve SEO equity on old URLs.
      // Destinations updated to /products after the /best → /products migration
      // so these resolve in a single hop instead of chaining through /best.
      { source: "/best/toys-for-chewers", destination: "/products/toys-for-heavy-chewers", permanent: true },
      { source: "/best/fetch-toys", destination: "/products/toys-for-fetch", permanent: true },
      // /best → /products migration (2026-04-26). Specific slug rewrites above
      // must come before these catch-alls so they match first.
      { source: "/best", destination: "/products", permanent: true },
      { source: "/best/:slug*", destination: "/products/:slug*", permanent: true },
      // Canonicalize externally-linked blog slugs to existing canonical posts.
      { source: "/blog/how-to-stop-dog-pulling-on-leash", destination: "/blog/how-to-stop-dog-from-pulling-on-leash", permanent: true },
      { source: "/blog/dog-crate-training-guide", destination: "/blog/how-to-crate-train-puppy", permanent: true },
      // Canonicalize apex → www with 308 (Google AdSense ads.txt crawler does not reliably follow 307).
      { source: "/:path*", has: [{ type: "host", value: "babymydog.com" }], destination: "https://www.babymydog.com/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
