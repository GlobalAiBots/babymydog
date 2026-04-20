import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Renamed product category slugs — preserve SEO equity on old URLs.
      { source: "/best/toys-for-chewers", destination: "/best/toys-for-heavy-chewers", permanent: true },
      { source: "/best/fetch-toys", destination: "/best/toys-for-fetch", permanent: true },
      // Canonicalize externally-linked blog slugs to existing canonical posts.
      { source: "/blog/how-to-stop-dog-pulling-on-leash", destination: "/blog/how-to-stop-dog-from-pulling-on-leash", permanent: true },
      { source: "/blog/dog-crate-training-guide", destination: "/blog/how-to-crate-train-puppy", permanent: true },
    ];
  },
};

export default nextConfig;
