import React from "react";

import backgroundImg from "../../../assets/contact_page/background.png";
import treeImg from "../../../assets/contact_page/tree.png";
import hutImg from "../../../assets/contact_page/hut.png";

export default function ContactFormSection() {
  return (
    <section
      className="relative w-full py-16 md:py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* ===== Tree (bottom-left) ===== */}
      <img
        src={treeImg}
        alt=""
        className="hidden md:block absolute left-0 bottom-0 w-40 pointer-events-none select-none"
      />

      {/* ===== Hut (bottom-right) ===== */}
      <img
        src={hutImg}
        alt=""
        className="hidden md:block absolute right-0 bottom-0 w-44 pointer-events-none select-none"
      />

      {/* ===== Centered Form ===== */}
      <div className="relative z-10 max-w-xl mx-auto px-4 ">
        <h2 className="text-center pb-8 text-[#4D6D8E] text-3xl md:text-4xl font-extrabold">
          Contact Us
        </h2>

        <p className="mt-3 text-center text-[#00000065] text-sm font-semibold md:text-base leading-relaxed">
          Reach out to us with any question or inquiries you may have. Our team
          is ready to assist you!
        </p>

        <form className="mt-8 space-y-6">
          {/* Name */}
          <div className="space-y-1">
            <p className="text-center text-sm font-medium text-[#6B6B6B]">
              Your Name (Required)
            </p>
            <input
              type="text"
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <p className="text-center text-sm font-medium text-[#6B6B6B]">
              Your Email (Required)
            </p>
            <input
              type="email"
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Whatsapp */}
          <div className="space-y-1">
            <p className="text-center text-sm font-medium text-[#6B6B6B]">
              Your Whatsapp (Required)
            </p>
            <input
              type="text"
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Subject */}
          <div className="space-y-1">
            <p className="text-center text-sm font-medium text-[#6B6B6B]">
              Subject
            </p>
            <input
              type="text"
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Message */}
          <div className="space-y-1">
            <p className="text-center text-sm font-medium text-[#6B6B6B]">
              Your Message
            </p>
            <textarea
              rows={6}
              className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#F9A22E]"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="px-8 py-2 bg-[#F9A22E] text-white text-sm font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
