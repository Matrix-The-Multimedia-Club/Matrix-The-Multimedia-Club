import { lazy, Suspense, useEffect, useState } from "react"
import ParallaxBackground from "./components/ParallaxBackground"
import MobileParallax from "./components/MobileParallax"
import AnimatedNavbar from "./components/AnimatedNavbar"
import AboutUs from "./components/AboutUs"
import Events from "./components/Events"
import JoinUs from "./components/JoinUs"
import ContactUs from "./components/ContactUs"
import { motion, AnimatePresence } from "motion/react"

import AboutPage from "./components/AboutUs"

const App = () => {
  const isAboutPath = window.location.pathname === "/about"

  const [activeTab, setActiveTab] = useState(() => {
    if (isAboutPath) {
      return "about"
    }
    const hash = window.location.hash.replace("#", "")
    return ["home", "about", "events", "join", "contact"].includes(hash) ? hash : "home"
  })

  // Sync state to hash if we are on the home page (pathname is NOT /about)
  useEffect(() => {
    if (isAboutPath) {
      if (activeTab !== "about") {
        // User clicked a different tab from /about, redirect to home with hash
        window.location.href = `/#${activeTab}`
      }
    } else {
      window.location.hash = activeTab
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [activeTab, isAboutPath])

  useEffect(() => {
    if (isAboutPath) return

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (["home", "about", "events", "join", "contact"].includes(hash)) {
        setActiveTab(hash)
      }
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [isAboutPath])

  const renderContent = () => {
    if (isAboutPath) {
      return <AboutUs />
    }

    switch (activeTab) {
      case "about":
        return <AboutUs />
      case "events":
        return <Events />
      case "join":
        return <JoinUs />
      case "contact":
        return <ContactUs />
      case "home":
      default:
        return (
          <>
            <div className="hidden md:block">
              <ParallaxBackground />
            </div>

            <div className="block md:hidden">
              <MobileParallax />
            </div>
          </>
        )
    }
  }

  return (
    <div className="relative w-screen min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={isAboutPath ? "about-path" : activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] px-2">
        <AnimatedNavbar activeTab={activeTab} onChange={setActiveTab} />
      </div>
    </div>
  )
}

export default App
