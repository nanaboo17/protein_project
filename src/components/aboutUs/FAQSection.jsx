import React, { useState } from "react";

const faqs = [
  {
    question:
      "Will my child be ready for primary school after graduating from Khadijah Islamic Preschool?",
    answer:
      "Graduates of Khadijah Islamic Preschool are well-prepared to enter primary education. The program is designed to develop early literacy, numeracy, emotional maturity, and social adaptability. Through structured learning experiences and guided independence, students acquire the foundational skills and confidence necessary for a successful transition to the next stage of their academic journey.",
  },
  {
    question: "What subjects are offered in Bimbel & Kursus Rumah Sukses?",
    answer:
      "Bimbel & Kursus Rumah Sukses provides a comprehensive range of academic and skill-based programs, including Regular Tutoring (Mathematics, English, and Science), UTBK Preparation, Kedinasan Exam Preparation, English Course, English for Kids, Computer Course, and Reading and Writing Course. Each program is systematically structured to support students’ cognitive development and academic excellence.",
  },
  {
    question: "How do you measure student progress in the learning course?",
    answer:
      "Student progress is evaluated through periodic assessments, classroom participation, and performance-based evaluations. Instructors provide continuous feedback and progress reports to ensure that each learner’s academic development is monitored effectively. The assessment process aims to identify strengths and areas for improvement, enabling the formulation of targeted learning strategies.",
  },
  {
    question: "What is the teaching approach in both programs?",
    answer:
      "The teaching approach across all programs integrates student-centered learning with structured instructional methods. It emphasizes the development of critical thinking, creativity, and problem-solving abilities while maintaining academic rigor. Educators act as facilitators, providing guidance and fostering an environment that encourages curiosity, independence, and a lifelong passion for learning.",
  },
  {
    question: "What does a Montessori classroom feel or look like?",
    answer:
      "A Montessori classroom is characterized by a calm, orderly, and purposeful atmosphere. The environment is carefully prepared with hands-on learning materials that promote exploration, concentration, and independence. Each learning space is organized to support individualized progress, enabling children to learn at their own pace while cultivating confidence, discipline, and intrinsic motivation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-[#1E3E73] text-[45px] font-extrabold mb-8">FAQ</h2>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#70A6B2] rounded-3xl text-white cursor-pointer shadow-sm"
                onClick={() => toggleIndex(index)}
              >
                {/* Question row */}
                <div className="flex items-center gap-4 px-6 md:px-8 py-4 md:py-5">
                  {/* +/- icon circle */}
                  <div className="flex items-center justify-center">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300">
                      <span className="text-[#70A6B2] text-xl leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </div>

                  <p className="font-semibold text-sm md:text-base">
                    {item.question}
                  </p>
                </div>

                {/* Answer with smooth animation */}
                <div
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "max-h-64 md:max-h-72 opacity-100 pb-5 md:pb-6"
                        : "max-h-0 opacity-0 pb-0"
                    }
                  `}
                >
                  <p className="text-xs md:text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
