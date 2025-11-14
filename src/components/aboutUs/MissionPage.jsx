import React from "react";
import { Target, Rocket } from "lucide-react";
import sunImg from "../../assets/about_page/sun.png";
import childImg from "../../assets/about_page/vision-child.png";
import kiteImg from "../../assets/about_page/kite.png";

export default function VisionMissionSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* LEFT: Title + cards */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-[#1E3E73] text-2xl md:text-3xl lg:text-4xl font-bold">
              Our Vision &amp; Mission
            </h2>

            <div className="mt-8 space-y-6">
              {/* Vision card */}
              <div className="relative pl-12 md:pl-16">
                {/* Icon circle */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1E3E73] flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="bg-white border border-[#D4E0F4] rounded-3xl shadow-sm px-6 py-5 md:px-8 md:py-6">
                  <h3 className="text-[#1E3E73] text-lg md:text-xl font-semibold mb-2">
                    Vision
                  </h3>
                  <p className="text-[#35507A] text-sm md:text-[15px] leading-relaxed">
                    To be a leading educational institution, recognized for its
                    commitment to academic excellence, innovation, and the
                    holistic development of students, preparing them to be
                    responsible global citizens and leaders in their chosen
                    fields.
                  </p>
                </div>
              </div>

              {/* Mission card */}
              <div className="relative pl-12 md:pl-16">
                {/* Icon circle */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1E3E73] flex items-center justify-center shadow-lg">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="bg-white border border-[#D4E0F4] rounded-3xl shadow-sm px-6 py-5 md:px-8 md:py-6">
                  <h3 className="text-[#1E3E73] text-lg md:text-xl font-semibold mb-2">
                    Mission
                  </h3>
                  <p className="text-[#35507A] text-sm md:text-[15px] leading-relaxed">
                    To provide a transformative educational experience that
                    fosters intellectual curiosity, critical thinking,
                    creativity, and ethical leadership, empowering students to
                    excel academically, contribute meaningfully to society, and
                    pursue their passions with purpose and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Sun + blob image */}
          <div className="flex-1 flex flex-col items-center lg:items-end relative">
            {/* Sun */}
            <img
              src={sunImg}
              alt="Sun doodle"
              className="w-20 md:w-24 mb-4 lg:mb-6 lg:mr-8 pointer-events-none select-none"
            />

            {/* Blob image */}
            <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-80 bg-[#FDE9C9] rounded-[40%] shadow-lg overflow-hidden lg:mr-4">
              <img
                src={childImg}
                alt="Happy child learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-left kite */}
      <img
        src={kiteImg}
        alt="Kite decoration"
        className="hidden md:block absolute -bottom-10 left-4 w-28 pointer-events-none select-none"
      />
    </section>
  );
}
