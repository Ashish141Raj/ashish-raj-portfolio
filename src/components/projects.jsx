import { motion } from "framer-motion"
import projects from "../data/projects"

function Projects() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section
      id="projects"
      className="bg-[#111111] text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <p className="text-emerald-400 font-medium mb-3">
            Projects
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Things I've built.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-emerald-400/40"
            >
              <p className="mb-4 text-xs tracking-[0.2em] text-gray-600">
                PROJECT / 0{index + 1}
              </p>

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-emerald-400"
                  >
                    GitHub Repository <span>↗</span>
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Live Demo <span>↗</span>
                  </a>
                )}

              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Section Marker */}
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
          <span>03 / Projects</span>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects