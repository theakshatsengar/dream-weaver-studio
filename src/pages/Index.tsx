import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyMeSection from "@/components/WhyMeSection";
import WorkSection from "@/components/WorkSection";
import RecentBlogsSection from "@/components/RecentBlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyMeSection />
      <WorkSection />
      <RecentBlogsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
