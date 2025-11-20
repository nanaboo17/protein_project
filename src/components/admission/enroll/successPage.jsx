import React from "react";
import { CheckCircle } from "lucide-react";
import type { SVGProps } from "react";

import bg from "../../../assets/contact_page/background.png";
import tree from "../../../assets/contact_page/tree.png";
import hut from "../../../assets/contact_page/hut.png";

export default function EnrollmentSuccess() {
  const handleWhatsapp = () => {
    window.open(
      "https://wa.me/62XXXXXXXXX?text=Hello, I want to confirm my enrollment payment.",
      "_blank"
    );
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-start pt-12 px-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating decor */}
      <img
        src={tree}
        className="absolute bottom-0 left-0 w-40 md:w-56 select-none pointer-events-none"
        alt=""
      />
      <img
        src={hut}
        className="absolute bottom-0 right-0 w-48 md:w-64 select-none pointer-events-none"
        alt=""
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#4D6D8E] text-center">
        Enroll Your Kid
      </h1>

      <p className="mt-2 text-[#35507A] text-center">
        We'll contact you for more details.
      </p>

      {/* Main card */}
      <div className="mt-10 h-[639px] bg-white border border-[#D0D7E0] shadow-md rounded-[10px] w-full max-w-lg p-8 pt-20 text-center z-10">
        {/* Icon */}
        <div className="flex justify-center mb-4 pb-[19px]">
          <CheckCircle size={80} className="text-green-500" />
        </div>

        <h2 className="text-[35px] font-bold text-[#4D6D8E]">
          Enrollment Submitted!
        </h2>

        <p className="mt-3 px-[35px] py-[49px] text-[#5B6F8E] font-semibold leading-relaxed text-[18px]">
          Your enrollment form and proof of payment have been received. Our team
          will review your submission and notify you once verification is
          complete, typically within 1–2 business days.
        </p>

        {/* WhatsApp button */}
        <button
          onClick={handleWhatsapp}
          className="mt-6 w-full bg-[#4E92DF] hover:bg-[#3884da] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="whatsapp"
            className="w-5 h-5"
          />
          Confirm Payment via WhatsApp
        </button>

        <p className="mt-4 text-xs text-[#727D92]">
          For a faster verification process, please click the button above to
          notify our admin.
        </p>
      </div>
    </div>
  );
}
