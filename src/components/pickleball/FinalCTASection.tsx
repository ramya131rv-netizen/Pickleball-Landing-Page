import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";

import { fadeUp, footerStats, stagger } from "./data";
import {
  sectionBody,
  sectionEyebrow,
  sectionSpacing,
  sectionTitle,
} from "./sectionStyles";

export const FinalCTASection = () => {
  return (
    <section
      id="final-cta"
      className={`${sectionSpacing} relative overflow-hidden bg-[#102319] pb-24 font-sans sm:pb-12 md:pb-16`}
    >
      <div className="group/container relative mx-auto max-w-[1300px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.03] bg-gradient-to-b from-[#163027] to-[#253e35] px-4 py-6 shadow-2xl sm:rounded-[2.5rem] sm:p-8 md:p-12 lg:rounded-[3.5rem] lg:p-16">
          <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[260px] w-full max-w-[800px] -translate-x-1/2 rounded-full bg-[#d0e999]/10 blur-[130px] sm:h-[320px] md:h-[400px]" />
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] opacity-[0.02] [background-size:32px_32px]" />

          <div className="relative z-10 flex h-full w-full flex-col items-start justify-between gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-20">
            <div className="flex w-full flex-col text-left lg:w-[55%]">
              <motion.div
                {...fadeUp}
                className={`${sectionEyebrow} mb-4 text-[#a8c78c] sm:mb-6`}
              >
                Start the Journey
              </motion.div>

              <motion.h2
                {...fadeUp}
                transition={{ delay: 0.1 }}
                className={`${sectionTitle} mb-4 text-[1.8rem]/[1.08] text-white sm:mb-6 sm:text-4xl/[1.08] md:text-5xl/[1.08]`}
              >
                Ready to Run a Pickleball Event
                <br className="hidden xl:block" />
                <span className="text-[#d0e999]">
                  {" "}
                  That Actually Looks Like One?
                </span>
              </motion.h2>

              <motion.p
                {...fadeUp}
                transition={{ delay: 0.2 }}
                className={`${sectionBody} mb-8 max-w-xl font-light text-white/60 sm:mb-10`}
              >
                The pickleball season calendar fills up fast. Venues, vendors,
                and production slots book months in advance. If you're planning
                an event in the next 6 months, now is the time to talk.
              </motion.p>

              <motion.div
                {...fadeUp}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-start justify-between gap-4 rounded-[1.25rem] border border-white/[0.06] bg-white/[0.03] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md transition-colors hover:bg-white/[0.04] sm:flex-row sm:items-center sm:gap-6 sm:rounded-[1.5rem] sm:p-6"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/5 bg-[#102319]/50 shadow-inner sm:h-12 sm:w-12">
                    <MessageCircle className="h-5 w-5 text-[#d0e999]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-sm font-semibold tracking-wide text-white">
                      Prefer to chat directly?
                    </span>
                    <span className="mt-0.5 block break-words text-xs font-light text-white/40">
                      Available Mon-Sat, 10am-7pm IST
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/919789099499?text=Hi!%20I'm%20interested%20in%20pickleball%20event%20management%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#d0e999] px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#102319] shadow-[0_0_20px_rgba(208,233,153,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bce070] hover:shadow-[0_0_35px_rgba(208,233,153,0.5)] sm:w-auto sm:px-6 sm:text-xs sm:tracking-widest">
                    WhatsApp Us
                    <ExternalLink className="ml-1 h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </a>
              </motion.div>
            </div>

            <div className="group relative flex w-full justify-center perspective-[1000px] lg:w-[45%] lg:justify-end">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[#d0e999] opacity-[0.05] blur-[60px] transition-opacity duration-[400ms] group-hover:opacity-[0.08]" />

              <motion.div
                {...fadeUp}
                transition={{ delay: 0.4 }}
                className="relative w-full max-w-md rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#1b3429]/80 to-[#12231b]/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 will-change-transform group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] sm:rounded-[2rem] sm:p-8 md:p-10"
              >
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-10">
                  {footerStats.map((st, i) => (
                    <motion.div
                      key={i}
                      {...stagger(i + 2)}
                      className="flex flex-col items-start text-left"
                    >
                      <span className="mb-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#a8c78c] opacity-70 sm:text-[10px] sm:tracking-[0.15em] md:text-xs">
                        {st.label}
                      </span>
                      <span className="break-words font-dela text-base leading-tight text-white drop-shadow-sm transition-colors duration-300 group-hover:text-white sm:text-xl md:text-2xl">
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
