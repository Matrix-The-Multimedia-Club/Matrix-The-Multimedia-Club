import { lazy, Suspense } from "react"
import ParallaxBackground from "./components/ParallaxBackground"
import MobileParallax from "./components/MobileParallax"

const About = lazy(() => import("./pages/About"))

const HomePage = () => (
  <div className="w-screen h-full overflow-x-hidden">
    <div className="hidden md:block">
      <ParallaxBackground />
    </div>

    <div className="block md:hidden">
      <MobileParallax />
    </div>
  </div>
)

const App = () => {
  const isAboutPage = window.location.pathname === "/about"

  return isAboutPage ? (
    <Suspense fallback={<div>Loading About page...</div>}>
      <About />
    </Suspense>
  ) : (
    <HomePage />
  )
}

export default App
