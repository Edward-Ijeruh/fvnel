import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import zapier from "../../assets/hero/zapier.png";
import make from "../../assets/hero/make.png";
import openai from "../../assets/hero/openai.png";
import meta from "../../assets/hero/meta.png";
import n8n from "../../assets/hero/n8n.png";

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

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;

    if (!hero || !glow) return;

    const moveGlow = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      glow.style.left = `${e.clientX - rect.left}px`;
      glow.style.top = `${e.clientY - rect.top}px`;
      glow.style.opacity = "1";
    };

    const hideGlow = () => {
      glow.style.opacity = "0";
    };

    hero.addEventListener("mousemove", moveGlow);
    hero.addEventListener("mouseleave", hideGlow);

    return () => {
      hero.removeEventListener("mousemove", moveGlow);
      hero.removeEventListener("mouseleave", hideGlow);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/interactiveaiwebsite-6EHc44xTWmSt5P16jQBQqiTH/"
          className="w-full h-full"
          frameBorder="0"
          loading="lazy"
          title="Spline Background"
        />
      </div>

      {/* Mouse Glow
      <div
        ref={glowRef}
        className="pointer-events-none absolute z-50 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-[opacity,transform] duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle at center, rgba(40,93,227,0.55), rgba(40,93,227,0.35) 40%, transparent 70%)",
        }}
      /> */}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 pt-40 pb-24"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900"
        >
          We Engineer <span className="text-blue-600">Growth Systems</span>
          <br />
          For Businesses Worldwide
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed"
        >
          FVNEL builds SEO & GEO intelligence, AI automation, social media
          optimization, branding, UI/UX design, and web development, engineered
          as scalable business infrastructure.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <div className="mb-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>

        {/* Trusted platforms */}
        <div className="mt-16">
          {/* Header */}
          <motion.div
            className="mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700">
              Built on trusted platforms
            </h3>
          </motion.div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {[zapier, make, openai, n8n, meta].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.08 }}
                className="flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Platform logo"
                  className="h-7 sm:h-8 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
