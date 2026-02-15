import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Variants } from "framer-motion";
import localBusiness from "../../assets/industries/local-business.png";
import realEstate from "../../assets/industries/real-estete.png";
import eCommerce from "../../assets/industries/e-commerce.png";
import healthcare from "../../assets/industries/healthcare.png";
import serviceProviders from "../../assets/industries/service-providers.png";
import b2b from "../../assets/industries/b2b-saas.png";

const industriesData = [
  {
    title: "Local Business",
    description:
      "Local SEO, automated enquiries, and fast follow-up systems that turn nearby searches into booked calls.",
    image: localBusiness,
  },
  {
    title: "Real Estate",
    description:
      "Local SEO, automated enquiries, and fast follow-up systems that turn nearby searches into booked calls.",
    image: realEstate,
  },
  {
    title: "E-Commerce",
    description:
      "Conversion-focused storefronts, analytics-driven optimisation, and automation that increases revenue per visitor.",
    image: eCommerce,
  },
  {
    title: "Healthcare",
    description:
      "Clear, trust-focused web experiences with automated enquiries, appointment flows, and compliant UX.",
    image: healthcare,
  },
  {
    title: "Service Providers",
    description:
      "Websites and workflows built to qualify leads, reduce low-quality enquiries, and streamline operations.",
    image: serviceProviders,
  },
  {
    title: "B2B SaaS",
    description:
      "Optimized websites and automated workflows that drive qualified leads, shorten sales cycles, and scale software business operations efficiently.",
    image: b2b,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative -mt-24 bg-[#eeeae7] pt-40 pb-28 px-4"
    >
      {/* Header */}
      <motion.div
        className="text-center max-w-7xl mx-auto mb-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Industries We Power <span className="text-[#1A5AFF]">Power</span>
        </h2>
        <p className="text-gray-600">
          Every industry has unique workflows, customer journeys, and growth
          challenges. Our systems <br /> adapt to the way your business actually
          operates.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {industriesData.map((industry, idx) => (
          <motion.div
            key={idx}
            className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            {/* Background image */}
            <div
              className="w-full h-68 bg-cover bg-center"
              style={{ backgroundImage: `url(${industry.image})` }}
            />

            {/* Floating info box */}
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-[70%]">
              <h3 className="font-semibold text-md">{industry.title}</h3>
              <p className="text-gray-600 text-xs mt-1">
                {industry.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Center the last card */}
        {industriesData.length % 2 !== 0 && (
          <div className="hidden lg:block col-span-1"></div>
        )}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-[#285de3] mt-20 text-center font-semibold"
      >
        While every industry operates differently, our core architecture remains{" "}
        <br />
        consistent, diagnose, architect, and deploy systems tailored to specific{" "}
        <br />
        workflows and customer journeys.
      </motion.p>

      {/* CTA */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-2 text-3xl md:text-5xl font-semibold text-black mt-20 mb-12">
          <span className="text-[#285de3]">Not Sure If</span> Your Industry
          Fits?
        </h3>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className=" mx-auto cursor-pointer bg-[#285de3] hover:bg-[#1f4bc0] transition-all duration-300 px-6 py-2.5 rounded-md font-medium shadow-md hover:shadow-lg text-white"
          >
            Call Us
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
