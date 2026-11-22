import { useEffect, useState } from "react"
import ParallaxBackground from "./components/ParallaxBackground"
import MobileParallax from "./components/MobileParallax"
import WelcomeSection from "./components/WelcomeSection"
import GlimpsesSection from "./components/GlimpsesSection"
import AnimatedNavbar from "./components/AnimatedNavbar"
import AboutUs from "./components/AboutUs"
import Events from "./components/Events"
import JoinUs from "./components/JoinUs"
import ContactUs from "./components/ContactUs"
import AdminPortalModal from "./components/admin/AdminPortalModal"
import AdminPage from "./components/admin/AdminPage"
// import { useAuth } from "./context/AuthContext"
import { motion, AnimatePresence } from "motion/react"

const App = () => {
  const isAboutPath = window.location.pathname === "/about"
  const isAdminPath = window.location.pathname === "/admin"
  // const { user, userRole, userMemberData } = useAuth()
  const [isPortalOpen, setIsPortalOpen] = useState(false)

  const [activeTab, setActiveTab] = useState(() => {
    if (isAdminPath) return "admin"
    if (isAboutPath) return "about"
    const hash = window.location.hash.replace("#", "")
    return ["home", "about", "events", "join", "contact", "admin"].includes(hash) ? hash : "home"
  })

  // Handle Tab Navigation cleanly from any route
  const handleTabChange = (tabId) => {
    if (tabId === "about") {
      if (window.location.pathname !== "/about") {
        window.location.href = "/about"
      } else {
        setActiveTab("about")
      }
      return
    }

    if (tabId === "admin") {
      window.location.href = "/admin"
      return
    }

    // For home, events, join, contact
    if (window.location.pathname !== "/") {
      window.location.href = `/#${tabId}`
    } else {
      setActiveTab(tabId)
      window.location.hash = tabId
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Listen for Hash Changes on homepage
  useEffect(() => {
    if (isAboutPath || isAdminPath) return

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (["home", "about", "events", "join", "contact"].includes(hash)) {
        setActiveTab(hash)
      }
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [isAboutPath, isAdminPath])

  if (isAdminPath) {
    return <AdminPage />
  }

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
          <div className="w-full min-h-screen relative">
            {/* Fixed background overlay to unify homepage visual theme */}
            <div
              className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/back.jpg)" }}
            />
            <div className="relative z-10">
              <div className="hidden md:block">
                <ParallaxBackground />
              </div>

              <div className="block md:hidden">
                <MobileParallax />
              </div>

              <WelcomeSection />
              <GlimpsesSection />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="relative w-screen min-h-screen bg-black text-white overflow-x-hidden">
      {/* Top Right Floating Portal / Admin Page Link */}

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

      <div className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] px-2">
        <AnimatedNavbar
          activeTab={activeTab}
          onChange={handleTabChange}
          onOpenPortal={() => {
            window.location.href = "/admin"
          }}
        />
      </div>

      {/* Admin & Member Access Portal Modal */}
      <AdminPortalModal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
    </div>
  )
}

export default App
