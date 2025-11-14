import React from "react";
import megaphoneImg from "../../assets/about_page/benefit-megaphone.png";
import studentImg from "../../assets/about_page/benefit-student.png";
import waveBottom from "../../assets/about_page/about-wave-bottom.png";

export default function BenefitsSection() {
  const benefits = [
    {
      number: 1,
      title: "Passionate & Qualified Educators",
      text: "Our dedicated teachers and instructors are not only certified but also truly care about the happiness and success of every student.",
    },
    {
      number: 2,
      title: "Quality Learning Methods & Materials",
      text: "We combine the proven Montessori philosophy with modern teaching approaches, supported by high-quality learning resources.",
    },
    {
      number: 3,
      title: "Future-Ready Preparation",
      text: "For young children, we provide a strong foundation for primary school. For course participants, we equip them with practical skills and knowledge to face real-world challenges.",
    },
    {
      number: 4,
      title: "Safe & Supportive Environment",
      text: "Our classrooms and learning spaces are designed to be safe, inspiring, and comfortable—encouraging every learner to enjoy the process of learning.",
    },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
      {/* Megaphone top-right */}
      <img
        src={megaphoneImg}
        alt="Megaphone decoration"
        className="hidden h-[252px] w-[252px] md:block absolute top-10 right-8 w-28 pointer-events-none select-none"
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading + intro */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[#194A81] text-2xl md:text-3xl lg:text-4xl font-bold">
            Benefits
          </h2>
          <div className="w-[75px] h-[3px] bg-[#FDA133] mt-2 mb-6 rounded-full mx-auto" />

          <p className="text-[#35507A] text-sm md:text-[15px] leading-relaxed mt-4">
            At Rumah Sukses Foundation, we believe that every child and learner
            deserves meaningful education that nurtures both their personal and
            academic growth. That’s why our Montessori Preschool and Learning
            Courses are carefully designed to support different stages of
            development.
          </p>
          <p className="text-[#35507A] text-sm md:text-[15px] mt-4">
            Here’s what you can expect
          </p>
        </div>

        {/* Benefits + student in 3 columns */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left column (1 & 2) */}
          <div className="space-y-8">
            {benefits.slice(0, 2).map((item) => (
              <div key={item.number} className="flex items-start gap-4">
                {/* Number circle */}
                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border-[6px] border-[#F9A22E] flex items-center justify-center">
                  <span className="text-[#F9A22E] text-2xl md:text-2xl font-bold">
                    {item.number}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-[#194A81] text-sm md:text-base font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#35507A] text-xs md:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center student image */}
          <div className="flex justify-center">
            <img
              src={studentImg}
              alt="Graduating student"
              className="w-40 md:w-52 lg:w-60 object-contain"
            />
          </div>

          {/* Right column (3 & 4) */}
          <div className="space-y-8">
            {benefits.slice(2).map((item) => (
              <div key={item.number} className="flex items-start gap-4">
                <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border-[6px] border-[#F9A22E] flex items-center justify-center">
                  <span className="text-[#F9A22E] text-2xl md:text-2xl font-bold">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-[#194A81] text-sm md:text-base font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#35507A] text-xs md:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <img
        src={waveBottom}
        alt="Wave decoration"
        className="w-full object-cover -mt-12"
      />
    </section>
  );
}
