import React from "react";
import heroImg from "../../assets/landing_page/coba.png"; // replace with your actual image

export default function HeroSection() {
  return (
    <section className="bg-color[#f5efe5] relative overflow-hidden w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-20 bg-[url('/src/assets/landing_page/background-hero.png')] bg-no-repeat bg-cover bg-center">
      {/* Left Text Section */}
      <div className="w-full md:w-full md:pr-0 pr-10 sm:pr-0 ">
        <h1 className="text-[52px] sm:text-[40px] md:text-[47px] font-bold leading-tight text-[#4D6D8E]">
          Inspiring Future Generations
          <br />
          through <span className="text-[#F9A22E]">Education</span> and{" "}
          <span className="text-[#F9A22E]">Values</span>
        </h1>

        <p className="text-[#4D6D8E] text-[18px] mt-6 sm:text-[16px] leading-relaxed max-w-[85%]">
          At Rumah Sukses Foundation, we believe every child deserves the
          opportunity to learn, grow, and succeed.
        </p>

        <button className="mt-10 bg-[#F9A22E] hover:bg-[#e8911e] text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300">
          Learn More
        </button>
      </div>

      {/* Right Image Section */}
      <div className="absolute right-0 bottom-0 hidden md:block">
        <img
          src={heroImg}
          className="w-[500px] md:hidden xl:w-[600px] object-contain"
          alt="Happy children learning"
        />
      </div>
    </section>
  );
}
