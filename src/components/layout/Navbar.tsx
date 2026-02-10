import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/common/logo.png";

const navItems = ["Systems", "Projects", "Industries", "Contact Us"];
const NAV_OFFSET = 75;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  // Navbar background on scroll
  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  // Active section tracking
  useEffect(() => {
    const heroSection = document.getElementById("hero");
    const sections = navItems.map((item) =>
      document.getElementById(item.toLowerCase().replace(/\s+/g, "-")),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        let heroVisible = false;

        entries.forEach((entry) => {
          if (entry.target.id === "hero" && entry.isIntersecting)
            heroVisible = true;
        });

        if (heroVisible) {
          setActive("");
          return;
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== "hero") {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.3 },
    );

    if (heroSection) observer.observe(heroSection);
    sections.forEach((sec) => sec && observer.observe(sec));

    return () => {
      if (heroSection) observer.unobserve(heroSection);
      sections.forEach((sec) => sec && observer.unobserve(sec));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    if (window.innerWidth < 768) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      const y =
        section.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setActive(id);
  };

  const getNavItemClass = (id: string) =>
    `relative cursor-pointer font-medium transition-colors duration-200 ${
      active === id ? "text-[#285de3]" : "hover:text-[#285de3]"
    }`;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 backdrop-blur-md ${
        scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <img src={logo} alt="Fvnel logo" className="h-8 w-8" />
          <span className="text-lg font-semibold">Fvnel</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, "-");
            return (
              <li
                key={item}
                className={getNavItemClass(id)}
                onClick={() => scrollToSection(id)}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#285de3] transition-all duration-300 ${
                    active === id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="flex items-center gap-2 cursor-pointer rounded-md bg-[#285de3] px-5 py-2.5 font-medium text-white transition-all duration-300 hover:bg-[#1f4bc0] hover:shadow-lg active:scale-95">
            Book a call
            <Phone size={16} />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer text-2xl"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-black shadow-md"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => {
                const id = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={item} className="relative">
                    <button
                      className="flex w-full text-left font-medium px-2 pt-2 transition-colors duration-200"
                      onClick={() => {
                        scrollToSection(id);
                        setTimeout(() => setMobileOpen(false), 1000);
                      }}
                    >
                      {item}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] bg-[#285de3] transition-all duration-300 ${
                          active === id ? "w-25" : "w-0"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
              <li>
                <button className="w-full rounded-md bg-[#285de3] px-5 py-2.5 font-medium text-white flex items-center justify-center gap-2">
                  Book a call
                  <Phone size={16} />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
