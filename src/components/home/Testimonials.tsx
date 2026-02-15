import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const testimonials = [
  {
    name: "Iso de Capri Restaurant",
    role: "From Outdated to Fully Booked",
    content:
      "FVNEL rebuilt our entire digital presence from the ground up. Our previous website wasn’t converting and our booking process was inefficient. They engineered a clean, high-converting platform with an integrated reservation system that immediately improved customer flow. The experience feels premium and our bookings have noticeably increased",
    highlight: "+38% booking increase",
  },
  {
    name: "Aquacoolio - Ecommerce Brand",
    role: "From Basic Store to Structured Sales Engine",
    content:
      "FVNEL didn’t just redesign our store, they built a complete ecommerce growth system. From brand identity and UGC content strategy to email marketing automation, every layer was engineered with precision. Sales became predictable, and our brand presence finally felt authoritative.",
    highlight: "+42% Ecommerce conversion lift",
  },
  {
    name: "Steps - Sports Ecommerce",
    role: "Structured for Performance & Scale",
    content:
      "We needed more than a website. We needed infrastructure. FUNEL designed a high-converting ecommerce experience, optimized our content strategy, and implemented sales automation that gave us real scalability. The results were immediate and measurable.",
    highlight: "+60% response time reduction",
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
  // Predefined 8 blue circles with random sizes & positions inside container
  const circles = [
    { w: 40, h: 40, top: "10%", left: "10%" },
    { w: 60, h: 60, top: "20%", left: "8%" },
    // { w: 50, h: 50, top: "95%", left: "50%" },
    { w: 80, h: 80, top: "60%", left: "95%" },
    { w: 30, h: 30, top: "70%", left: "65%" },
    { w: 55, h: 55, top: "50%", left: "5%" },
    { w: 45, h: 45, top: "15%", left: "50%" },
    { w: 70, h: 70, top: "80%", left: "5%" },
  ];

  return (
    <section className="relative bg-white pt-32 overflow-hidden">
      {/* Main container */}
      <div className="relative z-10 mx-auto max-w-5xl rounded-4xl bg-[#eeeae7] px-10 py-20 overflow-hidden">
        {/* Decorative circles */}
        {circles.map((circle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-[#1A5AFF] z-0"
            style={{
              width: circle.w,
              height: circle.h,
              top: circle.top,
              left: circle.left,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}

        {/* Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-20 text-center text-3xl md:text-5xl font-semibold text-black"
        >
          What Our <span className="text-[#1A5AFF]">Satisfied</span> Clients Say
        </motion.h2>

        {/* Cards wrapper */}
        <div className="pb-20 grid gap-8 max-w-3xl mx-auto md:grid-cols-1 relative z-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col text-center rounded-3xl bg-white p-8 shadow-sm"
            >
              {/* Header */}
              <h3 className="text-lg font-semibold text-black mb-3">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-[#1A5AFF] mb-4">{item.role}</p>

              {/* Content */}
              <p className="text-sm text-black/70 mb-6">{item.content}</p>

              {/* Highlight */}
              <p className="mt-auto text-[#103699] font-semibold px-4 py-3 text-sm">
                {item.highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
