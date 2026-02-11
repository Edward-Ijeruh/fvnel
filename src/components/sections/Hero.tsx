import heroBackground from "../../assets/hero/hero-img.png";
import framer from "../../assets/hero/framer.png";
import n8n from "../../assets/hero/n8n.png";
import chatGpt from "../../assets/hero/chat-gpt.png";
import spline from "../../assets/hero/spline.png";
import whatsapp from "../../assets/hero/whatsapp.png";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-7xl rounded-2xl bg-black/30 p-6 sm:p-10 backdrop-blur-sm relative"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Inner div overlay */}
          <div className="absolute inset-0 rounded-2xl bg-black/50" />

          {/* Text content */}
          <div className="relative z-10 text-center py-16 sm:py-20">
            <h1 className="mb-4 text-3xl font-semibold leading-snug text-white sm:text-4xl md:text-5xl">
              <span className="text-[#285de3]">AI-Powered</span> Growth Systems
              for <br className="hidden sm:block" /> Australian Businesses
            </h1>

            <p className="mb-8 text-sm text-white/80 sm:text-base md:text-lg leading-relaxed">
              Built for Australian businesses • AI automation • SEO & GEO
              optimization • <br className="sm:hidden" />
              Conversion-first design
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 cursor-pointer bg-[#285de3] hover:bg-[#1f4bc0] transition-all duration-300 px-6 py-2.5 rounded-md font-medium shadow-md hover:shadow-lg text-white"
              >
                Book A Call
                <Phone size={16} />
              </motion.button>

              <button className="group flex items-center gap-2 rounded-md border border-[#285de3] bg-white px-6 py-3 font-medium text-[#285de3] transition-all duration-300 hover:bg-[#e6f0ff] cursor-pointer">
                See how the system works
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Companies worked with */}
      <div className="relative z-10 mx-auto max-w-7xl text-center pb-28 px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Built on Trusted Platforms
        </motion.h2>

        <motion.p
          className="mb-8 text-xs sm:text-sm text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We design and deploy systems using the same tools trusted by
          high-growth teams worldwide.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {[framer, n8n, chatGpt, spline, whatsapp].map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt="Company logo"
              className="h-10 sm:h-12 cursor-pointer object-contain"
              whileHover={{ scale: 1.12 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
