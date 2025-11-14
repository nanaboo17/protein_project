import React from "react";

// LEFT collage image (everything baked in: photos + circles)
import collageImg from "../../../assets/bimbel_page/img-left.png";

// Bottom wave
import waveImg from "../../../assets/bimbel_page/wave.png";

export default function BimbelHeroSection() {
  return (
    <section className="relative w-full bg-white pt-16 md:pt-20 pb-0 overflow-hidden">
      {/* FULL-WIDTH FLEX LAYOUT */}
      <div className="w-full flex flex-col md:flex-row">
        {/* LEFT COLUMN — STICKS TO LEFT EDGE */}
        <div className="w-full md:w-1/2 flex justify-start pl-0 ">
          <img
            src={collageImg}
            alt="Collage"
            className="w-[800px] h-auto object-cover"
          />
        </div>

        {/* RIGHT COLUMN — CONTENT STAYS IN CONTAINER */}
        <div className="w-full md:w-1/2">
          <div className="max-w-xl md:ml-16 mt-10 md:mt-0 px-4 md:px-0">
            <h2 className="text-[#4D6D8E] text-3xl md:text-[34px] font-extrabold leading-snug">
              Regular Tutoring &amp;
              <br />
              Learning Course
              <br />
              <span className="text-[#194A81]">Rumah </span>
              <span className="text-[#D7233C]">Sukses</span>
            </h2>

            <p className="mt-5 text-[15px] md:text-[16px] leading-relaxed text-[#4A6284]">
              We are dedicated to supporting students through high quality
              tutoring and skill development programs. Our Learning Course is
              divided into Regular Tutoring (Bimbel) and Specialized Courses,
              designed to help children achieve academic excellence and develop
              lifelong skills.
            </p>
          </div>
        </div>
      </div>

      {/* WAVE FULL-WIDTH */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-16">
        <img src={waveImg} alt="Wave" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
}
