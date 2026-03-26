import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { trustedBy, fadeUp } from "./data";
import { HeroForm } from "./HeroForm";

export const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // Intentionally kept for backwards compatibility if needed later

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#1a3a2d' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div {...fadeUp} className="mb-6">
              <span className="inline-block px-5 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
                India's Only Dedicated Pickleball Agency
              </span>
            </motion.div>

            <motion.h1 {...fadeUp} transition={{ delay: 0.1, duration: 0.6 }} className="font-dela text-[3.2rem] sm:text-6xl md:text-7xl lg:text-[4.2rem] leading-[0.95] text-foreground mb-2">
              One Partner.
              <br />
              Every Pickleball
              <br />
              Need.
            </motion.h1>

            <motion.h2 {...fadeUp} transition={{ delay: 0.15, duration: 0.6 }} className="font-dela text-2xl sm:text-3xl md:text-4xl lg:text-[1.8rem] leading-[1] text-primary mb-10">
              Zero Coordination
              <br />
              Nightmares.
            </motion.h2>

            {/* Trusted By Badge */}
            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="mb-5">
              <div className="inline-flex items-center gap-2 px-5 py-2 border border-primary/30 rounded-lg" style={{ backgroundColor: 'rgba(212, 232, 111, 0.08)' }}>
                <span className="text-primary text-xs">✦</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-foreground/80">Trusted By</span>
                <span className="text-primary text-xs">✦</span>
              </div>
            </motion.div>

            {/* Trust Cards Grid */}
            <motion.div {...fadeUp} transition={{ delay: 0.35 }} className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
              {trustedBy.map((t, i) => (
                <div
                  key={i}
                  className="border border-foreground/10 rounded-xl px-4 py-3 text-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                >
                  <span className="block font-dela text-base sm:text-lg" style={{ color: i === 0 ? '#4DABF7' : i === 1 ? '#E2FEA5' : i === 2 ? '#FFB347' : '#FF6B6B' }}>{t.tag}</span>
                  <span className="block text-foreground/40 text-[10px] leading-tight mt-1">{t.name}</span>
                </div>
              ))}
              <div className="border border-foreground/5 rounded-xl px-4 py-3 flex items-center justify-center">
                <span className="text-foreground/20 text-sm italic">And many more...</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Form Card */}
          <HeroForm />
        </div>
      </div>
    </section>
  );
};
