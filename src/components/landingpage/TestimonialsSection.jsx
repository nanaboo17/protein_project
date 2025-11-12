import React from "react";
import { useState } from "react";
import waveBg from "../../assets/landing_page/wave.png";
import parent1 from "../../assets/landing_page/parent1.png";
import parent2 from "../../assets/landing_page/parent2.png";
import parent3 from "../../assets/landing_page/parent3.png";

import { Star, ChevronRight, ChevronLeft } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Adiratna R.",
      role: "Parent, Class of 2024 - Preschool",
      avatar: parent1,
      text: "The preschool’s diverse community and fun extracurricular programs have enriched my child’s early learning experience. They’ve made wonderful friends and developed new interests.",
    },
    {
      id: 2,
      name: "Puspita S.",
      role: "Parent, Class of 2023 - Learning Course",
      avatar: parent2,
      text: "The preschool’s diverse community and fun extracurricular programs have enriched my child’s early learning experience. They’ve made wonderful friends and developed new interests.",
    },
    {
      id: 3,
      name: "Ratna P.",
      role: "Parent, Class of 2024 - Preschool",
      avatar: parent3,
      text: "The preschool’s diverse community and fun extracurricular programs have enriched my child’s early learning experience. They’ve made wonderful friends and developed new interests.",
    },
    {
      id: 4,
      name: "Fahira M.",
      role: "Parent, Class of 2025 - Preschool",
      avatar: parent1,
      text: "My child loves going to school every day. The teachers are kind, caring, and professional.",
    },
    {
      id: 5,
      name: "Sinta A.",
      role: "Parent, Class of 2024 - Learning Course",
      avatar: parent2,
      text: "The programs are excellent! My child became more confident and creative thanks to Rumah Sukses.",
    },
    {
      id: 6,
      name: "Rani D.",
      role: "Parent, Class of 2023 - Preschool",
      avatar: parent3,
      text: "We’ve seen incredible growth in our child’s social and academic skills. Highly recommended!",
    },
  ];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="relative w-full bg-[#70A6B2] text-white pt-48 pb-24 ">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full -translate-y-[60%]">
        <img src={waveBg} alt="wave" className="w-full object-cover" />
      </div>

      {/* Section Heading */}
      <div className="relative z-10 text-center px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Parents Say</h2>
        <p className="text-[#E7F4F6] mt-3 max-w-2xl mx-auto leading-relaxed">
          Discover the experiences that have shaped our preschool & learning
          course community.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
            width: `${totalPages * 100}%`,
          }}
        >
          {/* Render pages (groups of 3) */}
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex-shrink-0 w-full flex justify-center gap-8 px-2"
            >
              {testimonials
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-white text-[#35507A] rounded-2xl shadow-md w-full md:w-[30%] p-8 flex flex-col items-center relative"
                  >
                    {/* Avatar */}
                    <div className="absolute -top-10 bg-white rounded-full p-2 shadow-md">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 rounded-full"
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mt-10 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#F9A22E] fill-[#F9A22E]"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm leading-relaxed mb-6 text-center">
                      {item.text}
                    </p>

                    {/* Name */}
                    <p className="font-semibold text-[#1E3E73]">{item.name}</p>
                    <p className="text-xs mt-1">{item.role}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`absolute left-4 md:left-0 top-1/2 transform -translate-y-1/2 bg-white text-[#1E3E73] rounded-full p-3 shadow-md hover:bg-[#F9A22E] hover:text-white transition ${
            currentPage === 0 ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`absolute right-4 md:right-0 top-1/2 transform -translate-y-1/2 bg-white text-[#1E3E73] rounded-full p-3 shadow-md hover:bg-[#F9A22E] hover:text-white transition ${
            currentPage === totalPages - 1
              ? "opacity-40 cursor-not-allowed"
              : ""
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
