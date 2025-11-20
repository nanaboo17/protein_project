import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProgramsSection from "./ProgramsSection";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import FooterBar from "./Footer";

export default function HomePage() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <ProgramsSection />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <TestimonialsSection />
      </div>
      <div>
        <ContactSection />
      </div>
      <div>
        <FooterBar />
      </div>
    </>
  );
}
