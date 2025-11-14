import React from "react";
import aboutBanner from "../../assets/about_page/about-banner.png";

export default function AboutBanner() {
  return (
    <section className="relative w-full h-[340px] overflow-hidden">
      {/* Background image */}
      <img
        src={aboutBanner}
        alt="About us background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
      </div>
    </section>
  );
}
