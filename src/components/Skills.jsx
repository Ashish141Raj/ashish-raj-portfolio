import { motion } from "framer-motion"
import skills from "../data/skills"

function Skills() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section
      id="skills"
      className="scroll-mt-[81px] bg-[#111111] py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">

        {/* Section Heading */}
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-3 font-medium text-emerald-400">
              Skills & Expertise
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Tools I build
              <br />
              <span className="text-gray-500">
                and work with.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="max-w-sm text-sm leading-7 text-gray-500 sm:text-base"
          >
            A collection of programming languages, web technologies,
            database concepts, and productivity tools I work with
            and continue to improve.
          </motion.p>

        </div>

        {/* Skills Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 gap-x-16 md:grid-cols-2"
        >
          {skills.map((group) => (
            <motion.div
              key={group.number}
              variants={fadeUp}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="group border-t border-white/15 py-8 transition-colors duration-300 hover:border-emerald-400/60"
            >

              {/* Category Header */}
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium tracking-widest text-emerald-400">
                    {group.number}
                  </span>

                  <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400 sm:text-2xl">
                    {group.category}
                  </h3>
                </div>

                <span className="text-xs text-gray-600">
                  {String(group.skills.length).padStart(2, "0")}
                </span>

              </div>

              {/* Skills List */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 pl-9">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-gray-400 transition-colors duration-300 hover:text-emerald-300 sm:text-base"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
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
          className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-600"
        >
          <span className="h-px w-10 bg-emerald-400/50" />
          <span>02 / Skills</span>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills