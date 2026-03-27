import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { fadeUp, services, stagger } from "./data";
import { sectionBody, sectionEyebrow, sectionSpacing, sectionSubtitle, sectionTitle } from "./sectionStyles";

export const ServicesSection = () => {
  return (
    <section id="services" className={`relative overflow-hidden ${sectionSpacing}`} style={{ backgroundColor: "#253e35" }}>
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="mb-3 text-center">
          <span className={`${sectionEyebrow} text-foreground/40`}>Full-Stack Pickleball Services</span>
        </motion.div>
        <motion.h2 {...fadeUp} className={`${sectionTitle} mb-2 text-center text-foreground`}>
          Everything You Need To Run
          <br className="hidden sm:block" />
          A Successful Pickleball Event
        </motion.h2>
        <motion.h3 {...fadeUp} className={`${sectionSubtitle} mb-3 text-center text-primary`}>
          All Managed Under One Roof
        </motion.h3>
        <motion.p {...fadeUp} className={`${sectionBody} mx-auto mb-12 max-w-2xl text-center text-foreground/50`}>
          From production and branding to sponsorship and broadcast â€” we plan, execute and scale your entire tournament.
        </motion.p>

        <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              {...stagger(i)}
              className="flex flex-col rounded-2xl border border-foreground/[0.08] p-6"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="mb-3 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="pt-1 font-dela text-base leading-tight text-foreground sm:text-lg">{s.title}</h4>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/50">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="rounded-full border border-foreground/[0.08] px-3 py-1.5 text-xs font-medium text-foreground/60"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="space-y-1.5">
            {["End-to-End Tournament Management", "Multi-City League Experience", "Sponsor Delivery & ROI Tracking"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
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
