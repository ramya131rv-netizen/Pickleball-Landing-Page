import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, whoWeServe } from "./data";

export const WhoWeServeSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="who-we-serve" className="py-24 md:py-32 px-4 bg-[#102319] font-sans">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div {...fadeUp} className="text-[#a8c78c] text-[11px] uppercase tracking-[0.2em] font-bold mb-4">
            Who We Serve
          </motion.div>
          <motion.h2 {...fadeUp} className="font-dela text-4xl sm:text-5xl md:text-[56px] text-white leading-[1.1]">
            Built for Everyone Who
            <br className="hidden sm:block" />
            <span className="text-[#d0e999]"> Runs Pickleball in India.</span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 mb-16">
          {whoWeServe.map((w, i) => {
            const isActive = activeTab === i;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#d0e999] text-[#102319] shadow-[0_4px_20px_rgba(208,233,153,0.25)] scale-105"
                    : "bg-transparent border border-white/15 text-white/80 hover:border-white/40 hover:bg-white/5"
                }`}
              >
                <w.icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[#102319]' : 'text-white/60'}`} />
                {w.title}
              </button>
            );
          })}
        </motion.div>

        {/* Active Content Area */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col w-full"
            >
              {/* Text Description */}
              <div className="text-left mb-10 w-full max-w-3xl">
                <h3 className="font-dela text-3xl md:text-4xl text-white mb-3">
                  {whoWeServe[activeTab].title}
                </h3>
                <p className="text-white/50 italic text-sm md:text-base font-light mb-5">
                  "{whoWeServe[activeTab].tagline}"
                </p>
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed">
                  {whoWeServe[activeTab].desc}
                </p>
              </div>

              {/* 2-Column Pains & Delivers Box */}
              <div className="flex flex-col md:flex-row rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
                
                {/* Left Side: Pains */}
                <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#1b2a22]">
                  <h4 className="text-[#ff7a6b] text-xs font-bold uppercase tracking-[0.15em] mb-8">
                    Your Current Pain
                  </h4>
                  <ul className="flex flex-col gap-5">
                    {whoWeServe[activeTab].pains.map((p, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#ff7a6b] shrink-0 mt-0.5 shadow-[0_0_8px_rgba(255,122,107,0.5)]"></div>
                        <span className="text-white/80 text-sm md:text-[15px] font-light tracking-wide">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Delivers */}
                <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#d0e999]/10 z-10 before:absolute before:inset-0 before:shadow-[0_0_60px_rgba(208,233,153,0.2)] before:-z-10 before:pointer-events-none flex flex-col items-start justify-between">
                  <div className="w-full">
                    <h4 className="text-[] text-xs font-extrabold uppercase tracking-[0.15em] mb-8">
                      EyeLevel Delivers
                    </h4>
                    <ul className="flex flex-col gap-5 mb-10">
                      {whoWeServe[activeTab].delivers.map((d, i) => (
                        <li key={i} className="flex items-center gap-4">
                          <div className="w-3.5 h-3.5 rounded-full border-[2px] border-[#d0e999] shrink-0 mt-0.5"></div>
                          <span className="text-[#FFFFFF] text-sm md:text-[15px] font-medium tracking-wide">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-7 py-3.5 bg-[#FFFFFF]/10 text-[#d0e999] hover:bg-[#d0e999] hover:text-[#102319] text-[13px] font-bold rounded-full transition-colors flex items-center gap-2"
                  >
                    {whoWeServe[activeTab].cta} <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
