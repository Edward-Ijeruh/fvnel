import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Globe, Brain, Search, Video, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export default function Services() {
  return (
    <section id="systems" className="relative bg-white py-32 overflow-hidden">
      {/* ===== Cinematic depth ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[130px]" />
        <div className="absolute bottom-[-220px] right-[-180px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            Engineered <span className="text-[#1A5AFF]">Growth Systems</span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-700 text-lg">
            Every system supports the next. Visibility creates trust, trust
            increases conversion, and automation scales execution.
          </p>
        </motion.div>

        {/* ================= SYSTEM PREVIEW GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
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

              <p className="text-slate-700 mb-6 leading-relaxed">{item.text}</p>

              <Link
                to={item.path}
                className="inline-flex text-[#1A5AFF] font-medium hover:underline"
              >
                Explore system
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= CTA ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Want to See Where Your System Is Leaking?
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            We’ll identify the weakest layer in your growth architecture and
            show you what creates the biggest shift first.
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
