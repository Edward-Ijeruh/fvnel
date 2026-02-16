import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-[#1A5AFF]">Policy</span>
          </h1>
          <p className="text-slate-600">
            Last Updated: <span className="text-[#1A5AFF]">2/15/2026</span>
          </p>
        </motion.div>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy explains how we collect, use, store, and
              protect information when you visit our website, engage with our
              services, or communicate with us. By using this website, you agree
              to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Contact details such as name, email address, and company name.
              </li>
              <li>Business information submitted through onboarding forms.</li>
              <li>
                Usage data including browser type, pages visited, and
                interactions.
              </li>
              <li>
                Analytics data collected through tracking and performance tools.
              </li>
              <li>
                Communications sent to us through forms, email, or messaging
                platforms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. How We Use Information
            </h2>
            <p>
              We use collected information strictly for legitimate business
              purposes, including:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Providing, improving, and delivering our services.</li>
              <li>Responding to inquiries and onboarding potential clients.</li>
              <li>
                Developing strategy recommendations based on submitted
                information.
              </li>
              <li>
                Improving website performance, user experience, and security.
              </li>
              <li>Internal analytics and service optimization.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. AI & Automation Usage
            </h2>
            <p>
              Certain workflows may include AI-assisted tools or automation
              systems to improve efficiency, analysis, and communication. AI
              systems may process data submitted through forms or project
              workflows solely to support service delivery. We do not sell
              personal data or allow third parties to use your information for
              unrelated advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. Cookies & Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar technologies to understand website
              usage, improve performance, and measure effectiveness. You can
              adjust browser settings to disable cookies, though some features
              may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Data Sharing</h2>
            <p>
              We do not sell your personal information. Information may be
              shared only with trusted service providers who assist in operating
              our website or delivering services, under confidentiality
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Data Retention</h2>
            <p>
              We retain information only as long as necessary for business,
              legal, or operational purposes. Data may be securely deleted when
              no longer required.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Security</h2>
            <p>
              We implement reasonable technical and organizational safeguards to
              protect data. However, no digital transmission or storage method
              can be guaranteed as completely secure, and users provide
              information at their own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              9. Third-Party Links & Tools
            </h2>
            <p>
              Our website may reference or integrate third-party platforms. We
              are not responsible for the privacy practices or content of
              external services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              10. International Users
            </h2>
            <p>
              By using this website, you understand that information may be
              processed in countries where data protection laws differ from your
              jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Your Rights</h2>
            <p>
              Depending on your location, you may have rights to request access,
              correction, or deletion of personal data. Requests can be made by
              contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              12. Limitation of Liability
            </h2>
            <p>
              We make reasonable efforts to protect and handle data responsibly,
              but we cannot guarantee absolute security or uninterrupted
              service. To the maximum extent permitted by law, we disclaim
              liability for indirect, incidental, or consequential damages
              resulting from the use of this website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of
              the website after updates constitutes acceptance of the revised
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">14. Contact</h2>
            <p>
              If you have questions regarding this policy, please contact us
              through the contact page on this website.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
