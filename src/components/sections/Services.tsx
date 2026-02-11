import servicesBackground from "../../assets/services/services-bg.png";
import cpu from "../../assets/services/cpu.png";
import web from "../../assets/services/web-experience.png";
import mapPin from "../../assets/services/map-pin.png";
import barChart from "../../assets/services/bar-chart.png";
import code from "../../assets/services/code.png";
import monitor from "../../assets/services/monitor.png";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

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
      className="relative w-full min-h-[1800px] bg-cover bg-center py-28"
      style={{ backgroundImage: `url(${servicesBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col justify-between h-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl md:text-5xl font-semibold text-black mb-12">
            One Integrated Growth System
          </h2>
          <p className="text-black/80 text-md md:text-lg mb-12">
            Fvnel designs AI-driven growth systems that combine automation, web
            experience, SEO, analytics, and continuous <br /> optimization into
            one conversion-focused engine.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 mb-12">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-md"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Image */}
              <img src={card.img} alt={card.title} className="h-12 w-12" />

              {/* Title */}
              <h3 className="text-xl font-semibold text-black">{card.title}</h3>

              {/* Description */}
              <p className="text-black/80">{card.desc}</p>

              {/* Bullet points */}
              <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-black/80">
                {card.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 italic text-black/70 text-center mb-12 text-md md:text-lg"
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
          <h3 className="mb-2 text-3xl md:text-5xl font-semibold text-black mb-12">
            Want to See Where Your System Is Leaking?
          </h3>
          <p className="mb-4 text-black/80 mb-12 text-md md:text-lg">
            Book a free 30-minute strategy call to review your current <br />
            setup, identify gaps, and map a growth system tailored to your
            business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 mx-auto cursor-pointer bg-[#285de3] hover:bg-[#1f4bc0] transition-all duration-300 px-6 py-2.5 rounded-md font-medium shadow-md hover:shadow-lg text-white"
          >
            Book A Call
            <Phone size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
