import Navbar from "./components/Navbar.tsx"
import Hero from "./components/Hero.tsx"
import ProductViewer from "./components/ProductViewer.tsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
    
    </main>
    
  )
} 

export default App
