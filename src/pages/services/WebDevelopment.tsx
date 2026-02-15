import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code2, Layout, Gauge, Shield, Layers, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function WebDevelopment() {
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
            Web Development & <span className="text-[#285de3]">Design</span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-700 text-lg">
            Your website is not a brochure. It is a system, one that shapes
            perception, filters demand, and either accelerates growth or quietly
            kills it. We design and engineer sites that function as scalable
            business infrastructure.
          </p>
        </motion.div>

        {/* ================= PROBLEM STATEMENT ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Why most websites fail to perform
            </h2>

            <p className="text-slate-700 mb-6">
              Most sites look “clean” but are structurally broken. They lack
              clarity, load slowly, confuse users, and aren’t designed to scale
              with the business behind them.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li>• Design driven by aesthetics, not intent</li>
              <li>• Fragile codebases that slow iteration</li>
              <li>• Poor performance on real devices and networks</li>
              <li>• No connection between UX and conversion</li>
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
              src="/images/web-architecture.png"
              alt="Website architecture and system design"
              className="rounded-2xl shadow-lg"
            />
            {/*
              Image idea:
              Diagram showing:
              User Intent → UX Flow → Components → Data → Conversion
            */}
          </motion.div>
        </div>

        {/* ================= CORE SYSTEMS ================= */}
        <div className="grid md:grid-cols-3 gap-10 mb-32">
          {[
            {
              icon: <Layout />,
              title: "UX & Information Architecture",
              text: "We design flows around user intent, decision friction, and clarity, ensuring users always know where they are, what matters, and what to do next.",
            },
            {
              icon: <Code2 />,
              title: "Modern, Maintainable Engineering",
              text: "Clean, modular codebases built with modern stacks that support speed, scalability, and long-term iteration without rewrites.",
            },
            {
              icon: <Gauge />,
              title: "Performance as a Feature",
              text: "Speed, accessibility, and SEO are baked in from day one, not patched later. Fast sites convert better. Period.",
            },
            {
              icon: <Layers />,
              title: "Design Systems, Not Pages",
              text: "Reusable components, consistent patterns, and scalable layouts that grow with your product and content.",
            },
            {
              icon: <Shield />,
              title: "Security & Stability by Default",
              text: "Best practices around data handling, authentication, and infrastructure, built to protect both users and the business.",
            },
            {
              icon: <ArrowRight />,
              title: "Conversion-Oriented Structure",
              text: "Every section, interaction, and micro-decision supports a larger acquisition or activation goal.",
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
            "/images/web-showcase-1.png",
            "/images/web-showcase-2.png",
            "/images/web-showcase-3.png",
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
                alt="Web design and development showcase"
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
            Websites built to scale, not just launch
          </h3>

          <p className="max-w-xl mx-auto text-slate-700 mb-8">
            We don’t design pages. We engineer platforms that support growth,
            iteration, and long-term clarity.
          </p>

          <button className="bg-[#285de3] hover:bg-[#1f4bc0] px-8 py-3 rounded-md text-white font-medium shadow-md">
            Start a Web Strategy
          </button>
        </motion.div>
      </div>
    </section>
  );
}
