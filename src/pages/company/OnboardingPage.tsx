import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ClipboardCheck,
  MessageSquare,
  Layers,
  Rocket,
  ShieldCheck,
  Clock3,
  FileText,
  CheckCircle,
  PhoneCall,
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

export default function OnboardingPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <Section className="pt-28 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 mb-4">
          Client Onboarding
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
          Welcome to a{" "}
          <span className="text-white">Structured Growth System</span>
        </h1>
        <p className="text-neutral-300 max-w-3xl mx-auto text-lg">
          Our onboarding process is designed to remove uncertainty, align
          strategy, and prepare your business for measurable growth from day
          one.
        </p>
      </Section>

      {/* TRUST / EXPECTATION SETTING */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Clarity Before Execution",
              desc: "We don’t jump into random tasks. Every action is mapped to outcomes and ROI.",
            },
            {
              icon: Clock3,
              title: "Predictable Workflow",
              desc: "You’ll always know what’s happening, what’s next, and when results are expected.",
            },
            {
              icon: CheckCircle,
              title: "High-Touch Experience",
              desc: "You are not just another client. Communication is structured and intentional.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6"
            >
              <item.icon className="w-6 h-6 mb-4 text-white" />
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ONBOARDING TIMELINE */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Your Onboarding Journey
        </h2>

        <div className="space-y-8">
          {[
            {
              icon: ClipboardCheck,
              title: "Step 1 — Strategy Intake",
              desc: "You complete a guided onboarding form covering goals, bottlenecks, offers, and existing systems. This helps us identify leverage opportunities immediately.",
            },
            {
              icon: MessageSquare,
              title: "Step 2 — Alignment Call",
              desc: "We walk through your business model, clarify expectations, define success metrics, and align communication channels.",
            },
            {
              icon: Layers,
              title: "Step 3 — Systems Mapping",
              desc: "We audit your funnels, operations, and customer journey to design the exact systems needed for growth.",
            },
            {
              icon: Rocket,
              title: "Step 4 — Build & Deployment",
              desc: "Our team begins implementation while you receive milestone updates and preview checkpoints.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex gap-5"
            >
              <step.icon className="w-6 h-6 mt-1 text-white shrink-0" />
              <div>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHAT WE NEED FROM YOU */}
      <Section>
        <h2 className="text-3xl font-semibold mb-8">
          What We’ll Need From You
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Brand assets (logo, brand guidelines if available)",
            "Access to relevant platforms (website, analytics, socials)",
            "Clear business goals & revenue targets",
            "Any existing funnels or marketing materials",
            "Primary decision maker contact",
            "Availability for strategic reviews",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-3 bg-neutral-900 border border-neutral-800 rounded-xl p-4"
            >
              <FileText className="w-5 h-5 mt-1 text-white" />
              <p className="text-neutral-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* COMMUNICATION & EXPECTATIONS */}
      <Section>
        <h2 className="text-3xl font-semibold mb-8">
          Communication & Workflow
        </h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-4 text-neutral-300 leading-relaxed">
          <p>
            We operate on structured communication — not chaos. You’ll receive
            progress updates, milestone reviews, and clear timelines.
          </p>
          <p>
            Requests are organized through agreed channels so nothing gets lost.
            This allows us to move fast while maintaining quality.
          </p>
          <p>
            Our focus is outcomes, not endless meetings. Every touchpoint moves
            the project forward.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <h2 className="text-3xl font-semibold mb-8">Onboarding FAQs</h2>
        <div className="space-y-4">
          {[
            {
              q: "How long does onboarding take?",
              a: "Most clients complete onboarding within 3–5 days depending on asset delivery and scheduling.",
            },
            {
              q: "Will I know exactly what’s happening?",
              a: "Yes. Every phase is documented so you always have visibility into progress.",
            },
            {
              q: "Can my team be involved?",
              a: "Absolutely. We often collaborate with internal teams to ensure smooth implementation.",
            },
            {
              q: "What if I don’t have everything ready?",
              a: "That’s normal. We guide you through exactly what is needed and help you prioritize.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
            >
              <h3 className="font-medium mb-2">{faq.q}</h3>
              <p className="text-neutral-400">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="text-center pb-28">
        <h2 className="text-4xl font-semibold mb-4">Ready to Start?</h2>
        <p className="text-neutral-400 max-w-xl mx-auto mb-8">
          The better the onboarding, the stronger the results. Let’s set your
          systems up correctly from day one.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90 transition">
            Submit Intake Form
          </button>
          <button className="px-8 py-3 rounded-xl border border-neutral-700 text-white flex items-center gap-2 justify-center hover:bg-neutral-900 transition">
            <PhoneCall className="w-4 h-4" />
            Schedule Strategy Call
          </button>
        </div>
      </Section>
    </div>
  );
}
