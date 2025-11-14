import React from "react";

export default function TitleSection() {
  return (
    <section className="w-full  border-t-4 border-[#F9A22E] pb-1 pt-7">
      <div className="  grid grid-cols-1 md:grid-cols-4 gap-5 px-2 mx-auto">
        {/* ===== CARD 1 ===== */}
        <div className="bg-[#6EA3B5] w-[400px] h-[266px] text-white px-6 py-6 text-center border-r border-white/40">
          <h3 className="text-lg font-semibold mb-2">
            Khadijah Islamic <br /> Preschool
          </h3>

          <p className="text-sm leading-relaxed">
            Jl. Anggrek I Kompleks Harapan Indah <br />
            Masuk No.KM. 12, Klawuyuk, Distrik <br />
            Sorong Timur, Kota Sorong, Papua Bar. <br />
            98417
          </p>
        </div>

        {/* ===== CARD 2 ===== */}
        <div className="bg-[#6EA3B5] w-[400px] h-[266px] text-white px-6 py-6 text-center border-r border-white/40">
          <h3 className="text-lg font-semibold mb-2">
            Bimbel & Kursus <br />
            Rumah Sukses
          </h3>

          <p className="text-sm leading-relaxed">
            JL. S. Kamundan Masuk No.KM.12, <br />
            Klawuyuk, Distrik Sorong Timur, <br />
            Kabupaten Sorong, Papua Bar. <br />
            98417
          </p>
        </div>

        {/* ===== CARD 3 ===== */}
        <div className="bg-[#6EA3B5] w-[400px] h-[266px] text-white px-6 py-6 text-center border-r border-white/40">
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>

          <p className="text-sm leading-relaxed">
            <span className="font-semibold">Preschool:</span> 085233302350
            <br />
            <span className="font-semibold">Learning Course:</span> 085233302350
          </p>
        </div>

        {/* ===== CARD 4 ===== */}
        <div className="bg-[#6EA3B5] w-[400px] h-[266px] text-white px-6 py-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Operational Hours</h3>

          <p className="text-sm leading-relaxed">
            <span className="font-semibold">Preschool:</span>
            <br /> Monday – Saturday, 7.00am–9.00 pm
            <br />
            <span className="font-semibold">Learning Course:</span>
            <br /> Monday – Saturday, 11.00am–9.00 pm
          </p>
        </div>
      </div>
    </section>
  );
}
