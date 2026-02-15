import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Video,
  Camera,
  Layers3,
  Sparkles,
  PlayCircle,
  ArrowUpRight,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function VisualProduction() {
  return (
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-28"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Video & <span className="text-[#285de3]">Visual</span> Production
          </h1>

          <p className="max-w-3xl mx-auto text-slate-700 text-lg">
            Visuals are no longer supporting assets, they are the product, the
            pitch, and the proof. We design visual systems that earn attention,
            communicate value instantly, and compound across every channel.
          </p>
        </motion.div>

        {/* ================= PHILOSOPHY ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Why most visual content underperforms
            </h2>

            <p className="text-slate-700 mb-6">
              Most brands optimize for aesthetics instead of outcomes. Beautiful
              visuals that don’t hold attention, communicate positioning, or
              guide action quietly fail.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li>• No narrative structure or viewer journey</li>
              <li>• Inconsistent visual language across assets</li>
              <li>• One-off productions with no reuse strategy</li>
              <li>• No alignment with growth or acquisition goals</li>
            </ul>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="/images/visual-storytelling-frame.png"
              alt="Visual storytelling and attention framing"
              className="rounded-2xl shadow-lg"
            />
            {/*
              Image idea:
              Split-frame showing:
              Hook → Narrative → Proof → CTA
            */}
          </motion.div>
        </div>

        {/* ================= CORE SYSTEMS ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {[
            {
              icon: <Video />,
              title: "Conversion-Driven Video Systems",
              text: "Every video is structured around hooks, pacing, proof, and payoff, engineered to retain attention and move viewers toward action.",
            },
            {
              icon: <Camera />,
              title: "Scalable Content Production",
              text: "We design production pipelines that generate high-quality short-form, long-form, ads, and UGC without reinventing the wheel each time.",
            },
            {
              icon: <Layers3 />,
              title: "Visual Identity Frameworks",
              text: "Motion, typography, color, and composition are standardized into systems, creating consistency without creative stagnation.",
            },
            {
              icon: <Sparkles />,
              title: "Creative Direction & Narrative",
              text: "We define how your brand shows up visually — tone, energy, pacing, and symbolism, so every asset reinforces positioning.",
            },
            {
              icon: <PlayCircle />,
              title: "Multi-Channel Adaptation",
              text: "Assets are designed to be repurposed across social, ads, landing pages, and presentations without dilution.",
            },
            {
              icon: <ArrowUpRight />,
              title: "Performance-Informed Iteration",
              text: "We analyze retention, engagement, and conversion data to refine future visuals, turning creativity into a feedback loop.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#eeeae7] rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-[#285de3] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= SHOWCASE ================= */}
        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {[
            "/images/video-showcase-1.png",
            "/images/video-showcase-2.png",
            "/images/video-showcase-3.png",
          ].map((src, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt="Visual production showcase"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Visuals that do more than look good
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            We don’t just produce content, we build visual systems that
            communicate, convert, and compound over time.
          </p>

          <Link to="/contact">
            <button className="bg-[#285de3] hover:bg-[#1f4bc0] px-8 py-3 rounded-md text-white font-medium shadow-md">
              Start a Visual Strategy
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
