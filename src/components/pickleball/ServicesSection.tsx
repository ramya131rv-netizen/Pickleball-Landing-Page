import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger, services } from "./data";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-16 px-4 relative overflow-hidden" style={{ backgroundColor: '#253e35' }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div {...fadeUp} className="text-center mb-3">
          <span className="text-xs uppercase tracking-widest text-foreground/40 font-semibold">Full-Stack Pickleball Services</span>
        </motion.div>
        <motion.h2 {...fadeUp} className="font-dela text-3xl sm:text-4xl md:text-5xl text-foreground text-center mb-2">
          Everything You Need To Run
          <br className="hidden sm:block" />
          A Successful Pickleball Event
        </motion.h2>
        <motion.h3 {...fadeUp} className="font-dela text-xl sm:text-2xl text-primary text-center mb-3">
          All Managed Under One Roof
        </motion.h3>
        <motion.p {...fadeUp} className="text-center text-foreground/50 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          From production and branding to sponsorship and broadcast — we plan, execute and scale your entire tournament.
        </motion.p>

        {/* 3x2 Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              {...stagger(i)}
              className="rounded-2xl p-6 border border-foreground/[0.08] flex flex-col"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-dela text-base sm:text-lg text-foreground leading-tight pt-1">{s.title}</h4>
              </div>
              <p className="text-sm text-foreground/50 leading-relaxed mb-4 flex-1">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag, j) => (
                  <span key={j} className="text-xs px-3 py-1.5 rounded-full border border-foreground/[0.08] text-foreground/60 font-medium" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <motion.div {...fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            {["End-to-End Tournament Management", "Multi-City League Experience", "Sponsor Delivery & ROI Tracking"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground/60">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="lime" size="lg" className="group font-bold" onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}>
              Plan My Pickleball Event
            </Button>
            <Button variant="outline" size="lg" className="font-semibold">
              Download Services Deck
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
