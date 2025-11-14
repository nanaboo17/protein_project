import React from "react";

// curriculum cards
import practicalImg from "../../../assets/preschool_page/practical.png";
import sensorialImg from "../../../assets/preschool_page/sensorial.png";
import mathImg from "../../../assets/preschool_page/mathematics.png";
import literacyImg from "../../../assets/preschool_page/language.png";
import culturalImg from "../../../assets/preschool_page/cultural.png";
import enrichmentImg from "../../../assets/preschool_page/enrichment.png";
import sunImg from "../../../assets/preschool_page/sun.png";

// bottom decorations
import treeImg from "../../../assets/preschool_page/tree.png";
import hutImg from "../../../assets/preschool_page/hut.png";
import bgImg from "../../../assets/preschool_page/background.png";

export default function CoreCurriculumSection() {
  return (
    <section
      className="relative w-full bg-white py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Sun image top right */}
      <img
        src={sunImg}
        alt="Sun"
        className="hidden md:block absolute top-6 right-8 w-40 pointer-events-none select-none"
      />

      {/* Decorative bottom illustrations */}
      <img
        src={treeImg}
        alt=""
        className="hidden md:block absolute bottom-0 left-0 w-[364px] h-[268px] pointer-events-none select-none"
      />
      <img
        src={hutImg}
        alt=""
        className="hidden md:block absolute bottom-0 right-0 w-[314px] h-[314px] pointer-events-none select-none"
      />

      {/* Content container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Heading */}
        <h2 className="text-center text-[#1E3E73] text-3xl md:text-4xl font-extrabold">
          The Core Curriculum
        </h2>
        <div className="mt-2 h-[5px] w-[150px] bg-[#F9A22E] mx-auto rounded-full" />

        {/* First row of 3 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Practical Life */}
          <div className="flex flex-col items-center text-center">
            <img
              src={practicalImg}
              alt="Practical Life"
              className="w-[297px] h-[292px] object-cover shadow-md border-20 border-[#E9E9E9]"
            />
            <h3 className="mt-11 text-[#1E3E73] text-lg font-extrabold tracking-wide uppercase">
              Practical Life
            </h3>
            <p className="mt-3 text-[#5B6F8E] text-sm leading-relaxed max-w-xs">
              Through a series of daily activities such as pouring, cleaning,
              organizing, and self care, children learn coordination,
              concentration, and responsibility. These skills help them grow
              into independent individuals with confidence and strong character.
            </p>
          </div>

          {/* Sensorial Development */}
          <div className="flex flex-col items-center text-center">
            <img
              src={sensorialImg}
              alt="Sensorial Development"
              className="w-[297px] h-[292px] object-cover shadow-md border-20 border-[#E9E9E9]"
            />
            <h3 className="mt-11 text-[#1E3E73] text-lg font-extrabold tracking-wide uppercase">
              Sensorial Development
            </h3>
            <p className="mt-3 text-[#5B6F8E] text-sm leading-relaxed max-w-xs">
              Children discover the world through their five senses with hands
              on learning. By strengthening their ability to see, hear, touch,
              smell, and taste, they build awareness that prepares them for
              mathematics, reading, and writing.
            </p>
          </div>

          {/* Mathematics */}
          <div className="flex flex-col items-center text-center">
            <img
              src={mathImg}
              alt="Mathematics"
              className="w-[297px] h-[292px] object-cover shadow-md border-20 border-[#E9E9E9]"
            />
            <h3 className="mt-11 text-[#1E3E73] text-lg font-extrabold tracking-wide uppercase">
              Mathematics
            </h3>
            <p className="mt-3 text-[#5B6F8E] text-sm leading-relaxed max-w-xs">
              Children are introduced to numbers in a joyful and concrete way
              through counting, sorting, shapes, and patterns. These early
              experiences lay the foundation for logical thinking and problem
              solving in the future.
            </p>
          </div>
        </div>

        {/* Second row of 3 */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Language & Literacy */}
          <div className="flex flex-col items-center text-center">
            <img
              src={literacyImg}
              alt="Language & Literacy"
              className="w-[297px] h-[292px] object-cover shadow-md border-20 border-[#E9E9E9]"
            />
            <h3 className="mt-11 text-[#1E3E73] text-lg font-extrabold tracking-wide uppercase">
              Language &amp; Literacy
            </h3>
            <p className="mt-3 text-[#5B6F8E] text-sm leading-relaxed max-w-xs">
              Through stories, songs, and engaging activities, children are
              guided step by step in recognizing sounds, letters, and words.
              This natural process develops reading, writing, and communication
              skills in an enjoyable way.
            </p>
          </div>

          {/* Cultural Studies */}
          <div className="flex flex-col items-center text-center">
            <img
              src={culturalImg}
              alt="Cultural Studies"
              className="w-[297px] h-[292px] object-cover shadow-md border-20 border-[#E9E9E9]"
            />
            <h3 className="mt-11 text-[#1E3E73] text-lg font-extrabold tracking-wide uppercase">
              Cultural Studies
            </h3>
            <p className="mt-3 text-[#5B6F8E] text-sm leading-relaxed max-w-xs">
              Children explore geography, nature, animals, history, and simple
              science projects. These experiences encourage curiosity and
              provide a better understanding of the world and different cultures
              around them.
            </p>
          </div>

          {/* Enrichment Activities */}
          <div className="flex flex-col items-center text-center">
            <img
              src={enrichmentImg}
              alt="Enrichment Activities"
              className="w-[297px] h-[292px] object-cover shadow-md border-20 border-[#E9E9E9]"
            />
            <h3 className="mt-11 text-[#1E3E73] text-lg font-extrabold tracking-wide uppercase">
              Enrichment Activities
            </h3>
            <p className="mt-3 text-[#5B6F8E] text-sm leading-relaxed max-w-xs">
              Beyond academics, children grow holistically through arts and
              crafts, music and movement, cooking, outdoor play, and physical
              activities. These programs encourage creativity, social
              interaction, and a love for learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
