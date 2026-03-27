import { motion } from "framer-motion";

import { ecosystemItems, ecosystemStats, fadeUp } from "./data";
import { sectionBody, sectionEyebrow, sectionSpacing, sectionTitle } from "./sectionStyles";

export const EcosystemSection = () => {
  return (
    <section className={`relative overflow-hidden ${sectionSpacing}`} style={{ backgroundColor: "#102319" }}>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[800px] -translate-y-1/2 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d0e999]/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div {...fadeUp} className="mb-4 text-center">
          <span className={`${sectionEyebrow} text-[#d0e999]/70`}>Pickleball Agency India</span>
        </motion.div>

        <motion.h2 {...fadeUp} className={`${sectionTitle} mb-5 text-center text-white`}>
          We Don't Just Work in Pickleball.
          <br className="hidden sm:block" />
          <span className="text-[#d0e999]"> We Are Part of It.</span>
        </motion.h2>

        <motion.p {...fadeUp} className={`${sectionBody} mx-auto mb-12 max-w-2xl text-center text-white/50`}>
          The only agency in India managing the association, the league, and the teams â€” simultaneously.
        </motion.p>

        <div className="relative mb-12 rounded-[1.75rem] border border-white/5 p-6 text-center sm:p-8 lg:mb-16 lg:p-10">
          <div className="relative z-10 grid grid-cols-1 divide-y divide-[#d0e999]/20 md:grid-cols-3 md:divide-x md:divide-y-0">
            {ecosystemItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`flex flex-col items-start py-8 text-left md:py-0 ${i === 0 ? "md:pr-8" : i === 1 ? "md:px-8" : "md:pl-8"}`}
              >
                <h3 className={`mb-3 font-dela text-xl sm:text-2xl ${i === 1 ? "text-[#d0e999]" : "text-white"}`}>{item.title}</h3>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#d0e999]/80 sm:text-[11px]">{item.org}</p>
                <p className={`${sectionBody} text-white/70`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-6 rounded-lg bg-[#d0e999] px-8 py-3 text-[11px] font-extrabold uppercase tracking-widest text-[#102319] shadow-[0_0_20px_rgba(208,233,153,0.2)] transition-colors hover:bg-[#bce070]"
          >
            Work With Us
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
          {ecosystemStats.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                backgroundColor: "rgba(255,255,255,0.06)",
                borderColor: "rgba(208,233,153,0.3)",
                boxShadow: "0 10px 40px -10px rgba(208,233,153,0.1)",
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                y: { type: "spring", stiffness: 300, damping: 20 },
              }}
              viewport={{ once: true }}
              className="flex cursor-default flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-8 text-center transition-colors duration-300 md:rounded-3xl"
            >
              <span className="mb-4 line-clamp-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#d0e999] sm:text-[9px]">{st.label}</span>
              <h4 className="mb-2 font-dela text-sm leading-tight text-white sm:text-base">{st.title}</h4>
              <p className="px-2 text-[9px] font-light text-white/40 sm:text-[10px]">{st.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
