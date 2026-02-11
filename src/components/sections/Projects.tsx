"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import firstProject from "../../assets/projects/first-project.png";
import secondProject from "../../assets/projects/second-project.png";
import thirdProject from "../../assets/projects/third-project.png";
import fourProject from "../../assets/projects/four-project.png";

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

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <div className="relative bg-[#292928] text-white overflow-hidden">
        <div className="absolute -top-54 -right-54 md:-top-34 md:-right-14 w-96 h-96 rounded-full bg-white" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            className="max-w-xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
              Projects we <br /> have{" "}
              <span className="text-[#285de3]">Completed</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Real AI Automation & Growth Systems Built for <br /> Measurable
              Results.
            </p>
          </motion.div>

          {/* Project 1 */}
          <div className="mt-40 flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              className="max-w-lg"
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                AI Outreach Automation
              </h3>
              <h4 className="text-md uppercase tracking-wide text-gray-400 mb-4">
                Category: Lead Generation · AI Automation
              </h4>
              <p className="text-sm text-gray-300 mb-6">
                AI-driven outreach system built to scale personalised messages
                safely without account risk.
              </p>

              <button className="group inline-flex items-center gap-2 text-sm font-medium hover:underline hover:text-[#285de3]">
                Learn more
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                />
              </button>
            </motion.div>

            <div className="relative overflow-visible">
              {/* Glow */}
              <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 w-80 h-80 rounded-full bg-white blur-2xl opacity-70 z-0" />

              {/* Image */}
              <motion.img
                src={firstProject}
                alt="First project"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                className="relative z-10 w-full lg:w-[615px] h-auto lg:h-[355px] rounded-[13px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex justify-between flex-col lg:flex-row-reverse items-center gap-12">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              className="max-w-lg"
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                Marketing & Social Media optimization
              </h3>
              <h4 className="text-md uppercase tracking-wide text-gray-600 mb-4">
                Category: Brand Systems · Content Ops
              </h4>
              <p className="text-sm text-gray-700 mb-6">
                Automated content workflows combining AI copy, scheduling, and
                performance tracking.
              </p>

              <button className="group inline-flex items-center gap-2 text-sm font-medium hover:underline hover:text-[#285de3]">
                Learn more
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                />
              </button>
            </motion.div>

            <div className="relative overflow-visible">
              {/* Glow */}
              <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 w-80 h-80 rounded-full bg-[#285de3] blur-2xl opacity-70 z-0" />

              {/* Image */}
              <motion.img
                src={secondProject}
                alt="Second project"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                className="relative z-10 w-full lg:w-[615px] h-auto lg:h-[355px] rounded-[16px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-[#292928] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex justify-between flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              className="max-w-lg"
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                Search & Location Optimization System
              </h3>
              <h4 className="text-md uppercase tracking-wide text-gray-400 mb-4">
                Category: AI Optimization · Geographic SEO
              </h4>
              <p className="text-sm text-gray-300 mb-6">
                Search and location-based optimization system designed to
                improve visibility, rankings, and discoverability across
                targeted regions
              </p>

              <button className="group inline-flex items-center gap-2 text-sm font-medium hover:underline hover:text-[#285de3]">
                Learn more
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                />
              </button>
            </motion.div>

            <div className="relative overflow-visible">
              {/* Glow */}
              <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 w-80 h-80 rounded-full bg-white blur-2xl opacity-70 z-0" />

              {/* Image */}
              <motion.img
                src={thirdProject}
                alt="First project"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                className="relative z-10 w-full lg:w-[615px] h-auto lg:h-[355px] rounded-[13px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex justify-between flex-col lg:flex-row-reverse items-center gap-12">
            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              className="max-w-lg"
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-2">
                High-Converting B2B Website Rebuild
              </h3>
              <h4 className="text-md uppercase tracking-wide text-gray-600 mb-4">
                Category: Web Development · UX Optimisation
              </h4>
              <p className="text-sm text-gray-700 mb-6">
                Redesigned and engineered a conversion-focused website that
                improved clarity, authority, and lead capture performance.
              </p>

              <button className="group inline-flex items-center gap-2 text-sm font-medium hover:underline hover:text-[#285de3]">
                Learn more
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                />
              </button>
            </motion.div>

            <div className="relative overflow-visible">
              {/* Glow */}
              <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 w-80 h-80 rounded-full bg-[#285de3] blur-2xl opacity-70 z-0" />

              {/* Image */}
              <motion.img
                src={fourProject}
                alt="Second project"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-80px" }}
                className="relative z-10 w-full lg:w-[615px] h-auto lg:h-[355px] rounded-[16px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
