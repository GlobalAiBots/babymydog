import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9F0",
        rose: "#E8637A",
        "rose-dark": "#D4506A",
        plum: "#4A1942",
        "plum-light": "#6B2D63",
        gold: "#F0C75E",
        "gold-dark": "#D4AD3C",
        charcoal: "#2B2B2B",
        // Aliases
        water: "#E8637A",
        "water-light": "#D4506A",
        sunset: "#F0C75E",
        "sunset-dark": "#D4AD3C",
        forest: "#4A1942",
      },
    },
  },
  plugins: [],
};
export default config;
