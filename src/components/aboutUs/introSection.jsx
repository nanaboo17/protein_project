import React from "react";
import waveBottom from "../../assets/about_page/about-wave-bottom.png"; // <- replace with your wave image

export default function AboutIntroSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      {/* Text + Buttons */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[#1E3E73] text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6">
          Welcome to Yayasan Pendidikan &amp;
          <br />
          Pelatihan Rumah Sukses!
        </h2>

        <p className="text-[#35507A] text-sm md:text-base leading-relaxed mb-4">
          Yayasan Pendidikan dan Pelatihan Rumah Sukses is an educational
          foundation dedicated to nurturing bright, confident, and well-rounded
          individuals who are ready to thrive in the future.
        </p>
        <p className="text-[#35507A] text-sm md:text-base leading-relaxed mb-4">
          Based in Kota Sorong, Papua, our foundation serves the community
          through two main programs: Khadijah Islamic Preschool and Rumah Sukses
          Learning Center. These programs provide a continuous pathway of
          education, from early childhood to academic enrichment for school-aged
          children.
        </p>
        <p className="text-[#35507A] text-sm md:text-base leading-relaxed">
          We are committed to creating a safe, joyful, and inspiring learning
          environment where every child is valued as a unique individual. By
          combining academic excellence, creativity, and character development,
          we aim to empower students to reach their fullest potential and
          contribute positively to their communities.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#F9A22E] hover:bg-[#e8911e] text-white px-6 md:px-8 py-3 rounded-full font-semibold text-sm md:text-base shadow-md transition-colors duration-300"
          >
            Download Preschool Brochure
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#F9A22E] hover:bg-[#e8911e] text-white px-6 md:px-8 py-3 rounded-full font-semibold text-sm md:text-base shadow-md transition-colors duration-300"
          >
            Download Learning Course Brochure
          </a>
        </div>
      </div>

      {/* Video */}
      <div className="mt-12 flex justify-center px-4">
        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Khadijah Islamic Montessori Preschool"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="mt-14">
        <img
          src={waveBottom}
          alt="Decorative wave"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}
