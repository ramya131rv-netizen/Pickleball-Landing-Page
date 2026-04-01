import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import pickleballHeroBg from "@/assets/pickleball-hero-bg.jpg";
import pickleballEventBg from "@/assets/pickleball-event-bg.jpg";
import { fadeUp } from "./data";
import { g } from "vitest/dist/chunks/suite.d.FvehnV49.js";

// gallery
import gallery1 from "@/assets/gallery/gallery-1.webp";
import gallery2 from "@/assets/gallery/gallery-2.webp";
import gallery3 from "@/assets/gallery/gallery-3.webp";
import gallery4 from "@/assets/gallery/gallery-4.webp";
import gallery5 from "@/assets/gallery/gallery-5.webp";
import gallery6 from "@/assets/gallery/gallery-6.webp";

export const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const galleryItems = [
    {
      src: gallery1,
      caption: "WPPL Season 1 — Official Stage & LED Setup",
    },
    {
      src: gallery2,
      caption: "WPPL Season 1 — Match action on court",
    },
    { src: gallery3, caption: "WPPL Season 1 — Trophy Ceremony" },
    { src: gallery4, caption: "Chennai Super Champs — Court branding" },
    { src: gallery5, caption: "Bengaluru Jawans — Event branding" },
    { src: gallery6, caption: "TNPA — Players action shot" },
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + galleryItems.length) % galleryItems.length,
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getStyle = (index: number) => {
    const diff =
      (index - currentIndex + galleryItems.length) % galleryItems.length;

    // We want diff to be -1, 0, or 1 for the visible items.
    let abstractDiff = diff;
    if (diff > galleryItems.length / 2) {
      abstractDiff = diff - galleryItems.length;
    }

    if (abstractDiff === 0) {
      return { x: "0%", scale: 1, zIndex: 10, opacity: 1, rotateY: 0 };
    } else if (abstractDiff === 1) {
      return { x: "60%", scale: 0.85, zIndex: 5, opacity: 0.5, rotateY: -15 };
    } else if (abstractDiff === -1) {
      return { x: "-60%", scale: 0.85, zIndex: 5, opacity: 0.5, rotateY: 15 };
    } else {
      return {
        x: abstractDiff > 0 ? "100%" : "-100%",
        scale: 0.8,
        zIndex: 0,
        opacity: 0,
        rotateY: 0,
      };
    }
  };

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-background-deep">
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="text-center mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#d0e999]/70 font-bold">
            In Action
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp}
          className="font-dela text-4xl sm:text-5xl md:text-6xl text-white text-center mb-4 leading-tight"
        >
          See What We Build.
        </motion.h2>

        <motion.p
          {...fadeUp}
          className="text-center text-white/50 text-sm md:text-base max-w-2xl mx-auto mb-20 font-light leading-relaxed"
        >
          From the LED wall to the Instagram reel — this is what EyeLevel looks
          like in the field.
        </motion.p>

        {/* Carousel Container */}
        <div className="relative w-full h-[400px] md:h-[450px] lg:h-[550px] flex items-center justify-center perspective-[1200px]">
          <AnimatePresence initial={false} custom={direction}>
            {galleryItems.map((item, index) => {
              const currentStyle = getStyle(index);
              // Only render if it's currently visible to save performance,
              // but framer motion opacity:0 works fine too.
              if (currentStyle.opacity === 0) return null;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: currentStyle.x,
                    scale: currentStyle.scale,
                    zIndex: currentStyle.zIndex,
                    opacity: currentStyle.opacity,
                    rotateY: currentStyle.rotateY,
                  }}
                  transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => {
                    if (currentStyle.x === "60%") handleNext();
                    if (currentStyle.x === "-60%") handlePrev();
                  }}
                  className={`absolute w-full max-w-[85vw] md:max-w-4xl h-full aspect-[4/3] sm:aspect-video rounded-[2rem] overflow-hidden shadow-2xl ${
                    currentStyle.x === "0%"
                      ? "cursor-default"
                      : "cursor-pointer"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover pointer-events-none"
                  />

                  {/* Subtle Image Overlay */}
                  <div
                    className={`absolute inset-0 bg-[#253e35] transition-opacity duration-700 pointer-events-none ${
                      currentStyle.x === "0%" ? "opacity-0" : "opacity-40"
                    }`}
                  ></div>

                  {/* Caption for Center Item */}
                  {/* <motion.div
                    animate={{ opacity: currentStyle.x === "0%" ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-dela text-xl md:text-2xl text-white mb-2 leading-tight drop-shadow-lg">
                        {item.caption.split(" — ")[0]}
                      </h4>
                      <p className="text-[#d0e999] text-sm font-semibold tracking-wide drop-shadow-md">
                        {item.caption.split(" — ")[1]}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 hidden sm:flex">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </motion.div> */}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Navigation Controls overlay layer */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 z-20 pointer-events-none">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#253e35]/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center pointer-events-auto hover:bg-lime hover:text-[#253e35] hover:border-[#d0e999] transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#253e35]/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center pointer-events-auto hover:bg-lime hover:text-[#253e35] hover:border-[#d0e999] transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-12 relative z-20">
          {galleryItems.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "bg-lime scale-125"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
