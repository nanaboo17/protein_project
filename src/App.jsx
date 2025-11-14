import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/landingpage/HomePage";
import AboutPage from "./components/aboutUs/AboutPage";
import PreschoolProgramsPage from "./components/programs/preschool/PreschoolProgramsPage";
import BimbelProgramsPage from "./components/programs/bimbel/BimbelProgramsPage";
import GalleryPage from "./components/gallery/GalleryPage";
import ContactUsPage from "./components/admission/contact/ContactUsPage";
import EnrollKidPage from "./components/admission/enroll/EnrollKidPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs/preschool" element={<PreschoolProgramsPage />} />
        <Route path="/programs/bimbel" element={<BimbelProgramsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/admissions/contact" element={<ContactUsPage />} />
        <Route path="/admissions/enroll" element={<EnrollKidPage />} />
      </Routes>
    </>
  );
}
