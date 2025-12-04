// src/pages/admin/ManageContent.jsx
import React, { useState, useRef, useEffect } from "react";
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
  List,
  AlignLeft,
  Bold,
  Italic,
  Link,
  Pencil,
} from "lucide-react";

const tabs = ["Homepage", "About Us", "Programs", "Gallery", "Admission"];

const mockImages = {
  enrichment: "https://storage.googleapis.com/uploaded_images/image_4a27d3.jpg", // Placeholder for first enrichment image
  playgroup: "https://storage.googleapis.com/uploaded_images/image_4a27f2.jpg", // Playgroup image
  sensorial: "https://storage.googleapis.com/uploaded_images/image_4a27d6.jpg", // Sensorial Development image
  math: "https://storage.googleapis.com/uploaded_images/image_4a27bc.jpg", // Mathematics image
  emptyImage: "",
};

const defaultHeroImage = "/mnt/data/1a3d0559-5b2f-47ae-8e60-250a4d9d9869.png";

const initialProgramState = {
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
  // Preschool Program (Container with Playgroup, K-A, K-B tabs)
  preschool: {
    activeSubTab: "Playgroup",
    Playgroup: {
      headline: "Playgroup",
      subheadline:
        "For our youngest learners, focusing on social skills and basic concepts.",
      image: mockImages.playgroup,
    },
    "Kindergarten A": {
      headline: "Kindergarten A",
      subheadline:
        "Building foundational literacy and numeracy skills in a stimulating environment.",
      image: mockImages.emptyImage,
    },
    "Kindergarten B": {
      headline: "Kindergarten B",
      subheadline:
        "Preparing students for primary school with advanced curriculum and critical thinking exercises.",
      image: mockImages.emptyImage,
    },
  },
  // Core Curriculum (with editor and existing list)
  coreCurriculum: {
    open: true,
    existingCurriculums: [
      {
        id: "cur-1",
        title: "Sensorial Development",
        subtitle:
          "Children discover the world through their five senses with hands on learning. By strengthening their ability to see, hear, touch, smell, and taste, they build awareness that prepares them for mathematics, reading, and writing.",
        image: mockImages.sensorial,
      },
      {
        id: "cur-2",
        title: "Enrichment Activities",
        subtitle:
          "Beyond academics, children grow holistically through arts and crafts, music and movement, cooking, outdoor play, and physical activities. These programs encourage creativity, social interaction, and a love for learning.",
        image: mockImages.enrichment,
      },
      // The 'Practical Life' item is shown in the editor, so we'll treat it as the item being edited/added
    ],
    // State for the Curriculum Editor (New/Edit)
    editor: {
      isEditing: false, // true if editing an existing one, false if adding new
      id: null, // ID of the curriculum being edited
      programName: "Practical Life",
      subheadline:
        "Through a series of daily activities such as pouring, cleaning, organizing, and self care, children learn coordination, concentration, and responsibility. These skills help them grow into independent individuals with confidence and strong character.",
      image: mockImages.emptyImage,
    },
  },
  // Learning Courses (Container with Math, English, Science tabs)
  learningCourses: {
    activeSubTab: "Mathematics",
    Mathematics: {
      headline: "Mathematics",
      subheadline: "Comprehensive math tutoring for all grade levels",
      image: mockImages.math,
    },
    English: {
      headline: "English",
      subheadline: "Developing reading, writing, and communication fluency.",
      image: mockImages.emptyImage,
    },
    Science: {
      headline: "Science",
      subheadline:
        "Exploring the world through hands-on experiments and inquiry.",
      image: mockImages.emptyImage,
    },
    "Bimbel UTBK-SNBT": {
      headline: "Bimbel UTBK-SNBT",
      subheadline: "Intensive preparation for university entrance exams.",
      image: mockImages.emptyImage,
    },
    "Bimbel Kedinasan": {
      headline: "Bimbel Kedinasan",
      subheadline: "Specialized tutoring for vocational school admissions.",
      image: mockImages.emptyImage,
    },
  },
};
const initialFeesState = {
  preschool: {
    Playgroup: { registration: "50.00", monthly: "350.00" },
    "Kindergarten A": { registration: "50.00", monthly: "350.00" },
    "Kindergarten B": { registration: "50.00", monthly: "350.00" },
  },
  learningCourses: {
    Mathematics: { registration: "50.00", monthly: "350.00" },
    English: { registration: "50.00", monthly: "350.00" },
    Science: { registration: "50.00", monthly: "350.00" },
    "Bimbel UTBK-SNBT": { registration: "50.00", monthly: "350.00" },
    "Literasi Bahasa Indonesia": { registration: "50.00", monthly: "350.00" },
    "English for Kids": { registration: "50.00", monthly: "350.00" },
    "Computer Course": { registration: "50.00", monthly: "350.00" },
    "Reading & Writing Course": { registration: "50.00", monthly: "350.00" },
  },
  // Add other sections like 'Core Curriculum' or 'Enrichment' if they have fees
};

