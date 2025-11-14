import React from "react";

// Import ALL your gallery images here
import img1 from "../../assets/gallery/img1.png";
import img2 from "../../assets/gallery/img2.png";
import img3 from "../../assets/gallery/img3.png";
import img4 from "../../assets/gallery/img4.png";
import img5 from "../../assets/gallery/img5.png";
import img6 from "../../assets/gallery/img6.png";
import img7 from "../../assets/gallery/img7.png";
import img8 from "../../assets/gallery/img8.png";
import img9 from "../../assets/gallery/img9.png";
import img10 from "../../assets/gallery/img10.png";
import img11 from "../../assets/gallery/img11.png";
import img12 from "../../assets/gallery/img12.png";
import img13 from "../../assets/gallery/img13.png";
import img14 from "../../assets/gallery/img14.png";
import img15 from "../../assets/gallery/img15.png";
import img16 from "../../assets/gallery/img16.png";
import img17 from "../../assets/gallery/img17.png";
import img18 from "../../assets/gallery/img18.png";
import img19 from "../../assets/gallery/img19.png";
import img20 from "../../assets/gallery/img20.png";

// Put them all inside this array
const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
];

export default function GallerySection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="w-full">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto rounded-xl object-cover shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
