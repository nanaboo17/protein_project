import React from "react";
import kiteImg from "../../assets/about_page/kite.png";
import obj1 from "../../assets/about_page/objective-1.png";
import obj2 from "../../assets/about_page/objective-2.png";
import obj3 from "../../assets/about_page/objective-3.png";
import obj4 from "../../assets/about_page/objective-4.png";

export default function ObjectivesSection() {
  return (
    <section className="relative w-full bg-[#E8F3F9] py-16 md:py-20 overflow-hidden">
      {/* Top-left kite decoration */}
      <img
        src={kiteImg}
        alt="Kite decoration"
        className="hidden md:block absolute -top-10 left-0 w-32 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[#1E3E73] text-[45px] md:text-3xl lg:text-4xl font-bold">
            Our Objectives
          </h2>
          <p className="text-[#35507A] text-sm md:text-base mt-2">
            At Yayasan Pendidikan & Pelatihan Rumah Sukses, we strive to:
          </p>
        </div>

        {/* Objectives grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white h-[365px] rounded-[24px] border border-[#D4E0F4] shadow-lg flex flex-col items-center justify-center text-center px-8 py-10">
            <img
              src={obj1}
              alt="Objective 1"
              className="w-[100px] h-[100px] mb-4"
            />
            <p className="text-[#35507A] text-[22px] md:text-[15px] leading-relaxed">
              Create a safe, joyful, and nurturing environment for every child.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white h-[365px] rounded-[24px] border border-[#D4E0F4] shadow-lg flex flex-col items-center justify-center text-center px-8 py-10">
            <img
              src={obj2}
              alt="Objective 2"
              className="w-[100px] h-[100px] mb-4"
            />
            <p className="text-[#35507A] text-[22px] md:text-[15px] leading-relaxed">
              Provide quality early childhood education through play-based and
              character-building programs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white h-[365px] rounded-[24px] border border-[#D4E0F4] shadow-lg flex flex-col items-center justify-center text-center px-8 py-10">
            <img
              src={obj3}
              alt="Objective 3"
              className="w-[100px] h-[100px] mb-4"
            />
            <p className="text-[#35507A] text-[22px] md:text-[15px] leading-relaxed">
              Support elementary students in strengthening their academic
              foundation through structured learning courses.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white h-[365px] rounded-[24px] border border-[#D4E0F4] shadow-lg flex flex-col items-center justify-center text-center px-8 py-10">
            <img
              src={obj4}
              alt="Objective 4"
              className="w-[100px] h-[100px] mb-4"
            />
            <p className="text-[#35507A] text-sm md:text-[15px] leading-relaxed">
              Foster creativity, independence, and lifelong learning across all
              programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
