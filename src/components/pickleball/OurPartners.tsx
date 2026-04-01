import { motion } from "framer-motion";

import rizzfit from "@/assets/partners/rizzfit.svg";
import production from "@/assets/partners/production.png";
import health from "@/assets/partners/health.png";

const partners = [
  { name: "Production", logo: production },
  { name: "Scoring", logo: rizzfit },
  // { name: "Broadcast", logo: production },
  // { name: "Technical", logo: production },
  { name: "Matting", logo: health },
];

const OurPartners = () => {
  return (
    <section className="relative overflow-hidden bg-background-deep">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(var(--background))]/85 to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[hsl(var(--background))] via-[hsl(var(--background))]/85 to-transparent sm:w-28" />

      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-none border-y border-white/8 bg-[#143528] py-7 sm:py-8">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

          <motion.div
            className="relative z-[1] flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                aria-hidden={setIndex === 1}
                className="flex shrink-0 items-center gap-14 px-8 sm:gap-24 sm:px-14 lg:gap-32"
              >
                {partners.map((partner) => (
                  <div
                    key={`${partner.name}-${setIndex}`}
                    className="group flex h-10 w-[120px] shrink-0 items-center justify-center sm:h-12 sm:w-[170px] lg:w-[190px]"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full w-full object-contain opacity-85 grayscale-[0.08] transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
