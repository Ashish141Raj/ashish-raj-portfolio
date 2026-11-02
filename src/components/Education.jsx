import { motion } from "framer-motion"

function Education() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="education"
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
          className="mb-16"
        >
          <p className="mb-3 font-medium text-emerald-400">
            Education
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The foundation
            <br />
            <span className="text-gray-500">
              of my journey.
            </span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 gap-8 border-t border-white/15 pt-8 md:grid-cols-[180px_1fr] lg:gap-16">

          {/* Year */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <p className="text-2xl font-semibold tracking-tight text-emerald-400">
              2023 — 2026
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-600">
              Academic Period
            </p>
          </motion.div>

          {/* Degree Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div className="flex items-start gap-4">

              <span className="mt-3 h-2 w-2 shrink-0 bg-emerald-400" />

              <div>
                <h3 className="text-2xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
                  Bachelor of Computer Applications
                </h3>

                <p className="mt-2 text-lg text-gray-400">
                  BCA
                </p>
              </div>

            </div>

            {/* University Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="ml-6 mt-8 border-l border-white/15 pl-6"
            >
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                Babasaheb Bhimrao Ambedkar Bihar University
              </p>

              <p className="mt-2 text-sm text-gray-500">
                BRABU · Muzaffarpur, Bihar
              </p>

              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="text-3xl font-bold text-emerald-400"
              >
                77.63%
              </motion.p>

              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-500">
                Overall Percentage
              </p>
            </motion.div>

          </motion.div>
        </div>

        {/* Bottom Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-600"
        >
          <span className="h-px w-10 bg-emerald-400/50" />
          <span>05 / Education</span>
        </motion.div>

      </div>
    </section>
  )
}

export default Education