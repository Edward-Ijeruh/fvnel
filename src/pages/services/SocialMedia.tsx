import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Share2,
  TrendingUp,
  Users,
  Calendar,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SocialMedia() {
  return (
    <section className="pt-40 pb-32 bg-[#eeeae7]">
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
            Social Media <span className="text-[#285de3]">Optimisation</span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-700 text-lg">
            Social platforms are not distribution channels, they are attention
            markets. We design content and systems that earn attention, build
            trust, and convert relevance into demand.
          </p>
        </motion.div>

        {/* ================= HOW SOCIAL REALLY WORKS ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Why most brands fail on social
            </h2>

            <p className="text-slate-700 mb-6">
              Posting consistently is not a strategy. Algorithms reward
              relevance, retention, and resonance, not volume. Without systems,
              brands burn effort with little compounding return.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li>• Chasing trends instead of attention mechanics</li>
              <li>• No repeatable content frameworks</li>
              <li>• Zero connection to business outcomes</li>
              <li>• No feedback loop from performance data</li>
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
              src="/images/social-attention-loop.png"
              alt="Social media attention and growth loop"
              className="rounded-2xl shadow-lg"
            />
            {/*
              Image idea:
              Loop showing:
              Content → Attention → Engagement → Authority → Distribution → Demand
            */}
          </motion.div>
        </div>

        {/* ================= CORE SYSTEMS ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {[
            {
              icon: <TrendingUp />,
              title: "Algorithm-Aware Strategy",
              text: "We reverse-engineer platform distribution signals,  watch time, saves, shares, and profile actions, and design content that triggers them naturally.",
            },
            {
              icon: <Calendar />,
              title: "Content Operating Systems",
              text: "Documented frameworks for ideation, scripting, production, scheduling, and repurposing, built to scale without burnout.",
            },
            {
              icon: <Users />,
              title: "Audience & Trust Building",
              text: "We engineer familiarity and authority through narrative consistency, value density, and long-term positioning.",
            },
            {
              icon: <Layers />,
              title: "Format & Channel Leverage",
              text: "Short-form, long-form, carousels, and video are mapped together, each asset feeding multiple platforms.",
            },
            {
              icon: <Share2 />,
              title: "Conversion Pathways",
              text: "Social content feeds landing pages, email capture, DMs, and sales conversations, not vanity metrics.",
            },
            {
              icon: <ArrowUpRight />,
              title: "Performance Feedback Loops",
              text: "We track what earns attention, what converts, and what compounds, then refine systems continuously.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[#285de3] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.text}
              </p>
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
            Turn attention into compounding growth
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            We don’t manage accounts, we build social systems that attract,
            nurture, and convert demand over time.
          </p>
          <Link to="/contact">
            <button className="bg-[#285de3] hover:bg-[#1f4bc0] px-8 py-3 rounded-md text-white font-medium shadow-md">
              Request Social Strategy
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
