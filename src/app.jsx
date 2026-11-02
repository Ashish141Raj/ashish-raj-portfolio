import { useEffect, useLayoutEffect } from "react"

import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/projects"
import Certifications from "./components/Certifications"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Resume from "./components/Resume"

function App() {

  // Refresh hone par Home page par redirect karo
  useLayoutEffect(() => {
    // Browser ki automatic scroll restoration disable
    window.history.scrollRestoration = "manual"

    // Previous section ka hash URL se remove karo
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    )

    // Page ko top par le jao
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [])

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll("section, footer")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible")
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((element) => {
      element.classList.add("reveal")
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App