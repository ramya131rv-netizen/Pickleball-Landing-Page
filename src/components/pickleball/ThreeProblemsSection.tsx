import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle2, Star, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { costPoints, fadeUp, problems, stagger } from "./data";

export const ThreeProblemsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#173229] px-4 py-12 sm:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          {...fadeUp}
          className="mb-3 text-center font-dela text-[2rem]/[1.08] text-foreground sm:text-4xl/[1.08] md:text-5xl/[1.08]"
        >
          Every Pickleball Organiser Faces
          <span className="block text-primary sm:inline"> the Same Three Problems.</span>
        </motion.h2>

        <motion.p
          {...fadeUp}
          className="mx-auto mb-10 max-w-2xl text-center text-sm leading-relaxed text-foreground/55 sm:mb-12 sm:text-base"
        >
          Struggling with the hidden costs of running pickleball events?{" "}
          <strong className="text-foreground/80">Streamline everything</strong> with a dedicated partner.
        </motion.p>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              {...stagger(i)}
              className="flex flex-col rounded-2xl border border-foreground/[0.08] p-5 sm:p-6 lg:p-7"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="mb-4 text-4xl sm:text-5xl">{p.icon}</div>
              <h3 className="mb-3 font-dela text-base leading-tight text-foreground sm:text-lg">
                <span style={{ color: p.titleColor }}>{p.title.split(" ").slice(0, 2).join(" ")}</span>{" "}
                {p.title.split(" ").slice(2).join(" ")}
              </h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-foreground/55 sm:mb-6">{p.desc}</p>
              <button
                type="button"
                onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
                className="self-start rounded-full px-4 py-2 text-sm font-semibold text-[#173229] transition-opacity hover:opacity-85 sm:px-5 sm:py-2.5"
                style={{ backgroundColor: p.ctaColor }}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="mb-10 flex flex-col gap-4 rounded-2xl border border-foreground/[0.08] p-5 sm:mb-12 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:p-8"
          style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
        >
          <div className="flex items-start gap-3">
            <Star className="mt-0.5 h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6" />
            <div>
              <h4 className="mb-1 font-dela text-base text-foreground sm:text-lg">Let Us Solve These Problems For You</h4>
              <p className="text-sm leading-relaxed text-foreground/55">
                Streamline your pickleball events with one dedicated partner for a seamless experience.
              </p>
            </div>
          </div>

          <Button
            variant="lime"
            size="lg"
            className="group h-11 shrink-0 rounded-full px-6 text-sm font-bold sm:h-12"
            onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-foreground/[0.08] p-5 sm:p-8 md:p-10"
          style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
        >
          <h3 className="text-center font-dela text-[1.8rem]/[1.1] text-foreground sm:text-3xl md:text-4xl">This Isn't Just Stressful.</h3>
          <h3 className="mb-5 text-center font-dela text-[1.8rem]/[1.1] text-primary sm:mb-6 sm:text-3xl md:text-4xl">It's Costing You.</h3>

          <p className="mx-auto mb-7 max-w-2xl text-center text-sm leading-relaxed text-foreground/55 sm:mb-8 sm:text-base">
            India's pickleball market is at an inflection point. The associations and organisers who establish a credible brand now will define the sport for the next decade.
          </p>

          <div
            className="mx-auto mb-7 max-w-2xl rounded-2xl border border-foreground/[0.08] p-5 sm:mb-8 sm:p-7"
            style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <h4 className="mb-5 flex items-center justify-center gap-2 text-center font-dela text-lg text-foreground sm:mb-6 sm:text-xl">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              What's the price of falling behind?
            </h4>

            <div className="mb-6 space-y-4">
              {costPoints.map((cp, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400 sm:h-5 sm:w-5" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground sm:text-base">{cp.bold}</p>
                    <p className="text-sm leading-relaxed text-foreground/50">{cp.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-primary/10 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm text-foreground sm:text-base">
                You don't need more vendors. You need a partner who already lives inside pickleball.
              </span>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="lime"
              size="lg"
              className="group h-11 rounded-full px-8 text-sm font-bold sm:h-12 sm:px-10 sm:text-base"
              onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Fix It.
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-foreground/30">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              Trusted By India's Top Organisations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
