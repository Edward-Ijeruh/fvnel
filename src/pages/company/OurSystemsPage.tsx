import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Bot,
  Globe,
  Users,
  Search,
  Palette,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className = "" }: SectionProps) => (
  <motion.section
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className={`max-w-6xl mx-auto px-6 py-20 ${className}`}
  >
    {children}
  </motion.section>
);

const systems = [
  {
    icon: Bot,
    title: "AI Automation Systems",
    problem:
      "Manual workflows slow growth, create bottlenecks, and waste valuable team time.",
    process: [
      "Audit business operations & automation opportunities",
      "Design AI workflows aligned with business goals",
      "Integrate tools and triggers across your stack",
      "Deploy, test, and optimize automation loops",
    ],
    outcome:
      "Faster execution, reduced overhead, and scalable operations without hiring more staff.",
  },
  {
    icon: Globe,
    title: "Website Development & UX/UI Systems",
    problem:
      "Many sites look good but fail to convert because they lack psychological structure.",
    process: [
      "Conversion-focused strategy mapping",
      "User journey & funnel architecture",
      "Premium interface design",
      "Performance-focused React development",
    ],
    outcome:
      "Higher conversions, clearer messaging, and a digital presence that builds trust instantly.",
  },
  {
    icon: Users,
    title: "Social Media Growth Systems",
    problem: "Inconsistent posting and random content fail to build authority.",
    process: [
      "Define content pillars & audience psychology",
      "Create scalable production workflow",
      "Automate publishing & engagement",
      "Optimize based on performance data",
    ],
    outcome:
      "Consistent visibility, stronger personal authority, and predictable inbound leads.",
  },
  {
    icon: Search,
    title: "SEO & GEO Systems",
    problem:
      "Businesses rely too heavily on paid ads and miss long-term organic growth.",
    process: [
      "Search intent & geographic opportunity research",
      "Technical optimization",
      "Content + landing page architecture",
      "Authority and ranking strategy execution",
    ],
    outcome: "Sustainable traffic growth and compounding lead generation.",
  },
  {
    icon: Palette,
    title: "Brand Design Systems",
    problem:
      "Generic branding lowers perceived value and weakens pricing power.",
    process: [
      "Positioning workshop",
      "Visual identity system creation",
      "Brand messaging framework",
      "Implementation across digital touchpoints",
    ],
    outcome: "Stronger market positioning and higher-value client perception.",
  },
];

export default function SystemsPage() {
  return (
    <div className="bg-[#181818] text-white min-h-screen">
      {/* HERO */}
      <Section className="pt-28 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#EEEAE7] mb-4">
          Our Systems
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          We Don’t Offer Services.
          <br />
          We Build Growth Systems.
        </h1>
        <p className="text-[#EEEAE7] max-w-3xl mx-auto text-lg">
          Every system is designed to remove bottlenecks, increase efficiency,
          and create predictable growth — engineered around your business goals.
        </p>
      </Section>

      {/* SYSTEMS LIST */}
      <Section>
        <div className="space-y-10">
          {systems.map((system, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#EEEAE7] text-[#181818] rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-6">
                <system.icon className="w-6 h-6 text-[#1A5AFF]" />
                <h3 className="text-2xl font-semibold">{system.title}</h3>
              </div>

              <p className="text-[#333] mb-6 leading-relaxed">
                <strong>Problem:</strong> {system.problem}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Our Process</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {system.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-[#333]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#1A5AFF] mt-1" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[#1A5AFF] font-medium leading-relaxed">
                Outcome: {system.outcome}
              </p>

              <button className="mt-6 flex items-center gap-2 text-[#1A5AFF] font-medium hover:underline">
                View Related Case Study
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center pb-28">
        <h2 className="text-4xl font-semibold mb-4">
          Ready to Build Your Growth System?
        </h2>
        <p className="text-[#EEEAE7] mb-8 max-w-xl mx-auto">
          If your business feels stuck or chaotic, the solution isn’t more work
          — it’s better systems.
        </p>

        <button className="px-8 py-3 rounded-xl bg-[#1A5AFF] text-white font-medium hover:opacity-90 transition">
          Start Your Onboarding
        </button>
      </Section>
    </div>
  );
}
