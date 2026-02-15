import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  TrendingUp,
  Bot,
  Globe,
  Users,
  BarChart3,
  ArrowRight,
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

const caseStudies = [
  {
    icon: Bot,
    title: "AI Automation — SaaS Lead Qualification",
    problem:
      "A growing SaaS company was losing leads due to manual follow-up delays and inconsistent qualification.",
    strategy:
      "Built an AI-powered lead qualification workflow using automation logic, CRM routing, and instant response triggers.",
    execution:
      "Integrated chat flows, AI filtering, CRM tagging, and automated handoff to sales.",
    results:
      "Response time reduced by 78%, qualified leads increased by 42%, and sales team efficiency doubled.",
  },
  {
    icon: Globe,
    title: "Website & UX — Conversion-Focused Redesign",
    problem:
      "A tech startup had traffic but low conversion due to unclear messaging and weak UX hierarchy.",
    strategy:
      "Redesigned the site around decision psychology and clear user paths.",
    execution:
      "New information architecture, optimized CTA flow, premium UI redesign, and faster load performance.",
    results: "Conversion rate improved by 63% within the first month.",
  },
  {
    icon: Users,
    title: "Social Media Growth System — Personal Brand",
    problem:
      "Founder struggled to produce consistent content and turn attention into leads.",
    strategy:
      "Created a repeatable content system combining short-form content strategy and automated distribution.",
    execution:
      "Content pillars, scripting workflow, batch production system, and engagement automation.",
    results:
      "Audience grew from 3k to 48k followers in 90 days with consistent inbound inquiries.",
  },
  {
    icon: BarChart3,
    title: "SEO & GEO — Local Service Expansion",
    problem:
      "Local construction company relied purely on referrals and lacked search visibility.",
    strategy:
      "Built location-optimized pages and geographic targeting systems.",
    execution:
      "On-page SEO overhaul, structured service pages, and local authority signals.",
    results: "Organic leads increased by 210% in six months.",
  },
  {
    icon: TrendingUp,
    title: "Brand Identity — Positioning Upgrade",
    problem: "Agency looked generic and struggled to justify premium pricing.",
    strategy:
      "Repositioned brand visuals and messaging toward authority and clarity.",
    execution:
      "Identity redesign, brand voice framework, and premium visual system.",
    results: "Average client value increased from $2K to $9K+.",
  },
  {
    icon: Bot,
    title: "AI Automation — Client Onboarding Flow",
    problem:
      "Manual onboarding caused delays and inconsistent client experiences.",
    strategy: "Designed automated onboarding pipelines with progress tracking.",
    execution:
      "Multi-step intake forms, automated asset requests, and internal task triggers.",
    results:
      "Onboarding time reduced by 55% while improving client satisfaction.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#181818] text-[#FFFFFF] min-h-screen">
      {/* HERO */}
      <Section className="pt-28 text-center">
        <p className="uppercase tracking-[0.25em] text-[#EEEAE7] text-sm mb-4">
          Case Studies
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Real Systems. Real Results.
        </h1>
        <p className="text-[#EEEAE7] max-w-3xl mx-auto text-lg">
          Every project is built around measurable outcomes — not vanity
          metrics. Below are examples of how we turn strategy into growth
          systems.
        </p>
      </Section>

      {/* CASE STUDIES */}
      <Section>
        <div className="space-y-10">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#EEEAE7] text-[#181818] rounded-2xl p-8 md:p-10 border border-transparent hover:border-[#1A5AFF] transition"
            >
              <div className="flex items-start gap-4 mb-6">
                <study.icon className="w-6 h-6 text-[#1A5AFF]" />
                <h3 className="text-2xl font-semibold">{study.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
                <div>
                  <h4 className="font-semibold mb-2">Client Problem</h4>
                  <p className="text-[#333] mb-4">{study.problem}</p>

                  <h4 className="font-semibold mb-2">Strategy</h4>
                  <p className="text-[#333]">{study.strategy}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Execution</h4>
                  <p className="text-[#333] mb-4">{study.execution}</p>

                  <h4 className="font-semibold mb-2">Results</h4>
                  <p className="text-[#1A5AFF] font-medium">{study.results}</p>
                </div>
              </div>

              {/* Visual Placeholder */}
              <div className="mt-8 bg-white/70 border border-[#DDD] rounded-xl p-6 text-sm text-[#666]">
                📸 Add visuals here: dashboard screenshots, website previews,
                automation flow diagrams, or analytics graphs.
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TRUST SECTION */}
      <Section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Why These Case Studies Matter
        </h2>
        <p className="text-[#EEEAE7] max-w-2xl mx-auto leading-relaxed">
          We don’t sell tasks — we build systems designed to compound results.
          Every project follows a structured framework that reduces chaos and
          maximizes ROI.
        </p>
      </Section>

      {/* FINAL CTA */}
      <Section className="text-center pb-28">
        <h2 className="text-4xl font-semibold mb-4">
          Want Results Like These?
        </h2>
        <p className="text-[#EEEAE7] mb-8">
          Let’s design a system tailored to your business goals.
        </p>

        <button className="px-8 py-3 rounded-xl bg-[#1A5AFF] text-white font-medium flex items-center gap-2 mx-auto hover:opacity-90 transition">
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      </Section>
    </div>
  );
}
