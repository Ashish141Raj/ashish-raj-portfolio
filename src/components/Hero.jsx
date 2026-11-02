import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function Hero() {
  const [animationKey, setAnimationKey] = useState(0)

  // Listen for Navbar logo click
  useEffect(() => {
    const replayHero = () => {
      setAnimationKey((prev) => prev + 1)
    }

    window.addEventListener("hero-replay", replayHero)

    return () => {
      window.removeEventListener("hero-replay", replayHero)
    }
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  }

  const transition = {
    duration: 0.7,
    ease: "easeOut",
  }

  return (
    <section
      id="home"
      key={animationKey}
      className="relative min-h-[calc(100vh-81px)] overflow-hidden bg-[#111111] text-white"
    >

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Soft Emerald Glow */}
      <div className="absolute -left-48 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-emerald-400/[0.04] blur-[130px]" />

      {/* Top Identity */}
      <div className="absolute left-6 top-7 hidden text-[11px] uppercase tracking-[0.25em] text-gray-600 sm:block lg:left-10">
        ASHISH RAJ / 2026
      </div>

      {/* Main Layout */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pb-12 pt-24 sm:px-10 lg:px-12 lg:pt-28 xl:min-h-[calc(100vh-81px)] xl:flex-row xl:items-center xl:justify-between xl:py-16">

        {/* Main Content */}
        <div className="w-full max-w-3xl xl:max-w-[58%]">

          {/* Developer Label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={transition}
            className="mb-5 flex items-center gap-4 sm:mb-6"
          >
            <span className="h-px w-8 bg-emerald-400 sm:w-10" />

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
              BCA Graduate
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ ...transition, delay: 0.15 }}
            className="text-[clamp(3.2rem,7.5vw,7rem)] font-bold leading-[0.88] tracking-[-0.055em]"
          >
            Learn.
            <br />
            Build.
            <br />

            <span className="text-emerald-400">
              Improve.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ ...transition, delay: 0.3 }}
            className="mt-7 max-w-xl text-sm leading-6 text-gray-400 sm:mt-8 sm:text-base sm:leading-7 lg:text-lg"
          >
            I'm Ashish Raj, a BCA Graduate focused on web development
            and Java development. I learn by turning concepts into
            practical projects and continuously improving what I build.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ ...transition, delay: 0.45 }}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >

            {/* Explore Projects */}
            <a
              href="#projects"
              className="group inline-flex w-fit items-center justify-center gap-3 border border-emerald-400 bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-transparent hover:text-emerald-400 sm:px-7 sm:py-3.5 sm:text-base"
            >
              Explore My Builds

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Download Resume */}
            <a
              href="/images/portfolio/resume.pdf"
              download="Ashish_Raj_Resume.pdf"
              className="inline-flex w-fit items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400 sm:px-7 sm:py-3.5 sm:text-base"
            >
              Download Resume
            </a>

          </motion.div>

          {/* Bottom Identity */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ ...transition, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-[10px] uppercase tracking-[0.15em] text-gray-600 sm:mt-10 sm:gap-x-5 sm:text-xs"
          >
            <span>Web Development</span>

            <span className="text-gray-700">/</span>

            <span>Java</span>

            <span className="text-gray-700">/</span>

            <span>Learning by Building</span>
          </motion.div>

        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 25 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mt-16 flex justify-center xl:mt-0 xl:w-[38%] xl:justify-end"
        >

          <div className="relative h-72 w-64 sm:h-80 sm:w-72 lg:h-96 lg:w-80">

            {/* Frame */}
            <div className="absolute inset-0 border border-emerald-400/20" />

            {/* Photo */}
            <img
              src="/images/portfolio/profile.jpg"
              alt="Ashish Raj"
              className="relative z-10 h-full w-full object-cover object-center"
            />

            {/* Corner Accent */}
            <div className="absolute -right-3 -top-3 z-20 h-10 w-10 border-r border-t border-emerald-400/50" />

            {/* Name Label */}
            <div className="absolute -bottom-4 -left-4 z-20 border border-white/10 bg-[#111111] px-4 py-2">
              <p className="text-xs uppercase tracking-[0.15em] text-gray-500">
                Ashish Raj
              </p>
            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gray-600 transition-colors hover:text-emerald-400 lg:flex"
      >
        Scroll

        <span className="h-8 w-px bg-white/15" />
      </motion.a>

    </section>
  )
}

export default Hero