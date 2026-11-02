import { motion } from "framer-motion"
import about from "../data/about"

function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="about"
      className="bg-[#111111] text-white min-h-screen flex items-center"
    >
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-16">

        {/* About Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-10"
        >
          <p className="text-emerald-400 font-medium mb-3">
            {about.label}
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {about.heading}
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="max-w-4xl">
          {about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={
                index === 0
                  ? "text-lg sm:text-xl text-gray-300 leading-relaxed"
                  : "mt-6 max-w-3xl text-base sm:text-lg text-gray-400 leading-relaxed"
              }
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Section Marker */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-600"
        >
          <span className="h-px w-10 bg-emerald-400/50" />
          <span>01 / About</span>
        </motion.div>

      </div>
    </section>
  )
}

export default About