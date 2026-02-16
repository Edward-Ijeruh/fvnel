import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Search,
  MapPin,
  Network,
  Brain,
  Layers,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import diagram from "../../assets/common/seo-diagram.jpeg";
import image from "../../assets/common/seo-image.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SeoGeoPage() {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ===== CINEMATIC DEPTH BACKGROUND ===== */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-180px] right-[-150px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] left-[-180px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[140px]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32">
        {/* ================= HERO ================= */}
        <motion.div style={{ y: heroY }} className="mb-32 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            SEO & GEO Systems <br />
            <span className="text-[#1A5AFF]">
              Built for Search Engines, Maps & AI Discovery
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-700 text-lg"
          >
            Discovery has changed. Businesses are now evaluated across search,
            location signals, and AI-generated answers. We engineer visibility
            systems that make your company easier to find, and easier to trust.
          </motion.p>
        </motion.div>

        {/* ================= IMAGE SECTION 1 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-2xl mx-auto mb-32"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={diagram}
              alt="Search ecosystem diagram"
              className="w-full"
            />
          </div>
          {/* <p className="text-sm text-slate-500 mt-4 text-center">
            Suggested image: Website → Search Engines → Maps → AI Answers → User
            flow.
          </p> */}
        </motion.div>

        {/* ================= MODERN DISCOVERY ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="text-3xl font-semibold mb-6">
              How modern discovery actually works
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Search engines no longer rank pages, they model entities,
              locations, authority, and intent. AI systems retrieve answers from
              structured information and trust signals across the web.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="rounded-2xl bg-[#EEEAE7] p-8"
          >
            <ul className="space-y-4 text-slate-700">
              <li>• Your business is interpreted as an entity</li>
              <li>• Location signals influence relevance</li>
              <li>• Content feeds AI summaries & recommendations</li>
              <li>• Authority compounds across channels over time</li>
            </ul>
          </motion.div>
        </div>

        {/* ================= CORE SYSTEMS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Network />,
              title: "Search Architecture",
              text: "Site structures designed to communicate authority and relevance clearly to search engines and AI crawlers.",
            },
            {
              icon: <MapPin />,
              title: "Geographic Authority",
              text: "Local relevance engineering through location consistency, map optimization, and regional trust signals.",
            },
            {
              icon: <Layers />,
              title: "Content Systems",
              text: "Structured content ecosystems designed for depth, not random blog posts.",
            },
            {
              icon: <Brain />,
              title: "AI Search Readiness",
              text: "Content optimized for AI summaries, answer engines, and emerging discovery platforms.",
            },
            {
              icon: <Search />,
              title: "Intent Mapping",
              text: "Capture commercial, informational, and local search intent across the full buyer journey.",
            },
            {
              icon: <BarChart3 />,
              title: "Compounding Performance",
              text: "Track growth in authority, visibility, and conversions, not vanity rankings.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-[#EEEAE7] p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1A5AFF]/10 text-[#1A5AFF] mb-5">
                {item.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= IMAGE SECTION 2 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-2xl mx-auto mb-32"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={image}
              alt="SEO performance dashboard"
              className="w-full"
            />
          </div>
          {/* <p className="text-sm text-slate-500 mt-4 text-center">
            Suggested image: Rankings growth, map visibility, traffic quality
            analytics.
          </p> */}
        </motion.div>

        {/* ================= INSIGHT BLOCK ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="rounded-2xl bg-[#1A5AFF] p-14 text-center text-white mb-32"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Visibility is infrastructure, not marketing.
          </h3>

          <p className="max-w-3xl mx-auto text-[#EEEAE7]">
            The companies that win long-term aren’t chasing rankings. They build
            discoverability systems that make them the default choice wherever
            decisions happen.
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
              What Changes After Implementation
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              This isn’t a traffic spike. It’s a structural shift in how your
              business is discovered, evaluated, and trusted over time.
            </p>
          </div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Higher search & map visibility",
                text: "Your business appears more consistently across organic search results and local map placements where intent is highest.",
              },
              {
                title: "Stronger AI answer presence",
                text: "Your content becomes a reliable source for AI-generated summaries, recommendations, and discovery engines.",
              },
              {
                title: "Compounding authority signals",
                text: "Search engines and AI systems reinforce trust in your brand as signals stack over time instead of resetting.",
              },
              {
                title: "More qualified inbound leads",
                text: "Traffic quality improves as discovery aligns with real intent, not just keyword volume.",
              },
              {
                title: "Reduced paid ad dependency",
                text: "Organic visibility carries more of the acquisition load, lowering long-term customer acquisition costs.",
              },
              {
                title: "Durable discovery infrastructure",
                text: "You own a system that continues working even as algorithms, platforms, and interfaces evolve.",
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
            Be discoverable where decisions are made
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            Let’s build a search presence that compounds authority instead of
            relying on short-term tactics.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center mx-auto justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#1f4bc0] cursor-pointer"
            >
              Request SEO & GEO Strategy
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
