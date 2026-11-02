import { motion } from "framer-motion"

function Resume() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="resume"
      className="bg-[#111111] py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">

        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-14"
        >
          <p className="mb-3 font-medium text-emerald-400">
            Resume
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            More about
            <br />
            <span className="text-gray-500">
              my journey.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Explore my academic background, technical skills,
            projects, certifications, and learning journey
            through my resume.
          </p>
        </motion.div>

        {/* Resume Download Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex flex-col justify-between gap-8 border-y border-white/15 py-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xl font-semibold sm:text-2xl">
              Ashish Raj — Resume
            </p>

            <p className="mt-2 text-sm text-gray-500">
              BCA Graduate · Developer
            </p>
          </div>

          <motion.a
            href="/images/portfolio/resume.pdf"
            download="Ashish_Raj_Resume.pdf"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex w-fit items-center gap-4 border border-emerald-400 bg-emerald-400 px-6 py-4 font-semibold text-black transition-all duration-300 hover:bg-transparent hover:text-emerald-400"
          >
            Download Resume

            <span className="text-xl transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </motion.a>
        </motion.div>

        {/* Bottom Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-600"
        >
          <span className="h-px w-10 bg-emerald-400/50" />
          <span>06 / Resume</span>
        </motion.div>

      </div>
    </section>
  )
}

export default Resume