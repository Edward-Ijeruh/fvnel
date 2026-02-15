import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/common/logo.png";
import { servicesLinks, companyLinks } from "../../lib/nav.config";

const linkBase =
  "relative font-medium transition-colors duration-200 hover:text-[#285de3]";
const activeClass = "text-[#285de3]";

type MobileDropdown = "services" | "company" | null;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<MobileDropdown>(null);

  const toggleMobileDropdown = (key: MobileDropdown) => {
    setMobileDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Fvnel logo" className="w-10" />
          <span className="text-lg font-semibold">Fvnel</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : ""}`
              }
            >
              Home
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium cursor-pointer hover:text-[#285de3]">
              Services <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-5 w-[380px] rounded-xl bg-white shadow-xl border border-gray-100 p-4"
                >
                  <ul className="grid gap-2">
                    {servicesLinks.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `block rounded-lg px-4 py-3 text-sm transition-all cursor-pointer ${
                              isActive
                                ? "bg-[#285de3]/10 text-[#285de3]"
                                : "hover:bg-gray-100"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Company Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium cursor-pointer hover:text-[#285de3]">
              Company <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-5 w-[320px] rounded-xl bg-white shadow-xl border border-gray-100 p-4"
                >
                  <ul className="grid gap-2">
                    {companyLinks.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `block rounded-lg px-4 py-3 text-sm transition-all cursor-pointer ${
                              isActive
                                ? "bg-[#285de3]/10 text-[#285de3]"
                                : "hover:bg-gray-100"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeClass : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#285de3] hover:bg-[#1f4bc0] px-6 py-2.5 rounded-md text-white font-medium shadow-md cursor-pointer"
            >
              Get Started
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              <NavLink to="/" onClick={() => setMobileOpen(false)}>
                Home
              </NavLink>

              {/* Mobile Services */}
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="flex justify-between items-center"
              >
                Services
                <ChevronDown
                  className={`transition-transform ${
                    mobileDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileDropdown === "services" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 flex flex-col gap-3"
                  >
                    {servicesLinks.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className="text-sm text-gray-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Company */}
              <button
                onClick={() => toggleMobileDropdown("company")}
                className="flex justify-between items-center"
              >
                Company
                <ChevronDown
                  className={`transition-transform ${
                    mobileDropdown === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileDropdown === "company" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 flex flex-col gap-3"
                  >
                    {companyLinks.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className="text-sm text-gray-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </NavLink>

              <Link to="/contact">
                <button className="mt-4 bg-[#285de3] px-5 py-2.5 rounded-md text-white">
                  Get Started
                </button>
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
