import React from "react";
import TitleSection from "./titleSection";
import ContactSection from "../landingpage/ContactSection";
import FooterBar from "../landingpage/Footer";
import GallerySection from "./GallerySection";

export default function GalleryPage() {
  return (
    <div>
      <TitleSection />
      <GallerySection />
      <ContactSection />
      <FooterBar />
    </div>
  );
}
