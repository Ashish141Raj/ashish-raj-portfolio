import { motion } from "framer-motion"

function Contact() {
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

  const contactLinks = [
    {
      label: "Email",
      value: "rajshish37@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rajshish37@gmail.com",
      external: true,
    },
    {
      label: "Phone",
      value: "+91 9525003016",
      href: "tel:+919525003016",
    },
    {
      label: "GitHub",
      value: "Ashish141Raj",
      href: "https://github.com/Ashish141Raj",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Ashish Raj",
      href: "https://www.linkedin.com/in/ashish-raj-b20237234",
      external: true,
    },
  ]

  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Have a project
            <br />
            <span className="text-gray-500">
              or opportunity?
            </span>
            <br />
            Let's connect.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            I'm open to Frontend Developer internships and full-time
            opportunities where I can contribute my skills, work on
            real-world projects, learn from experienced developers,
            and grow professionally.
          </p>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-12 flex flex-wrap items-center gap-3 border-y border-white/10 py-5"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <p className="text-sm font-medium text-gray-300">
            Open to Internship & Full-Time Job Opportunities
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 gap-x-12 md:grid-cols-2"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={fadeUp}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              whileHover={{ x: 6 }}
              className="group flex items-center justify-between border-b border-white/10 py-7 transition-colors duration-300 hover:border-emerald-400"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  {link.label}
                </p>

                <p className="mt-2 text-lg text-gray-200 transition-colors duration-300 group-hover:text-emerald-400 sm:text-xl">
                  {link.value}
                </p>
              </div>

              <span className="text-2xl text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-400">
                ↗
              </span>
            </motion.a>
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
          <span>07 / Contact</span>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact