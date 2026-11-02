function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-400/20 bg-gradient-to-br from-[#071D18] via-[#0B2B22] to-[#061510] text-white">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-20 sm:px-10 lg:px-12">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-14 border-b border-emerald-100/10 pb-16 md:grid-cols-2">

          {/* Brand Section */}
          <div>
            <a
              href="#home"
              className="inline-block text-6xl font-bold tracking-tighter text-emerald-400 transition-colors hover:text-emerald-300 sm:text-7xl"
            >
              AR.
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-emerald-50/60 sm:text-base">
              A developer focused on learning, building,
              and creating meaningful digital experiences.
            </p>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-emerald-400/70">
              Learn. Build. Improve.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">

            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Explore
              </p>

              <div className="flex flex-col gap-4 text-sm text-emerald-50/60">
                <a href="#about" className="transition-colors hover:text-emerald-300">About</a>
                <a href="#skills" className="transition-colors hover:text-emerald-300">Skills</a>
                <a href="#projects" className="transition-colors hover:text-emerald-300">Projects</a>
              </div>
            </div>

            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Discover
              </p>

              <div className="flex flex-col gap-4 text-sm text-emerald-50/60">
                <a href="#certifications" className="transition-colors hover:text-emerald-300">Certificates</a>
                <a href="#education" className="transition-colors hover:text-emerald-300">Education</a>
                <a href="#resume" className="transition-colors hover:text-emerald-300">Resume</a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Connect
              </p>

              <div className="flex flex-col gap-4 text-sm text-emerald-50/60">
                <a href="#contact" className="transition-colors hover:text-emerald-300">Contact</a>
                <a href="https://github.com/Ashish141Raj" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-emerald-300">GitHub</a>
                <a href="https://www.linkedin.com/in/ashish-raj-b20237234" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-emerald-300">LinkedIn</a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-emerald-50/40">
            © {new Date().getFullYear()} Ashish Raj. All rights reserved.
          </p>

          <a
            href="#home"
            className="group flex w-fit items-center gap-3 border border-emerald-400/30 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-emerald-300 transition-all hover:border-emerald-400 hover:bg-emerald-400 hover:text-[#071D18]"
          >
            Back to top
            <span className="text-base transition-transform group-hover:-translate-y-1">
              ↑
            </span>
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer