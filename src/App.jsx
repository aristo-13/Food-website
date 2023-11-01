import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Food from "./components/Food"

function App() {
  
  return (
    <div className="max-w-[1640px] mx-auto bg-[#f4d6c6a1]">
      <Navbar />
      <Hero />
      <Cards />
      <Food />
    </div>
  )
}

export default App
