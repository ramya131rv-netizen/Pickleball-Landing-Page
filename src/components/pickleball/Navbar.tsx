import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

import eyelevelLogo from "@/assets/eyelevel_logo.svg";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", id: "services" },
  { label: "Events", id: "case-studies" },
  { label: "Who We Work With", id: "who-we-serve" },
  { label: "FAQ", id: "faq" },
];

const scrollToSection = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="absolute inset-x-0 top-0 z-50 px-4 pt-2 sm:px-5 md:px-8">
      <div className="mx-auto max-w-7xl" ref={navRef}>
        <div className="py-3 md:px-0">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="shrink-0 transition-opacity hover:opacity-90"
            >
              <img
                src={eyelevelLogo}
                alt="EyeLevel Studio"
                className="h-16 md:h-20 w-auto"
              />
            </Link>

            <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1.5 backdrop-blur-md md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="lime"
                size="sm"
                className="ml-2 rounded-full font-semibold"
                onClick={() => scrollToSection("final-cta")}
              >
                Let's Talk
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-white transition-opacity hover:opacity-80 md:hidden"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-250 ease-out md:hidden ${
            isOpen
              ? "max-h-80 translate-y-0 pt-0 opacity-100"
              : "max-h-0 -translate-y-2 pt-0 opacity-0"
          }`}
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-[#10261c]/95 px-5 py-4 text-white shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className="text-left text-base font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </button>
              ))}

              <Button
                variant="lime"
                className="mt-1 h-11 rounded-full text-sm font-semibold"
                onClick={() => handleNavigate("final-cta")}
              >
                Let's Talk
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
