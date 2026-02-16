import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Brain,
  Workflow,
  Database,
  MessageSquare,
  Network,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import diagram from "../../assets/common/ai-diagram.jpeg";
import dashboard from "../../assets/common/automation-image.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AiSystemsPage() {
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
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[140px]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32">
        {/* ================= HERO ================= */}
        <motion.div style={{ y: heroY }} className="mb-32 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            AI Systems Architecture <br />
            <span className="text-[#1A5AFF]">
              Built for Real Operational Leverage
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-700 text-lg"
          >
            Most companies automate tasks. We redesign workflows. Our AI systems
            remove friction across operations so your team moves faster without
            adding complexity.
          </motion.p>
        </motion.div>

        {/* ================= IMAGE SECTION 1 ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          className="max-w-2xl mx-auto mb-32"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={diagram}
              alt="AI systems architecture diagram"
              className="w-full"
            />
          </div>
          {/* <p className="text-sm text-slate-500 mt-4 text-center">
            Suggested image: architecture diagram showing workflows → AI layer →
            automation outputs.
          </p> */}
        </motion.div>

        {/* ================= PROBLEM / INSIGHT ================= */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="text-3xl font-semibold mb-6">
              Why AI projects stall inside growing businesses
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Automation fails when tools are added without structural redesign.
              Teams end up managing automation instead of benefiting from it.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="rounded-2xl bg-[#EEEAE7] p-8"
          >
            <ul className="space-y-4 text-slate-700">
              <li>• AI outputs disconnected from real workflows</li>
              <li>• Data trapped across platforms</li>
              <li>• Automations built around tools instead of outcomes</li>
              <li>• Teams lose trust in the system</li>
            </ul>
          </motion.div>
        </div>

        {/* ================= SYSTEM TYPES ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Workflow />,
              title: "Operational Automation",
              text: "Remove repetitive execution work across onboarding, internal tasks, and reporting flows.",
            },
            {
              icon: <MessageSquare />,
              title: "AI Communication Systems",
              text: "Intelligent lead handling, automated responses, and consistent client communication.",
            },
            {
              icon: <Database />,
              title: "Data Pipeline Automation",
              text: "Clean data movement between tools so decisions happen faster and smarter.",
            },
            {
              icon: <Brain />,
              title: "Internal AI Knowledge Systems",
              text: "Give teams instant access to context-aware answers and information.",
            },
            {
              icon: <Network />,
              title: "Cross-System Integration",
              text: "Connect marketing, sales, and operations into one unified ecosystem.",
            },
            {
              icon: <BarChart3 />,
              title: "Performance Intelligence",
              text: "Track real efficiency gains instead of vanity automation metrics.",
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
              src={dashboard}
              alt="Automation dashboard"
              className="w-full"
            />
          </div>
          {/* <p className="text-sm text-slate-500 mt-4 text-center">
            Suggested image: analytics dashboard, automation workflow
            screenshots, or live process view.
          </p> */}
        </motion.div>

        {/* ================= ENTERPRISE INSIGHT BLOCK ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="rounded-2xl bg-[#1A5AFF] p-14 text-center text-white mb-32"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            The goal isn’t more automation.
            <br />
            The goal is less operational noise.
          </h3>

          <p className="max-w-3xl mx-auto text-[#EEEAE7]">
            Great AI systems feel invisible, your team simply moves faster,
            decisions happen earlier, and growth stops feeling heavy.
          </p>
        </motion.div>

        {/* ================= FINAL CTA ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to engineer intelligent operations?
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            We design AI systems that become part of how your business scales,
            not another tool your team ignores.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center mx-auto justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#1f4bc0] cursor-pointer"
            >
              Start AI Systems Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
