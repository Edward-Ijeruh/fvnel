import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Video,
  Camera,
  Film,
  Brain,
  Layers,
  PlayCircle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import diagram from "../../assets/common/visual-diagram.jpeg";
import image from "../../assets/common/content-workflow.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function VisualProductionPage() {
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
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-180px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[140px]" />
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
            Visual Production Systems <br />
            <span className="text-[#1A5AFF]">
              Built to Command Attention & Drive Action
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-700 text-lg"
          >
            Attention today is visual. Brands that control video control
            perception. We design production systems that turn video, content,
            and AI into conversion assets across every platform.
          </motion.p>
        </motion.div>

        {/* ================= IMAGE 1 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-2xl mx-auto mb-32"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={diagram}
              alt="Video production visuals"
              className="w-full"
            />
          </div>
          {/* <p className="text-sm text-slate-500 mt-4 text-center">
            Suggested image: premium edits, studio shots, reels, YouTube
            thumbnails.
          </p> */}
        </motion.div>

        {/* ================= FOMO SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="text-3xl font-semibold mb-6">
              The cost of NOT investing in video
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Brands that rely only on static content are becoming invisible.
              Video now shapes trust, authority, and buying decisions long
              before a sales conversation happens.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="rounded-2xl bg-[#EEEAE7] p-8"
          >
            <ul className="space-y-4 text-slate-700">
              <li>• Competitors capture attention first</li>
              <li>• Your expertise is harder to communicate</li>
              <li>• Courses and offers feel less valuable</li>
              <li>• Social presence lacks authority signals</li>
            </ul>
          </motion.div>
        </div>

        {/* ================= SYSTEMS GRID ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Video />,
              title: "Short-Form Conversion Video",
              text: "High-retention reels and shorts designed to stop scroll behavior and guide viewers toward action.",
            },
            {
              icon: <Camera />,
              title: "Brand Visual Identity",
              text: "Cohesive visuals across every platform so your content looks instantly recognizable.",
            },
            {
              icon: <Film />,
              title: "Course & Educational Production",
              text: "Structured video systems for courses that increase perceived value and completion rates.",
            },
            {
              icon: <Brain />,
              title: "AI-Assisted Production",
              text: "Use tools like Higgsfield AI, Nano Banana, and other creative AI systems to accelerate editing and ideation without losing quality.",
            },
            {
              icon: <Layers />,
              title: "Multi-Platform Distribution",
              text: "One production workflow optimized for TikTok, Instagram, YouTube, and LinkedIn.",
            },
            {
              icon: <PlayCircle />,
              title: "Performance Optimization",
              text: "Analyze retention, hooks, and engagement patterns to improve results over time.",
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

        {/* ================= IMAGE 2 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-2xl mx-auto mb-32"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={image}
              alt="Content workflow dashboard"
              className="w-full"
            />
          </div>
          {/* <p className="text-sm text-slate-500 mt-4 text-center">
            Suggested image: editing timeline, content calendar, AI workflow
            snapshots.
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
            Video is no longer content.
            <br />
            It’s your brand’s operating system.
          </h3>

          <p className="max-w-3xl mx-auto text-[#EEEAE7]">
            The brands dominating attention are those with structured production
            pipelines, where ideas move from concept to distribution without
            friction.
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
              This isn’t just more content. It’s a complete shift in how your
              brand engages, converts, and scales across platforms.
            </p>
          </div>

          {/* Outcomes Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Higher engagement & watch time",
                text: "Video and visual content attract more attention, keep viewers watching longer, and increase interaction across platforms.",
              },
              {
                title: "Stronger cross-platform authority",
                text: "Your content builds credibility, positioning your brand as a thought leader and a go-to resource.",
              },
              {
                title: "Premium-feeling course content",
                text: "Structured, professional, and visually compelling content reinforces the perceived value of your courses and offerings.",
              },
              {
                title: "Scalable AI-powered production",
                text: "Workflows are optimized with AI tools, making it easy to produce high-quality content consistently without burning your team out.",
              },
              {
                title: "More conversions from social attention",
                text: "Every piece of content supports acquisition, driving viewers toward leads, subscriptions, or sales.",
              },
              {
                title: "A brand presence that’s impossible to ignore",
                text: "Cohesive visuals, strategy, and storytelling create a magnetic brand that stands out in crowded social feeds.",
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
            Build a visual system that sells while you sleep
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            Let’s create a production engine that turns ideas into consistent
            attention and real conversions.
          </p>

          <Link to="/content">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center mx-auto justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#1f4bc0] cursor-pointer"
            >
              Start Visual Production System
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
