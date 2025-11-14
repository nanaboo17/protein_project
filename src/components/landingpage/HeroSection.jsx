import React from "react";
import heroImg from "../../assets/landing_page/coba.png";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-visible w-full flex flex-col md:flex-row items-center justify-between 
                 px-10 md:px-24 py-20 bg-[#f5efe5] 
                 bg-[url('../../assets/landing_page/background-hero.png')] bg-cover bg-center"
    >
      {/* Left Text Section */}
      <div className="w-full md:w-full">
        <h1 className="text-[38px] md:text-[47px] xl:text-[55px] font-bold leading-tight text-[#4D6D8E]">
          Inspiring Future Generations
          <br />
          through <span className="text-[#F9A22E]">Education</span> and{" "}
          <span className="text-[#F9A22E]">Values</span>
        </h1>

        <p className="text-[#4D6D8E] text-[16px] md:text-[18px] mt-6 leading-relaxed max-w-[85%]">
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
          className="w-[450px]  object-contain"
          alt="Happy children learning"
        />
      </div>
    </section>
  );
}
