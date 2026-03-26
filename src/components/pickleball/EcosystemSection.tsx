import { motion } from "framer-motion";
import { fadeUp, ecosystemItems, ecosystemStats } from "./data";

export const EcosystemSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden" style={{ backgroundColor: '#102319' }}>

      {/* Subtle Background Glow/Particles Effect */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[800px] pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d0e999]/20 via-transparent to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <motion.div {...fadeUp} className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#d0e999]/70 font-bold font-sans">
            Pickleball Agency India
          </span>
        </motion.div>

        <motion.h2 {...fadeUp} className="font-dela text-4xl sm:text-5xl md:text-[56px] text-white text-center mb-6 leading-[1.1]">
          We Don't Just Work in Pickleball.
          <br className="hidden sm:block" />
          <span className="text-[#d0e999]"> We Are Part of It.</span>
        </motion.h2>

        <motion.p {...fadeUp} className="text-center text-white/50 text-sm md:text-base max-w-2xl mx-auto mb-20 font-light leading-relaxed">
          The only agency in India managing the association, the league, and the teams — simultaneously.
        </motion.p>

        {/* Horizontal List for Ecosystem Items (3 Columns, No Icons) */}
        <div className="relative mb-24 p-16 text-center">



          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-[#d0e999]/30 relative z-10 items-stretch">
            {ecosystemItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`group relative flex flex-col items-start text-left py-10 md:py-0 ${i === 0 ? 'md:pr-10' : i === 1 ? 'md:px-10' : 'md:pl-10'
                  }`}
              >
                {/* Center Column Glow */}
                {i === 1 && (
                  <div className="absolute -inset-10"></div>
                )}

                <h3 className={`font-dela text-xl md:text-2xl mb-3 transition-colors duration-300 ${i === 1 ? 'text-[#d0e999]' : 'text-white'}`}>
                  {item.title}
                </h3>
                <p className="text-[#d0e999]/80 text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase mb-4">
                  {item.org}
                </p>
                <p className="text-white/70 text-sm leading-relaxed font-light mb-8">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <button
            onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-auto self-center lg:self-start px-8 py-3 mt-5 bg-[#d0e999] hover:bg-[#bce070] text-[#102319] text-[11px] font-extrabold uppercase tracking-widest rounded-lg transition-colors shadow-[0_0_20px_rgba(208,233,153,0.2)]"
          >
            Work With Us
          </button>
        </div>

        {/* Horizontal Ecosystem Stats (5 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {ecosystemStats.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                backgroundColor: "rgba(255,255,255,0.06)",
                borderColor: "rgba(208,233,153,0.3)",
                boxShadow: "0 10px 40px -10px rgba(208,233,153,0.1)"
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                y: { type: "spring", stiffness: 300, damping: 20 }
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center px-4 py-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] cursor-default transition-colors duration-300"
            >
              <span className="text-[#d0e999] text-[8px] sm:text-[9px] uppercase tracking-[0.15em] font-bold mb-4 line-clamp-1">
                {st.label}
              </span>
              <h4 className="font-dela text-sm sm:text-base text-white mb-2 leading-tight">
                {st.title}
              </h4>
              <p className="text-white/40 text-[9px] sm:text-[10px] font-light px-2">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
