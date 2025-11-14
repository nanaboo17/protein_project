import React from "react";
import TitleSection from "../titleSection";

import ContactSection from "../../landingpage/ContactSection";
import FooterBar from "../../landingpage/Footer";
import ContactFormSection from "./FormSection";
export default function ContactUsPage() {
  return (
    <div>
      <TitleSection />
      <ContactFormSection />
      <ContactSection />
      <FooterBar />
    </div>
  );
}
