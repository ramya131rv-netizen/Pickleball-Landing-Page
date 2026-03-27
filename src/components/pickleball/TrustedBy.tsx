import { motion } from "framer-motion";
import { fadeUp, trustedBy } from "./data";

const TrustedBy = () => {
  return (
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.3 }}
      className="mb-8 flex flex-col items-center gap-5 px-4 text-center sm:gap-6"
    >
      <div
        className="inline-flex items-center gap-2 px-4 py-2 sm:px-5"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80 sm:text-xs lg:text-sm mt-2.5">
          Trusted By
        </span>
      </div>
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.35 }}
        className="grid w-full max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
      >
        {trustedBy.map((t, i) => (
          <div
            key={i}
            className="rounded-xl border border-foreground/10 px-3 py-4 text-center sm:px-4 sm:py-5"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <div className="flex h-14 items-center justify-center sm:mb-4 sm:h-20 lg:h-24">
              <img
                src={t.img}
                alt={t.name}
                className="max-h-full w-auto max-w-[72px] object-contain sm:max-w-[96px] lg:max-w-[120px]"
              />
            </div>
            <span
              className="block font-dela text-xs sm:text-sm lg:text-lg"
              style={{
                color:
                  i === 0
                    ? "#4DABF7"
                    : i === 1
                      ? "#E2FEA5"
                      : i === 2
                        ? "#FFB347"
                        : "#FF6B6B",
              }}
            >
            </span>
            <span className="mt-1 block text-[10px] leading-tight text-foreground/40 sm:text-xs">
              {t.name}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrustedBy;
