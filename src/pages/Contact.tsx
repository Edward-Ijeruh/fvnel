import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Clock3, Shield, Phone, Info } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactPage() {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* ===== CINEMATIC DEPTH ===== */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[130px]" />
        <div className="absolute bottom-[-220px] right-[-160px] w-[500px] h-[500px] bg-[#1A5AFF]/10 blur-[140px]" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6 pt-40 pb-32">
        {/* ================= HERO ================= */}
        <motion.div style={{ y: heroY }} className="text-center mb-24">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Contact Us <br />
            <span className="text-[#1A5AFF]">Let’s Talk About What’s Next</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-slate-700 text-lg"
          >
            Whether you’re exploring ideas or ready to build systems that scale,
            this is the first step. Tell us what you’re trying to achieve, we’ll
            guide you toward the clearest next move.
          </motion.p>

          {/* ================= CONTACT INFO ================= */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="max-w-md mx-auto mt-8 space-y-3 text-gray-700 text-sm"
          >
            {/* Email */}
            <a
              href="mailto:Jerryogbolosingha@gmail.com"
              className="flex items-center gap-3 hover:text-[#1A5AFF] transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-[#1A5AFF]/10 rounded-full">
                <Mail className="w-5 h-5 text-[#1A5AFF]" />
              </div>
              jerryogbolosingha@gmail.com
            </a>

            {/* Phone */}
            <a
              href="tel:+61428210556"
              className="flex items-center gap-3 hover:text-[#1A5AFF] transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-[#1A5AFF]/10 rounded-full">
                <Phone className="w-5 h-5 text-[#1A5AFF]" />
              </div>
              +61 428 210 556
            </a>

            {/* Maintenance Info */}
            <div className="flex items-center gap-3 bg-yellow-50 text-yellow-800 p-3 rounded-lg border border-yellow-200 my-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <Info className="w-6 h-6" />
              </div>
              <span className="text-sm text-start">
                Our contact form is currently undergoing maintenance. Please use
                the email or phone above to reach us directly.
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= CONTACT OPTIONS ================= */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {/* LEFT — CONTACT FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="rounded-2xl bg-[#EEEAE7] p-8 border border-slate-300/60 shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-6">Send a message</h2>

            <div className="space-y-4">
              <input
                placeholder="Full Name"
                className="w-full rounded-lg p-3 bg-white
        border border-slate-300/70
        focus:border-[#1A5AFF] focus:ring-2 focus:ring-[#1A5AFF]/20
        outline-none transition"
              />

              <input
                placeholder="Email Address"
                className="w-full rounded-lg p-3 bg-white
        border border-slate-300/70
        focus:border-[#1A5AFF] focus:ring-2 focus:ring-[#1A5AFF]/20
        outline-none transition"
              />

              <select
                className="w-full rounded-lg p-3 bg-white
        border border-slate-300/70
        focus:border-[#1A5AFF] focus:ring-2 focus:ring-[#1A5AFF]/20
        outline-none transition"
              >
                <option>What are you interested in?</option>
                <option>Web Design & Development</option>
                <option>AI Automation</option>
                <option>SEO & GEO</option>
                <option>Social Media Systems</option>
                <option>Visual Production</option>
                <option>Not sure yet</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us a little about your project or challenge..."
                className="w-full rounded-lg p-3 bg-white
        border border-slate-300/70
        focus:border-[#1A5AFF] focus:ring-2 focus:ring-[#1A5AFF]/20
        outline-none transition"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[#1f4bc0] cursor-pointer"
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT — TRUST + GUIDANCE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="space-y-8"
          >
            {[
              {
                icon: <Clock3 className="w-5 h-5" />,
                title: "Response time",
                text: "We usually reply within 24–48 hours on business days.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Confidentiality",
                text: "Everything you share stays private and is used only to help us understand your goals.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#EEEAE7] p-6 flex gap-5 items-start"
              >
                {/* Icon Container */}
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1A5AFF]/10 text-[#1A5AFF] shrink-0">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="rounded-2xl bg-[#EEEAE7] p-6 flex gap-5 items-start">
              {/* Icon Container */}
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1A5AFF]/10 text-[#1A5AFF] shrink-0">
                <Mail className="w-5 h-5" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold mb-1">Prefer structure?</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  If you already know you want a system built, start with
                  onboarding.
                </p>

                <Link to="/onboarding">
                  <button className="inline-flex items-center gap-2 text-[#1A5AFF] font-medium hover:underline cursor-pointer">
                    Go to Onboarding
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= FINAL INSIGHT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="rounded-2xl bg-[#1A5AFF] text-white p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Most growth problems aren’t obvious from the outside.
          </h3>

          <p className="max-w-2xl mx-auto text-[#EEEAE7]">
            Sometimes a short conversation is enough to identify the system that
            will make the biggest impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
