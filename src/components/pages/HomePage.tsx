import { HeroSection } from "../home/HeroSection";
import { FeaturesSection } from "../home/FeaturesSection";
import { HowItWorksSection } from "../home/HowItWorksSection";
import { CtaSection } from "../home/CtaSection";
import { Footer } from "../Footer";

export function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
