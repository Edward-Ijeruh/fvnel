import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  LayoutDashboard,
  Layers,
  Globe,
  Rocket,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WebDevelopmentDesignPage() {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ===== CINEMATIC DEPTH LAYERS ===== */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-200px] left-[-220px] w-[550px] h-[550px] bg-[#1A5AFF]/10 blur-[130px]" />
        <div className="absolute bottom-[-220px] right-[-200px] w-[550px] h-[550px] bg-[#1A5AFF]/10 blur-[140px]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32">
        {/* ================= HERO ================= */}
        <motion.div style={{ y: heroY }} className="mb-36 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Web Development & Design <br />
            <span className="text-[#1A5AFF]">
              Where Trust Is Engineered Before You Speak
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-700 text-lg"
          >
            Your website is not a brochure. It’s the moment a buyer decides
            whether your company feels safe, premium, and worth the price. We
            design digital environments that remove hesitation and accelerate
            decisions.
          </motion.p>
        </motion.div>

        {/* ================= IMAGE SECTION ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mb-36"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/web-showcase.png"
              alt="Premium web design showcase"
              className="w-full"
            />
          </div>
          {/* <p className="text-sm text-slate-500 mt-4 text-center">
            Suggested image: premium website mockups, live UI screens,
            interaction previews.
          </p> */}
        </motion.div>

        {/* ================= INSIGHT PROBLEM ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-36">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="text-3xl font-semibold mb-6">
              Most websites don’t lose visitors, they lose confidence.
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Buyers don’t compare features first. They scan for signals:
              clarity, authority, and structure. If those signals are missing,
              your offer feels risky, even if it’s excellent.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="rounded-2xl bg-[#EEEAE7] p-8"
          >
            <ul className="space-y-4 text-slate-700">
              <li>• Messaging feels familiar instead of memorable</li>
              <li>• Layouts force users to think too hard</li>
              <li>• Design doesn’t match pricing ambition</li>
              <li>• Visual hierarchy weakens trust signals</li>
            </ul>
          </motion.div>
        </div>

        {/* ================= SYSTEM FRAMEWORK ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Our Web System Framework
          </h2>
          <p className="max-w-2xl mx-auto text-slate-700">
            Every decision, from spacing to animation, is designed to guide
            perception and reduce friction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-36">
          {[
            {
              icon: <LayoutDashboard />,
              title: "Decision Architecture",
              text: "We map user psychology first, structuring pages around how real buyers evaluate trust.",
            },
            {
              icon: <Layers />,
              title: "Premium UX/UI Design",
              text: "Interfaces designed to feel calm, clear, and high-value within seconds.",
            },
            {
              icon: <Globe />,
              title: "High-Performance Development",
              text: "React builds optimized for speed, scalability, and future growth.",
            },
            {
              icon: <Rocket />,
              title: "Launch Optimization",
              text: "Performance tuning, analytics, and refinement so the site improves over time.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl bg-[#EEEAE7] p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1A5AFF]/10 text-[#1A5AFF] mb-5">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-slate-700">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= BLUE INSIGHT BLOCK ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="rounded-2xl bg-[#1A5AFF] p-14 text-center text-white mb-36"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Great design isn’t about looking impressive.
            <br />
            It’s about making decisions feel obvious.
          </h3>

          <p className="max-w-3xl mx-auto text-[#EEEAE7]">
            The highest-converting websites feel effortless because every
            element quietly reduces uncertainty.
          </p>
        </motion.div>

        {/* ================= OUTCOMES ================= */}
        {/* ================= OUTCOMES ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mb-32"
        >
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              What Changes After Launch
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              Launching your website isn’t just flipping a switch. It transforms
              how prospects perceive your brand, interact with your offerings,
              and convert into loyal customers.
            </p>
          </div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Higher trust before calls even begin",
                text: "A professional, strategic website builds credibility so prospects already trust your brand before they ever speak to sales.",
              },
              {
                title: "Stronger perceived brand value",
                text: "Consistent design, messaging, and functionality elevate your brand, making it feel premium and reliable.",
              },
              {
                title: "Shorter sales cycles",
                text: "Clear positioning and persuasive content reduce back-and-forth, helping leads make faster, confident decisions.",
              },
              {
                title: "Higher conversion from existing traffic",
                text: "Optimized flows, calls-to-action, and landing experiences turn more visitors into leads and customers.",
              },
              {
                title: "Clearer positioning against competitors",
                text: "Your unique selling points are highlighted strategically, so prospects instantly know why they should choose you.",
              },
              {
                title: "A website that feels like a growth asset",
                text: "Your site isn’t just a brochure—it’s a scalable tool that continuously supports marketing, sales, and brand growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -4 }}
                transition={{ delay: i * 0.05 }}
                className="relative rounded-2xl bg-[#EEEAE7] p-8 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1A5AFF]/10 text-[#1A5AFF] mb-5">
                  <CheckCircle className="w-5 h-5" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            If your website had to close the deal alone, would it?
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            Let’s build a digital experience that makes your company feel
            unavoidable.
          </p>

          <Link to="/onboarding">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center mx-auto justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#1f4bc0] cursor-pointer"
            >
              Start Web System Project
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
