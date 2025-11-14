import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOn, setIsOn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false); // desktop dropdown
  const [isContactOpen, setIsContactOpen] = useState(false); // admission dropdown
  const [isProgramsMobileOpen, setIsProgramsMobileOpen] = useState(false); // mobile dropdown

  return (
    <nav className="bg-[#F9A22E] w-full py-5 shadow-md relative">
      {/* ====== Desktop Navbar ====== */}
      <div className="max-w-7xl mx-auto hidden md:flex items-center justify-center space-x-10">
        <Link
          to="/"
          className="text-white text-[19px] font-semibold hover:opacity-80"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-white text-[19px] font-semibold hover:opacity-80"
        >
          About Us
        </Link>

        {/* Programs dropdown (desktop) */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsProgramsOpen((prev) => !prev)}
            className="flex items-center gap-1 text-white text-[19px] font-semibold hover:opacity-80"
          >
            Programs
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isProgramsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProgramsOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-lg bg-white shadow-lg py-2 z-50"
              onMouseLeave={() => setIsProgramsOpen(false)}
            >
              <Link
                to="/programs/preschool"
                className="block px-4 py-2 text-[#1E3E73] text-[15px] font-medium hover:bg-[#FDF3DF]"
                onClick={() => setIsProgramsOpen(false)}
              >
                Preschool
              </Link>
              <Link
                to="/programs/bimbel"
                className="block px-4 py-2 text-[#1E3E73] text-[15px] font-medium hover:bg-[#FDF3DF]"
                onClick={() => setIsProgramsOpen(false)}
              >
                Bimbel & Kursus
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/gallery"
          className="text-white text-[19px] font-semibold hover:opacity-80"
        >
          Gallery
        </Link>

        {/* Admission dropdown (desktop) */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsContactOpen((prev) => !prev)}
            className="flex items-center gap-1 text-white text-[19px] font-semibold hover:opacity-80"
          >
            Admission
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isContactOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isContactOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-lg bg-white shadow-lg py-2 z-50"
              onMouseLeave={() => setIsContactOpen(false)}
            >
              <Link
                to="/admissions/contact"
                className="block px-4 py-2 text-[#1E3E73] text-[15px] font-medium hover:bg-[#FDF3DF]"
                onClick={() => setIsContactOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/admissions/enroll"
                className="block px-4 py-2 text-[#1E3E73] text-[15px] font-medium hover:bg-[#FDF3DF]"
                onClick={() => setIsContactOpen(false)}
              >
                Enroll Kid
              </Link>
            </div>
          )}
        </div>

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

      {/* ====== Sidebar (Mobile menu) ====== */}
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
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-white text-lg font-semibold hover:opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>

          {/* Programs dropdown (mobile) */}
          <button
            onClick={() => setIsProgramsMobileOpen(!isProgramsMobileOpen)}
            className="flex items-center justify-between w-full text-white text-lg font-semibold hover:opacity-80"
          >
            <span>Programs</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isProgramsMobileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProgramsMobileOpen && (
            <div className="ml-4 mt-2 space-y-2">
              <Link
                to="/programs/preschool"
                className="block text-white text-base hover:opacity-80"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsProgramsMobileOpen(false);
                }}
              >
                Preschool
              </Link>
              <Link
                to="/programs/bimbel"
                className="block text-white text-base hover:opacity-80"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsProgramsMobileOpen(false);
                }}
              >
                Bimbel & Kursus
              </Link>
            </div>
          )}

          <Link
            to="/gallery"
            className="text-white text-lg font-semibold hover:opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-semibold hover:opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}
