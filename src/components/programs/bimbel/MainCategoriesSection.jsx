import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ====== IMAGES (update these paths to your own files) ======
import mathImg from "../../../assets/bimbel_page/math.png";
import englishImg from "../../../assets/bimbel_page/english.png";
import scienceImg from "../../../assets/bimbel_page/science.png";
import utbkImg from "../../../assets/bimbel_page/utbk.png";
import kedinasanImg from "../../../assets/bimbel_page/kedinasan.png";

import literasiImg from "../../../assets/bimbel_page/literasi.png";
import kidsEnglishImg from "../../../assets/bimbel_page/english-kids.png";
import computerImg from "../../../assets/bimbel_page/computer.png";
import readingWritingImg from "../../../assets/bimbel_page/reading-writing.png";
// ==========================================================

export default function MainCategoriesSection() {
  const navigate = useNavigate();
  // ✅ plain JS useState
  const [activeTab, setActiveTab] = useState("bimbel"); // "bimbel" | "courses"

  const bimbelSubjects = [
    {
      title: "Mathematics",
      desc: "Comprehensive math tutoring for all grade levels",
      img: mathImg,
    },
    {
      title: "English",
      desc: "Focusing on grammar, vocabulary, reading, and writing skills",
      img: englishImg,
    },
    {
      title: "Science",
      desc: "Strengthen understanding of natural concepts through engaging methods",
      img: scienceImg,
    },
  ];

  const examPrograms = [
    {
      title: "UTBK-SNBT Preparation",
      desc: "Comprehensive guidance to boost university entrance exam readiness",
      img: utbkImg,
    },
    {
      title: "Kedinasan Exam Preparation",
      desc: "Focused training to succeed in competitive civil service exams.",
      img: kedinasanImg,
    },
  ];

  const coursePrograms = [
    {
      title: "Literasi Bahasa Indonesia",
      desc: "Indonesian Language Literacy empowers children to read, write, and understand Bahasa Indonesia with confidence and excitement.",
      img: literasiImg,
    },
    {
      title: "English for Kids",
      desc: "A fun and interactive program designed especially for children. It introduces English through games, songs, and activities.",
      img: kidsEnglishImg,
    },
    {
      title: "Computer Course",
      desc: "Essential computer literacy programs that introduce students to technology, digital tools, and basic programming skills.",
      img: computerImg,
    },
    {
      title: "Reading and Writing Course",
      desc: "A dedicated program to improve literacy, comprehension, and writing ability while building a strong foundation in language.",
      img: readingWritingImg,
    },
  ];

  const renderCard = (item) => (
    <div
      key={item.title}
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-44 md:h-48 object-cover"
      />
      <div className="px-6 py-5 flex flex-col flex-1">
        <h3 className="text-[#1E3E73] text-lg font-bold">{item.title}</h3>
        <p className="mt-2 text-[#5B6F8E] text-sm leading-relaxed flex-1">
          {item.desc}
        </p>
        <button
          onClick={() => navigate("/admissions/enroll")}
          className="mt-5 w-full bg-[#FDA133] text-white font-semibold py-2.5 rounded-[10px] text-sm"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-[#1E3E73] text-3xl md:text-4xl font-extrabold">
          Main Categories
        </h2>
        <div className="mt-5 h-[5px] w-[150px] bg-[#FDA133] mx-auto rounded-full" />

        {/* Tabs */}
        <div className="mt-8 flex justify-center space-x-10 text-[16px] md:text-[18px] font-semibold">
          <button
            className={`pb-2 border-b-4 transition-all ${
              activeTab === "bimbel"
                ? "border-[#F9A22E] text-[#1E3E73]"
                : "border-transparent text-[#7A8CA8]"
            }`}
            onClick={() => setActiveTab("bimbel")}
          >
            Bimbel (Tutoring)
          </button>
          <button
            className={`pb-2 border-b-4 transition-all ${
              activeTab === "courses"
                ? "border-[#F9A22E] text-[#1E3E73]"
                : "border-transparent text-[#7A8CA8]"
            }`}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </button>
        </div>

        {/* Content box */}
        <div className="mt-8 bg-[#EFF5F7] border border-[#D2E1F3] rounded-3xl px-4 md:px-10 py-10">
          {activeTab === "bimbel" ? (
            <>
              {/* Subjects Offered */}
              <h3 className="text-center text-[#1E3E73] text-xl md:text-2xl font-bold">
                Subjects Offered
              </h3>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {bimbelSubjects.map(renderCard)}
              </div>

              {/* Exam Prep */}
              <h3 className="mt-12 text-center text-[#1E3E73] text-xl md:text-2xl font-bold">
                Exam Preparation Programs
              </h3>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {examPrograms.map(renderCard)}
              </div>
            </>
          ) : (
            <>
              {/* Courses tab */}
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {coursePrograms.map(renderCard)}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
