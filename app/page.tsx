import Hero from "@/components/home/Hero";
import Topics from "@/components/home/Topics";
import Stats from "@/components/home/Stats";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import AboutSection from "@/components/home/AboutSection";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Topics />
      <Stats />
      <FeaturedPosts />
      <AboutSection />
      <CTA />
    </>
  );
}