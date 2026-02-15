import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FileText,
  Shield,
  CreditCard,
  RefreshCw,
  AlertTriangle,
  Lock,
  Scale,
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

const termsSections = [
  {
    icon: FileText,
    title: "1. Acceptance of Terms",
    content:
      "By accessing this website or engaging our services, you agree to these Terms of Service. If you do not agree, you should not use our website or services.",
  },
  {
    icon: Shield,
    title: "2. Services",
    content:
      "We provide digital services including AI automation, website development, branding, marketing systems, and consulting. Specific deliverables, timelines, and scope are defined in individual project agreements.",
  },
  {
    icon: CreditCard,
    title: "3. Payments & Fees",
    content:
      "All payments are due according to the terms stated in your proposal or invoice. Deposits are non-refundable unless otherwise specified. Work may pause if payments are delayed.",
  },
  {
    icon: RefreshCw,
    title: "4. Revisions & Scope Changes",
    content:
      "Projects include a defined number of revisions. Requests outside the agreed scope may require additional fees and timeline adjustments.",
  },
  {
    icon: Lock,
    title: "5. Client Responsibilities",
    content:
      "Clients agree to provide timely feedback, required assets, and access credentials necessary for project completion. Delays in communication may impact timelines.",
  },
  {
    icon: Shield,
    title: "6. Intellectual Property",
    content:
      "Upon full payment, final deliverables become the client’s property unless otherwise stated. We retain rights to showcase non-confidential work in our portfolio unless restricted in writing.",
  },
  {
    icon: AlertTriangle,
    title: "7. Limitation of Liability",
    content:
      "We are not liable for indirect, incidental, or consequential damages including loss of revenue or business interruption. Results may vary depending on market conditions and client execution.",
  },
  {
    icon: Scale,
    title: "8. Confidentiality",
    content:
      "Both parties agree to keep sensitive business information confidential. This includes strategy, systems, credentials, and internal data shared during projects.",
  },
  {
    icon: RefreshCw,
    title: "9. Termination",
    content:
      "Either party may terminate a project with written notice. Fees for work already completed remain payable. Access to deliverables may be withheld until outstanding balances are settled.",
  },
  {
    icon: Scale,
    title: "10. Governing Law",
    content:
      "These terms are governed by the laws applicable to the jurisdiction where the agency operates, unless otherwise agreed in writing.",
  },
  {
    icon: RefreshCw,
    title: "11. Updates to Terms",
    content:
      "We may update these Terms periodically. Continued use of the website or services after changes indicates acceptance of the updated terms.",
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#181818] text-white min-h-screen">
      {/* HERO */}
      <Section className="pt-28 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#EEEAE7] mb-4">
          Terms of Service
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Clear Terms. Professional Partnerships.
        </h1>

        <p className="text-[#EEEAE7] max-w-3xl mx-auto text-lg">
          These terms help ensure clarity, fairness, and smooth collaboration
          between our agency and our clients.
        </p>

        <p className="text-sm text-[#EEEAE7] mt-4">
          Effective Date: [Insert Date]
        </p>
      </Section>

      {/* TERMS CONTENT */}
      <Section>
        <div className="space-y-8">
          {termsSections.map((section, i) => (
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

      {/* TRUST BLOCK */}
      <Section>
        <div className="bg-[#1A5AFF] rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Built on Transparency & Trust
          </h2>
          <p className="text-[#EEEAE7] max-w-2xl mx-auto leading-relaxed">
            Our goal is long-term partnerships. Clear expectations protect both
            sides and help projects run smoothly from start to finish.
          </p>
        </div>
      </Section>

      {/* CONTACT */}
      <Section className="text-center pb-28">
        <Mail className="w-6 h-6 text-[#1A5AFF] mx-auto mb-4" />
        <h2 className="text-3xl font-semibold mb-4">
          Questions About These Terms?
        </h2>
        <p className="text-[#EEEAE7] mb-6">
          Reach out anytime and we’ll clarify anything before we begin working
          together.
        </p>

        <button className="px-8 py-3 rounded-xl bg-[#1A5AFF] text-white font-medium hover:opacity-90 transition">
          Contact Us
        </button>
      </Section>
    </div>
  );
}
