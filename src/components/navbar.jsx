import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  // Home logo click handler
  const handleHomeClick = () => {
    closeMenu()

    window.dispatchEvent(new Event("hero-replay"))
  }

  const navLinkClass =
    "text-sm text-emerald-50/80 transition-colors duration-300 hover:text-emerald-400"

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-400/20 bg-[#071D18] text-white">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10 lg:px-12">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleHomeClick}
          className="group flex items-center text-5xl font-black tracking-[-0.00em] text-emerald-400 transition-colors duration-300 hover:text-white"
          aria-label="Ashish Raj - Home"
        >
          AR<span className="text-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">

          <a href="#about" className={navLinkClass}>
            About
          </a>

          <a href="#skills" className={navLinkClass}>
            Skills
          </a>

          <a href="#projects" className={navLinkClass}>
            Projects
          </a>

          <a href="#certifications" className={navLinkClass}>
            Certifications
          </a>

          <a href="#education" className={navLinkClass}>
            Education
          </a>

          <a href="#resume" className={navLinkClass}>
            Resume
          </a>

          <a href="#contact" className={navLinkClass}>
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-emerald-100 transition-colors hover:text-emerald-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-emerald-400/15 bg-[#0B2B22] px-6 py-5 sm:px-10 md:hidden">

          <div className="flex flex-col gap-5">

            <a href="#about" onClick={closeMenu} className={navLinkClass}>
              About
            </a>

            <a href="#skills" onClick={closeMenu} className={navLinkClass}>
              Skills
            </a>

            <a href="#projects" onClick={closeMenu} className={navLinkClass}>
              Projects
            </a>

            <a href="#certifications" onClick={closeMenu} className={navLinkClass}>
              Certifications
            </a>

            <a href="#education" onClick={closeMenu} className={navLinkClass}>
              Education
            </a>

            <a href="#resume" onClick={closeMenu} className={navLinkClass}>
              Resume
            </a>

            <a href="#contact" onClick={closeMenu} className={navLinkClass}>
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar