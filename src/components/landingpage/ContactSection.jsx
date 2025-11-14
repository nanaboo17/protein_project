import React from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  Music2,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#FEF7EC] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Our Location */}
          <div>
            <h3 className="text-[#194A81] text-2xl font-semibold">
              Our Location
            </h3>
            <div className="w-12 h-[3px] bg-[#194A8171] mt-2 mb-6 rounded-full" />

            {/* Clickable Google Maps Embed */}
            <div className="bg-white rounded shadow-md overflow-hidden inline-block">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.332009981678!2d131.32886449999998!3d-0.8945863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d5955aedc3509f5%3A0xecb20c710c1e2bb8!2sBIMBEL%20KURSUS%20RUMAH%20SUKSES!5e0!3m2!1sen!2sid!4v1763122127944!5m2!1sen!2sid"
                width="320"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-[#194A81] text-2xl font-semibold">Address</h3>
            <div className="w-12 h-[3px] bg-[#194A8171] mt-2 mb-6 rounded-full" />

            <div className="space-y-6 text-[#35507A] text-sm leading-relaxed">
              <div>
                <p className="font-semibold text-[#1E3E73]">
                  Khadijah Islamic Preschool
                </p>
                <p>
                  Jl. Anggrek I Kompleks Harapan Indah Masuk No.KM. 12,
                  Klawuyuk, Distrik Sorong Timur, Kota Sorong, Papua Bar. 98417
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#1E3E73]">
                  Bimbel & Kursus Rumah Sukses
                </p>
                <p>
                  Jl. S. Kamundan Masuk No.KM.12, Klawuyuk, Distrik Sorong
                  Timur, Kabupaten Sorong, Papua Bar. 98417
                </p>
                <p className="mt-2">
                  (021)
                  <br />
                  +62 8
                </p>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-[#194A81] text-2xl font-semibold">
              Get In Touch
            </h3>
            <div className="w-12 h-[3px] bg-[#194A8171] mt-2 mb-6 rounded-full" />

            <p className="text-[#35507A] text-sm mb-4 font-semibold">
              Connect with Us
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F9A22E] flex items-center justify-center shadow">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F9A22E] flex items-center justify-center shadow">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F9A22E] flex items-center justify-center shadow">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F9A22E] flex items-center justify-center shadow">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F9A22E] flex items-center justify-center shadow">
                <Music2 className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
