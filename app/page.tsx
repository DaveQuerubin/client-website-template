
import Hero from "@/components/sections/Hero";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Home",
  description: siteConfig.hero.subtitle + " " + siteConfig.seo.description,
  openGraph: {
    title: siteConfig.hero.title,
    description: siteConfig.hero.subtitle,
    images: [siteConfig.hero.image],
  },
};

export default function Home() {
    return (
    <div className="container mx-auto">
      <Hero />
    </div>
  );
}
