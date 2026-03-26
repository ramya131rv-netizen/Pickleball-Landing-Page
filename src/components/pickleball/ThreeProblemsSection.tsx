import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger, problems, costPoints } from "./data";

export const ThreeProblemsSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden" style={{ backgroundColor: '#173229' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 {...fadeUp} className="font-dela text-3xl sm:text-4xl md:text-5xl text-foreground text-center mb-2">
          Every Pickleball Organiser Faces
          <br className="hidden sm:block" />
          <span className="text-primary"> the Same Three Problems.</span>
        </motion.h2>
        <motion.p {...fadeUp} className="text-center text-foreground/50 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Struggling with the hidden costs of running pickleball events? <strong className="text-foreground/80">Streamline everything</strong> with a dedicated partner.
        </motion.p>

        {/* Problem Cards — 3-col with large icons, colored titles & CTA buttons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {problems.map((p, i) => (
            <motion.div key={i} {...stagger(i)} className="rounded-2xl p-7 border border-foreground/[0.08] flex flex-col" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
              <div className="text-5xl mb-5">{p.icon}</div>
              <h3 className="font-dela text-lg text-foreground mb-3">
                <span style={{ color: p.titleColor }}>
                  {p.title.split(" ").slice(0, 2).join(" ")}
                </span>{" "}
                {p.title.split(" ").slice(2).join(" ")}
              </h3>
              <p className="text-sm text-foreground/50 leading-relaxed mb-6 flex-1">{p.desc}</p>
              <button
                onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
                className="self-start px-5 py-2.5 rounded-full text-sm font-semibold text-foreground transition-opacity hover:opacity-80"
                style={{ backgroundColor: p.ctaColor }}
              >
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div {...fadeUp} className="rounded-2xl p-6 sm:p-8 border border-foreground/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 mb-12" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <h4 className="font-dela text-base sm:text-lg text-foreground mb-1">Let Us Solve These Problems For You</h4>
              <p className="text-sm text-foreground/50">Streamline your pickleball events with one dedicated partner for a seamless experience.</p>
            </div>
          </div>
          <Button variant="lime" size="lg" className="group shrink-0 font-bold" onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}>
            Get Started Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Costing You Banner — Card-in-card layout */}
        <motion.div {...fadeUp} className="border border-foreground/[0.08] rounded-3xl p-6 sm:p-10" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
          <h3 className="font-dela text-2xl sm:text-3xl md:text-4xl text-foreground mb-1 text-center">This Isn't Just Stressful.</h3>
          <h3 className="font-dela text-2xl sm:text-3xl md:text-4xl text-primary mb-6 text-center">It's Costing You.</h3>
          <p className="text-foreground/50 max-w-2xl mx-auto mb-8 text-sm sm:text-base text-center">
            India's pickleball market is at an inflection point. The associations and organisers who establish a credible brand now will define the sport for the next decade.
          </p>

          {/* Inner card — "What's the price of falling behind?" */}
          <div className="border border-foreground/[0.08] rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
            <h4 className="font-dela text-lg sm:text-xl text-foreground text-center mb-6 flex items-center justify-center gap-2">
              <span className="text-yellow-400">⚠</span> What's the price of falling behind?
            </h4>

            <div className="space-y-4 mb-6">
              {costPoints.map((cp, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-red-400 text-lg shrink-0">✕</span>
                  <span className="text-foreground font-semibold text-sm sm:text-base">{cp.bold}</span>
                  <span className="text-foreground/10 mx-1">|</span>
                  <span className="text-foreground/50 text-sm">{cp.sub}</span>
                </div>
              ))}
            </div>

            {/* Green callout */}
            <div className="flex items-start gap-3 bg-primary/10 rounded-xl p-4">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground text-sm sm:text-base">You don't need more vendors. You need a partner who already lives inside pickleball.</span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="lime" size="lg" className="group text-base font-bold px-10" onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}>
              Let's Fix It.
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-foreground/30 text-xs mt-4 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Trusted By India's Top Organisations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
