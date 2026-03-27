import { Navbar } from "@/components/pickleball/Navbar";
import { HeroSection } from "@/components/pickleball/HeroSection";
import { ThreeProblemsSection } from "@/components/pickleball/ThreeProblemsSection";
import { ServicesSection } from "@/components/pickleball/ServicesSection";
import { CaseStudiesSection } from "@/components/pickleball/CaseStudiesSection";
import { GallerySection } from "@/components/pickleball/GallerySection";
import { EcosystemSection } from "@/components/pickleball/EcosystemSection";
import { ProcessSection } from "@/components/pickleball/ProcessSection";
import { WhoWeServeSection } from "@/components/pickleball/WhoWeServeSection";
import { TestimonialsSection } from "@/components/pickleball/TestimonialsSection";
import { FAQSection } from "@/components/pickleball/FAQSection";
import { FinalCTASection } from "@/components/pickleball/FinalCTASection";
import { MobileFixedCTA } from "@/components/pickleball/MobileFixedCTA";
import { Footer } from "@/components/pickleball/Footer";
import OurPartners from "@/components/pickleball/OurPartners";

const PickleballMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ThreeProblemsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <GallerySection />
      <EcosystemSection />
      <ProcessSection />
      <WhoWeServeSection />
      <TestimonialsSection />
      <OurPartners />
      <FAQSection />
      <FinalCTASection />
      <MobileFixedCTA />
      <Footer />
    </div>
  );
};

export default PickleballMarketing;
