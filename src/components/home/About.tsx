"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import arrowUpRight from "../../assets/about/arrow-up-right.png";
import aboutLeftImg from "../../assets/about/about-left.png";
import aboutRightImg from "../../assets/about/about-right.png";

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

function useCountUp(target: number, inView: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) {
      setValue(0);
      return;
    }

    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return value;
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const [statsInView, setStatsInView] = useState(false);
  const [metricsInView, setMetricsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStatsInView(entry.isIntersecting),
      { threshold: 0.4 },
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setMetricsInView(entry.isIntersecting),
      { threshold: 0.4 },
    );

    if (metricsRef.current) observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

  const clients = useCountUp(50, statsInView);
  const workforce = useCountUp(2, statsInView);
  const experience = useCountUp(15, statsInView);
  const projects = useCountUp(5, statsInView);

  const retention = useCountUp(90, metricsInView);
  const efficiency = useCountUp(45, metricsInView);
  const industries = useCountUp(12, metricsInView);

  return (
    <section className="relative w-full py-32">
      {/* Stat card */}
      <div className="max-w-5xl mx-auto relative z-20 flex justify-center rounded-3xl">
        <div
          ref={statsRef}
          className="mx-4 w-full max-w-6xl rounded-3xl bg-black p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Main stat */}
            <div className="rounded-2xl bg-[#1a5aff] p-6 text-white relative">
              <div className="text-5xl font-semibold mb-6">{clients}k+</div>

              <div className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <img
                  src={arrowUpRight}
                  alt="Arrow up right"
                  className="h-4 w-4"
                />
              </div>

              <p className="text-xs opacity-90">
                AI Automations Website Designed Brands optimization
              </p>
            </div>

            {/* Other stats */}
            {[
              { value: workforce, label: "Satisfied Clients", suffix: "k+" },
              { value: experience, label: "Work Force", suffix: "+" },
              { value: projects, label: "Years Experience", suffix: "+" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center"
              >
                <div className="text-5xl font-semibold text-black">
                  {item.value}
                  {item.suffix}
                </div>
                <p className="mt-2 text-sm md:text-md text-black font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About content */}
      <div className="max-w-6xl mx-auto -mt-24 bg-[#eeeae7] rounded-4xl pt-40 pb-24 z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto max-w-6xl px-6"
        >
          <motion.h2
            variants={fadeUp}
            className="mb-12 text-center text-4xl md:text-5xl font-semibold text-black"
          >
            ABOUT
          </motion.h2>

          {/* Content row */}
          <div className="mb-20 flex flex-col lg:flex-row gap-12">
            <div className="flex-1 text-center">
              <motion.h3
                variants={fadeUp}
                className="mb-6 text-3xl sm:text-4xl font-bold text-black"
              >
                We Engineer{" "}
                <span className="text-[#1a5aff]">Growth Infrastructure.</span>
              </motion.h3>

              <motion.div
                variants={fadeUp}
                className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm"
              >
                <motion.h4
                  variants={fadeUp}
                  className="mb-2 text-xs font-semibold tracking-widest text-slate-500"
                >
                  WHO WE ARE
                </motion.h4>

                <motion.p
                  variants={fadeUp}
                  className="mb-4 text-xl font-semibold text-black"
                >
                  Built for <span className="text-[#1a5aff]">Scale.</span>{" "}
                  Designed for Precision.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="mb-6 text-sm leading-relaxed text-slate-700"
                >
                  Fvnel was created to solve a fundamental problem: most
                  agencies build campaigns. We build systems.
                  <br />
                  <br />
                  Our approach integrates AI automation, UX architecture,
                  performance intelligence, and brand structure into unified
                  growth engines that compound over time.
                </motion.p>

                {/* Image animation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <img
                    src={aboutLeftImg}
                    alt="About Fvnel"
                    className="w-full rounded-xl object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>

            <div className="flex-1 flex flex-col items-center text-center gap-4">
              <motion.p
                variants={fadeUp}
                className="mb-6 max-w-md text-sm text-slate-700"
              >
                FVNEL is a digital growth infrastructure firm serving businesses
                worldwide. We design scalable systems powered by AI, automation,
                and precision engineering.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mb-4 text-xs font-semibold tracking-widest text-slate-500"
              >
                WHY WE’RE DIFFERENT
              </motion.p>

              <motion.ol variants={fadeUp} className="mb-6 space-y-3">
                {[
                  "Systems, Not Campaigns",
                  "AI-First Architecture",
                  "Execution at Scale",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-3 text-[#1a5aff] font-medium"
                  >
                    <span>{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ol>

              <motion.p
                variants={fadeUp}
                className="mb-8 max-w-md text-sm text-slate-700"
              >
                We deploy, optimize, and refine continuously, engineering
                measurable growth.
              </motion.p>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.08 }}
              >
                <img
                  src={aboutRightImg}
                  alt="Fvnel growth systems"
                  className="w-full max-w-md rounded-xl object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Metrics */}
          <div
            ref={metricsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center"
          >
            <div>
              <div className="text-4xl md:text-5xl font-semibold text-black">
                {retention}%
              </div>
              <p className="mt-2 text-sm md:text-lg font-bold">
                Client retention
              </p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-semibold text-black">
                {efficiency}%
              </div>
              <p className="mt-2 text-sm md:text-lg font-bold">
                Avg efficiency gain
              </p>
            </div>

            <div>
              <div className="text-4xl md:text-5xl font-semibold text-black">
                {industries}+
              </div>
              <p className="mt-2 text-sm md:text-lg font-bold">
                Industries served
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
