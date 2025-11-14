import React from "react";
import TitleSection from "./titleSection";
import AboutIntroSection from "./introSection";
import VisionMissionSection from "./MissionPage";
import ObjectivesSection from "./ObjectiveSection";
import BenefitsSection from "./BenefitsSection";
import FAQSection from "./FAQSection";
import ContactSection from "../landingpage/ContactSection";
import FooterBar from "../landingpage/Footer";

export default function AboutPage() {
  return (
    <div>
      <TitleSection />
      <AboutIntroSection />
      <VisionMissionSection />
      <ObjectivesSection />
      <BenefitsSection />
      <FAQSection />
      <ContactSection />
      <FooterBar />
      {/* Add more about-us components here later */}
    </div>
  );
}
