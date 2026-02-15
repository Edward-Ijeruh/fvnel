import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Search,
  MapPin,
  BarChart3,
  Layers,
  Network,
  Brain,
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

export default function SeoGeo() {
  return (
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-28 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            SEO & GEO Optimisation <br />
            <span className="text-[#285de3]">
              Built for Humans, Search Engines & AI
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-700 text-lg">
            Discovery has changed. Rankings, maps, and AI answers now decide who
            gets chosen. We don’t “do SEO”, we engineer how your business is
            understood across search engines, local intent, and AI systems.
          </p>
        </motion.div>

        {/* ================= HOW DISCOVERY WORKS ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              How modern discovery actually works
            </h2>

            <p className="text-slate-700 mb-6">
              Search engines no longer rank pages, they model entities,
              locations, authority, and intent. AI systems retrieve answers
              based on structure, clarity, and trust signals.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li>• Your site is interpreted as an entity, not pages</li>
              <li>• Location relevance influences visibility</li>
              <li>• Content feeds AI summaries and answers</li>
              <li>• Authority compounds across the web</li>
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
              src="/images/search-ecosystem.png"
              alt="Search and AI discovery ecosystem"
              className="rounded-2xl shadow-lg"
            />
            {/*
              Image suggestion:
              Diagram showing:
              Website → Search Engine → Maps → AI Answers → User
            */}
          </motion.div>
        </div>

        {/* ================= CORE SYSTEMS ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {[
            {
              icon: <Network />,
              title: "Search Architecture",
              text: "We design site structures that communicate topical authority, relationships, and intent clearly to search engines and AI crawlers.",
            },
            {
              icon: <MapPin />,
              title: "Geographic & Local Authority",
              text: "From map optimization to entity consistency, we engineer local relevance that compounds across locations and regions.",
            },
            {
              icon: <Layers />,
              title: "Content Systems (Not Blogs)",
              text: "We build structured content frameworks that answer questions, support AI retrieval, and strengthen topical depth over time.",
            },
            {
              icon: <Brain />,
              title: "AI Search Readiness",
              text: "Your content is optimized for AI-driven discovery, summaries, and citations, not just blue links.",
            },
            {
              icon: <Search />,
              title: "Intent Coverage",
              text: "We map and capture commercial, informational, and local intent so users find you at every decision stage.",
            },
            {
              icon: <BarChart3 />,
              title: "Compounding Performance Tracking",
              text: "We measure authority growth, traffic quality, conversions, and AI visibility, not vanity metrics.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-[#eeeae7] p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-[#285de3] mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
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
            Be discoverable where decisions are made
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            Search visibility is no longer optional, it’s infrastructure. Let’s
            build systems that compound visibility, trust, and demand.
          </p>

          <Link to="/contact">
            <button className="bg-[#285de3] hover:bg-[#1f4bc0] px-8 py-3 rounded-md text-white font-medium shadow-md cursor-pointer">
              Request SEO & GEO Audit
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
