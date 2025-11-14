import React from "react";
import TitleSection from "../titleSection";
import ContactSection from "../../landingpage/ContactSection";
import FooterBar from "../../landingpage/Footer";
import BimbelIntroSection from "./IntroSection";
import MainCategoriesSection from "./MainCategoriesSection";

export default function BimbelProgramsPage() {
  return (
    <div>
      <TitleSection />
      <BimbelIntroSection />
      <MainCategoriesSection />
      <ContactSection />
      <FooterBar />
    </div>
  );
}
