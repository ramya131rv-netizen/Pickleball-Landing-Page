import { useRef } from "react";
import { motion } from "framer-motion";

import { HeroForm } from "./HeroForm";
import { fadeUp } from "./data";

export const HeroSection = () => {
  const heroRef = useRef(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-background-deep pt-24 sm:pt-28 md:pt-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 sm:pb-18 lg:px-8 lg:pb-20">
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="w-full max-w-3xl lg:max-w-4xl">
            <motion.div {...fadeUp} className="mb-5 mt-5">
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-primary sm:px-5 sm:text-xs">
                India's Only Dedicated Pickleball Agency
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-4 font-dela text-[2.5rem]/[1.1] text-foreground sm:text-[2.4rem]/[1.2] md:text-[3.5rem]/[1.2] lg:text-[4.5rem]/[1.1]"
            >
              <span>One Partner.</span>
              <br />
              <span className="text-lime">Every Pickleball</span>
              <br />
              <span className="text-lime">Need.</span>
            </motion.h1>

            <motion.h2
              {...fadeUp}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-6 max-w-xl font-bricolage text-base leading-tight text-white/90 sm:text-xl md:mb-8 md:text-xl"
            >
              Zero Coordination Nightmares.
            </motion.h2>
          </div>

          <div className="w-full max-w-md self-stretch lg:max-w-[26rem] lg:flex-shrink-0">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
};
