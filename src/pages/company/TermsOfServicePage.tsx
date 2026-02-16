import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="bg-white pt-36 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of <span className="text-[#1A5AFF]">Service</span>
          </h1>
          <p className="text-slate-600">
            Last Updated: <span className="text-[#1A5AFF]">2/15/2026</span>
          </p>
        </motion.div>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website or engaging our services, you agree to
              these Terms of Service. If you do not agree, you must discontinue
              use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Services Provided
            </h2>
            <p>
              We provide digital strategy, web development, design, AI
              automation, content systems, and related consulting services.
              Specific deliverables and timelines are defined separately through
              project agreements, proposals, or onboarding documents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. Scope & Revisions
            </h2>
            <p>
              Services are limited to the agreed scope. Requests outside
              approved scope may require additional fees or timeline
              adjustments. Revision limits may apply and will be defined per
              project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Client Responsibilities
            </h2>
            <p>
              Clients agree to provide accurate information, timely feedback,
              and access required to complete services. Delays caused by missing
              client input may impact timelines and outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Payments & Fees</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All fees are quoted in writing and due according to agreed
                schedules.
              </li>
              <li>
                Payments are non-refundable once work has commenced unless
                otherwise stated.
              </li>
              <li>
                Late payments may result in paused services or additional fees.
              </li>
              <li>
                Deliverables may be withheld until payment obligations are
                fulfilled.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. Intellectual Property
            </h2>
            <p>
              Upon full payment, clients receive rights to final deliverables
              specifically produced for them. We retain ownership of:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Internal systems, frameworks, processes, and methodologies.
              </li>
              <li>Reusable code libraries and design frameworks.</li>
              <li>
                Concepts, workflows, or strategic approaches developed across
                projects.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              7. AI & Automation Disclaimer
            </h2>
            <p>
              Certain services may include AI-assisted tools or automation
              systems. While we aim for reliability, AI outputs can contain
              inaccuracies and require human oversight. Clients acknowledge that
              AI-assisted systems may evolve or change due to third-party
              platform updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              8. Performance & Results Disclaimer
            </h2>
            <p>
              We provide strategic and technical services designed to improve
              business outcomes; however, we do not guarantee specific
              financial, ranking, traffic, or revenue results. Outcomes depend
              on multiple factors outside our control, including market
              conditions and client execution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential information private and
              not disclose sensitive business information without permission,
              except where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              10. Third-Party Platforms
            </h2>
            <p>
              We may integrate or recommend third-party tools or services. We
              are not responsible for outages, policy changes, or limitations
              imposed by external platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              11. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, we are not liable for
              indirect, incidental, consequential, or special damages arising
              from use of our services or website. Total liability shall not
              exceed the amount paid by the client for the specific service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Termination</h2>
            <p>
              Either party may terminate services with written notice. Clients
              remain responsible for payment for work completed up to the
              termination date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws applicable in the
              jurisdiction where the company operates, unless otherwise agreed
              in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              14. Updates to Terms
            </h2>
            <p>
              We may modify these Terms at any time. Continued use of the
              website or services after updates constitutes acceptance of the
              revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">15. Contact</h2>
            <p>
              Questions regarding these Terms can be submitted through the
              contact page on this website.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
