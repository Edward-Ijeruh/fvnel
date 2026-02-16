import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { Globe, Brain, Search, Video, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const systems = [
  {
    icon: <Brain />,
    title: "AI Automation",
    subtitle: "Operational leverage",
    text: "AI-powered workflows that remove bottlenecks and scale execution without headcount.",
    path: "/ai-automation",
  },
  {
    icon: <Search />,
    title: "SEO & GEO Systems",
    subtitle: "Discovery infrastructure",
    text: "Structured visibility systems for search engines, maps, and AI-driven discovery.",
    path: "/seo-geo",
  },
  {
    icon: <Layers />,
    title: "Social Media Optimization",
    subtitle: "Distribution systems",
    text: "Content frameworks designed to turn visibility into predictable inbound demand.",
    path: "/social-media",
  },
  {
    icon: <Video />,
    title: "Visual Production",
    subtitle: "Attention & authority",
    text: "High-performance visuals that build trust and communicate value instantly.",
    path: "/visual-production",
  },
  {
    icon: <Globe />,
    title: "Web Design & Development",
    subtitle: "Trust & perception",
    text: "Websites engineered around decision psychology, clarity, and conversion, not templates.",
    path: "/web-development",
  },
];

export default function OurSystemsPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ===== BACKGROUND DEPTH ===== */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[130px]" />
        <div className="absolute bottom-[-220px] right-[-180px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[140px]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32">
        {/* ================= HERO ================= */}
        <motion.div style={{ y: heroY }} className="text-center mb-32">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Growth Systems <br />
            <span className="text-[#1A5AFF]">
              Designed to Compound Together
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-700 text-lg"
          >
            We don’t sell disconnected services. We design interconnected
            systems where trust, discovery, automation, and distribution
            reinforce each other over time.
          </motion.p>
        </motion.div>

        {/* ================= SYSTEMS OVERVIEW ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              The Core Systems
            </h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              Each system solves a specific growth constraint. Together, they
              create momentum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {systems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-[#EEEAE7] p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#1A5AFF]/10 text-[#1A5AFF] mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[#1A5AFF] font-medium mb-3">
                  {item.subtitle}
                </p>

                <p className="text-slate-700 mb-6 leading-relaxed">
                  {item.text}
                </p>

                <Link
                  to={item.path}
                  className="inline-flex text-[#1A5AFF] font-medium hover:underline"
                >
                  Explore system
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= SYSTEM INSIGHT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="rounded-2xl bg-[#1A5AFF] p-14 text-center text-white mb-32"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Growth fails when systems don’t talk to each other.
          </h3>

          <p className="max-w-3xl mx-auto text-[#EEEAE7]">
            Most teams struggle not because of effort, but because each layer
            operates in isolation. We design cohesion first.
          </p>
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Identify Your Biggest Growth Constraint
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            Start with onboarding and we’ll show you which system unlocks the
            fastest compounding results.
          </p>

          <Link to="/onboarding">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#1f4bc0] cursor-pointer"
            >
              Start Onboarding
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
