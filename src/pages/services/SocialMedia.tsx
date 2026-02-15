import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Layers,
  BarChart3,
  Brain,
  Calendar,
  MessageSquare,
  Network,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SocialMediaOptimizationPage() {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ===== CINEMATIC DEPTH ===== */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-180px] right-[-180px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[120px]" />
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
            Social Media Optimization <br />
            <span className="text-[#1A5AFF]">
              Built as a Conversion System, Not a Content Calendar
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-700 text-lg"
          >
            Most brands post consistently but still struggle to grow. We
            engineer social media systems that align brand design, storytelling,
            platform behavior, and conversion strategy into one scalable
            ecosystem.
          </motion.p>
        </motion.div>

        {/* ================= IMAGE SECTION 1 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mb-32"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/social-system-map.png"
              alt="Social media system flow"
              className="w-full"
            />
          </div>
          {/* <p className="text-sm text-slate-500 mt-4 text-center">
            Suggested image: Content → Distribution → Engagement → Conversion
            flow diagram.
          </p> */}
        </motion.div>

        {/* ================= WHY MOST SOCIAL FAILS ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="text-3xl font-semibold mb-6">
              Why most social media strategies stall
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Brands often focus on posting frequency instead of system design.
              Without unified messaging and platform-specific strategy, content
              creates noise instead of authority.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="rounded-2xl bg-[#EEEAE7] p-8"
          >
            <ul className="space-y-4 text-slate-700">
              <li>• Content doesn’t support business goals</li>
              <li>• Platforms are treated the same instead of strategically</li>
              <li>• Brand design feels inconsistent</li>
              <li>• Engagement doesn’t translate into leads</li>
            </ul>
          </motion.div>
        </div>

        {/* ================= CORE SYSTEMS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Layers />,
              title: "Brand Design Alignment",
              text: "Visual consistency across posts, stories, and campaigns so your brand feels instantly recognizable.",
            },
            {
              icon: <MessageSquare />,
              title: "Conversion-Focused Content",
              text: "Posts designed to move users from attention → trust → action, not just likes.",
            },
            {
              icon: <Network />,
              title: "Multi-Platform Strategy",
              text: "Platform-specific positioning for TikTok, Instagram, YouTube, and LinkedIn without duplicating effort.",
            },
            {
              icon: <Calendar />,
              title: "AI Scheduling & Distribution",
              text: "Automated publishing systems optimized for timing, consistency, and visibility.",
            },
            {
              icon: <Brain />,
              title: "AI-Assisted Content Intelligence",
              text: "Use AI to analyze performance patterns and refine messaging over time.",
            },
            {
              icon: <BarChart3 />,
              title: "Performance & Conversion Tracking",
              text: "Measure meaningful growth signals like inbound leads and engagement quality.",
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
          className="mb-32"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/content-dashboard.png"
              alt="Content analytics dashboard"
              className="w-full"
            />
          </div>
          {/* <p className="text-sm text-slate-500 mt-4 text-center">
            Suggested image: content analytics dashboard, posting calendar,
            engagement trends.
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
            Content is not marketing.
            <br />
            Systems are.
          </h3>

          <p className="max-w-3xl mx-auto text-[#EEEAE7]">
            The brands that dominate social platforms aren’t posting more,
            they’re operating distribution systems that turn content into
            consistent attention and predictable conversions.
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
              Social stops being random posting. It becomes a structured system
              that supports brand clarity, engagement, and revenue
              conversations.
            </p>
          </div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Stronger cross-platform brand consistency",
                text: "Your messaging, visuals, and positioning stay aligned across every platform, building recognition and trust.",
              },
              {
                title: "Higher-quality engagement signals",
                text: "Comments, saves, and shares become more relevant as content attracts the right audience, not just attention.",
              },
              {
                title: "Content that supports sales conversations",
                text: "Posts are designed to educate, pre-qualify, and reinforce value before prospects ever reach your inbox.",
              },
              {
                title: "Scalable AI-powered workflows",
                text: "Content planning, repurposing, and iteration become faster without sacrificing brand voice or strategy.",
              },
              {
                title: "Improved conversion from social traffic",
                text: "Social platforms stop being awareness-only channels and start contributing directly to pipeline growth.",
              },
              {
                title: "Less content chaos, clearer execution",
                text: "You replace reactive posting with a repeatable system built around goals, themes, and performance signals.",
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
            Build a social presence that actually drives growth
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            Let’s create a system where content, brand design, and conversion
            work together.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center mx-auto justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#1f4bc0] cursor-pointer"
            >
              Start Social Media System
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
