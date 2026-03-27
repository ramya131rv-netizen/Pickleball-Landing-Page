import { useRef } from "react";
import { motion } from "framer-motion";

import { HeroForm } from "./HeroForm";
import { fadeUp, trustedBy } from "./data";

export const HeroSection = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-start overflow-hidden bg-[#1a3a2d] pt-28 sm:pt-32 md:items-center"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <motion.div {...fadeUp} className="mb-5">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:px-5 sm:text-xs">
                India's Only Dedicated Pickleball Agency
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-3 font-dela text-[2.35rem]/[1.02] text-foreground sm:text-[3.4rem]/[1.04] md:text-7xl/[1.08] lg:text-[4.2rem]/[1.08]"
            >
              One Partner.
              <br />
              Every Pickleball
              <br />
              Need.
            </motion.h1>

            <motion.h2
              {...fadeUp}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-8 font-dela text-xl leading-[1.02] text-primary sm:text-2xl md:text-4xl lg:text-[1.8rem]"
            >
              Zero Coordination
              <br />
              Nightmares.
            </motion.h2>

          </div>

          <HeroForm />
        </div>
      </div>
    </section>
  );
};
