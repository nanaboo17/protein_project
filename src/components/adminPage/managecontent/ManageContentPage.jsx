// src/pages/admin/ManageContent.jsx
import React, { useState, useRef } from "react";
import Sidebar from "../dashboard/components/Sidebar";
import PageHeader from "../dashboard/components/Header";
import headerpng from "../../../assets/admin_page/manage-content-header.png";
import {
  ChevronDown,
  ChevronUp,
  ImagePlus,
  Upload,
  MoreVertical,
  Edit2,
  Trash2,
} from "lucide-react";

const tabs = ["Homepage", "About Us", "Programs", "Gallery", "Admission"];

// default hero image from your uploaded file
const defaultHeroImage = "/mnt/data/1a3d0559-5b2f-47ae-8e60-250a4d9d9869.png";

export default function ManageContent() {
  const [activeTab, setActiveTab] = useState("Homepage");

  const [heroHeadline, setHeroHeadline] = useState(
    "Inspiring Future Generation Through Education and Values"
  );
  const [heroSubheadline, setHeroSubheadline] = useState(
    "At Rumah Sukses Foundation, we believe every child deserves the opportunity to learn, grow, and succeed"
  );
  const [heroImage, setHeroImage] = useState(defaultHeroImage);

  const [heroOpen, setHeroOpen] = useState(true);
  const [programTab, setProgramTab] = useState("Preschool");
  const [programsOpen, setProgramsOpen] = useState(false);
  const [programsState, setProgramsState] = useState({
    Preschool: {
      headline: "Khadijah Islamic Preschool",
      subheadline:
        "At Khadijah Islamic Preschool, we combine Islamic values with modern teaching methods to create a joyful and secure learning environment. Our focus is on building strong foundations in character, knowledge, and creativity, ensuring every child is prepared for the next stage of their educational journey.",
      image: "",
    },
    "Learning Courses": {
      headline: "Bimbel & Kursus Rumah Sukses",
      subheadline:
        "Bimbel Rumah Sukses provides structured tutoring and enrichment courses that strenghten core subjects while fostering confidence and discipline. With dedicated teachers and interactive learning methods, we help students achieve academic excellence and unlock that full potential.",
      image: "",
    },
  });

  const programsFileInputRef = useRef(null);

  const currentProgram = programsState[programTab];

  const handleProgramFieldChange = (field, value) => {
    setProgramsState((prev) => ({
      ...prev,
      [programTab]: {
        ...prev[programTab],
        [field]: value,
      },
    }));
  };

  const handleProgramImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    handleProgramFieldChange("image", url);
  };

  const handleProgramCancel = () => {
    // In a real app, you'd reset to server values. For now, just log.
    console.log("Cancel program edit for", programTab);
  };

  const handleProgramSave = () => {
    console.log("Save program content", programsState);
  };

  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Adiratna R.",
      role: "Parent, Class of 2024 - Preschool",
      quote:
        "The preschool’s diverse community and fun extracurricular programs have enriched my child’s early learning experience. They've made wonderful friends and developed new interests.",
      image: "",
    },
    {
      id: 2,
      name: "Ratna P.",
      role: "Parent, Class of 2023 - Preschool",
      quote:
        "Teachers are caring and communicative. My child always looks forward to going to school every day.",
      image: "",
    },
  ]);

  const [reviewerName, setReviewerName] = useState("");
  const [reviewerRole, setReviewerRole] = useState("");
  const [reviewQuote, setReviewQuote] = useState("");
  const [reviewImage, setReviewImage] = useState("");
  const testimonialFileInputRef = useRef(null);

  const handleTestimonialImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setReviewImage(url);
  };

  const resetTestimonialForm = () => {
    setReviewerName("");
    setReviewerRole("");
    setReviewQuote("");
    setReviewImage("");
  };

  const handleAddTestimonial = () => {
    if (!reviewerName.trim() || !reviewQuote.trim()) {
      alert("Please fill at least reviewer name and testimonial quote.");
      return;
    }

    const newTestimonial = {
      id: Date.now(),
      name: reviewerName,
      role: reviewerRole,
      quote: reviewQuote,
      image: reviewImage,
    };

    setTestimonials((prev) => [newTestimonial, ...prev]);
    resetTestimonialForm();
  };

  const handleDeleteTestimonial = (id) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEditTestimonial = (t) => {
    // Simple inline "edit" that loads into the form (you could make a proper edit mode later)
    setReviewerName(t.name);
    setReviewerRole(t.role);
    setReviewQuote(t.quote);
    setReviewImage(t.image || "");
    // Also remove from list until re-added
    setTestimonials((prev) => prev.filter((x) => x.id !== t.id));
  };

  const [testimonyOpen, setTestimonyOpen] = useState(false);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setHeroImage(url);
  };

  const handleChangeImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleRefresh = () => {
    console.log("Refresh manage content");
  };

  return (
    <div className="min-h-screen bg-[#F4F5EC] flex">
      <Sidebar />

      <main className="flex-1 px-8 py-6">
        <PageHeader
          title="Manage Content"
          subtitle="Edit, update, and organize all website content across pages and sections."
          image={headerpng}
          onRefresh={handleRefresh}
        />

        {/* Tabs */}
        <div className="mt-6 border-b border-[#D0D7E0]">
          <nav className="flex gap-8 text-sm font-medium text-[#5B6F8E]">
            {tabs.map((tab) => {
              const active = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 -mb-px border-b-2 transition ${
                    active
                      ? "border-[#1E3E73] text-[#1E3E73]"
                      : "border-transparent hover:text-[#1E3E73]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Only Homepage content for now */}
        {activeTab === "Homepage" && (
          <div className="mt-4 space-y-3 pb-10">
            {/* Hero Section card */}
            <section className="bg-white border border-[#194A8150] rounded-t-xl">
              {/* card header */}
              <div className="border-[#194A8150] border-b ">
                <button
                  type="button"
                  onClick={() => setHeroOpen((o) => !o)}
                  className="w-full flex items-center justify-between px-6 py-4"
                >
                  <span className="font-semibold text-[18px] text-[#000000]">
                    Hero Section
                  </span>
                  {heroOpen ? (
                    <ChevronUp className="text-[#00000050]" size={26} />
                  ) : (
                    <ChevronDown className="text-[#00000050]" size={26} />
                  )}
                </button>
              </div>

              {heroOpen && (
                <div className="px-6 py-6 ">
                  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.7fr)] gap-8">
                    {/* Left: text fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[13px] text-[#000000] mb-1">
                          Hero Section Headline
                        </label>
                        <input
                          type="text"
                          value={heroHeadline}
                          onChange={(e) => setHeroHeadline(e.target.value)}
                          className="w-full border border-[#194A8150] rounded-lg px-3 py-2 text-sm text-[#000000] bg-[#F8FAFC] outline-none focus:ring-2 focus:ring-[#4E92DF]/60"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] text-[#4D6D8E] mb-1">
                          Subheadline
                        </label>
                        <textarea
                          rows={3}
                          value={heroSubheadline}
                          onChange={(e) => setHeroSubheadline(e.target.value)}
                          className="w-full border border-[#194A8150] rounded-lg px-3 py-2 text-sm text-[#000000] bg-[#F8FAFC] outline-none focus:ring-2 focus:ring-[#4E92DF]/60 resize-none"
                        />
                      </div>
                    </div>

                    {/* Right: banner image */}
                    <div>
                      <p className="text-[13px] text-[#000000] mb-2">
                        Banner Image
                      </p>
                      <div className="border border-dashed border-[#C9D3E3] rounded-xl p-3 bg-[#FDFEFF] flex flex-col">
                        <div className="relative overflow-hidden rounded-lg mb-3 h-40 md:h-44 bg-slate-100">
                          {heroImage && (
                            <img
                              src={heroImage}
                              alt="Hero banner"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>

                        <div className="flex justify-center">
                          <button
                            type="button"
                            onClick={handleChangeImageClick}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-[#194A81] rounded-lg text-sm font-medium text-[#000000] bg-white hover:bg-[#EFF5FF] transition"
                          >
                            <ImagePlus className="text-[#194A81]" size={16} />
                            Change Image
                          </button>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </div>

                        <p className="mt-2 text-center text-[11px] text-[#00000060]">
                          Recommended size: 1920×1080px
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* OUR PROGRAMS */}
            <section className="bg-white border border-[#D0D7E0] rounded-t-xl">
              <div className="border-[#194A8150] border-b ">
                <button
                  type="button"
                  onClick={() => setProgramsOpen((o) => !o)}
                  className="w-full flex items-center justify-between px-6 py-4"
                >
                  <span className="font-semibold text-[#000000]">
                    Our Programs
                  </span>
                  {programsOpen ? (
                    <ChevronUp className="text-[#5B6F8E]" size={18} />
                  ) : (
                    <ChevronDown className="text-[#5B6F8E]" size={18} />
                  )}
                </button>
              </div>

              {programsOpen && (
                <div>
                  {/* Inner tabs */}
                  <div className="px-6 pt-5 border-b border-[#D0D7E0]">
                    <div className="flex gap-6 text-sm font-medium text-[#5B6F8E]">
                      {["Preschool", "Learning Courses"].map((tab) => {
                        const active = tab === programTab;
                        return (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => setProgramTab(tab)}
                            className={`pb-2 -mb-[1px] border-b-2 transition ${
                              active
                                ? "border-[#1E3E73] text-[#1E3E73]"
                                : "border-transparent hover:text-[#1E3E73]"
                            }`}
                          >
                            {tab}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-5 pt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.7fr)] gap-8">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[13px] text-[#000000] mb-1">
                            Headline
                          </label>
                          <input
                            type="text"
                            value={currentProgram.headline}
                            onChange={(e) =>
                              handleProgramFieldChange(
                                "headline",
                                e.target.value
                              )
                            }
                            className="w-full border border-[#C9D3E3] rounded-lg px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60"
                          />
                        </div>

                        <div>
                          <label className="block text-[13px] text-[#000000] mb-1">
                            Subheadline
                          </label>
                          <textarea
                            rows={4}
                            value={currentProgram.subheadline}
                            onChange={(e) =>
                              handleProgramFieldChange(
                                "subheadline",
                                e.target.value
                              )
                            }
                            className="w-full border border-[#C9D3E3] rounded-lg px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60 resize-none"
                          />
                        </div>
                      </div>

                      {/* Image upload */}
                      <div>
                        <p className="text-[13px] text-[#000000] mb-2">Image</p>
                        <div className="border border-dashed border-[#C9D3E3] rounded-xl p-5 bg-[#F8FBFF] flex flex-col items-center justify-center h-full">
                          {currentProgram.image ? (
                            <div className="w-full h-40 md:h-48 mb-4 overflow-hidden rounded-lg bg-slate-100">
                              <img
                                src={currentProgram.image}
                                alt={`${programTab} banner`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="flex flex-col items-center mb-4 text-[#1E3E73] gap-2">
                              <ImagePlus size={40} />
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              programsFileInputRef.current?.click()
                            }
                            className="inline-flex items-center gap-2 px-4 py-2 border border-[#194A81] rounded-lg text-sm font-medium text-[#000000] bg-white hover:bg-[#EFF5FF] transition"
                          >
                            <Upload size={16} />
                            Upload Image
                          </button>
                          <input
                            ref={programsFileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleProgramImageChange}
                          />

                          <p className="mt-2 text-center text-[11px] text-[#8691A8]">
                            Recommended size: 800×600px
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-12">
                      <button
                        type="button"
                        onClick={handleProgramCancel}
                        className="px-5 py-2 rounded-lg border border-[#D0D7E0] bg-white text-sm text-[#5B6F8E] hover:bg-slate-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleProgramSave}
                        className="px-6 py-2 rounded-lg bg-[#194A81] text-sm font-semibold text-white hover:bg-[#16325B]"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* TESTIMONY */}
            <section className="bg-white border border-[#D0D7E0] rounded-t-xl">
              <div className="border-[#194A8150] border-b ">
                <button
                  type="button"
                  onClick={() => setTestimonyOpen((o) => !o)}
                  className="w-full flex items-center justify-between px-6 py-4"
                >
                  <span className="font-semibold text-[#000000]">
                    Testimony
                  </span>
                  {testimonyOpen ? (
                    <ChevronUp className="text-[#5B6F8E]" size={18} />
                  ) : (
                    <ChevronDown className="text-[#5B6F8E]" size={18} />
                  )}
                </button>
              </div>

              {testimonyOpen && (
                <div className="px-6 py-6">
                  {/* Input card */}
                  <div className="border border-[#194A8150] rounded-xl p-5 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,2fr)_minmax(0,1.3fr)] gap-4 mb-4">
                      {/* Name / Role */}
                      <div className="space-y-3 md:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[13px] text-[#000000] mb-1">
                              Reviewer Name
                            </label>
                            <input
                              type="text"
                              placeholder="e.g, Jesicca Doe"
                              value={reviewerName}
                              onChange={(e) => setReviewerName(e.target.value)}
                              className="w-full border border-[#194A8150] rounded-[5px] px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60"
                            />
                          </div>
                          <div>
                            <label className="block text-[13px] text-[#000000] mb-1">
                              Reviewer Role/Title
                            </label>
                            <input
                              type="text"
                              placeholder="e.g, Parent, Class of 2024 - Preschool"
                              value={reviewerRole}
                              onChange={(e) => setReviewerRole(e.target.value)}
                              className="w-full border border-[#194A8150] rounded-[5px] px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[13px] text-[#000000] mb-1">
                            Testimonial Quote
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Enter the testimonial quote here..."
                            value={reviewQuote}
                            onChange={(e) => setReviewQuote(e.target.value)}
                            className="w-full border border-[#194A8150] rounded-[5px] px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60 resize-none"
                          />
                        </div>
                      </div>

                      {/* Image upload */}
                      <div>
                        <p className="text-[13px] text-[#000000] mb-2">
                          Image Upload
                        </p>
                        <div className="border border-dashed border-[#194A8150] rounded-[5px] p-4 bg-[#F8FBFF] flex flex-col items-center justify-center h-full">
                          {reviewImage ? (
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-3 bg-slate-100">
                              <img
                                src={reviewImage}
                                alt="Reviewer"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="flex flex-col items-center mb-3 text-[#1E3E73] gap-2">
                              <ImagePlus size={35} />
                            </div>
                          )}

                          <button
                            type="button"
                            onClick={() =>
                              testimonialFileInputRef.current?.click()
                            }
                            className="inline-flex items-center gap-2 px-4 py-2 border border-[#1E3E73] rounded-lg text-sm font-medium text-[#1E3E73] bg-white hover:bg-[#EFF5FF] transition"
                          >
                            <Upload size={16} />
                            Upload Image
                          </button>
                          <input
                            ref={testimonialFileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleTestimonialImageChange}
                          />

                          <p className="mt-2 text-center text-[11px] text-[#000000]">
                            Recommended size: 150×150px
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex pt-7 justify-end gap-3">
                      <button
                        type="button"
                        onClick={resetTestimonialForm}
                        className="px-5 py-2 rounded-lg border border-[#D0D7E0] bg-white text-sm text-[#5B6F8E] hover:bg-slate-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleAddTestimonial}
                        className="px-6 py-2 rounded-lg bg-[#0D3C7B] text-sm font-semibold text-white hover:bg-[#072954]"
                      >
                        + Add New Testimonial
                      </button>
                    </div>
                  </div>

                  {/* Existing testimonials */}
                  <div>
                    <p className="text-[17px] font-semibold text-[#000000] mb-3">
                      Existing Testimonials
                    </p>

                    <div className="space-y-3">
                      {testimonials.map((t) => (
                        <div
                          key={t.id}
                          className="border border-[#D0D7E0] rounded-xl px-4 py-3 flex items-start gap-3 bg-[#FCFDFE]"
                        >
                          <div className="pt-3">
                            <MoreVertical
                              className="text-[#B0B7C7]"
                              size={16}
                            />
                          </div>

                          {/* Avatar */}
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F2F4FA] flex items-center justify-center text-sm font-semibold text-[#1E3E73] mt-1">
                            {t.image ? (
                              <img
                                src={t.image}
                                alt={t.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span>{t.name.charAt(0)}</span>
                            )}
                          </div>

                          {/* Text */}
                          <div className="flex-1 text-[13px] text-[#4D5C73]">
                            <p className="font-bold text-[#000000]">{t.name}</p>
                            <p className="text-[#000000] mb-1">{t.role}</p>
                            <p className="leading-relaxed">{t.quote}</p>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col items-end gap-2 mt-1">
                            <button
                              type="button"
                              onClick={() => handleEditTestimonial(t)}
                              className="p-1 rounded-full hover:bg-slate-100"
                            >
                              <Edit2 size={15} className="text-[#1E3E73]" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteTestimonial(t.id)}
                              className="p-1 rounded-full hover:bg-slate-100"
                            >
                              <Trash2 size={15} className="text-red-500" />
                            </button>
                          </div>
                        </div>
                      ))}

                      {testimonials.length === 0 && (
                        <p className="text-[12px] text-[#000000]">
                          No testimonials yet. Add one using the form above.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
