import React from "react";
import TitleSection from "../titleSection";
import PreschoolProgramsSection from "./ProgramSection";
import CoreCurriculumSection from "./CurriculumSection";
import ContactSection from "../../landingpage/ContactSection";
import FooterBar from "../../landingpage/Footer";

export default function ProgramsPage() {
  return (
    <div>
      <TitleSection />
      <PreschoolProgramsSection />
      <CoreCurriculumSection />
      <ContactSection />
      <FooterBar />
    </div>
  );
}
