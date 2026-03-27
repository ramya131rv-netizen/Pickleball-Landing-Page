import { motion } from "framer-motion";
import { Video, Trophy, Radio, Settings, Layers } from "lucide-react";

const OurPartners = () => {
  const partners = [
    { name: "Production Name", icon: Video },
    { name: "Scoring Name", icon: Trophy },
    { name: "Live Broadcasting Name", icon: Radio },
    { name: "Technical Name", icon: Settings },
    { name: "Event Matting Name", icon: Layers },
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 bg-[#182a20] relative overflow-hidden border-t border-b border-[#dce288]/10">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 w-full h-[100px] bg-[#dce288]/5 blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      {/* Fade edges for smooth entry/exit */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#182a20] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#182a20] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex overflow-hidden relative z-0">
        <motion.div
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap pl-16 md:pl-24"
        >
          {duplicatedPartners.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <div 
                key={i} 
                className="flex items-center gap-4 text-white/40 hover:text-white transition-colors duration-500 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#dce288]/20 group-hover:border-[#dce288]/50 group-hover:shadow-[0_0_20px_rgba(220,226,136,0.2)] transition-all duration-500">
                  <Icon className="w-6 h-6 text-white/50 group-hover:text-[#dce288] transition-colors duration-500" />
                </div>
                <span className="font-dela text-xl tracking-wide uppercase mt-1">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPartners;