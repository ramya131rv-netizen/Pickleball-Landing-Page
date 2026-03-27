import { type Dispatch, type SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import pickleball3d from "@/assets/pickleball-3d-hero.png";
import pickleballClipboard from "@/assets/pickleball-clipboard.png";
import { fadeUp } from "./data";

type TopFormData = {
  name: string;
  email: string;
  phone: string;
};

export const HeroForm = () => {
  const [topFormData, setTopFormData] = useState<TopFormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handlePhone = (
    val: string,
    setter: Dispatch<SetStateAction<TopFormData>>,
    data: TopFormData,
  ) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    setter({ ...data, phone: digits });
  };

  return (
    <motion.div
      {...fadeUp}
      transition={{ delay: 0.3 }}
      className="relative mt-2 lg:mt-0"
    >
      {/* 3D Pickleball illustration */}
      <motion.img
        src={pickleball3d}
        alt="Pickleball paddle and trophy"
        className="pointer-events-none absolute -right-2 -top-10 z-20 h-24 w-24 object-contain sm:-right-4 sm:-top-12 sm:h-32 sm:w-32 lg:-right-6 lg:-top-14 lg:h-40 lg:w-40"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Form card */}
      <div
        className="relative rounded-3xl border border-primary/15 p-5 sm:p-7 lg:p-8"
        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      >
        <h3 className="mb-1 font-dela text-xl text-foreground sm:text-2xl">
          Book a Consultation
        </h3>

        <p className="text-sm text-foreground/50 mb-6">
          We respond within 24 hours.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">
              Your Name *
            </label>
            <Input
              placeholder="Rajan Mehta"
              value={topFormData.name}
              onChange={(e) =>
                setTopFormData({ ...topFormData, name: e.target.value })
              }
              className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">
              Email Address *
            </label>
            <Input
              type="email"
              placeholder="rajan@example.com"
              value={topFormData.email}
              onChange={(e) =>
                setTopFormData({ ...topFormData, email: e.target.value })
              }
              className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">
              Phone Number *
            </label>
            <div className="flex gap-2">
              <div
                className="flex items-center px-3 border border-foreground/10 rounded-xl text-foreground text-sm font-medium shrink-0 h-11"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                +91
              </div>
              <Input
                type="tel"
                placeholder="98765 43210"
                value={topFormData.phone}
                onChange={(e) =>
                  handlePhone(e.target.value, setTopFormData, topFormData)
                }
                className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl"
              />
            </div>
          </div>
          <Button
            variant="lime"
            size="lg"
            className="w-full group text-base font-bold h-12 rounded-xl"
          >
            Send My Brief
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Bottom decoration */}
        <motion.img
          src={pickleballClipboard}
          alt=""
          className="pointer-events-none absolute -bottom-7 -right-3 z-20 h-20 w-20 object-contain opacity-80 sm:-bottom-8 sm:-right-4 sm:h-24 sm:w-24 lg:-bottom-10 lg:-right-6 lg:h-28 lg:w-28"
          animate={{ rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};
