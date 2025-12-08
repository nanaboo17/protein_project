import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Upload } from "lucide-react";
import backgroundImg from "../../../assets/contact_page/background.png";
import treeImg from "../../../assets/contact_page/tree.png";
import hutImg from "../../../assets/contact_page/hut.png";
import { CustomSelect } from "./CustomSelect";

export default function EnrollKidSection({ onNext }) {
  const [childName, setChildName] = useState("");
  const [schoolOrigin, setSchoolOrigin] = useState("");
  const [grade, setGrade] = useState("");
  const [address, setAddress] = useState("");
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [familyCard, setFamilyCard] = useState(null);

  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [familyCardName, setFamilyCardName] = useState(null);
  const [familyCardSize, setFamilyCardSize] = useState(null);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const religionOptions = [
    { value: "islam", label: "Islam" },
    { value: "protestan", label: "Kristen Protestan" },
    { value: "katolik", label: "Kristen Katolik" },
    { value: "hindu", label: "Hindu" },
    { value: "buddha", label: "Buddha" },
    { value: "konghucu", label: "Konghucu" },
  ];

  const handleNext = (e) => {
    e.preventDefault(); // prevent page reload
    // TODO: optionally validate form first
    if (onNext) onNext();
  };

  const handleFamilyCardUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFamilyCard(file);
    setFamilyCardName(file.name);
    setFamilyCardSize((file.size / 1024 / 1024).toFixed(2)); // Convert to MB
  };

  const isFormValid =
    childName &&
    gender &&
    birthDate &&
    religion &&
    address &&
    parentName &&
    email &&
    whatsapp &&
    schoolOrigin &&
    grade &&
    familyCard;

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
        <h2 className="text-center text-[#4D6D8E] text-3xl md:text-4xl font-extrabold">
          Enroll Your Kid
        </h2>
        <p className="mt-2 text-center text-[#00000065] text-sm md:text-base">
          We&apos;ll contact you for more details.
        </p>

        {/* ===== Child Details ===== */}
        <h3 className="mt-10 text-center text-[#4D6D8E] text-xl md:text-2xl font-extrabold">
          Child Details:
        </h3>

        <form onSubmit={handleNext} className="mt-6 space-y-8">
          {/* Child Name */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">Child Name</p>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="Child Full Name"
              className="w-full border border-[#00000050] bg-[#F8FAFC] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Gender */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">Gender</p>
            <CustomSelect
              placeholder="Gender"
              options={genderOptions}
              value={gender}
              onChange={setGender}
            />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">
              Child Birth Date
            </p>
            <DatePicker
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              placeholderText="Child Birth Date (dd/mm/yyyy)"
              dateFormat="dd/MM/yyyy"
              wrapperClassName="w-full"
              className="w-full px-3 py-2 border border-[#00000050] rounded-md bg-[#F8FAFC] text-sm focus:outline-none"
            />
          </div>

          {/* Religion */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">Religion</p>
            <CustomSelect
              placeholder="Religion"
              options={religionOptions}
              value={religion}
              onChange={setReligion}
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">Address</p>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="w-full border border-[#00000050] bg-[#F8FAFC] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* School of Origin */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">
              School of Origin
            </p>
            <input
              type="text"
              value={schoolOrigin}
              onChange={(e) => setSchoolOrigin(e.target.value)}
              placeholder="School of Origin"
              className="w-full border border-[#00000050] bg-[#F8FAFC] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Grade */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">Grade</p>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="Grade"
              className="w-full border border-[#00000050] bg-[#F8FAFC] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* ===== Your Details ===== */}
          <h3 className="pt-4 text-center text-[#4D6D8E] text-xl md:text-2xl font-extrabold">
            Your Details:
          </h3>

          {/* Parent Name */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">Parent Name</p>
            <input
              type="text"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="Your Full Name"
              className="w-full border border-[#00000050] bg-[#F8FAFC] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full border border-[#00000050] bg-[#F8FAFC] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Whatsapp */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#000000]">
              Whatsapp Number
            </p>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="Whatsapp Number"
              className="w-full border border-[#00000050] bg-[#F8FAFC] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Upload family card */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#000000]">
              Attach a Photo of Your Family Card
            </p>

            {familyCard ? (
              <div className="flex items-center justify-between border-2 border-dashed border-[#D4D4D4] bg-[#F8FAFC] rounded-xl px-4 py-4">
                <div className="flex items-center gap-3">
                  <Upload className="text-[#95A4B7] w-6 h-6" />
                  <div>
                    <p className="text-sm font-semibold text-[#4D6D8E]">
                      {familyCardName}
                    </p>
                    <p className="text-xs text-[#00000065]">
                      {familyCardSize} MB
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => {
                    setFamilyCard(null);
                    setFamilyCardName(null);
                    setFamilyCardSize(null);
                  }}
                  className="text-[#DD4A4A] font-semibold hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-[#D4D4D4] bg-[#F8FAFC] rounded-xl px-4 py-8 text-center cursor-pointer hover:border-[#FDA133] transition">
                <input
                  type="file"
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFamilyCardUpload}
                />

                <Upload className="text-[#95A4B7] w-[39px] h-[39px] mb-2" />

                <p className="text-xs font-semibold text-[#4D6D8E]">
                  <span className="font-extrabold">Click to upload</span> or
                  drag and drop
                  <br />
                  JPG, JPEG, or PDF (max 5 MB)
                </p>
              </label>
            )}
          </div>

          {/* Next button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-10 py-2.5 text-white text-sm font-semibold rounded-md transition 
  ${
    isFormValid
      ? "bg-[#FDA133] hover:opacity-90 cursor-pointer"
      : "bg-[#FDA13370] cursor-not-allowed"
  }`}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
