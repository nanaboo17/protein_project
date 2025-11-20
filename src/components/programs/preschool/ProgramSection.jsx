import React from "react";
import { useNavigate } from "react-router-dom";

// replace these imports with your own images
import playgroupImg from "../../../assets/preschool_page/playgroup.png";
import kgAImg from "../../../assets/preschool_page/kindergarten-a.png";
import kgBImg from "../../../assets/preschool_page/kindergarten-b.png";
import waveBottom from "../../../assets/preschool_page/wave.png";

export default function PreschoolProgramsSection() {
  const navigate = useNavigate();

  const goToEnroll = () => {
    navigate("/admissions/enroll");
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto bg-[#E9F3FB] border border-[#2A4E8A] rounded-3xl px-6 md:px-12 py-12">
        {/* Heading */}
        <h2 className="text-center text-[#1E3E73] text-3xl md:text-4xl font-extrabold">
          Khadijah Islamic Montessori Preschool
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-center text-[#35507A] text-[16px] md:text-[17px] leading-relaxed max-w-3xl mx-auto">
          We are committed to providing a nurturing and stimulating environment
          where children can grow academically, socially, and spiritually. Our
          programs are designed to instill Islamic values while fostering a love
          for learning.
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img
              src={playgroupImg}
              alt="Playgroup"
              className="w-full h-44 object-cover"
            />
            <div className="px-6 py-5 flex flex-col flex-1">
              <h3 className="text-[#1E3E73] text-lg font-bold">Playgroup</h3>
              <p className="mt-2 text-[#5B6F8E] text-sm leading-relaxed flex-1">
                For our youngest learners, focusing on social skills and basic
                concepts.
              </p>
              <button
                onClick={goToEnroll}
                className="mt-5 w-full bg-[#F9A22E] text-white font-semibold py-2.5 rounded-full text-sm"
              >
                Enroll Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img
              src={kgAImg}
              alt="Kindergarten A"
              className="w-full h-44 object-cover"
            />
            <div className="px-6 py-5 flex flex-col flex-1">
              <h3 className="text-[#1E3E73] text-lg font-bold">
                Kindergarten A
              </h3>
              <p className="mt-2 text-[#5B6F8E] text-sm leading-relaxed flex-1">
                Building foundational skills in literacy, numeracy, and Islamic
                studies.
              </p>
              <button
                onClick={goToEnroll}
                className="mt-5 w-full bg-[#F9A22E] text-white font-semibold py-2.5 rounded-full text-sm"
              >
                Enroll Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img
              src={kgBImg}
              alt="Kindergarten B"
              className="w-full h-44 object-cover"
            />
            <div className="px-6 py-5 flex flex-col flex-1">
              <h3 className="text-[#1E3E73] text-lg font-bold">
                Kindergarten B
              </h3>
              <p className="mt-2 text-[#5B6F8E] text-sm leading-relaxed flex-1">
                Preparing children for primary school with strong skills and
                character.
              </p>
              <button
                onClick={goToEnroll}
                className="mt-5 w-full bg-[#F9A22E] text-white font-semibold py-2.5 rounded-full text-sm"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width wave */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-10">
        <img
          src={waveBottom}
          alt="wave"
          className="w-full h-auto object-cover select-none pointer-events-none"
        />
      </div>
    </section>
  );
}
