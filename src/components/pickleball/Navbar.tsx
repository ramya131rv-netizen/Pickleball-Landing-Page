import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import eyelevelLogo from "@/assets/eyelevel_logo.svg";

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
  const [showCta, setShowCta] = useState(false);
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

  useEffect(() => {
    const heroSection = document.getElementById("hero");

    if (!heroSection) {
      setShowCta(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCta(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [isOpen]);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[1000] border-b border-white/10 bg-[#0d1f1a]/92 backdrop-blur-[12px]"
      role="banner"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className="mx-auto flex min-h-[72px] w-full max-w-[1200px] items-center justify-between px-[18px] lg:px-1"
        ref={navRef}
      >
        <motion.button
          type="button"
          className="flex shrink-0 items-center gap-2.5 text-[1.15rem] text-white"
          aria-label="EyeLevel home"
          whileHover={{ scale: 1.03 }}
          onClick={() => handleNavigate("hero")}
        >
          <a href="https://theeyelevelstudio.com">
            <img
              src={eyelevelLogo}
              alt="EyeLevel Studio Logo"
              className="h-[48px] w-auto md:h-[54px] lg:h-[63px]"
            />
          </a>
        </motion.button>

        <nav
          className={`hidden flex-1 transition-all duration-300 md:flex ${showCta ? "justify-center" : "justify-end"}`}
          aria-label="Primary navigation"
        >
          <ul className="flex items-center gap-6 text-[0.92rem] text-white/78 transition-all duration-300">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  className="transition hover:text-[#e2fea5]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <AnimatePresence>
            {showCta ? (
              <motion.button
                type="button"
                className="hidden items-center justify-center whitespace-nowrap rounded-[8px] bg-[#e2fea5] px-[18px] py-[9px] text-[0.85rem] font-semibold text-[#0d1f1a] transition hover:bg-[#c8e88a] hover:shadow-[0_4px_16px_rgba(226,254,165,0.25)] md:inline-flex"
                aria-label="Get a free consultation"
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavigate("hero-form")}
              >
                Let's Talk
                <ArrowRight className="ml-1 h-4 w-4" />
              </motion.button>
            ) : null}
          </AnimatePresence>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-end text-white transition hover:text-[#e2fea5] md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X size={18} strokeWidth={2.2} />
            ) : (
              <Menu size={18} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            id="mobile-nav"
            className="border-t border-white/10 bg-[#10251f] px-[18px] py-4 md:hidden"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-1 text-[0.95rem] text-white/82">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="block w-full rounded-[8px] px-3 py-2.5 text-left transition hover:bg-white/5 hover:text-[#e2fea5]"
                    onClick={() => handleNavigate(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              <AnimatePresence>
                {showCta ? (
                  <motion.li
                    className="pt-3"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-[8px] bg-[#e2fea5] px-[18px] py-[11px] text-[0.9rem] font-semibold text-[#0d1f1a] transition hover:bg-[#c8e88a]"
                      onClick={() => handleNavigate("hero-form")}
                    >
                      Let's Talk
                    </button>
                  </motion.li>
                ) : null}
              </AnimatePresence>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};
