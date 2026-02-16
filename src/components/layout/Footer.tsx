"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import logo from "../../assets/common/logo.png";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const servicesLinks = [
  { label: "AI Outreach Automation", path: "/ai-automation" },
  { label: "SEO & GEO Optimisation", path: "/seo-geo" },
  { label: "Social Media Optimisation", path: "/social-media" },
  { label: "Video & Visual Production", path: "/visual-production" },
  { label: "Web Development & Design", path: "/web-development" },
];

const companyLinks = [
  { label: "Client Onboarding", path: "/onboarding" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Our Systems", path: "/systems" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Service", path: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="bg-[#292928] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* About */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
          >
            <div className="flex items-center gap-2 cursor-pointer mb-8">
              <img src={logo} alt="Fvnel logo" className="h-auto w-10" />
              <span className="text-lg font-semibold">Fvnel</span>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              AI Automation · Growth Systems <br />
              Digital Infrastructure
            </p>

            <div className="w-12 h-[2px] bg-white mb-6" />

            <p className="text-sm text-gray-300 leading-relaxed">
              We Build Scalable Acquisition Systems For SaaS, B2B, And Service
              Brands Ready To Operate At A Higher Level.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="lg:border-l lg:border-white lg:pl-10"
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>

            <ul className="space-y-4 text-gray-300">
              {servicesLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="block cursor-pointer transition-all duration-300 hover:text-[#285de3] hover:translate-x-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="lg:border-l lg:border-white lg:pl-10"
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>

            <ul className="space-y-4 text-gray-300">
              {companyLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="block cursor-pointer transition-all duration-300 hover:text-[#285de3] hover:translate-x-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            transition={{ delay: 0.3 }}
            className="lg:border-l lg:border-white lg:pl-10"
          >
            <h3 className="text-lg font-semibold mb-4">Ready To Scale?</h3>

            <p className="text-sm text-gray-300 mb-6">
              Book A Strategy Call And See What Predictable Growth Looks Like.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className=" cursor-pointer bg-[#285de3] hover:bg-[#1f4bc0] transition-all duration-300 px-6 py-2.5 rounded-md font-medium shadow-md hover:shadow-lg"
              >
                Book A Call
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          transition={{ delay: 0.4 }}
          className="border-t border-white mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4"
        >
          <p>© 2026 Fvnel. All Rights Reserved.</p>
          <p className="text-white font-medium">
            Built For Founders Who Refuse Average.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
