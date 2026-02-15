import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Shield,
  Database,
  Globe,
  Cookie,
  Lock,
  Scale,
  RefreshCw,
  Mail,
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

const policySections = [
  {
    icon: Database,
    title: "1. Information We Collect",
    content:
      "We may collect information you provide directly, including your name, email address, business details, project requirements, and files shared during onboarding or collaboration. We may also collect limited usage data such as browser type and site interactions for analytics purposes.",
  },
  {
    icon: Globe,
    title: "2. How We Use Your Information",
    content:
      "Your information is used to deliver services, communicate project updates, improve workflows, and enhance user experience. We do not sell or rent your personal data to third parties.",
  },
  {
    icon: Scale,
    title: "3. Legal Basis for Processing",
    content:
      "Where applicable, we process data based on your consent, contractual necessity for delivering services, legitimate business interests, or compliance with legal obligations.",
  },
  {
    icon: Cookie,
    title: "4. Cookies & Analytics",
    content:
      "We may use cookies and analytics tools to understand website performance and improve functionality. You can disable cookies through your browser settings, though some features may not operate correctly.",
  },
  {
    icon: Shield,
    title: "5. Third-Party Services",
    content:
      "Our workflows may integrate trusted third-party platforms such as hosting providers, analytics tools, automation software, AI providers, or communication platforms. These providers operate under their own privacy policies.",
  },
  {
    icon: Lock,
    title: "6. Data Security",
    content:
      "We implement reasonable technical and organizational safeguards to protect client data, including controlled access, secure platforms, and internal confidentiality practices. However, no online system can guarantee absolute security.",
  },
  {
    icon: Database,
    title: "7. Data Retention",
    content:
      "We retain information only as long as necessary to deliver services, comply with legal obligations, resolve disputes, or maintain essential business records.",
  },
  {
    icon: Scale,
    title: "8. Your Rights",
    content:
      "Depending on your location, you may have rights to access, correct, delete, or request portability of your data, or object to certain processing activities. Contact us to make a request.",
  },
  {
    icon: Globe,
    title: "9. International Data Transfers",
    content:
      "Because we work with cloud-based tools and international clients, data may be processed outside your country. We take reasonable steps to ensure appropriate safeguards are in place.",
  },
  {
    icon: Shield,
    title: "10. Children’s Privacy",
    content:
      "Our services are intended for businesses and professionals. We do not knowingly collect personal information from children under 13.",
  },
  {
    icon: RefreshCw,
    title: "11. Policy Updates",
    content:
      "We may update this Privacy Policy periodically. Any updates will be posted on this page with a revised effective date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#181818] text-white min-h-screen">
      {/* HERO */}
      <Section className="pt-28 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#EEEAE7] mb-4">
          Privacy Policy
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Your Data. Handled With Care.
        </h1>

        <p className="text-[#EEEAE7] max-w-3xl mx-auto text-lg">
          Transparency is part of how we build trust. This page explains how we
          collect, use, and protect your information when you work with us.
        </p>

        <p className="text-sm text-[#EEEAE7] mt-4">
          Effective Date: [Insert Date]
        </p>
      </Section>

      {/* POLICY SECTIONS */}
      <Section>
        <div className="space-y-8">
          {policySections.map((section, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#EEEAE7] text-[#181818] rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-4">
                <section.icon className="w-6 h-6 text-[#1A5AFF]" />
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>

              <p className="text-[#333] leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CONFIDENTIALITY BLOCK */}
      <Section>
        <div className="bg-[#1A5AFF] rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Client Confidentiality Matters
          </h2>
          <p className="text-[#EEEAE7] max-w-2xl mx-auto leading-relaxed">
            Many of our projects involve internal workflows, strategy, and
            sensitive business data. Protecting your information is a core part
            of how we operate and deliver results.
          </p>
        </div>
      </Section>

      {/* CONTACT */}
      <Section className="text-center pb-28">
        <Mail className="w-6 h-6 text-[#1A5AFF] mx-auto mb-4" />
        <h2 className="text-3xl font-semibold mb-4">
          Questions About Privacy?
        </h2>
        <p className="text-[#EEEAE7] mb-6">
          Contact us anytime if you need clarification about how your data is
          handled.
        </p>

        <button className="px-8 py-3 rounded-xl bg-[#1A5AFF] text-white font-medium hover:opacity-90 transition">
          Contact Us
        </button>
      </Section>
    </div>
  );
}
