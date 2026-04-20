import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dog Breeds A-Z — Care Guides & Product Picks | BabyMyDog",
  description: "Complete care guides for 50 popular dog breeds. Size, temperament, grooming needs, health issues, and the best products for each breed.",
  alternates: { canonical: "https://www.babymydog.com/breeds" },
};
export default function BreedsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
