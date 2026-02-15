import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Mail,
  PhoneCall,
  Calendar,
  MessageSquare,
  CheckCircle,
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

export default function ContactPage() {
  return (
    <div className="bg-[#181818] text-white min-h-screen">
      {/* HERO */}
      <Section className="pt-28 text-center">
        <p className="uppercase tracking-[0.25em] text-sm text-[#EEEAE7] mb-4">
          Contact Us
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Let’s Build Something That Scales
        </h1>

        <p className="text-[#EEEAE7] max-w-3xl mx-auto text-lg">
          We work with brands that want systems, structure, and measurable
          results. Tell us about your goals and we’ll guide you toward the next
          best step.
        </p>
      </Section>

      {/* CONTACT OPTIONS */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Calendar,
              title: "Book a Strategy Call",
              desc: "Best for serious projects. We’ll discuss goals, bottlenecks, and potential systems.",
            },
            {
              icon: Mail,
              title: "Email Us",
              desc: "Prefer writing? Send details about your project and we’ll respond within 24–48 hours.",
            },
            {
              icon: PhoneCall,
              title: "Direct Contact",
              desc: "For existing clients or urgent questions regarding ongoing projects.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#EEEAE7] text-[#181818] rounded-2xl p-6"
            >
              <item.icon className="w-6 h-6 text-[#1A5AFF] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-[#333] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONTACT FORM */}
      <Section>
        <div className="bg-[#EEEAE7] text-[#181818] rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-semibold mb-2">
            Tell Us About Your Project
          </h2>
          <p className="text-[#444] mb-8">
            The more context you provide, the better we can help.
          </p>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg border border-[#CCC] bg-white outline-none focus:border-[#1A5AFF]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg border border-[#CCC] bg-white outline-none focus:border-[#1A5AFF]"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="p-3 rounded-lg border border-[#CCC] bg-white outline-none focus:border-[#1A5AFF]"
            />
            <input
              type="text"
              placeholder="Website / Social Link"
              className="p-3 rounded-lg border border-[#CCC] bg-white outline-none focus:border-[#1A5AFF]"
            />

            <textarea
              rows={5}
              placeholder="What are you trying to achieve? (Goals, challenges, timeline)"
              className="md:col-span-2 p-3 rounded-lg border border-[#CCC] bg-white outline-none focus:border-[#1A5AFF]"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-[#1A5AFF] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              Send Message
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </Section>

      {/* EXPECTATIONS / TRUST */}
      <Section>
        <div className="bg-[#181818] border border-[#EEEAE7]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            What Happens After You Contact Us
          </h2>

          <div className="space-y-4">
            {[
              "We review your goals and identify potential opportunities.",
              "If it’s a strong fit, we’ll invite you to a strategy call.",
              "You receive clear next steps — no pressure, no confusion.",
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-[#1A5AFF] mt-1" />
                <p className="text-[#EEEAE7]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="text-center pb-28">
        <MessageSquare className="w-6 h-6 text-[#1A5AFF] mx-auto mb-4" />
        <h2 className="text-4xl font-semibold mb-4">Ready When You Are</h2>
        <p className="text-[#EEEAE7] max-w-xl mx-auto mb-8">
          We work best with ambitious brands looking for systems that grow with
          them.
        </p>

        <button className="px-8 py-3 rounded-xl bg-[#1A5AFF] text-white font-medium hover:opacity-90 transition">
          Start Your Onboarding
        </button>
      </Section>
    </div>
  );
}
