import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/landingpage/HeroSection";
import AboutSection from "./components/landingpage/AboutSection";
import ProgramsSection from "./components/landingpage/ProgramsSection";
import WhyChooseUs from "./components/landingpage/WhyChooseUs";
import TestimonialsSection from "./components/landingpage/TestimonialsSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  );
};

export default App;
