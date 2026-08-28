import { useState, useEffect } from "react"
import ParallaxBackground from "./components/ParallaxBackground"
import MobileParallax from "./components/MobileParallax"
import AnimatedNavbar from "./components/AnimatedNavbar"
import AboutUs from "./components/AboutUs"
import Events from "./components/Events"
import JoinUs from "./components/JoinUs"
import ContactUs from "./components/ContactUs"
import { motion, AnimatePresence } from "motion/react"

const App = () => {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.replace("#", "")
    return ["home", "about", "events", "join", "contact"].includes(hash) ? hash : "home"
  })

  useEffect(() => {
    window.location.hash = activeTab
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [activeTab])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (["home", "about", "events", "join", "contact"].includes(hash)) {
        setActiveTab(hash)
      }
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const renderContent = () => {
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
            {/* Desktop / tablet */}
            <div className="hidden md:block">
              <ParallaxBackground />
            </div>

            {/* Mobile */}
            <div className="block md:hidden">
              <MobileParallax />
            </div>
          </>
        )
    }
  }

  return (
    <div className="relative w-screen min-h-screen bg-black text-white overflow-x-hidden">
      {/* Dynamic Page View */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

      {/* Floating Animated Navbar fixed at the bottom center for mobile & laptop */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] px-2">
        <AnimatedNavbar activeTab={activeTab} onChange={setActiveTab} />
      </div>
    </div>
  )
}

export default App