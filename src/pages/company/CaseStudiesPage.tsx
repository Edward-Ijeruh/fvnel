import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import weDesign from "../../assets/common/case-studies/we-design.jpeg";
import aIAut from "../../assets/common/case-studies/aiauto.jpeg";
import seoGeo from "../../assets/common/case-studies/seogeo.jpeg";
import somedia from "../../assets/common/case-studies/somedia.jpeg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

type Milestone = {
  phase: string;
  title: string;
  description: string;
  metric?: string;
};

function MetricsTimeline({ milestones }: { milestones: Milestone[] }) {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-[#EEEAE7]" />

      <div className="space-y-14">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className="relative pl-16"
          >
            <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-[#1A5AFF] text-white flex items-center justify-center font-semibold text-sm">
              {i + 1}
            </div>

            <p className="text-xs uppercase tracking-wider text-[#1A5AFF] mb-2">
              {m.phase}
            </p>

            <h3 className="text-xl font-semibold mb-3">{m.title}</h3>

            <p className="text-slate-700 leading-relaxed mb-3">
              {m.description}
            </p>

            {m.metric && (
              <div className="inline-block bg-[#EEEAE7] px-4 py-2 rounded-lg text-sm font-medium">
                {m.metric}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CaseSection({
  title,
  industry,
  intro,
  image,
  milestones,
}: {
  title: string;
  industry: string;
  intro: string;
  image: string;
  milestones: Milestone[];
}) {
  return (
    <section className="grid md:grid-cols-2 gap-16 mb-48">
      {/* ===== STICKY LEFT ===== */}
      <div className="sticky top-24 h-fit">
        <p className="text-sm uppercase tracking-wide text-[#1A5AFF] mb-3">
          {industry}
        </p>

        <h2 className="text-3xl font-semibold mb-6">{title}</h2>

        <p className="text-slate-700 leading-relaxed">{intro}</p>

        <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
          <img src={image} alt={title} className="w-full" />
        </div>
      </div>

      {/* ===== TIMELINE ===== */}
      <MetricsTimeline milestones={milestones} />
    </section>
  );
}

export default function CaseStudiesPage() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* cinematic depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-180px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-32">
        {/* HERO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-36"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Market-Maker Case Studies <br />
            <span className="text-[#1A5AFF]">
              How Systems Changed Growth Trajectories
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-700 text-lg">
            These stories show how strategic decisions, not just execution,
            transformed how companies attract clients, operate, and scale.
          </p>
        </motion.div>

        {/* ===== CASE 1 ===== */}
        <CaseSection
          title="Web Design & Development Transformation"
          industry="B2B SaaS"
          image={weDesign}
          intro="Traffic existed, but trust didn’t. The website created hesitation where confidence should have been automatic."
          milestones={[
            {
              phase: "Problem",
              title: "Strong traffic, weak decisions",
              description:
                "Visitors arrived but failed to move forward because messaging forced interpretation instead of clarity.",
              metric: "Low conversion quality",
            },
            {
              phase: "Insight",
              title: "Design wasn’t the issue, cognition was",
              description:
                "Buyers were doing too much mental work. The site looked good but felt risky.",
            },
            {
              phase: "Strategy",
              title: "Decision-first architecture",
              description:
                "We rebuilt hierarchy around how executives evaluate trust within seconds.",
            },
            {
              phase: "Implementation",
              title: "Narrative-driven web system",
              description:
                "Structured storytelling, strategic proof placement, and conversion pathways.",
            },
            {
              phase: "Outcome",
              title: "Trust before conversation",
              description:
                "Sales calls started further along because visitors arrived informed and confident.",
              metric: "Higher close confidence",
            },
          ]}
        />

        {/* ===== CASE 2 ===== */}
        <CaseSection
          title="AI Automation & Operations System"
          industry="Agency"
          image={aIAut}
          intro="Growth created operational drag. The team worked harder each month just to maintain momentum."
          milestones={[
            {
              phase: "Problem",
              title: "Manual systems scaling poorly",
              description: "Information moved slowly between tools and people.",
              metric: "Execution bottlenecks",
            },
            {
              phase: "Insight",
              title: "Automation without workflow redesign fails",
              description:
                "Adding tools would increase complexity unless the workflow itself changed.",
            },
            {
              phase: "Strategy",
              title: "Design workflow first",
              description:
                "Mapped decisions before inserting automation layers.",
            },
            {
              phase: "Implementation",
              title: "AI-assisted orchestration",
              description:
                "Connected onboarding, CRM, reporting, and internal communication into one flow.",
            },
            {
              phase: "Outcome",
              title: "Operational speed unlocked",
              description: "The team gained capacity without adding headcount.",
              metric: "Faster execution cycle",
            },
          ]}
        />

        {/* ===== CASE 3 ===== */}
        <CaseSection
          title="SEO & GEO Authority System"
          industry="Local Network"
          image={seoGeo}
          intro="Paid advertising drove visibility, but organic presence was fragile and inconsistent."
          milestones={[
            {
              phase: "Problem",
              title: "Visibility depended on ads",
              description: "Organic channels lacked structure and authority.",
            },
            {
              phase: "Insight",
              title: "Search engines needed entity clarity",
              description:
                "The brand was understood as pages, not as an authoritative entity.",
            },
            {
              phase: "Strategy",
              title: "Authority architecture",
              description:
                "Built intent clusters and geographic relevance signals.",
            },
            {
              phase: "Implementation",
              title: "Compounding discoverability system",
              description:
                "Structured content and local signals designed for long-term visibility.",
            },
            {
              phase: "Outcome",
              title: "Compounding inbound growth",
              description:
                "Visibility became predictable rather than campaign-based.",
              metric: "Reduced paid dependency",
            },
          ]}
        />

        {/* ===== CASE 4 ===== */}
        <CaseSection
          title="Social Media & Visual Production Engine"
          industry="Creator / Courses"
          image={somedia}
          intro="High content output produced attention but not conversions."
          milestones={[
            {
              phase: "Problem",
              title: "Attention without movement",
              description:
                "Content generated engagement but lacked direction toward offers.",
            },
            {
              phase: "Insight",
              title: "Narrative gap in content",
              description:
                "Viewers weren’t being guided toward trust and decision.",
            },
            {
              phase: "Strategy",
              title: "Story-based conversion system",
              description:
                "Every piece of content received a role in the broader journey.",
            },
            {
              phase: "Implementation",
              title: "AI-assisted production pipeline",
              description:
                "Consistent multi-platform content without sacrificing quality.",
            },
            {
              phase: "Outcome",
              title: "Content became acquisition",
              description:
                "Social channels transformed from visibility to conversion systems.",
              metric: "Higher sales alignment",
            },
          ]}
        />

        {/* FINAL INSIGHT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="rounded-2xl bg-[#1A5AFF] p-14 text-center text-white mb-24"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Results follow structure, not randomness.
          </h3>

          <p className="max-w-3xl mx-auto text-[#EEEAE7]">
            Every transformation begins when strategy changes first.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <Link to="/onboarding">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center mx-auto justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#1f4bc0] cursor-pointer"
            >
              Start Your Journey
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
