import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import eyelevelLogo from "@/assets/eyelevel_logo.svg";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <img src={eyelevelLogo} alt="EyeLevel Studio" className="h-20 md:h-38 w-auto" />
        </Link>
        <div className="hidden max-w-7xl md:flex items-center gap-1 bg-foreground/5 backdrop-blur-md border border-foreground/10 rounded-full px-2 py-1.5">
          {[
            { label: "Services", id: "services" },
            { label: "Events", id: "case-studies" },
            { label: "Who We Work With", id: "who-we-serve" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="lime"
            size="sm"
            className="rounded-full ml-1 font-semibold"
            onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Talk →
          </Button>
        </div>
        <Button
          variant="lime"
          size="sm"
          className="md:hidden rounded-full font-semibold"
          onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
        >
          Let's Talk →
        </Button>
      </div>
    </nav>
  );
};
