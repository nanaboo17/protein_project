import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Circle,
  CheckCircle,
  Upload,
  Copy,
} from "lucide-react";

import TermsModal from "./TermsModal";
import backgroundImg from "../../../assets/contact_page/background.png";
import treeImg from "../../../assets/contact_page/tree.png";
import hutImg from "../../../assets/contact_page/hut.png";

export default function EnrollPaymentSection({ onSubmit }) {
  const [isPreschoolOpen, setIsPreschoolOpen] = useState(true);
  const [isLearningOpen, setIsLearningOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [proofFileName, setProofFileName] = useState("");
  const [agree, setAgree] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const preschoolCourses = [
    {
      id: "playgroup",
      title: "Playgroup (Ages 2–3)",
      priceText: "$300 / Term",
      amount: 300,
      billing: "Month",
    },
    {
      id: "kg-a",
      title: "Kindergarten A (Ages 4–5)",
      priceText: "$450 / Term",
      amount: 450,
      billing: "Term",
    },
    {
      id: "kg-b",
      title: "Kindergarten B (Ages 5–6)",
      priceText: "$450 / Term",
      amount: 450,
      billing: "Term",
    },
  ];

  const learningCourses = [
    {
      id: "bimbel-regular",
      title: "Regular Tutoring (Bimbel)",
      priceText: "$200 / Month",
      amount: 200,
      billing: "Month",
    },
    {
      id: "exam-prep",
      title: "Exam Preparation Course",
      priceText: "$250 / Month",
      amount: 250,
      billing: "Month",
    },
  ];

  const bankInfo = {
    bank: "BCA",
    holder: "Rumah Sukses Foundation",
    number: "1234-5678-9012-3456",
  };

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleCopyNumber = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(bankInfo.number).catch(() => {});
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setProofFileName(file ? file.name : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCourse || !agree) return;

    if (onSubmit) {
      onSubmit({
        selectedCourse,
        proofFileName,
      });
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Decorations */}
      <img
        src={treeImg}
        alt=""
        className="hidden md:block absolute left-4 bottom-0 w-40 pointer-events-none select-none"
      />
      <img
        src={hutImg}
        alt=""
        className="hidden md:block absolute right-4 bottom-0 w-44 pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-[#1E3E73] text-3xl md:text-4xl font-extrabold">
          Enroll Your Kid
        </h2>
        <p className="mt-2 text-center text-[#4A6284] text-sm md:text-base">
          We&apos;ll contact you for more details.
        </p>

        {/* Select a course */}
        <h3 className="mt-8 text-center text-[#1E3E73] text-xl md:text-2xl font-extrabold">
          Select a Course:
        </h3>

        <form onSubmit={handleSubmit} className="mt-6 space-y-8">
          {/* Preschool Programs accordion */}
          <div className="border border-[#D4D4D4] rounded-md bg-white">
            <button
              type="button"
              onClick={() => setIsPreschoolOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#4A4A4A]"
            >
              <span>Preschool Programs</span>
              {isPreschoolOpen ? (
                <ChevronUp className="w-4 h-4 text-[#777]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#777]" />
              )}
            </button>

            {isPreschoolOpen && (
              <div className="border-t border-[#E3E3E3]">
                {preschoolCourses.map((course) => {
                  const isActive = selectedCourse?.id === course.id;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleSelectCourse(course)}
                      className={`w-full flex items-start gap-3 px-5 py-4 text-left text-sm border-b last:border-b-0 border-[#EAEAEA] ${
                        isActive ? "bg-[#F6FAFF]" : "bg-white"
                      }`}
                    >
                      <span className="mt-[3px]">
                        {isActive ? (
                          <CheckCircle className="w-4 h-4 text-[#1E3E73]" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#B5B5B5]" />
                        )}
                      </span>
                      <span>
                        <p className="font-semibold text-[#333]">
                          {course.title}
                        </p>
                        <p className="mt-1 text-[#666]">{course.priceText}</p>
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Learning Courses accordion */}
          <div className="border border-[#D4D4D4] rounded-md bg-white">
            <button
              type="button"
              onClick={() => setIsLearningOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#4A4A4A]"
            >
              <span>Learning Courses</span>
              {isLearningOpen ? (
                <ChevronUp className="w-4 h-4 text-[#777]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#777]" />
              )}
            </button>

            {isLearningOpen && (
              <div className="border-t border-[#E3E3E3]">
                {learningCourses.map((course) => {
                  const isActive = selectedCourse?.id === course.id;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleSelectCourse(course)}
                      className={`w-full flex items-start gap-3 px-5 py-4 text-left text-sm border-b last:border-b-0 border-[#EAEAEA] ${
                        isActive ? "bg-[#F6FAFF]" : "bg-white"
                      }`}
                    >
                      <span className="mt-[3px]">
                        {isActive ? (
                          <CheckCircle className="w-4 h-4 text-[#1E3E73]" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#B5B5B5]" />
                        )}
                      </span>
                      <span>
                        <p className="font-semibold text-[#333]">
                          {course.title}
                        </p>
                        <p className="mt-1 text-[#666]">{course.priceText}</p>
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Payment Information */}
          <h3 className="mt-4 text-center text-[#1E3E73] text-xl md:text-2xl font-extrabold">
            Payment Information:
          </h3>

          <div className="border border-[#D4D4D4] rounded-xl bg-white px-5 py-5 text-sm text-[#444] shadow-sm">
            {/* Selected course + amount */}
            <div className="flex items-start justify-between gap-4 border-b border-[#E6E6E6] pb-3 mb-4">
              <div>
                <p className="text-xs text-[#777]">You have selected:</p>
                <p className="mt-1 font-semibold text-[#1E3E73]">
                  {selectedCourse
                    ? selectedCourse.title.split("(")[0].trim()
                    : "-"}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#777]">Amount to pay:</p>
                <p className="mt-1 font-semibold text-[#1A7ED5]">
                  {selectedCourse
                    ? `$${selectedCourse.amount} / ${selectedCourse.billing}`
                    : "$0"}
                </p>
              </div>
            </div>

            {/* Instructions and bank info */}
            <p className="text-xs leading-relaxed mb-4">
              Please make a direct bank transfer to the account below. Use your
              full name as the payment reference.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Bank Name</span>
                <span className="font-semibold">{bankInfo.bank}</span>
              </div>
              <div className="flex justify-between">
                <span>Account Holder</span>
                <span className="font-semibold text-right">
                  {bankInfo.holder}
                </span>
              </div>
              <div className="flex justify-between items-center gap-3">
                <span>Account Number</span>
                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="flex items-center gap-2 font-semibold text-xs md:text-sm text-[#333]"
                >
                  {bankInfo.number}
                  <Copy className="w-4 h-4 text-[#777]" />
                </button>
              </div>
            </div>
          </div>

          {/* Proof of transfer */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#6B6B6B]">
              Proof of Transfer
            </p>

            <label className="block w-full border-2 border-dashed border-[#D4D4D4] bg-[#F7F7F7] rounded-xl px-4 py-8 text-center cursor-pointer hover:border-[#F9A22E] transition">
              <input
                type="file"
                className="hidden"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={handleFileChange}
              />
              <Upload className="w-6 h-6 mx-auto text-[#9B9B9B]" />
              <p className="mt-2 text-xs">
                <span className="font-semibold text-[#1E3E73]">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="mt-1 text-[10px] text-[#888]">
                PNG, JPG, or PDF (MAX 5 MB)
              </p>
              {proofFileName && (
                <p className="mt-2 text-xs text-[#555]">
                  Selected:{" "}
                  <span className="font-semibold">{proofFileName}</span>
                </p>
              )}
            </label>
          </div>

          {/* Terms & checkbox */}
          <div className="flex items-start gap-2 text-[11px] text-[#666]">
            <input
              id="agree"
              type="checkbox"
              className="mt-[2px] h-4 w-4 border border-[#C4C4C4] rounded-sm"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree">
              I have read and agree to the{" "}
              <button
                type="button"
                onClick={() => setShowTerms(true)}
                className="font-semibold underline text-[#1E3E73] hover:text-[#F9A22E]"
              >
                Enrollment Terms &amp; Conditions
              </button>
              , including all rules, requirements, and responsibilities outlined
              for students and parents/guardians.
            </label>
          </div>

          {/* Submit button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={!selectedCourse || !agree}
              className={`px-10 py-2.5 rounded-md text-sm font-semibold ${
                !selectedCourse || !agree
                  ? "bg-[#F9A22E]/50 text-white cursor-not-allowed"
                  : "bg-[#F9A22E] text-white hover:opacity-90"
              }`}
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
      <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
    </section>
  );
}
