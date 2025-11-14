import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// ⬇️ Update these paths to your actual folder (e.g. contact_page / preschool_page)
import backgroundImg from "../../../assets/contact_page/background.png";
import treeImg from "../../../assets/contact_page/tree.png";
import hutImg from "../../../assets/contact_page/hut.png";
import { CustomSelect } from "./CustomSelect";

export default function EnrollKidSection({ onNext }) {
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [birthDate, setBirthDate] = useState(null);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const religionOptions = [
    { value: "islam", label: "Islam" },
    { value: "protestan", label: "Protestan" },
    { value: "katolik", label: "Katolik" },
    { value: "hindu", label: "Hindu" },
    { value: "budha", label: "Budha" },
    { value: "konghucu", label: "Konghucu" },
  ];

  const handleNext = (e) => {
    e.preventDefault(); // prevent page reload
    // TODO: optionally validate form first
    if (onNext) onNext();
  };

  return (
    <section
      className="relative w-full py-16 md:py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Tree & Hut decorations */}
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

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {/* Page title */}
        <h2 className="text-center text-[#1E3E73] text-3xl md:text-4xl font-extrabold">
          Enroll Your Kid
        </h2>
        <p className="mt-2 text-center text-[#4A6284] text-sm md:text-base">
          We&apos;ll contact you for more details.
        </p>

        {/* ===== Child Details ===== */}
        <h3 className="mt-10 text-center text-[#1E3E73] text-xl md:text-2xl font-extrabold">
          Child Details:
        </h3>

        <form onSubmit={handleNext} className="mt-6 space-y-8">
          {/* Child Name */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B6B6B]">Child Name</p>
            <input
              type="text"
              placeholder="Child Full Name"
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Gender */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B6B6B]">Gender</p>
            <CustomSelect
              placeholder="Gender"
              options={genderOptions}
              value={gender}
              onChange={setGender}
            />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B6B6B]">
              Child Birth Date
            </p>
            <DatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              placeholderText="Child Birth Date (dd/mm/yyyy)"
              dateFormat="dd/MM/yyyy"
              wrapperClassName="w-full"
              className="w-full px-3 py-2 border border-[#D4D4D4] rounded-md bg-[#F7F7F7] text-sm focus:outline-none"
            />
          </div>

          {/* Religion */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B6B6B]">Religion</p>
            <CustomSelect
              placeholder="Religion"
              options={religionOptions}
              value={religion}
              onChange={setReligion}
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B6B6B]">Address</p>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* ===== Your Details ===== */}
          <h3 className="pt-4 text-center text-[#1E3E73] text-xl md:text-2xl font-extrabold">
            Your Details:
          </h3>

          {/* Parent Name */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B6B6B]">Parent Name</p>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B6B6B]">Email</p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Whatsapp */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#6B6B6B]">
              Whatsapp Number
            </p>
            <input
              type="text"
              placeholder="Your Whatsapp Number"
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Upload family card */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#6B6B6B]">
              Attach a Photo of Your Family Card
            </p>

            <label className="block w-full border-2 border-dashed border-[#D4D4D4] bg-[#F7F7F7] rounded-xl px-4 py-8 text-center cursor-pointer hover:border-[#F9A22E] transition">
              <input
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png,.pdf"
              />
              <p className="text-xs text-[#6B6B6B]">
                <span className="font-semibold underline">
                  Click to upload or drag and drop
                </span>
                <br />
                JPG, JPEG, or PDF (max 5 MB)
              </p>
            </label>
          </div>

          {/* Next button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-10 py-2.5 bg-[#F9A22E] text-white text-sm font-semibold rounded-md hover:opacity-90 transition"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
