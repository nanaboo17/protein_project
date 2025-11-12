import React from "react";
import aboutImg from "../../assets/landing_page/about-section.png";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-white py-20 px-20 flex items-center justify-between">
      {/* Left Image Section */}
      <div className="bg-black w-[45%] flex justify-center mb-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <img
            src={aboutImg}
            alt="Student writing"
            className="w-[550px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-[50%] pl-10 text-left">
        <h2 className="text-[#1E3E73] text-4xl font-bold leading-snug mb-5">
          About us
        </h2>

        <p className="text-[#35507A] text-[17px] leading-relaxed max-w-xl">
          Yayasan Pendidikan dan Pelatihan Rumah Sukses is an educational
          foundation dedicated to nurturing bright, confident, and well-rounded
          individuals who are ready to thrive in the future.
          <br />
          <br />
          Based in Kota Sorong, Papua, our foundation serves the community
          through two main programs: Khadijah Islamic Preschool and Rumah Sukses
          Learning Center. These programs provide a continuous pathway of
          education, from early childhood to academic enrichment for school-aged
          children.
          <br />
          <br />
          We are committed to creating a safe, joyful, and inspiring learning
          environment where every child is valued as a unique individual. By
          combining academic excellence, creativity, and character development,
          we aim to empower students to reach their fullest potential and
          contribute positively to their communities.
        </p>

        {/* Stats Section */}
        <div className="flex justify-start items-center gap-6 mt-10">
          <div className="bg-[#194A81] text-white rounded-2xl px-8 py-4 text-center">
            <p className="text-2xl font-bold">20+</p>
            <p className="text-sm">Expert Teachers</p>
          </div>

          <div className="bg-[#194A81] text-white rounded-2xl px-8 py-4 text-center">
            <p className="text-2xl font-bold">150+</p>
            <p className="text-sm">Happy Grads</p>
          </div>

          <div className="bg-[#194A81] text-white rounded-2xl px-8 py-4 text-center">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-sm">Learning Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
