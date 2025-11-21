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
import AdminLogin from "./components/adminPage/loginPage/adminPage";
import AdminDashboard from "./components/adminPage/dashboard/DashboardPage";
import ContactInquiries from "./components/adminPage/dashboard/ContactInquiriesPage";
import ContactInquiryResponse from "./components/adminPage/dashboard/ReplyContain";
import EnrollmentSuccessPage from "./components/admission/enroll/EnrollmentSuccess";
import EnrollmentDataPage from "./components/adminPage/Enrollment/EnrollmentPage";
import ManageContent from "./components/adminPage/managecontent/ManageContentPage";
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
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/inquiries" element={<ContactInquiries />} />
        <Route
          path="/admin/inquiries/response"
          element={<ContactInquiryResponse />}
        />
        <Route path="/enrollment/success" element={<EnrollmentSuccessPage />} />
        <Route path="/admin/enrollment" element={<EnrollmentDataPage />} />
        <Route path="/admin/content" element={<ManageContent />} />
      </Routes>
    </>
  );
}
