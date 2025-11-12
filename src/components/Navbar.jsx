import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger & close icons

export default function Navbar() {
  const [isOn, setIsOn] = useState(false); // toggle switch
  const [isMenuOpen, setIsMenuOpen] = useState(false); // sidebar toggle

  return (
    <nav className="bg-[#F9A22E] w-full py-5 shadow-md relative">
      {/* ====== Desktop Navbar ====== */}
      <div className="max-w-7xl mx-auto hidden md:flex items-center justify-center space-x-10">
        <a
          href="#"
          className="text-white text-[19px] font-semibold hover:opacity-80"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white text-[19px] font-semibold hover:opacity-80"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-white text-[19px] font-semibold hover:opacity-80"
        >
          Programs
        </a>
        <a
          href="#"
          className="text-white text-[19px] font-semibold hover:opacity-80"
        >
          Gallery
        </a>
        <a
          href="#"
          className="text-white text-[19px] font-semibold hover:opacity-80"
        >
          Contact Us
        </a>

        {/* Toggle Switch */}
        <div
          onClick={() => setIsOn(!isOn)}
          className={`ml-10 w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            isOn ? "bg-green-400" : "bg-gray-200"
          }`}
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </div>
      </div>

      {/* ====== Mobile Navbar (Hamburger) ====== */}
      <div className="flex md:hidden items-center justify-between px-6">
        {/* Hamburger Icon */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="text-white w-6 h-6" />
          ) : (
            <Menu className="text-white w-6 h-6" />
          )}
        </button>

        {/* Toggle Switch (mobile) */}
        <div
          onClick={() => setIsOn(!isOn)}
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            isOn ? "bg-green-400" : "bg-gray-200"
          }`}
        >
          <div
            className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </div>
      </div>

      {/* ====== Sidebar ====== */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#F9A22E] shadow-lg transform transition-transform duration-300 md:hidden z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/30">
          <h2 className="text-white text-lg font-bold">Menu</h2>
          <X
            className="text-white w-6 h-6 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        <div className="flex flex-col items-start p-6 space-y-5">
          <a
            href="#"
            className="text-white text-lg font-semibold hover:opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            Programs
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Overlay (click to close sidebar) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
