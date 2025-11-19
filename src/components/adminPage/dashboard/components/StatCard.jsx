// src/components/admin/StatCard.jsx
import React from "react";

export default function StatCard({ label, value, icon }) {
  return (
    <div className="relative bg-white rounded-[20px] shadow-sm flex items-center justify-between px-6 py-5">
      {/* LEFT GREEN VERTICAL SHADOW */}
      <div className="absolute left-0 top-0 h-full w-2 rounded-[30px] border-l-6 border-[#647559] " />

      {/* TEXT */}
      <div className="z-10">
        <p className="text-[14px] text-black font-medium">{label}</p>
        <p className="mt-2 text-[28px] font-bold text-black">{value}</p>
      </div>

      {/* ICON PNG */}
      <img
        src={icon}
        alt="stat icon"
        className="w-[55px] h-[55px] object-contain opacity-90"
      />
    </div>
  );
}
