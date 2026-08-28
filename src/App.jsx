import ParallaxBackground from "./components/ParallaxBackground"
import MobileParallax from "./components/MobileParallax"

const App = () => {
  return (
    <div className="w-screen h-full overflow-x-hidden">
      {/* Desktop / tablet */}
      <div className="hidden md:block">
        <ParallaxBackground />
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <MobileParallax />
      </div>
    </div>
  )
}

export default App