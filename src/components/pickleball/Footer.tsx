import { Link } from "react-router-dom";
import { CheckCircle2, Linkedin, Instagram, Facebook, Youtube, X, Mail } from "lucide-react";
import eyelevelLogo from "@/assets/eyelevel_logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-forest-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 items-start gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/">
              <img src={eyelevelLogo} alt="EyeLevel Studio" className="h-20 w-auto" />
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6 text-aligment:justify">
              India's only dedicated pickleball marketing and event management agency. South India-headquartered. National and international capability.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:ml-16">
            <h4 className="font-dela text-sm text-foreground mb-4">Navigation</h4>
            <div className="space-y-2">
              {[
                { label: "Services", id: "services" },
                { label: "Events", id: "case-studies" },
                { label: "Who We Work With", id: "who-we-serve" },
                { label: "FAQ", id: "faq" },
                { label: "Contact Us", id: "final-cta" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-foreground/50 text-sm hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Associations */}
          <div>
            <h4 className="font-dela text-sm text-foreground mb-4">Our Associations</h4>
            <div className="space-y-2">
              {[
                "Tamil Nadu Pickleball Association",
                "Bangalore Jawans (WPL)",
                "Chennai Super Champs (WPL)",
                "Women's Premier Pickleball League",
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-foreground/50 text-sm">{a}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Social Media */}
          <div className="w-[80%]">
            <h4 className="font-dela text-sm text-foreground mb-4">Connect</h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/theeyelevelstudio/",
                  icon: Linkedin,
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/theeyelevelstudio/",
                  icon: Instagram,
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/share/1DN368ZHPh/",
                  icon: Facebook,
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@theeyelevelstudio",
                  icon: Youtube,
                },
                {
                  label: "X",
                  href: "https://x.com/Eye_Levelstudio",
                  icon: X,
                },
                {
                  label: "Mail",
                  href: "https://mail.google.com/mail/?view=cm&to=hello@eyelevelstudio.in",
                  icon: Mail,
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary/20 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-xs">© 2026 The EyeLevel Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-foreground/40 text-xs hover:text-foreground/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-foreground/40 text-xs hover:text-foreground/60 transition-colors">Terms & Conditions</Link>
            <a href="https://theeyelevelstudio.com" target="_blank" rel="noopener noreferrer" className="text-foreground/40 text-xs hover:text-foreground/60 transition-colors">theeyelevelstudio.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
