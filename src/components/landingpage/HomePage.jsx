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
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
      <FooterBar />
    </>
  );
}