export default function ManageContent() {
  // Add these to your useState section near the top of ManageContent
  const [galleryPhotos, setGalleryPhotos] = useState([]); // Define initialGalleryState elsewhere
  const [isGalleryEditing, setIsGalleryEditing] = useState(false);
  const galleryFileInputRef = useRef(null); // Used for image upload input
  const [activeTab, setActiveTab] = useState("Programs");
  const [heroHeadline, setHeroHeadline] = useState(
    "Inspiring Future Generation Through Education and Values"
  );
  const [heroSubheadline, setHeroSubheadline] = useState(
    "At Rumah Sukses Foundation, we believe every child deserves the opportunity to learn, grow, and succeed"
  );
  const [heroImage, setHeroImage] = useState(defaultHeroImage);
  const [heroOpen, setHeroOpen] = useState(false);
  const [programTab, setProgramTab] = useState("Preschool");
  const [programsOpen, setProgramsOpen] = useState(false);
  const [programsState, setProgramsState] = useState(initialProgramState);
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
  // Add this to your useState section near the top of ManageContent
  const [feesState, setFeesState] = useState(initialFeesState);

  const handleProgramImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    handleProgramFieldChange("image", url);
  };

  const handleProgramCancel = () => {
    console.log("Cancel program edit for", programTab);
  };

  const handleProgramSave = () => {
    console.log("Save program content", programsState);
  };

  const handleFeeChange = (programSection, programName, field, value) => {
    // Basic formatting to ensure it's a number string
    const sanitizedValue = value.replace(/[^0-9.]/g, "");

    setFeesState((prev) => ({
      ...prev,
      [programSection]: {
        ...prev[programSection],
        [programName]: {
          ...prev[programSection][programName],
          [field]: sanitizedValue,
        },
      },
    }));
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
    setReviewerName(t.name);
    setReviewerRole(t.role);
    setReviewQuote(t.quote);
    setReviewImage(t.image || "");
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
  const [draggingTestimonialId, setDraggingTestimonialId] = useState(null);
  const [dragOverTestimonialId, setDragOverTestimonialId] = useState(null);

  const moveTestimonial = (fromIndex, toIndex) => {
    setTestimonials((prev) => {
      const next = Array.from(prev);
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  };

  const handleTestDragStart = (e, id) => {
    e.dataTransfer.effectAllowed = "move";
    setDraggingTestimonialId(id);
    e.dataTransfer.setData("text/plain", id);
  };

  const handleTestDragEnter = (e, id) => {
    e.preventDefault();
    if (id === draggingTestimonialId) return;
    setDragOverTestimonialId(id);
  };

  const handleTestDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleTestDragLeave = (e) => {
    e.preventDefault();
    setDragOverTestimonialId(null);
  };

  const handleTestDrop = (e, dropId) => {
    e.preventDefault();
    const draggedId =
      draggingTestimonialId || e.dataTransfer.getData("text/plain");
    if (!draggedId) return;
    if (draggedId === dropId) {
      setDragOverTestimonialId(null);
      setDraggingTestimonialId(null);
      return;
    }

    const fromIndex = testimonials.findIndex((t) => t.id === draggedId);
    const toIndex = testimonials.findIndex((t) => t.id === dropId);
    if (fromIndex === -1 || toIndex === -1) {
      setDragOverTestimonialId(null);
      setDraggingTestimonialId(null);
      return;
    }

    moveTestimonial(fromIndex, toIndex);
    setDragOverTestimonialId(null);
    setDraggingTestimonialId(null);
  };

  const handleTestDragEnd = () => {
    setDragOverTestimonialId(null);
    setDraggingTestimonialId(null);
  };

  // ---------------- ABOUT US (FAQ) state & handlers ----------------
  const [faqs, setFaqs] = useState([
    {
      id: "faq-1",
      question: "How do you measure student progress in the learning course?",
      answer:
        "Student progress is evaluated through periodic assessments, classroom participation, and performance-based evaluations. Instructors provide continuous feedback and progress reports to ensure that each learner’s academic development is monitored effectively. The assessment process aims to identify strengths and areas for improvement, enabling the formulation of targeted learning strategies.",
    },
  ]);

  const [faqQuestion, setFaqQuestion] = useState("");
  const [faqAnswer, setFaqAnswer] = useState("");
  const [editingFaqId, setEditingFaqId] = useState(null);
  const [faqOpen, setFaqOpen] = useState(true);

  const resetFaqForm = () => {
    setFaqQuestion("");
    setFaqAnswer("");
    setEditingFaqId(null);
  };

  const handleAddFaq = () => {
    if (!faqQuestion.trim() || !faqAnswer.trim()) {
      alert("Please enter both question and answer.");
      return;
    }
    const newFaq = {
      id: `faq-${Date.now()}`,
      question: faqQuestion.trim(),
      answer: faqAnswer.trim(),
    };
    setFaqs((prev) => [newFaq, ...prev]);
    resetFaqForm();
  };

  const handleStartEditFaq = (faq) => {
    setEditingFaqId(faq.id);
    setFaqQuestion(faq.question);
    setFaqAnswer(faq.answer);
    // scroll to top of faq card? optional
  };

  const handleSaveFaq = () => {
    if (!faqQuestion.trim() || !faqAnswer.trim()) {
      alert("Please enter both question and answer.");
      return;
    }
    setFaqs((prev) =>
      prev.map((f) =>
        f.id === editingFaqId
          ? { ...f, question: faqQuestion.trim(), answer: faqAnswer.trim() }
          : f
      )
    );
    resetFaqForm();
  };

  const handleDeleteFaq = (id) => {
    if (!confirm("Delete this FAQ?")) return;
    setFaqs((prev) => prev.filter((f) => f.id !== id));
    // if we were editing this id, reset form
    if (editingFaqId === id) resetFaqForm();
  };

  // drag & drop state for FAQs
  const [draggingFaqId, setDraggingFaqId] = useState(null);
  const [dragOverFaqId, setDragOverFaqId] = useState(null);

  /**
   * Reorder faqs by moving item at fromIndex to toIndex
   */
  const moveFaq = (fromIndex, toIndex) => {
    setFaqs((prev) => {
      const next = Array.from(prev);
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.effectAllowed = "move";
    // store id so we can reference it on drop
    setDraggingFaqId(id);
    // for Firefox: set some data
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragEnter = (e, id) => {
    e.preventDefault();
    if (id === draggingFaqId) return;
    setDragOverFaqId(id);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // allow drop
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOverFaqId(null);
  };

  const handleDrop = (e, dropId) => {
    e.preventDefault();
    const draggedId = draggingFaqId || e.dataTransfer.getData("text/plain");
    if (!draggedId) return;

    if (draggedId === dropId) {
      setDragOverFaqId(null);
      setDraggingFaqId(null);
      return;
    }

    const fromIndex = faqs.findIndex((f) => f.id === draggedId);
    const toIndex = faqs.findIndex((f) => f.id === dropId);
    if (fromIndex === -1 || toIndex === -1) {
      setDragOverFaqId(null);
      setDraggingFaqId(null);
      return;
    }

    moveFaq(fromIndex, toIndex);
    setDragOverFaqId(null);
    setDraggingFaqId(null);
  };

  const handleDragEnd = () => {
    setDragOverFaqId(null);
    setDraggingFaqId(null);
  };

  // General Programs Tab Content Handlers (Preschool & Learning Courses)
  const handleProgramSubTabChange = (section, tab) => {
    setProgramsState((prev) => ({
      ...prev,
      [section]: {
        // e.g., programsState["preschool"]
        ...prev[section],
        activeSubTab: tab,
      },
    }));
  };

  const handleEditorImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    handleEditorFieldChange("image", url);
  };

  const handleCurriculumSave = () => {
    const editor = programsState.coreCurriculum.editor;
    if (!editor.programName.trim()) {
      alert("Please enter a Program Name/Title.");
      return;
    }

    const newCurriculum = {
      id: editor.isEditing ? editor.id : `cur-${Date.now()}`,
      title: editor.programName.trim(),
      subtitle: editor.subheadline.trim(),
      image: editor.image,
    };

    setProgramsState((prev) => {
      let updatedCurriculums;
      if (editor.isEditing) {
        updatedCurriculums = prev.coreCurriculum.existingCurriculums.map((c) =>
          c.id === editor.id ? newCurriculum : c
        );
      } else {
        // Add new one to the top
        updatedCurriculums = [
          newCurriculum,
          ...prev.coreCurriculum.existingCurriculums.filter(
            (c) => c.id !== newCurriculum.id
          ),
        ];
      }

      return {
        ...prev,
        coreCurriculum: {
          ...prev.coreCurriculum,
          existingCurriculums: updatedCurriculums,
          editor: {
            isEditing: false,
            id: null,
            programName: "",
            subheadline: "",
            image: mockImages.emptyImage,
          },
        },
      };
    });
    console.log("Saved Curriculum", newCurriculum);
  };

  const handleCurriculumStartEdit = (curriculum) => {
    setProgramsState((prev) => ({
      ...prev,
      coreCurriculum: {
        ...prev.coreCurriculum,
        editor: {
          isEditing: true,
          id: curriculum.id,
          programName: curriculum.title,
          subheadline: curriculum.subtitle,
          image: curriculum.image,
        },
      },
    }));
  };

  const handleCurriculumDelete = (id) => {
    if (
      !window.confirm("Are you sure you want to delete this curriculum item?")
    )
      return;
    setProgramsState((prev) => ({
      ...prev,
      coreCurriculum: {
        ...prev.coreCurriculum,
        existingCurriculums: prev.coreCurriculum.existingCurriculums.filter(
          (c) => c.id !== id
        ),
      },
    }));
  };

  const handleCurriculumCancel = () => {
    setProgramsState((prev) => ({
      ...prev,
      coreCurriculum: {
        ...prev.coreCurriculum,
        editor: {
          isEditing: false,
          id: null,
          programName: "",
          subheadline: "",
          image: mockImages.emptyImage,
        },
      },
    }));
  };

  // --- Curriculum Editor Image Upload Ref ---
  const curriculumEditorFileInputRef = useRef(null);

  // --- Preschool/Learning Courses Image Upload Refs ---
  const preschoolFileInputRef = useRef(null);
  const learningCoursesFileInputRef = useRef(null);

  // Placeholder for other tab logic (Testimony, FAQ, etc. - removed to focus on Programs)
  const handleRefresh = () => {
    console.log("Refresh manage content");
  };

  const handleGalleryUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create URL for preview, typically you'd upload this to a server
    const url = URL.createObjectURL(file);

    // Create a new photo object (include an ID for deletion later)
    const newPhoto = {
      id: Date.now(), // Simple unique ID
      url: url,
      // Assuming you'd have an actual filename/server path after real upload
    };

    setGalleryPhotos((prev) => [...prev, newPhoto]);
    // Reset file input value so same file can be uploaded again
    e.target.value = null;
  };

  const handleGalleryDelete = (id) => {
    setGalleryPhotos((prev) => prev.filter((photo) => photo.id !== id));
  };

  // This function should be placed below renderPreschoolProgram and renderCoreCurriculum
  const FeeInputGroup = ({
    label,
    programSection,
    programName,
    field,
    value,
    handler,
  }) => (
    <div className="flex items-center justify-between py-3 border-b border-[#D0D7E0]">
      <span className="text-sm text-[#000000] font-medium w-1/2">{label}</span>
      <div className="flex w-1/2 gap-4">
        {/* Registration Fee */}
        <div className="w-1/2">
          <input
            type="text"
            value={`$ ${value.registration}`}
            onChange={(e) =>
              handler(
                programSection,
                programName,
                "registration",
                e.target.value
              )
            }
            className="w-full border border-[#C9D3E3] rounded-lg px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60"
          />
        </div>

        {/* Monthly Fee */}
        <div className="w-1/2">
          <input
            type="text"
            value={`$ ${value.monthly}`}
            onChange={(e) =>
              handler(programSection, programName, "monthly", e.target.value)
            }
            className="w-full border border-[#C9D3E3] rounded-lg px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60"
          />
        </div>
      </div>
    </div>
  );

  // Helper function to render a full fee group (e.g., Preschool)
  const renderFeeGroup = (title, sectionKey, feesData, handler) => {
    const programFees = feesData[sectionKey];
    if (!programFees) return null;

    return (
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#000000] mb-4 mt-6">
          {title}
        </h3>

        <div className="bg-white p-4 border border-[#D0D7E0] rounded-lg">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#E5E9F1]">
            <span className="text-sm text-[#5B6F8E] font-medium w-1/2">
              Program Name
            </span>
            <div className="flex w-1/2 gap-4">
              <span className="text-sm text-[#5B6F8E] font-medium w-1/2">
                Registration Fee
              </span>
              <span className="text-sm text-[#5B6F8E] font-medium w-1/2">
                Monthly Fee
              </span>
            </div>
          </div>

          {/* Individual Program Fee Rows */}
          {Object.keys(programFees).map((programName) => (
            <FeeInputGroup
              key={programName}
              label={programName}
              programSection={sectionKey}
              programName={programName}
              field="registration" // Not used in the component, just for reference
              value={programFees[programName]}
              handler={handler}
            />
          ))}
        </div>
      </div>
    );
  };

  const renderAdmissionContent = () => {
    // Functions to handle Save/Cancel logic (to be defined globally)
    const handleSaveFees = () => {
      // Implement save logic here (e.g., API call)
      console.log("Saving fees:", feesState);
    };

    const handleCancelFees = () => {
      // Implement cancel logic here (e.g., reset feesState to initial state)
      console.log("Cancelling changes");
      // setFeesState(initialFeesState);
    };

    return (
      <section className="bg-white border border-[#D0D7E0] rounded-xl mb-6">
        {/* Header: Tuition & Fees */}
        <div className="border-[#194A8150] border-b">
          <button
            type="button"
            className="w-full flex items-center justify-between px-6 py-4"
          >
            <span className="font-semibold text-[18px] text-[#000000]">
              Tuition & Fees
            </span>
            <ChevronUp className="text-[#00000050]" size={26} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-[14px] text-[#5B6F8E] mb-6">
            Manage the prices for all available programs and courses
          </p>

          {/* --- Preschool Programs Section --- */}
          {renderFeeGroup(
            "Preschool Programs",
            "preschool",
            feesState,
            handleFeeChange
          )}

          {/* --- Learning Courses Section (Screenshots combined Mathematics & Literacy) --- */}
          {renderFeeGroup(
            "Learning Courses",
            "learningCourses",
            feesState,
            handleFeeChange
          )}

          {/* --- Add other fee groups here (e.g., Core Curriculum, Enrichment) --- */}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={handleCancelFees}
              className="px-5 py-2 rounded-lg border border-[#D0D7E0] bg-white text-sm text-[#5B6F8E] hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSaveFees}
              className="px-6 py-2 rounded-lg bg-[#194A81] text-sm font-semibold text-white hover:bg-[#16325B]"
            >
              Save Changes
            </button>
          </div>
        </div>
      </section>
    );
  };
  const renderPreschoolProgram = () => {
    const section = "preschool";
    const { activeSubTab, ...subTabs } = programsState[section];
    const currentTabContent = subTabs[activeSubTab];

    return (
      <section className="bg-white border border-[#D0D7E0] rounded-xl mb-6">
        <div className="border-[#194A8150] border-b ">
          <button
            type="button"
            onClick={() => setProgramsOpen((o) => !o)} // Assuming this section is always open
            className="w-full flex items-center justify-between px-6 py-4"
          >
            <span className="font-semibold text-[18px] text-[#000000]">
              Preschool Program
            </span>
            <ChevronDown className="text-[#00000050]" size={26} />{" "}
            {/* Can be toggled, but image shows open */}
          </button>
        </div>

        <div className="px-6 pt-5 border-b border-[#D0D7E0]">
          <div className="flex gap-6 text-sm font-medium text-[#5B6F8E]">
            {["Playgroup", "Kindergarten A", "Kindergarten B"].map((tab) => {
              const active = tab === activeSubTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleProgramSubTabChange(section, tab)}
                  className={`pb-2 -mb-px border-b-2 transition ${
                    active
                      ? "border-[#1E3E73] text-[#1E3E73] font-semibold"
                      : "border-transparent hover:text-[#1E3E73] hover:border-[#1E3E73]/50"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-6 pb-6 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.7fr)] gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] text-[#000000] mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  value={currentTabContent.headline}
                  // This call is now correct for the FIXED handler definition (section, activeSubTab, field, value)
                  onChange={(e) =>
                    handleProgramFieldChange(
                      section,
                      activeSubTab,
                      "headline", // or "subheadline"
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
                  value={currentTabContent.subheadline}
                  onChange={(e) =>
                    handleProgramFieldChange(
                      section,
                      activeSubTab,
                      "subheadline",
                      e.target.value
                    )
                  }
                  className="w-full border border-[#C9D3E3] rounded-lg px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60 resize-none"
                />
              </div>
            </div>

            <div>
              <p className="text-[13px] text-[#000000] mb-2">Image</p>
              <div className="border border-dashed border-[#C9D3E3] rounded-xl p-5 bg-[#F8FBFF] flex flex-col items-center justify-center h-full">
                {currentTabContent.image ? (
                  <div className="w-full h-40 md:h-48 mb-4 overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src={currentTabContent.image}
                      alt={`${activeSubTab} banner`}
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
                  onClick={() => preschoolFileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#194A81] rounded-lg text-sm font-medium text-[#000000] bg-white hover:bg-[#EFF5FF] transition"
                >
                  <input
                    ref={preschoolFileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    // This call is now correct for the FIXED handler definition (section, activeSubTab, e)
                    onChange={(e) =>
                      handleProgramImageChange(section, activeSubTab, e)
                    }
                  />
                  Change Image
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={() => handleProgramCancel(section, activeSubTab)}
              className="px-5 py-2 rounded-lg border border-[#D0D7E0] bg-white text-sm text-[#5B6F8E] hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleProgramSave(section, activeSubTab)}
              className="px-6 py-2 rounded-lg bg-[#194A81] text-sm font-semibold text-white hover:bg-[#16325B]"
            >
              Save
            </button>
          </div>
        </div>
      </section>
    );
  };

  const renderCoreCurriculum = () => {
    const { coreCurriculum } = programsState;
    const { editor, existingCurriculums } = coreCurriculum;

    return (
      <section className="bg-white border border-[#D0D7E0] rounded-xl mb-6">
        {/* The Core Curriculum header */}
        <div className="border-[#194A8150] border-b ">
          <button
            type="button"
            onClick={() =>
              setProgramsState((prev) => ({
                ...prev,
                coreCurriculum: {
                  ...prev.coreCurriculum,
                  open: !prev.coreCurriculum.open,
                },
              }))
            }
            className="w-full flex items-center justify-between px-6 py-4"
          >
            <span className="font-semibold text-[18px] text-[#000000]">
              The Core Curriculum
            </span>
            {coreCurriculum.open ? (
              <ChevronUp className="text-[#00000050]" size={26} />
            ) : (
              <ChevronDown className="text-[#00000050]" size={26} />
            )}
          </button>
        </div>

        {coreCurriculum.open && (
          <div className="px-6 py-6">
            {/* Curriculum Editor Card */}
            <div className="border border-[#D0D7E0] rounded-lg p-5 mb-6">
              <h4 className="font-medium text-lg text-[#000000] mb-1">
                Curriculum Editor
              </h4>
              <p className="text-sm text-[#5B6F8E] mb-4">
                {editor.isEditing ? "Edit" : "Add"} curriculum details below.
              </p>

              <div className="space-y-4">
                {/* Program Name/Title */}
                <div>
                  <label className="block text-[13px] text-[#000000] mb-1">
                    Program Name/Title
                  </label>
                  <input
                    type="text"
                    value={editor.programName}
                    onChange={(e) =>
                      handleEditorFieldChange("programName", e.target.value)
                    }
                    className="w-full border border-[#C9D3E3] rounded-lg px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60"
                  />
                </div>

                {/* Subheadline (Text Editor Mockup) */}
                <div>
                  <label className="block text-[13px] text-[#000000] mb-1">
                    Subheadline
                  </label>
                  <div className="border border-[#C9D3E3] rounded-lg overflow-hidden">
                    <div className="flex gap-2 p-2 border-b border-[#C9D3E3] bg-[#F8FBFF]">
                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-100 text-[#5B6F8E]"
                      >
                        <Bold size={16} />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-100 text-[#5B6F8E]"
                      >
                        <Italic size={16} />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-100 text-[#5B6F8E]"
                      >
                        <List size={16} />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-100 text-[#5B6F8E]"
                      >
                        <AlignLeft size={16} />
                      </button>
                      <button
                        type="button"
                        className="p-1 rounded hover:bg-slate-100 text-[#5B6F8E]"
                      >
                        <Link size={16} />
                      </button>
                    </div>
                    <textarea
                      rows={4}
                      value={editor.subheadline}
                      onChange={(e) =>
                        handleEditorFieldChange("subheadline", e.target.value)
                      }
                      className="w-full p-3 text-sm text-[#000000] bg-white outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <p className="text-[13px] text-[#000000] mb-2">
                    Image Upload
                  </p>
                  <div className="border border-dashed border-[#C9D3E3] rounded-xl p-4 bg-[#F8FBFF] flex flex-col items-center justify-center">
                    <div className="w-28 h-28 rounded-lg overflow-hidden mb-3 bg-slate-100 flex items-center justify-center">
                      {editor.image ? (
                        <img
                          src={editor.image}
                          alt="Curriculum"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImagePlus size={35} className="text-[#1E3E73]" />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        curriculumEditorFileInputRef.current?.click()
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 border border-[#194A81] rounded-lg text-sm font-medium text-[#000000] bg-white hover:bg-[#EFF5FF] transition"
                    >
                      <input
                        ref={curriculumEditorFileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleEditorImageChange}
                      />
                      Change Image
                    </button>
                    <p className="mt-2 text-center text-[11px] text-[#8691A8]">
                      Recommended size: 200×200px
                    </p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end gap-3 mt-7">
                <button
                  type="button"
                  onClick={handleCurriculumCancel}
                  className="px-5 py-2 rounded-lg border border-[#D0D7E0] bg-white text-sm text-[#5B6F8E] hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCurriculumSave}
                  className="px-6 py-2 rounded-lg bg-[#194A81] text-sm font-semibold text-white hover:bg-[#16325B]"
                >
                  Save Changes
                </button>
              </div>
            </div>
            {/* End Curriculum Editor Card */}

            {/* Existing Curriculums */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg text-[#000000] mb-3">
                Existing Curriculums
              </h4>
              <div className="space-y-4">
                {existingCurriculums.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-start gap-4 p-4 border border-[#D0D7E0] rounded-xl bg-[#FCFDFE]"
                  >
                    <div className="pt-2">
                      <button
                        type="button"
                        aria-label="Drag curriculum to reorder"
                        className="cursor-grab p-1 rounded-full hover:bg-slate-100"
                      >
                        <MoreVertical className="text-[#B0B7C7]" size={16} />
                      </button>
                    </div>
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100">
                      {c.image && (
                        <img
                          src={c.image}
                          alt={c.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-[#000000]">
                        {c.title}
                      </p>
                      <p className="text-xs text-[#5B6F8E] mt-1 line-clamp-3">
                        {c.subtitle}
                      </p>
                    </div>
                    <div className="flex-shrink-0 pt-2 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleCurriculumStartEdit(c)}
                        className="text-[#5B6F8E] hover:text-[#194A81]"
                        aria-label={`Edit ${c.title}`}
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCurriculumDelete(c.id)}
                        className="text-[#FF4D4D] hover:text-[#CC0000]"
                        aria-label={`Delete ${c.title}`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* End Existing Curriculums */}
          </div>
        )}
      </section>
    );
  };

  const renderLearningCourses = () => {
    const section = "learningCourses";
    const { activeSubTab, ...subTabs } = programsState[section];
    const currentTabContent = subTabs[activeSubTab];
    const subTabKeys = Object.keys(subTabs).filter(
      (key) => typeof subTabs[key] === "object"
    );

    const visibleTabs = subTabKeys.slice(0, 4);
    const hiddenTabs = subTabKeys.slice(4);

    return (
      <section className="bg-white border border-[#D0D7E0] rounded-xl mb-6">
        <div className="border-[#194A8150] border-b ">
          <button
            type="button"
            className="w-full flex items-center justify-between px-6 py-4"
          >
            <span className="font-semibold text-[18px] text-[#000000]">
              Learning Courses
            </span>
            <ChevronUp className="text-[#00000050]" size={26} />{" "}
            {/* Can be toggled, but image shows open */}
          </button>
        </div>

        <div className="px-6 pt-5 border-b border-[#D0D7E0]">
          <div className="flex gap-6 text-sm font-medium text-[#5B6F8E] overflow-x-auto pb-2">
            {visibleTabs.map((tab) => {
              const active = tab === activeSubTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => handleProgramSubTabChange(section, tab)}
                  className={`flex-shrink-0 pb-2 -mb-px border-b-2 transition ${
                    active
                      ? "border-[#1E3E73] text-[#1E3E73] font-semibold"
                      : "border-transparent hover:text-[#1E3E73] hover:border-[#1E3E73]/50"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
            {hiddenTabs.length > 0 && (
              <div className="relative group">
                <button
                  type="button"
                  className={`pb-2 -mb-px border-b-2 transition flex items-center gap-1 ${
                    hiddenTabs.includes(activeSubTab)
                      ? "border-[#1E3E73] text-[#1E3E73] font-semibold"
                      : "border-transparent hover:text-[#1E3E73] hover:border-[#1E3E73]/50"
                  }`}
                >
                  More <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 hidden group-hover:block">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {hiddenTabs.map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => handleProgramSubTabChange(section, tab)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          tab === activeSubTab
                            ? "bg-[#EFF5FF] text-[#1E3E73] font-semibold"
                            : "text-[#5B6F8E] hover:bg-gray-100"
                        }`}
                        role="menuitem"
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="px-6 pb-6 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.7fr)] gap-8">
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] text-[#000000] mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  value={currentTabContent.headline}
                  onChange={(e) =>
                    handleProgramFieldChange(
                      section,
                      activeSubTab,
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
                  value={currentTabContent.subheadline}
                  onChange={(e) =>
                    handleProgramFieldChange(
                      section,
                      activeSubTab,
                      "subheadline",
                      e.target.value
                    )
                  }
                  className="w-full border border-[#C9D3E3] rounded-lg px-3 py-2 text-sm text-[#000000] bg-[#F8FBFF] outline-none focus:ring-2 focus:ring-[#4E92DF]/60 resize-none"
                />
              </div>
            </div>

            <div>
              <p className="text-[13px] text-[#000000] mb-2">Image</p>
              <div className="border border-dashed border-[#C9D3E3] rounded-xl p-5 bg-[#F8FBFF] flex flex-col items-center justify-center h-full">
                {currentTabContent.image ? (
                  <div className="w-full h-40 md:h-48 mb-4 overflow-hidden rounded-lg bg-slate-100">
                    <img
                      src={currentTabContent.image}
                      alt={`${activeSubTab} banner`}
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
                  onClick={() => learningCoursesFileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#194A81] rounded-lg text-sm font-medium text-[#000000] bg-white hover:bg-[#EFF5FF] transition"
                >
                  <input
                    ref={learningCoursesFileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleProgramImageChange(section, activeSubTab, e)
                    }
                  />
                  Change Image
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={() => handleProgramCancel(section, activeSubTab)}
              className="px-5 py-2 rounded-lg border border-[#D0D7E0] bg-white text-sm text-[#5B6F8E] hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleProgramSave(section, activeSubTab)}
              className="px-6 py-2 rounded-lg bg-[#194A81] text-sm font-semibold text-white hover:bg-[#16325B]"
            >
              Save
            </button>
          </div>
        </div>
      </section>
    );
  };

  const renderGalleryContent = () => {
    return (
      <section className="bg-white border border-[#D0D7E0] rounded-xl mb-6">
        {/* Header */}
        <div className="border-[#194A8150] border-b ">
          <div className="w-full flex items-center justify-between px-6 py-4">
            <span className="font-semibold text-[18px] text-[#000000]">
              Gallery
            </span>
            {/* Assuming the arrow controls section collapse */}
            <ChevronUp className="text-[#00000050]" size={26} />
          </div>
        </div>

        {/* Gallery Content Area */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <p className="text-[14px] text-[#5B6F8E]">
              Manage the photos displayed in the website's gallery
            </p>
            <button
              type="button"
              onClick={() => setIsGalleryEditing(!isGalleryEditing)}
              className="flex items-center gap-1 px-4 py-2 rounded-lg bg-[#194A81] text-sm font-semibold text-white hover:bg-[#16325B]"
            >
              {isGalleryEditing ? (
                <>
                  <X size={16} /> Done Editing
                </>
              ) : (
                <>
                  <Pencil size={16} /> Edit Photos
                </>
              )}
            </button>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Upload Image Card */}
            <div
              className="aspect-square border border-dashed border-[#C9D3E3] rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer transition hover:bg-[#F8FBFF]"
              onClick={() => galleryFileInputRef.current?.click()}
            >
              <div className="text-[#5B6F8E] flex flex-col items-center gap-2">
                <ImagePlus size={32} />
                <p className="text-sm font-medium">Upload Image</p>
              </div>
              <input
                ref={galleryFileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleGalleryUpload}
              />
            </div>

            {/* Existing Photos */}
            {galleryPhotos.map((photo) => (
              <div key={photo.id} className="aspect-square relative group">
                <img
                  src={photo.url}
                  alt="Gallery item"
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Editing Overlay (Visible when isGalleryEditing is true) */}
                {isGalleryEditing && (
                  <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-100 transition duration-300">
                    <button
                      type="button"
                      onClick={() => handleGalleryDelete(photo.id)}
                      className="p-2 bg-red-600 rounded-full text-white shadow-lg hover:bg-red-700 transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                )}

                {/* Non-editing hover/focus effect (optional) */}
                {!isGalleryEditing && (
                  <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
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

        {/* Homepage */}
        {activeTab === "Homepage" && (
          <div className="mt-4 space-y-3 pb-10">
            {/* Hero Section card */}
            <section className="bg-white border border-[#194A8150] rounded-t-xl">
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

            {/* Our Programs */}
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
                  <div className="px-6 pt-5 border-b border-[#D0D7E0]">
                    <div className="flex gap-6 text-sm font-medium text-[#5B6F8E]">
                      {["Preschool", "Learning Courses"].map((tab) => {
                        const active = tab === programTab;
                        return (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => setProgramTab(tab)}
                            className={`pb-2 -mb-px border-b-2 transition ${
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

            {/* Testimony */}
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
                      {testimonials.map((t) => {
                        const isDragging = draggingTestimonialId === t.id;
                        const isDragOver = dragOverTestimonialId === t.id;

                        return (
                          <div
                            key={t.id}
                            onDragOver={handleTestDragOver}
                            onDragEnter={(e) => handleTestDragEnter(e, t.id)}
                            onDragLeave={handleTestDragLeave}
                            onDrop={(e) => handleTestDrop(e, t.id)}
                            className={`border border-[#D0D7E0] rounded-xl px-4 py-3 flex items-start gap-3 bg-[#FCFDFE] transition-all ${
                              isDragOver
                                ? "ring-2 ring-dashed ring-[#4E92DF]/40"
                                : ""
                            } ${isDragging ? "opacity-60" : ""}`}
                          >
                            {/* drag handle */}
                            <div className="pt-3">
                              <button
                                type="button"
                                aria-label="Drag testimonial to reorder"
                                draggable
                                onDragStart={(e) =>
                                  handleTestDragStart(e, t.id)
                                }
                                onDragEnd={handleTestDragEnd}
                                className="cursor-grab p-1 rounded-full hover:bg-slate-100"
                              >
                                <MoreVertical
                                  className="text-[#B0B7C7]"
                                  size={16}
                                />
                              </button>
                            </div>

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

                            <div className="flex-1 text-[13px] text-[#4D5C73]">
                              <p className="font-bold text-[#000000]">
                                {t.name}
                              </p>
                              <p className="text-[#000000] mb-1">{t.role}</p>
                              <p className="leading-relaxed">{t.quote}</p>
                            </div>

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
                        );
                      })}

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

        {/* About Us */}
        {activeTab === "About Us" && (
          <div className="mt-6 pb-10 space-y-4">
            <section className="bg-white border border-[#194A8150] rounded-t-xl">
              <div className="border-[#194A8150] border-b ">
                <button
                  type="button"
                  onClick={() => setHeroOpen((o) => !o)}
                  className="w-full flex items-center justify-between px-6 py-4"
                >
                  <span className="font-semibold text-[18px] text-[#000000]">
                    FAQ
                  </span>
                  {heroOpen ? (
                    <ChevronUp className="text-[#00000050]" size={26} />
                  ) : (
                    <ChevronDown className="text-[#00000050]" size={26} />
                  )}
                </button>
              </div>

              {faqOpen && (
                <div className="px-6 py-6 space-y-6">
                  {/* Form to add/edit FAQ */}
                  <div className="border border-[#194A8150] rounded-xl bg-[#F5F5F5] p-5">
                    <div className="mb-4">
                      <label className="block font-semibold text-[16px] text-[#00000070] mb-1">
                        Question
                      </label>
                      <input
                        type="text"
                        placeholder="Enter the question"
                        value={faqQuestion}
                        onChange={(e) => setFaqQuestion(e.target.value)}
                        className="w-full h-[47px] border border-[#194A8150] text-[14px] text-[#00000050] rounded-lg px-3 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-[#4E92DF]/60"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-semibold text-[16px] text-[#00000070] mb-1">
                        Answer
                      </label>
                      <textarea
                        placeholder="Enter the answer"
                        rows={5}
                        value={faqAnswer}
                        onChange={(e) => setFaqAnswer(e.target.value)}
                        className="w-full h-[115px] border border-[#194A8150] text-[14px] text-[#00000050] rounded-lg px-3 py-2 text-sm bg-white outline-none focus:ring-2 focus:ring-[#4E92DF]/60 resize-none"
                      />
                    </div>

                    <div className="flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={resetFaqForm}
                        className="px-4 py-2 rounded-lg border border-[#00000050] bg-white text-sm text-[#5B6F8E] hover:bg-slate-50"
                      >
                        Cancel
                      </button>

                      {editingFaqId ? (
                        <button
                          type="button"
                          onClick={handleSaveFaq}
                          className="px-5 py-2 rounded-lg bg-[#194A81] text-sm font-semibold text-white hover:bg-[#16325B]"
                        >
                          Save Changes
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleAddFaq}
                          className="px-5 py-2 rounded-lg bg-[#0D3C7B] text-sm font-semibold text-white hover:bg-[#072954]"
                        >
                          + Add New FAQ
                        </button>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-[#194A81] mb-3">
                      Existing FAQs
                    </h4>

                    <div className="space-y-3">
                      {faqs.map((f, index) => {
                        const isDragOver = dragOverFaqId === f.id;
                        const isDragging = draggingFaqId === f.id;

                        return (
                          <div
                            key={f.id}
                            // make the whole card a drop target
                            draggable={false}
                            onDragOver={handleDragOver}
                            onDragEnter={(e) => handleDragEnter(e, f.id)}
                            onDragLeave={handleDragLeave}
                            onDrop={(e) => handleDrop(e, f.id)}
                            className={`border border-[#D6E2EF] rounded-lg p-4 bg-white flex gap-4 items-start transition-all ${
                              isDragOver
                                ? "ring-2 ring-dashed ring-[#4E92DF]/40"
                                : ""
                            } ${isDragging ? "opacity-60" : ""}`}
                          >
                            {/* drag handle — make this the draggable element */}
                            <div className="pt-2">
                              <button
                                type="button"
                                aria-label="Drag FAQ to reorder"
                                draggable
                                onDragStart={(e) => handleDragStart(e, f.id)}
                                onDragEnd={handleDragEnd}
                                className="cursor-grab p-1 rounded-full hover:bg-slate-100"
                              >
                                <MoreVertical
                                  className="text-[#B0B7C7]"
                                  size={16}
                                />
                              </button>
                            </div>

                            <div className="flex-1">
                              <p className="text-[15px] font-semibold text-[#000000]">
                                {f.question}
                              </p>
                              <p className="text-[13px] text-[#000000] mt-2 leading-relaxed">
                                {f.answer}
                              </p>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                              <button
                                type="button"
                                onClick={() => handleStartEditFaq(f)}
                                className="p-1 rounded-full hover:bg-slate-100"
                              >
                                <Edit2 size={16} className="text-[#1E3E73]" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteFaq(f.id)}
                                className="p-1 rounded-full hover:bg-slate-100"
                              >
                                <Trash2 size={16} className="text-red-500" />
                              </button>
                            </div>
                          </div>
                        );
                      })}

                      {faqs.length === 0 && (
                        <p className="text-[13px] text-[#6B7280]">
                          No FAQs yet. Use the form above to add one.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        )}

        {/* Programs Tab Content */}
        {activeTab === "Programs" && (
          <div className="mt-4 space-y-3 pb-10">
            {renderPreschoolProgram()}
            {renderCoreCurriculum()}
            {renderLearningCourses()}
          </div>
        )}

        {activeTab === "Gallery" && (
          <div className="mt-4 space-y-3 pb-10">{renderGalleryContent()}</div>
        )}

        {activeTab === "Admission" && (
          <div className="mt-4 space-y-3 pb-10">{renderAdmissionContent()}</div>
        )}

        {/* The rest of the tab content (Homepage, About Us, etc.) can go here but is omitted for brevity */}
      </main>
    </div>
  );
}
