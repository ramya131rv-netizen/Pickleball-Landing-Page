import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { fadeUp, faqs } from "./data";
import { sectionBody, sectionEyebrow, sectionSpacing, sectionTitle } from "./sectionStyles";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={`${sectionSpacing} bg-[#102319] border-t border-white/5 font-sans relative overflow-hidden`}>
      
      {/* Background gentle glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#d0e999]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1300px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">
          
          {/* Left Column (Sticky Headers) */}
          <div className="lg:sticky lg:top-32 flex flex-col text-left">
            <motion.div {...fadeUp} className={`${sectionEyebrow} text-[#d0e999] mb-6`}>
              FAQs
            </motion.div>
            
            <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className={`${sectionTitle} text-white mb-6`}>
              Frequently asked<br className="hidden md:block" /> questions
            </motion.h2>
            
            <motion.p {...fadeUp} transition={{ delay: 0.2 }} className={`${sectionBody} text-white/60 mb-10 md:mb-14 max-w-sm font-light`}>
              Still have questions? We're happy to talk it through directly. Experience intelligent, efficient event management designed to drive progress.
            </motion.p>
            
            <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
              <button 
                onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3.5 bg-[#d0e999] hover:bg-[#bce070] text-[#102319] text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full flex items-center justify-between gap-4 transition-all duration-300 shadow-[0_5px_25px_rgba(208,233,153,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(208,233,153,0.4)] w-fit group"
              >
                <span>Talk to Us</span>
                <span className="w-6 h-6 rounded-full border-[1.5px] border-[#102319] flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isActive = openIndex === i;
              
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`transition-all duration-[400ms] overflow-hidden cursor-pointer ${
                      isActive 
                        ? 'rounded-[2rem] border border-[#d0e999]/60 shadow-[0_10px_40px_rgba(208,233,153,0.15)] bg-gradient-to-br from-[#182e23] to-[#122018]' 
                        : 'rounded-[1.5rem] border border-transparent bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                    onClick={() => setOpenIndex(isActive ? null : i)}
                  >
                    {/* Header Row */}
                    <div className="flex items-center justify-between p-6 sm:p-8">
                      <div className="flex items-start sm:items-center gap-4 sm:gap-6 pr-4">
                        <span className={`font-mono text-xs sm:text-sm transition-colors duration-300 mt-1 sm:mt-0 ${
                          isActive ? 'text-[#d0e999] opacity-100 font-bold' : 'text-white/30 font-semibold'
                        }`}>
                          {String(i + 1).padStart(3, '0')}
                        </span>
                        <h3 className={`text-base sm:text-lg lg:text-xl font-semibold transition-colors duration-300 leading-snug ${
                          isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                        }`}>
                          {faq.q}
                        </h3>
                      </div>
                      
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#d0e999] text-[#102319]' 
                          : 'bg-transparent text-white/50 border border-white/10 group-hover:border-white/30'
                      }`}>
                        {isActive ? <Minus className="w-4 h-4 sm:w-5 sm:h-5" /> : <Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
                      </div>
                    </div>
                    
                    {/* Body Row (AnimatePresence for smooth height expand) */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="pb-8 px-6 sm:px-8 pt-2">
                            <p className="text-white/60 text-sm sm:text-base leading-relaxed pl-0 sm:pl-[44px] max-w-2xl font-light">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
