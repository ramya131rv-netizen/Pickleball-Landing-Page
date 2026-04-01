import {
  type Dispatch,
  type FormEvent,
  type SetStateAction,
  useState,
} from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhone = (
    val: string,
    setter: Dispatch<SetStateAction<TopFormData>>,
    data: TopFormData,
  ) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    setter({ ...data, phone: digits });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://automate.eyelevelstudio.in/webhook/pickleball-landing-page-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(topFormData),
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Form submitted successfully",
        description: "We'll be in touch shortly.",
      });

      setTopFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      id="hero-form"
      {...fadeUp}
      transition={{ delay: 0.3 }}
      className="relative mt-2 lg:mt-0"
    >
      {/* Form card */}
      <div
        className="relative rounded-3xl border border-primary/15 p-5 sm:p-7 lg:p-8"
        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      >
        <div className="text-center">
          <h3 className="mb-1 font-dela text-base text-foreground sm:text-xl">
            Book a Consultation
          </h3>

          <p className="text-sm text-foreground/50 mb-6">
            We respond within 24 hours.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">
              Your Name *
            </label>
            <Input
              name="name"
              placeholder="Rajan Mehta"
              value={topFormData.name}
              onChange={(e) =>
                setTopFormData({ ...topFormData, name: e.target.value })
              }
              className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">
              Email Address *
            </label>
            <Input
              type="email"
              name="email"
              placeholder="rajan@example.com"
              value={topFormData.email}
              onChange={(e) =>
                setTopFormData({ ...topFormData, email: e.target.value })
              }
              className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl"
              required
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
                name="phone"
                placeholder="98765 43210"
                value={topFormData.phone}
                onChange={(e) =>
                  handlePhone(e.target.value, setTopFormData, topFormData)
                }
                className="bg-foreground/5 border-foreground/10 text-foreground placeholder:text-foreground/30 h-11 rounded-xl"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            variant="lime"
            size="lg"
            className="w-full group bg-lime text-base font-bold h-12 rounded-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send My Brief"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>
      </div>
    </motion.div>
  );
};
