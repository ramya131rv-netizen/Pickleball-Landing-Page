import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";
import { fadeUp, stagger, footerStats } from "./data";

export const FinalCTASection = () => {
  return (
    <section id="final-cta" className="py-24 md:py-32 px-4 bg-[#102319] font-sans relative overflow-hidden">
      
      {/* 1. Main Container */}
      <div className="max-w-[1300px] mx-auto relative group/container">
        
        <div className="relative bg-gradient-to-b from-[#163027] to-[#253e35] rounded-[2.5rem] lg:rounded-[3.5rem] p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/[0.03]">
          
          {/* Soft radial glow at bottom center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[#d0e999]/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
          
          {/* Subtle dotted/grid texture overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px] z-0"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10 w-full h-full">

            {/* 2. Left Section (Primary Content) */}
            <div className="w-full lg:w-[55%] flex flex-col text-left">
              
              <motion.div {...fadeUp} className="text-[#a8c78c] text-[11px] uppercase tracking-[0.2em] font-bold mb-6">
                Start the Journey
              </motion.div>
              
              <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="font-dela text-4xl sm:text-5xl md:text-[56px] text-white leading-[1.1] mb-6">
                Ready to Run a Pickleball Event
                <br className="hidden lg:block" />
                <span className="text-[#d0e999]"> That Actually Looks Like One?</span>
              </motion.h2>
              
              <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-white/60 mb-10 max-w-xl text-lg font-light leading-relaxed">
                The pickleball season calendar fills up fast. Venues, vendors, and production slots book months in advance. If you're planning an event in the next 6 months, now is the time to talk.
              </motion.p>

              {/* 3. CTA Area (Inline Soft Glassmorphic Strip) */}
              <motion.div 
                {...fadeUp} 
                transition={{ delay: 0.3 }} 
                className="bg-white/[0.03] backdrop-blur-md rounded-[1.5rem] p-5 sm:p-6 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#102319]/50 border border-white/5 flex items-center justify-center shrink-0 shadow-inner">
                    <MessageCircle className="w-5 h-5 text-[#d0e999]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm tracking-wide">Prefer to chat directly?</span>
                    <span className="text-white/40 text-xs font-light mt-0.5">Available Mon–Sat, 10am–7pm IST</span>
                  </div>
                </div>
                
                <a href="https://wa.me/919789099499?text=Hi!%20I'm%20interested%20in%20pickleball%20event%20management%20services." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3.5 bg-[#d0e999] hover:bg-[#bce070] text-[#102319] text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(208,233,153,0.3)] hover:shadow-[0_0_35px_rgba(208,233,153,0.5)] hover:-translate-y-0.5 group flex items-center justify-center gap-2">
                    WhatsApp Us
                    <ExternalLink className="w-4 h-4 ml-1 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </a>
              </motion.div>

            </div>

            {/* 4. Right Section (Floating Highlight Card) */}
            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end relative group perspective-[1000px]">
              
              {/* Subtle accent glow behind the floating card */}
              <div className="absolute inset-0 bg-[#d0e999] opacity-[0.05] blur-[60px] rounded-full group-hover:opacity-[0.08] transition-opacity duration-[400ms] pointer-events-none"></div>
              
              <motion.div 
                {...fadeUp}
                transition={{ delay: 0.4 }}
                className="relative w-full max-w-md bg-gradient-to-br from-[#1b3429]/80 to-[#12231b]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.35)] group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500 will-change-transform"
              >
                {/* Extremely faint inner top light-bleed for 3D realism */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* 5. Stats Inside Card (2x2 Grid) */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                  {footerStats.map((st, i) => (
                    <motion.div key={i} {...stagger(i + 2)} className="flex flex-col items-start text-left">
                      <span className="text-[#a8c78c] text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium mb-2 opacity-70">
                        {st.label}
                      </span>
                      <span className="text-white font-dela text-xl md:text- xs  leading-none drop-shadow-sm group-hover:text-white transition-colors duration-300">
                        {st.value}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
