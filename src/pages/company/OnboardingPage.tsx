import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Variants } from "framer-motion";
import { Info } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const steps = ["Business", "Challenges", "Goals", "Details"];

export default function OnboardingPage() {
  const [step, setStep] = useState<number>(0);

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s <span className="text-[#1A5AFF]">Understand</span> Your
            Business
          </h1>
          <p className="text-slate-700">
            A few quick questions so we can design the right system for you.
          </p>
        </motion.div>

        {/* Maintenance Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-md mx-auto mt-8 space-y-3 text-gray-700 text-sm"
        >
          <div className="flex items-center gap-3 bg-yellow-50 text-yellow-800 p-3 rounded-lg border border-yellow-200 mt-4 mb-6">
            <div className="w-8 h-8 flex items-center justify-center">
              <Info className="w-6 h-6" />
            </div>
            <span className="text-sm">
              Our Onboarding page is currently undergoing maintenance. Please
              use the email or phone on the Contact page to reach us directly.
            </span>
          </div>
        </motion.div>

        {/* ================= PROGRESS BAR ================= */}
        <div className="mb-14">
          <div className="flex justify-between text-sm text-slate-500 mb-3">
            <span>
              Step {step + 1} of {steps.length}
            </span>
            <span>{steps[step]}</span>
          </div>

          <div className="w-full h-2 bg-[#EEEAE7] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full bg-[#1A5AFF]"
            />
          </div>
        </div>

        {/* ================= STEP CONTENT ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {step === 0 && (
              <>
                <h2 className="text-2xl font-semibold">
                  What type of business are you?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "B2B SaaS",
                    "Tech Startup",
                    "Local Business",
                    "Ecommerce Brand",
                    "Agency / Consulting",
                    "Personal Brand",
                  ].map((item, i) => (
                    <label
                      key={i}
                      className="border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-[#1A5AFF] hover:bg-[#EEEAE7] transition"
                    >
                      <input
                        type="checkbox"
                        className="mr-3 accent-[#1A5AFF]"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h2 className="text-2xl font-semibold">
                  What are you struggling with most?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Website not converting",
                    "Manual workflows",
                    "Inconsistent social media",
                    "Weak brand positioning",
                    "Low lead volume",
                    "No clear system",
                  ].map((item, i) => (
                    <label
                      key={i}
                      className="border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-[#1A5AFF] hover:bg-[#EEEAE7] transition"
                    >
                      <input
                        type="checkbox"
                        className="mr-3 accent-[#1A5AFF]"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-2xl font-semibold">
                  What outcome matters most?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "More qualified leads",
                    "Automation & efficiency",
                    "Premium brand positioning",
                    "Higher conversions",
                    "Consistent growth",
                    "Stronger authority",
                  ].map((item, i) => (
                    <label
                      key={i}
                      className="border border-slate-200 rounded-xl p-4 cursor-pointer hover:border-[#1A5AFF] hover:bg-[#EEEAE7] transition"
                    >
                      <input
                        type="checkbox"
                        className="mr-3 accent-[#1A5AFF]"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-2xl font-semibold">
                  Anything else we should know?
                </h2>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals or situation..."
                  className="w-full border border-slate-200 rounded-lg p-4 focus:border-[#1A5AFF] outline-none"
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ================= NAVIGATION ================= */}

        <div className="flex justify-between mt-12">
          {/* Back Button */}
          <motion.button
            onClick={() => setStep((s) => Math.max(s - 1, 0))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2 rounded-md border border-slate-200 text-slate-700 inline-flex items-center gap-2 hover:bg-slate-50 transition-all cursor-pointer"
          >
            Back
          </motion.button>

          {/* Continue / Submit Button */}
          {step < steps.length - 1 ? (
            <motion.button
              onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#1A5AFF] hover:bg-[#1648db] px-6 py-2 rounded-md text-white inline-flex items-center gap-2 transition-all cursor-pointer"
            >
              Continue
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#1A5AFF] hover:bg-[#1648db] px-6 py-2 rounded-md text-white transition-all cursor-pointer"
            >
              Submit Onboarding
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
