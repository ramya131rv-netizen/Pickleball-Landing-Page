import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, processSteps } from "./data";
import pickleballEventBg from "@/assets/pickleball-event-bg.jpg";
import { sectionBody, sectionEyebrow, sectionSpacing, sectionTitle } from "./sectionStyles";

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Content-related images for each step
  const stepImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop", // 01: Brief & Build (Team planning / scoping)
    pickleballEventBg, // 02: Produce & Create (Live Pickleball Event Action)
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", // 03: Deliver & Report (Analytics / ROI Report)
  ];

  return (
    <section id="process" className={`w-full bg-[#182a20] font-sans relative overflow-hidden ${sectionSpacing}`}>
      {/* Subtle Glow inside Section */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#dce288]/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto px-4 relative z-10"
      >

          {/* Header Area */}
          <div className="mb-16 relative z-10">
            <motion.div {...fadeUp} className={`${sectionEyebrow} text-[#a8c78c] mb-4`}>
              How It Works
            </motion.div>
            <motion.h2 {...fadeUp} className={`${sectionTitle} text-white mb-4`}>
              From Brief to Brilliant.
            </motion.h2>
            <motion.p {...fadeUp} className={`${sectionBody} text-white/60 font-light`}>
              Three steps. One team. Zero coordination headaches.
            </motion.p>
          </div>

          {/* 2-Column Layout */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
            
            {/* Left Column: Timeline */}
            <div className="w-full lg:w-1/2 relative flex flex-col">
              
              {/* Vertical Connecting Line */}
              <div className="absolute left-[27px] top-6 bottom-32 w-px bg-gradient-to-b from-[#dce288]/20 via-white/10 to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col gap-12 sm:gap-14 relative z-10">
                {processSteps.map((step, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setActiveStep(i)}
                    className={`group relative flex gap-6 sm:gap-8 items-start cursor-pointer transition-all duration-500 ${
                      activeStep === i ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98] hover:opacity-70'
                    }`}
                  >
                    {/* Number Badge */}
                    <div className={`w-14 h-12 shrink-0 rounded-[14px] flex items-center justify-center font-dela text-xl relative z-10 transition-all duration-500 ${
                      activeStep === i 
                        ? 'border border-[#dce288]/50 bg-[#dce288]/20 text-[#dce288] shadow-[0_0_20px_rgba(220,226,136,0.2)]'
                        : 'border border-white/10 bg-white/5 text-white/50'
                    }`}>
                      {step.num}
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className={`font-dela text-2xl tracking-wide mb-3 transition-colors duration-500 ${
                        activeStep === i ? 'text-white' : 'text-white/70'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed font-light mb-6 line-clamp-3 w-full pr-4">
                        {step.desc}
                      </p>
                      
                      {/* Checkmarks / Items */}
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        {step.items?.map((item, j) => (
                          <div key={j} className="flex items-center gap-2 group/item">
                            <div className={`w-3 h-3 rounded-full border-[1.5px] transition-colors duration-300 ${
                              activeStep === i ? 'border-[#dce288]/60 group-hover/item:border-[#dce288]' : 'border-white/20'
                            }`}></div>
                            <span className={`text-[11px] sm:text-xs font-light transition-colors duration-300 ${
                              activeStep === i ? 'text-white/70 group-hover/item:text-white' : 'text-white/40'
                            }`}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-16 sm:pl-[88px]"
              >
                <button 
                  onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 bg-[#dce288] hover:bg-[#ebf299] text-[#1a2e22] text-sm font-bold rounded-[14px] shadow-[0_5px_30px_rgba(220,226,136,0.2)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(220,226,136,0.4)] hover:-translate-y-1 flex items-center gap-2"
                >
                  Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: Dynamic Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 h-[400px] lg:h-auto min-h-[500px] rounded-[2rem] overflow-hidden relative group"
            >
              <AnimatePresence>
                <motion.img 
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={stepImages[activeStep]} 
                  alt={processSteps[activeStep].title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-lighten"
                />
              </AnimatePresence>
              
              {/* Soft overlay gradient to melt image into the card background */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#182a20] via-transparent to-transparent pointer-events-none z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#182a20]/10 to-[#182a20] pointer-events-none hidden lg:block z-10"></div>
            </motion.div>

          </div>
        </motion.div>
    </section>
  );
};
