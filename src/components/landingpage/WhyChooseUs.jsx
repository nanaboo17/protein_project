import React from "react";
import starImg from "../../assets/landing_page/star.png";
import programs from "../../assets/landing_page/programs.png";
import educators from "../../assets/landing_page/educators.png";
import excellence from "../../assets/landing_page/excellence.png";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-white mb-40 py-20 px-6 md:px-20 text-center overflow-hidden">
      {/* Decorative shooting star */}
      <img
        src={starImg}
        alt=""
        className="absolute top-10 left-10 w-[255px] opacity-90"
      />

      {/* Title */}
      <h2 className="text-[#1E3E73] text-3xl md:text-4xl font-bold mb-3">
        Why Choose Us
      </h2>

      {/* Subtitle */}
      <p className="text-[#35507A] text-[16px] max-w-3xl mx-auto leading-relaxed mb-16">
        Yayasan Pendidikan dan Pelatihan Rumah Sukses provides preschool and
        learning courses that nurture children’s potential, build strong
        character, and inspire a lifelong love of learning.
      </p>

      {/* Feature Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#F9A22E] w-[197px] h-[197px] rounded-full flex items-center justify-center mb-6 shadow-md">
            <img
              src={programs}
              alt="Programs"
              className="w-[110px] h-[110px]"
            />
          </div>
          <h3 className="text-[#1E3E73] font-extrabold text-[20px] mb-2">
            Comprehensive Programs
          </h3>
          <p className="text-[#35507A] text-[18px] leading-relaxed max-w-xs">
            From Preschool to Learning Courses, we offer structured and engaging
            programs tailored to every stage of a child’s development.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#F9A22E] w-[197px] h-[197px] rounded-full flex items-center justify-center mb-6 shadow-md">
            <img
              src={educators}
              alt="Educators"
              className="w-[110px] h-[110px]"
            />
          </div>
          <h3 className="text-[#1E3E73] font-extrabold text-[20px] mb-2">
            Qualified Educators
          </h3>
          <p className="text-[#35507A] text-[18px] leading-relaxed max-w-xs">
            Our dedicated teachers are trained, experienced, and passionate
            about guiding children to reach their fullest potential.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#F9A22E] w-[197px] h-[197px] rounded-full flex items-center justify-center mb-6 shadow-md">
            <img
              src={excellence}
              alt="Excellence"
              className="w-[110px] h-[110px]"
            />
          </div>
          <h3 className="text-[#1E3E73] font-extrabold text-[20px] mb-2">
            Proven Excellence
          </h3>
          <p className="text-[#35507A] text-[18px] leading-relaxed max-w-xs">
            Trusted by families in Sorong, Papua, our programs have helped
            children build strong academic foundations and valuable life skills.
          </p>
        </div>
      </div>
    </section>
  );
}
