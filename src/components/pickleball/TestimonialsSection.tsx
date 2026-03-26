import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { testimonials } from "./data";
import pickleballEventBg from "@/assets/pickleball-event-bg.jpg";

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 w-full bg-gradient-to-br from-[#163027] to-[#253e35] border-y border-white/5 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* 1. Main Container */}
        <div className="flex flex-col w-full">

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 py-4 lg:py-8">

            {/* 2. Left Section (Visual Anchor Area 55%) */}
            <div className="w-full lg:w-[55%] relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden min-h-[500px] lg:min-h-[700px] group shadow-inner">
              <img
                src={pickleballEventBg}
                alt="Pickleball Event Stage"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />

              {/* Subtle dark gradient overlays for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#102319]/90 via-[#102319]/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#102319]/90 via-transparent to-transparent"></div>

              {/* Overlaid Section Heading (Top-Left) */}
              <div className="absolute top-0 left-0 p-8 md:p-12 z-10 w-full max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-[#a8c78c] text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-6 block"
                >
                  Client Stories
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="font-dela text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1]"
                >
                  How Pickleball Teams Describe
                  <br />
                  <span className="text-[#d0e999]"> Working With EyeLevel.</span>
                </motion.h2>
              </div>

              {/* Highlight Metric (Bottom-Right) */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10 text-right">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="font-dela text-6xl md:text-[5rem] text-[#d0e999] drop-shadow-[0_0_30px_rgba(208,233,153,0.3)] leading-none mb-1">
                    +98%
                  </p>
                  <p className="text-white/90 text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
                    Sponsor Satisfaction
                  </p>
                </motion.div>
              </div>
            </div>

            {/* 3. Right Section (Stacked Testimonials 45%) */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center gap-4 py-2 lg:py-6 lg:pr-4">
              {testimonials.map((t, i) => {
                const isActive = activeIndex === i;

                return (
                  <motion.div
                    key={i}
                    onMouseEnter={() => setActiveIndex(i)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative p-8 md:p-10 rounded-[2rem] cursor-pointer transition-all duration-[400ms] ease-out flex flex-col overflow-hidden will-change-transform ${isActive
                      ? "bg-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] scale-[1.03] z-10"
                      : "bg-white/[0.02] scale-100 hover:bg-white/[0.04] opacity-50 hover:opacity-75 z-0"
                      }`}
                  >
                    {/* Active highlight glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-[#d0e999]/[0.03] to-transparent pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="flex gap-1.5">
                        {Array(5).fill(0).map((_, j) => (
                          <Star
                            key={j}
                            className={`w-4 h-4 md:w-[18px] md:h-[18px] transition-colors duration-300 ${isActive ? "fill-[#d0e999] text-[#d0e999]" : "fill-[#d0e999]/50 text-[#d0e999]/50"
                              }`}
                          />
                        ))}
                      </div>
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase transition-colors duration-300 ${isActive ? "bg-[#d0e999] text-[#102319]" : "bg-[#d0e999]/10 text-[#d0e999]"
                        }`}>
                        {t.role}
                      </span>
                    </div>

                    <p className={`text-sm md:text-base font-light mb-8 transition-colors duration-300 relative z-10 ${isActive ? "text-white" : "text-white/60"
                      }`}>
                      "{t.quote}"
                    </p>

                    <p className={`text-[11px] font-bold tracking-wider mt-auto transition-colors duration-300 relative z-10 uppercase ${isActive ? "text-[#d0e999]" : "text-white/30"
                      }`}>
                      {t.name} <span className="text-white/20 mx-2">|</span> {t.event}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* 5. CTA Section (Bottom Bar) */}
          <div className="bg-[#102319]/40 border border-white/5 p-6 md:p-8 mt-10 md:mt-16 mb-4 lg:mb-8 rounded-[1.5rem] lg:rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md shadow-xl w-full">
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-white text-lg md:text-xl font-medium tracking-wide">
                Are you the next one?
              </span>
              <span className="text-[#a8c78c] text-sm font-light mt-1">
                Let's discuss your next pickleball event.
              </span>
            </div>

            <button
              onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-[#d0e999] hover:bg-[#bce070] text-[#102319] text-[13px] font-extrabold uppercase tracking-widest rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(208,233,153,0.3)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3"
            >
              Work With EyeLevel <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
