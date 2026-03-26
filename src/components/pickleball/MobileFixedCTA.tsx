import { Phone as PhoneIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileFixedCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-md border-t border-border sm:hidden">
      <Button variant="lime" size="lg" className="w-full group" onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}>
        <PhoneIcon className="w-4 h-4" />
        Get a Free Strategy Call
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};
