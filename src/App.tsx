import Navbar from "./components/Navbar.tsx"
import Hero from "./components/Hero.tsx"
import ProductViewer from "./components/ProductViewer.tsx"
import ShowCase from "./components/ShowCase.tsx"
import Performance from "./components/Performance.tsx"
import Features from "./components/Features.tsx"
import Highlights from "./components/Highlights.tsx"
import Footer from "./components/Footer.tsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <ShowCase/>
      <Performance/>
      <Features/>
      <Highlights/>
      <Footer/>
    
    </main>
    
  )
} 

export default App
