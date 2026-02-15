import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Bot,
  Mail,
  Workflow,
  Target,
  Database,
  CalendarCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AIAutomation() {
  return (
    <section className="pt-40 pb-32 bg-[#eeeae7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HERO ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-28"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            AI Outreach Systems <br />
            <span className="text-[#285de3]">Built Like Infrastructure</span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-700 text-lg">
            Most outbound fails because it’s stitched together with tools. We
            build end-to-end AI systems that continuously find buyers, adapt
            messaging, handle replies, and book meetings, automatically.
          </p>
        </motion.div>

        {/* ================= PROBLEM + VISUAL ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Why outbound breaks at scale
            </h2>

            <ul className="space-y-4 text-slate-700">
              <li>• Generic sequences burn domains and trust</li>
              <li>• Static lead lists go stale in weeks</li>
              <li>• Manual follow-ups don’t scale</li>
              <li>• High-intent replies get buried in noise</li>
            </ul>

            <p className="mt-6 text-slate-700">
              Automation without intelligence amplifies failure. Intelligence
              without automation doesn’t scale.
            </p>
          </motion.div>

          {/* IMAGE PLACEHOLDER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <img
              src="/images/ai-outbound-diagram.png"
              alt="AI outreach system diagram"
              className="rounded-2xl shadow-lg"
            />
            {/* 
              Image suggestion:
              - A clean diagram showing:
                Leads → AI Enrichment → Personalized Outreach → AI Replies → Booked Calls
            */}
          </motion.div>
        </div>

        {/* ================= SYSTEM MODULES ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {[
            {
              icon: <Database />,
              title: "Living Lead Intelligence",
              text: "We don’t use static lists. Our systems continuously source, enrich, score, and refresh leads using intent data, firmographics, and behavior.",
            },
            {
              icon: <Mail />,
              title: "Context-Aware Messaging",
              text: "Every email is generated in real-time using role, company context, industry pain points, and timing — not templates.",
            },
            {
              icon: <Workflow />,
              title: "Adaptive Follow-Up Logic",
              text: "Follow-ups change automatically based on opens, clicks, replies, and silence, no rigid sequences.",
            },
            {
              icon: <Bot />,
              title: "AI Reply Handling",
              text: "AI agents classify responses, answer basic questions, disqualify poor fits, and escalate high-intent leads instantly.",
            },
            {
              icon: <CalendarCheck />,
              title: "Automated Booking",
              text: "Qualified prospects are routed straight to your calendar with context attached, no back-and-forth.",
            },
            {
              icon: <Target />,
              title: "Continuous Optimization",
              text: "Messaging, targeting, and timing improve automatically as the system learns from real-world responses.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[#285de3] mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
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
            Outbound that runs without babysitting
          </h3>
          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            If your product solves a real problem, your outreach should work
            like a system, not a hustle.
          </p>
          <Link to="/contact">
            <button className="bg-[#285de3] hover:bg-[#1f4bc0] px-8 py-3 rounded-md text-white font-medium shadow-md cursor-pointer">
              Book Strategy Call
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
