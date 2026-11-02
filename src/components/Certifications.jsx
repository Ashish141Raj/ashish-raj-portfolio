import { motion } from "framer-motion"
import certifications from "../data/certifications"

function Certifications() {
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
      id="certifications"
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
            Certifications
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Learning recognized.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            A collection of certifications and learning experiences
            that reflect my commitment to continuously improving
            my technical knowledge.
          </p>
        </motion.div>

        {/* Certificate Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mb-8 flex items-center justify-between border-b border-white/10 pb-5"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Certificate Archive
          </p>

          <p className="text-sm text-gray-400">
            {String(certifications.length).padStart(2, "0")} Certificates
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              variants={fadeUp}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="group border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-emerald-400/40 sm:p-7"
            >

              {/* Card Header */}
              <div className="mb-7 flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-gray-600">
                  CERTIFICATE / 0{index + 1}
                </span>

                <span className="text-xl text-emerald-400">
                  ↗
                </span>
              </div>

              {/* Certificate Details */}
              <h3 className="text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-emerald-400 sm:text-2xl">
                {certificate.title}
              </h3>

              <p className="mt-4 text-sm font-medium text-gray-300">
                {certificate.issuer}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Issued: {certificate.date}
              </p>

              {certificate.certificateCode && (
                <p className="mt-2 text-xs text-gray-600">
                  Certificate ID: {certificate.certificateCode}
                </p>
              )}

              {/* View Certificate Button */}
              <div className="mt-8 border-t border-white/10 pt-5">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-emerald-400 transition-all duration-300 hover:gap-5 hover:text-emerald-300"
                >
                  View Certificate
                  <span>↗</span>
                </a>
              </div>

            </motion.article>
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
          className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-600"
        >
          <span className="h-px w-10 bg-emerald-400/50" />
          <span>04 / Certifications</span>
        </motion.div>

      </div>
    </section>
  )
}

export default Certifications