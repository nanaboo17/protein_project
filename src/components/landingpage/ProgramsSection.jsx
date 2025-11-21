import React from "react";
import { useNavigate } from "react-router-dom";
import preschoolImg from "../../assets/landing_page/preschool.png"; // replace with your image
import courseImg from "../../assets/landing_page/course.png"; // replace with your image

export default function ProgramsSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#EFF5F7] py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Decorative background images */}
      <img
        src="/src/assets/left.png" // optional decoration (top right)
        alt=""
        className="absolute top-10 left-0 w-32 opacity-90 hidden md:block"
      />

      {/* Title and Description */}
      <div className="text-center mb-14">
        <h2 className="text-[#1E3E73] text-[45px] md:text-4xl font-bold">
          Our Programmes
        </h2>
        <p className="text-[#35507A] text-[18px] mt-3 max-w-2xl mx-auto leading-relaxed">
          Comprehensive educational programs designed to cultivate knowledge,
          character, and excellence.
        </p>
      </div>
      <img
        src="/src/assets/airship.png"
        alt=""
        className="absolute top-10 right-0 w-32 opacity-90 hidden md:block"
      />

      {/* Program Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[45%] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <img
            src={preschoolImg}
            alt="Khadijah Islamic Preschool"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-[#1E3E73] text-xl font-bold mb-3">
              Khadijah Islamic Preschool
            </h3>
            <p className="text-[#35507A] text-[15px] leading-relaxed mb-6">
              At Khadijah Islamic Preschool, we combine Islamic values with
              modern teaching methods to create a joyful and secure learning
              environment. Our focus is on building strong foundations in
              character, knowledge, and creativity, ensuring every child is
              prepared for the next stage of their educational journey.
            </p>
            <button
              onClick={() => navigate("programs/preschool")}
              className="bg-[#FDA133] hover:bg-[#e8911e] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md"
            >
              Explore Preschool
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[45%] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <img
            src={courseImg}
            alt="Bimbel & Kursus Rumah Sukses"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-[#1E3E73] text-xl font-bold mb-3">
              Bimbel & Kursus Rumah Sukses
            </h3>
            <p className="text-[#35507A] text-[15px] leading-relaxed mb-6">
              Bimbel Rumah Sukses provides structured tutoring and enrichment
              courses that strengthen core subjects while fostering confidence
              and discipline. With dedicated teachers and interactive learning
              methods, we help students achieve academic excellence and unlock
              their full potential.
            </p>
            <button
              onClick={() => navigate("programs/bimbel")}
              className="bg-[#FDA133] hover:bg-[#e8911e] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md"
            >
              Explore Course
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
