import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Renamed product category slugs — preserve SEO equity on old URLs.
      { source: "/best/toys-for-chewers", destination: "/best/toys-for-heavy-chewers", permanent: true },
      { source: "/best/fetch-toys", destination: "/best/toys-for-fetch", permanent: true },
    ];
  },
};

export default nextConfig;
