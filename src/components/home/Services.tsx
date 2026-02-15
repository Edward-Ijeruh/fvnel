import cpu from "../../assets/services/cpu.png";
import web from "../../assets/services/web-experience.png";
import mapPin from "../../assets/services/map-pin.png";
import barChart from "../../assets/services/bar-chart.png";
import code from "../../assets/services/code.png";
import monitor from "../../assets/services/monitor.png";
import carouselOne from "../../assets/services/system-carousel-one.png";
import carouselTwo from "../../assets/services/system-carousel-two.png";
import carouselThree from "../../assets/services/system-carousel-three.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  FileText,
  Image,
  Layout,
  Code2,
  BarChart3,
  Mail,
  Search,
  MessageSquare,
  Briefcase,
  User,
  Layers,
  PenTool,
  Smartphone,
  Zap,
  Settings,
  Shield,
  Calendar,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";

const systemImages = [carouselOne, carouselTwo, carouselThree];

const aiUses = [
  { icon: Globe, label: "Websites" },
  { icon: Layout, label: "Webflow Builds" },
  { icon: User, label: "Portfolio Sites" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: FileText, label: "Blog Systems" },
  { icon: Mail, label: "Email Automation" },
  { icon: MessageSquare, label: "Chatbots" },
  { icon: Search, label: "SEO Engines" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Briefcase, label: "Business Ops" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Image, label: "Media Pipelines" },
  { icon: Code2, label: "Dev Automation" },
  { icon: PenTool, label: "Design Systems" },
  { icon: Layers, label: "Landing Pages" },
  { icon: Zap, label: "Workflow AI" },
  { icon: Settings, label: "CRM Systems" },
  { icon: Shield, label: "Security Logic" },
  { icon: Calendar, label: "Scheduling" },
  { icon: Database, label: "Data Pipelines" },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cards = [
  {
    img: cpu,
    title: "AI Automation",
    desc: "Customized AI agents that handle lead qualification, customer support, and administrative tasks 24/7.",
    bullets: [
      "Intelligent Chatbots",
      "WhatsApp Integration",
      "Custom LLM Agents",
    ],
  },
  {
    img: web,
    title: "Web Experience",
    desc: "Your website is designed as a decision-making system. Every section, layout choice, and interaction is built to guide visitors toward action with clarity and minimal friction.",
    bullets: [
      "UX/UI designed for conversion",
      "Framer-based development",
      "Speed, performance, scalability",
    ],
  },
  {
    img: mapPin,
    title: "SEO + GEO",
    desc: "We optimize your site for Google search and AI answer engines by targeting buyer-intent keywords, structuring content for clarity, and ensuring your business is easily referenced in AI-generated results",
    bullets: [
      "Buyer-intent SEO",
      "AI search visibility (GEO)",
      "Structured content architecture",
    ],
  },
  {
    img: barChart,
    title: "Analytics & Tracking",
    desc: "We track user behaviour, conversions, and drop-offs, turning data into clear insights that inform design, messaging, and system improvements.",
    bullets: [
      "Conversion tracking",
      "Behaviour analysis",
      "Performance reporting",
    ],
  },
  {
    img: code,
    title: "Optimization & Growth",
    desc: "Your system is continuously tested, refined, and improved to increase conversion rates, lead quality, and operational efficiency as your business scales.",
    bullets: ["Ongoing CRO", "System refinement", "Scalable growth strategy"],
  },
  {
    img: monitor,
    title: "Social Media Management ",
    desc: "Strategic content, consistent execution, and brand-aligned visuals, built to grow trust and engagement across platforms.",
    bullets: [
      "Content Management",
      "Visual Production",
      "Profile Optimisation",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="systems"
      className="relative w-full min-h-[1800px] rounded-4xl -mt-60 pt-50 bg-[linear-gradient(to_bottom,black_0%,black_20%,#9ca3af_40%,#ffffff_100%)]"
    >
      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col justify-between h-full">
        <motion.div
          className="text-center mb-12 text-white"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            className="mb-12 text-3xl md:text-5xl font-semibold text-white"
          >
            Engineered <span className="text-[#1a5aff]">Growth Systems</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mb-12 text-sm md:text-md text-white"
          >
            Five integrated pillars designed to scale businesses with precision.
          </motion.p>

          <motion.p variants={fadeUp} className=" text-lg">
            Every system we build is designed with structural intent. From{" "}
            <br />
            AI automation to experience design and performance <br />
            intelligence, each layer integrates into a cohesive growth <br />
            architecture built for scale.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mb-12 items-stretch">
          {cards.map((card, idx) => (
            <Link
              key={idx}
              to={`/${card.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="block h-full"
            >
              <motion.div
                className="flex h-full flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                {/* Image */}
                <img src={card.img} alt={card.title} className="h-12 w-12" />

                {/* Title */}
                <h3 className="text-xl font-semibold text-black">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-black/80 flex-grow">{card.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.p
          className="mt-12 text-black/70 text-center mb-12 text-md md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Growth doesn’t come from more tools. It comes from better systems.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-3xl md:text-5xl font-semibold text-black mb-12"
          >
            Want to See Where Your System Is{" "}
            <span className="text-[#1a5aff]">Leaking?</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-black/80 mb-12 text-md md:text-lg"
          >
            Book a free 30-minute strategy call to review your current <br />
            setup, identify gaps, and map a growth system tailored to your
            business.
          </motion.p>{" "}
          <Link to="/contact">
            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex  mx-auto cursor-pointer bg-[#285de3] hover:bg-[#1f4bc0] transition-all duration-300 px-6 py-2.5 rounded-md font-medium shadow-md hover:shadow-lg text-white"
            >
              Call Us
            </motion.button>
          </Link>
        </motion.div>

        {/* AI Uses Section */}
        <div className="mt-20 text-center">
          <h4 className="mb-8 text-xl md:text-2xl font-semibold text-black">
            100+ uses for AI systems in your business!
          </h4>

          <div className="space-y-2">
            <MarqueeRow items={aiUses.slice(0, 10)} direction="left" />
            <MarqueeRow items={aiUses.slice(10, 20)} direction="right" />
            <MarqueeRow items={aiUses.slice(0, 10)} direction="left" />
            <MarqueeRow items={aiUses.slice(10, 20)} direction="right" />
          </div>
        </div>
      </div>

      {/* Systems Showcase */}
      <div className="mt-28 bg-[#1956f2] px-6 py-20 text-center">
        {/* Header */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-16 text-3xl md:text-5xl font-semibold text-white"
        >
          Systems That Deliver Measurable Growth
        </motion.h3>

        {/* Images */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 place-items-center"
        >
          {systemImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt="Growth system preview"
              variants={fadeUp}
              style={{
                width: "auto",
                maxHeight: 360,
              }}
            />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-20"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mx-auto flex cursor-pointer items-center justify-center rounded-md bg-white px-8 py-3 font-medium text-[#1956f2] shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const MarqueeRow = ({
  items,
  direction = "left",
}: {
  items: typeof aiUses;
  direction?: "left" | "right";
}) => {
  const xFrom = direction === "left" ? "0%" : "-50%";
  const xTo = direction === "left" ? "-50%" : "0%";

  return (
    <div className="group relative overflow-hidden">
      <motion.div
        className="flex w-max gap-4 py-3"
        animate={{ x: [xFrom, xTo] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 rounded-full bg-[#1a5aff] px-5 py-3 text-sm font-medium text-white whitespace-nowrap"
            >
              <Icon size={16} />
              {item.label}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
