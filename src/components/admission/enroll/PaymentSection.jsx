import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Circle,
  CheckCircle,
  Upload,
  Copy,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import TermsModal from "./TermsModal";
import backgroundImg from "../../../assets/contact_page/background.png";
import treeImg from "../../../assets/contact_page/tree.png";
import hutImg from "../../../assets/contact_page/hut.png";

export default function EnrollPaymentSection({ onSubmit }) {
  const [isPreschoolOpen, setIsPreschoolOpen] = useState(true);
  const [isLearningOpen, setIsLearningOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [proofFileName, setProofFileName] = useState("");
  const [fileSize, setFileSize] = useState(null);
  const [agree, setAgree] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();
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
    const file = e.target.files[0];
    if (!file) return;

    setProofFileName(file.name);
    setFileSize((file.size / 1024 / 1024).toFixed(2)); // Convert bytes → MB
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form refresh
    navigate("/enrollment/success");
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
        <h2 className="text-center text-[#4D6D8E] text-3xl md:text-4xl font-extrabold">
          Enroll Your Kid
        </h2>
        <p className="mt-2 text-center text-[#00000065] text-sm md:text-base">
          We&apos;ll contact you for more details.
        </p>

        {/* Select a course */}
        <h3 className="mt-8 text-center text-[#4D6D8E] text-xl md:text-2xl font-extrabold">
          Select a Course:
        </h3>

        <form onSubmit={handleSubmit} className="mt-6 space-y-8">
          {/* Preschool Programs accordion */}
          <div className="border border-[#D4D4D4] rounded-[5px]  bg-[#F8FAFC]">
            <button
              type="button"
              onClick={() => setIsPreschoolOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 text-[22px] font-semibold text-[#4A4A4A]"
            >
              <span className="font-bold ">Preschool Programs</span>
              {isPreschoolOpen ? (
                <ChevronUp className="w-4 h-4 text-[#777]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#777]" />
              )}
            </button>

            {isPreschoolOpen && (
              <div className="border-t m-4 border-[#E3E3E3]">
                {preschoolCourses.map((course) => {
                  const isActive = selectedCourse?.id === course.id;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleSelectCourse(course)}
                      className={` w-full mb-4 flex gap-3 items-start px-5 py-4 rounded-[5px]  border transition-all ${
                        isActive
                          ? "border-[#00000050] bg-[#F8FAFC] shadow-sm"
                          : "border-[#E5E5E5] bg-[#F8FAFC]  "
                      }`}
                    >
                      {/* Radio Button */}
                      <div className="mt-2">
                        {isActive ? (
                          <Circle className="w-5 h-5 fill-[#194A81] text-[#194A81]" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#00000065]" />
                        )}
                      </div>

                      {/* Details */}
                      <div className="w-full">
                        <p className="font-bold flex items-start text-[#000000] text-[20px]">
                          {course.title}
                        </p>

                        <div className="border-t border-[#194A8150] mt-2 pt-2 text-[20px]">
                          <div className="flex justify-between mb-2 text-[#00000065]">
                            <span>Registration Fee:</span>
                            <span className="font-semibold text-black">
                              $50
                            </span>
                          </div>

                          <div className="flex justify-between text-[#00000065] mt-1">
                            <span>Tuition Fee:</span>
                            <span className="font-semibold text-black">
                              {course.priceText}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Learning Courses accordion */}
          <div className="border border-[#D4D4D4] rounded-[5px] bg-[#F8FAFC] mt-6">
            <button
              type="button"
              onClick={() => setIsLearningOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3 text-[22px] font-semibold text-[#4A4A4A]"
            >
              <span className="font-bold text">Learning Courses</span>
              {isLearningOpen ? (
                <ChevronUp className="w-4 h-4 text-[#777]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#777]" />
              )}
            </button>

            {isLearningOpen && (
              <div className="border-t m-4 border-[#E3E3E3]">
                {learningCourses.map((course) => {
                  const isActive = selectedCourse?.id === course.id;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => handleSelectCourse(course)}
                      className={`w-full mb-4 flex gap-3 items-start px-5 py-4 rounded-[5px] border transition-all ${
                        isActive
                          ? "border-[#00000050] bg-[#F8FAFC] shadow-sm"
                          : "border-[#E5E5E5] bg-[#F8FAFC]"
                      }`}
                    >
                      {/* Radio Button */}
                      <div className="mt-2">
                        {isActive ? (
                          <Circle className="w-5 h-5 fill-[#194A81] text-[#194A81]" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#00000065]" />
                        )}
                      </div>

                      {/* Details */}
                      <div className="w-full">
                        <p className="font-bold text-[#000000] text-[20px]">
                          {course.title}
                        </p>

                        <div className="border-t border-[#194A8150] mt-2 pt-2 text-[20px]">
                          <div className="flex justify-between text-[#00000065] mb-2">
                            <span>Registration Fee:</span>
                            <span className="font-semibold text-black">
                              $50
                            </span>
                          </div>

                          <div className="flex justify-between text-[#00000065] mt-1">
                            <span>Tuition Fee:</span>
                            <span className="font-semibold text-black">
                              {course.priceText}
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Payment Information */}
          <h3 className="mt-10 text-center text-[#4D6D8E] text-[28px] font-extrabold">
            Payment Information:
          </h3>

          {/* Selected Course + Amount */}
          <div className="w-full bg-[#E5EFF6] border border-[#C9DFF7] rounded-[5px] px-6 py-4 mt-6 flex justify-between items-start">
            <div>
              <p className="text-[17px] text-[#000000]">You have selected:</p>
              <p className="text-[22px] font-bold text-[#000000] mt-1">
                {selectedCourse ? selectedCourse.title : "-"}
              </p>
            </div>

            <div className="text-right">
              <p className="text-[17px] text-[#000000]">Amount to pay:</p>
              <p className="text-[22px] font-bold text-[#4DB5E9] mt-1">
                {selectedCourse ? `$${selectedCourse.amount}` : "$0"}
              </p>
            </div>
          </div>

          {/* Bank Box */}
          <div className="border border-[#CECECE] rounded-[5px] px-6 py-6 mt-6 text-[14px] text-[#4A4A4A] leading-relaxed">
            <p className="text-[17px] text-[#00000060] mb-4">
              Please make a direct bank transfer to the account below. Use your
              full name as the payment reference.
            </p>

            <div className="flex justify-between mb-2">
              <span className="text-[#00000060]">Bank Name</span>
              <span className="text-[#00000070] font-bold">
                {bankInfo.bank}
              </span>
            </div>

            <div className="flex justify-between mb-2">
              <span className="text-[#00000060]">Account Holder</span>
              <span className="font-bold text-[#00000070] text-right">
                {bankInfo.holder}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-[#00000060]">Account Number</span>
              <button
                type="button"
                onClick={handleCopyNumber}
                className="flex items-center gap-2 font-bold text-[#00000070]"
              >
                {bankInfo.number}
                <Copy className="w-4 h-4 text-[#00000070]" />
              </button>
            </div>
          </div>

          {/* Proof of Transfer Upload */}
          <div className="mt-6">
            <p className="font-semibold text-[15px] mb-2 text-[#4B4B4B]">
              Proof of Transfer
            </p>

            {!proofFileName ? (
              <label className="block w-full border border-dashed border-[#BFBFBF] rounded-xl px-4 py-8 text-center cursor-pointer hover:border-[#1A7ED5] transition bg-[#FAFAFA]">
                <input
                  type="file"
                  className="hidden"
                  accept=".png,.jpg,.jpeg,.pdf"
                  onChange={handleFileChange}
                />
                <Upload className="w-6 h-6 mx-auto text-[#7D7D7D]" />
                <p className="mt-2 text-[12px]">
                  <span className="font-semibold text-[#1E3E73]">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="mt-1 text-[11px] text-[#999]">
                  PNG, JPG, or PDF (MAX 5 MB)
                </p>
              </label>
            ) : (
              <div className="w-full border border-dashed border-[#BFBFBF] rounded-xl px-4 py-4 flex items-center justify-between gap-3 bg-[#F7F7F7]">
                <div className="flex items-center gap-3">
                  <Upload className="w-6 h-6 text-[#4D6D8E]" />
                  <div>
                    <p className="font-semibold text-[14px]">{proofFileName}</p>
                    <p className="text-[11px] text-[#666]">{fileSize} MB</p>
                  </div>
                </div>

                <button
                  onClick={() => setProofFileName(null)}
                  className="text-[#C02A2A] text-[14px] font-medium"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-3 mt-4 text-[13px]">
            <input
              id="agree"
              type="checkbox"
              className="h-4 w-4 border border-[#A7A7A7] rounded-sm cursor-pointer"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <label htmlFor="agree" className="text-[#5A5A5A] leading-5">
              I have read and agree to the{" "}
              <button
                type="button"
                onClick={() => setShowTerms(true)}
                className="font-semibold underline text-[#1E3E73] hover:text-[#F9A22E]"
              >
                Enrollment Terms & Conditions
              </button>
              , including all rules, requirements, and responsibilities
              outlined.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={!selectedCourse || !agree}
              className={`w-[220px] py-3 rounded-lg text-[15px] font-semibold transition ${
                !selectedCourse || !agree
                  ? "bg-[#F9A22E]/40 text-white cursor-not-allowed"
                  : "bg-[#F9A22E] text-white cursor-pointer hover:opacity-90"
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
