import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import firstProfileImage from "../../assets/testimonial/profile-img-one.png";
import secondProfileImage from "../../assets/testimonial/profile-img-two.png";
import thirdProfileImage from "../../assets/testimonial/profile-img-three.png";

const testimonials = [
  {
    name: "David Spencer",
    role: "Founder, B2B SaaS Company Europe",
    image: firstProfileImage,
    content:
      "Fvnel completely transformed our outbound system. Within weeks, we went from inconsistent outreach to a predictable pipeline. The ROI was clear by month two.",
    featured: false,
  },
  {
    name: "Mario Laid",
    role: "Managing Director, Digital Services Firm australlia",
    image: secondProfileImage,
    content:
      "The website redesign instantly positioned us as a premium brand. Our conversion rate improved and sales calls felt easier because prospects already trusted us.",
    featured: true,
  },
  {
    name: "Tian Tan",
    role: "Growth Lead, Tech Consultancy Singapore Operations Manager, Brisbane",
    image: thirdProfileImage,
    content:
      "The SEO and social optimisation work brought in higher-quality leads, not just traffic. Everything was structured, data-driven, and performance-focused.",
    featured: false,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-[#292928] text-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top right glow */}
        <div className="absolute -top-40 right-0 md:right-70 translate-x-1/4 -translate-y-1/4 w-80 h-80 rounded-full bg-[#285de3] blur-2xl opacity-70 z-0" />

        {/* Header */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            What our <span className="text-[#285de3]">Satisfied</span> <br />{" "}
            Clients Say
          </h2>
          <p className="text-sm text-gray-400 mt-6 max-w-xl">
            Results from Australian businesses powered by AI-driven growth
            systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={`
                        rounded-2xl p-8 shadow-lg
                        ${
                          testimonial.featured
                            ? "bg-[#285de3] text-white shadow-blue-900/40"
                            : "bg-white text-black"
                        }
                      `}
            >
              {/* Profile section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="font-semibold text-sm">
                    {testimonial.name}
                  </span>
                  <span
                    className={`text-xs ${
                      testimonial.featured ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {testimonial.role}
                  </span>
                </div>
              </div>

              {/* Testimonial text */}
              <p
                className={`text-sm leading-relaxed ${
                  testimonial.featured ? "text-white/90" : "text-gray-700"
                }`}
              >
                {testimonial.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
