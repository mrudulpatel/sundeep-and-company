import About from "@/components/About";
import ContactSection from "@/components/ContactUsSection";
import Hero from "@/components/Hero";
import KeyServicesSection from "@/components/KeyServicesSection";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ProductSection />
      <KeyServicesSection />
      <ContactSection />
      <TestimonialSection />
    </div>
  );
}
