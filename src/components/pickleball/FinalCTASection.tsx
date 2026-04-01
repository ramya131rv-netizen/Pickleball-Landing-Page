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
      className={`${sectionSpacing} relative overflow-hidden bg-background-deep pb-28 font-sans sm:pb-14 md:pb-16`}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/8 blur-[120px] sm:h-[460px] sm:w-[460px]" />

      <div className="relative mx-auto max-w-[1300px]">
        <div className="relative overflow-hidden">
          {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(208,233,153,0.08),transparent_32%)]" /> */}

          <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center lg:gap-10">
            <div className="flex w-full flex-col text-left">
              <div className="max-w-2xl">
                <motion.div
                  {...fadeUp}
                  className={`${sectionEyebrow} text-[#a8c78c] mb-5`}
                >
                  Start the Journey
                </motion.div>

                <motion.h2
                  {...fadeUp}
                  transition={{ delay: 0.1 }}
                  className={`${sectionTitle} mb-3 text-[1.95rem]/[1.04] text-white sm:text-4xl/[1.04] md:text-5xl/[1.04]`}
                >
                  Ready to Run a Pickleball Event
                  <br className="hidden lg:block" />
                  <span className="text-[#d0e999]">
                    {" "}
                    That Actually Looks Like One?
                  </span>
                </motion.h2>

                <motion.p
                  {...fadeUp}
                  transition={{ delay: 0.2 }}
                  className={`${sectionBody} max-w-xl font-light text-white/60`}
                >
                  The pickleball season calendar fills up fast. Venues, vendors,
                  and production slots book months in advance. If you're
                  planning an event in the next 6 months, now is the time to
                  talk.
                </motion.p>
              </div>
            </div>

            <div className="w-full">
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(27,52,41,0.78),rgba(18,35,27,0.92))] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.26)] sm:rounded-[1.75rem] sm:p-6"
              >
                <div className="mb-4 flex items-start gap-3 sm:mb-5 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 sm:h-12 sm:w-12">
                    <MessageCircle className="h-5 w-5 text-[#d0e999]" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-sm font-semibold tracking-wide text-white">
                      Prefer to chat directly?
                    </span>
                    <span className="mt-1 block text-xs font-light text-white/45 sm:text-sm">
                      Available Mon-Sat, 10am-7pm IST
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/919789099499?text=Hi!%20I'm%20interested%20in%20pickleball%20event%20management%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mb-4 flex w-full items-center justify-center gap-2 rounded-xl bg-lime px-5 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#102319] transition-all duration-300 hover:-translate-y-0.5 sm:mb-5 sm:w-fit sm:px-6 sm:text-xs"
                >
                  WhatsApp Us
                  <ExternalLink className="h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {footerStats.map((st, i) => (
                    <motion.div
                      key={i}
                      {...stagger(i + 2)}
                      className="rounded-[1rem] border border-white/8 bg-white/[0.04] p-3.5 sm:p-4"
                    >
                      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#a8c78c]/80 sm:text-[11px]">
                        {st.label}
                      </span>
                      <span className="block break-words font-dela text-sm leading-tight text-white sm:text-base md:text-lg">
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
