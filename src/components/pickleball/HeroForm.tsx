import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import pickleball3d from "@/assets/pickleball-3d-hero.png";
import pickleballClipboard from "@/assets/pickleball-clipboard.png";
import { serviceOptions, fadeUp } from "./data";

export const HeroForm = () => {
  const [topFormData, setTopFormData] = useState({ name: "", org: "", email: "", phone: "", service: "" });

  const handlePhone = (val: string, setter: any, data: any) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    setter({ ...data, phone: digits });
  };

  return (
    <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="relative">
      {/* 3D Pickleball illustration */}
      <motion.img
        src={pickleball3d}
        alt="Pickleball paddle and trophy"
        className="absolute -top-14 -right-6 w-40 h-40 object-contain z-20 pointer-events-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Form card */}
      <div className="relative border border-primary/15 rounded-3xl p-6 sm:p-8" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
        <h3 className="font-dela text-2xl text-foreground mb-1">Book a Consultation</h3>
        <p className="text-sm text-primary font-semibold mb-0">Get started in 60 seconds.</p>
        <p className="text-sm text-foreground/50 mb-6">We respond within 24 hours.</p>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Your Name *</label>
            <Input placeholder="Rajan Mehta" value={topFormData.name} onChange={e => setTopFormData({ ...topFormData, name: e.target.value })} className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl" />
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Organisation / League / Association *</label>
            <Input placeholder="Bangalore Pickleball League" value={topFormData.org} onChange={e => setTopFormData({ ...topFormData, org: e.target.value })} className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl" />
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Email Address *</label>
            <Input type="email" placeholder="rajan@example.com" value={topFormData.email} onChange={e => setTopFormData({ ...topFormData, email: e.target.value })} className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl" />
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">Phone Number *</label>
            <div className="flex gap-2">
              <div className="flex items-center px-3 border border-foreground/10 rounded-xl text-foreground text-sm font-medium shrink-0 h-11" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>+91</div>
              <Input type="tel" placeholder="98765 43210" value={topFormData.phone} onChange={e => handlePhone(e.target.value, setTopFormData, topFormData)} className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">What do you need help with? *</label>
            <Select value={topFormData.service} onValueChange={value => setTopFormData({ ...topFormData, service: value })}>
              <SelectTrigger className="w-full h-11 rounded-xl border border-foreground/10 bg-foreground/5 text-foreground px-3 text-sm focus:ring-1 focus:ring-foreground/20">
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent className="bg-background border-foreground/10 text-foreground rounded-xl">
                {serviceOptions.map(s => (
                  <SelectItem key={s} value={s} className="focus:bg-foreground/10 focus:text-foreground cursor-pointer rounded-lg py-2">
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button variant="lime" size="lg" className="w-full group text-base font-bold h-12 rounded-xl">
            Send My Brief
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-[11px] text-foreground/30 text-center">No spam, no cold calls. Just a direct conversation.</p>
        </div>

        {/* Bottom decoration */}
        <motion.img
          src={pickleballClipboard}
          alt=""
          className="absolute -bottom-10 -right-6 w-28 h-28 object-contain z-20 pointer-events-none opacity-80"
          animate={{ rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};
