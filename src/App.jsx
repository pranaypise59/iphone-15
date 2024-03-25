import Features from './components/Features'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Model from './components/Model'
import Navbar from './components/Navbar'
import Highlights from './components/highlights'

function App() {

  return (
<main className="bg-black">
  <Navbar/>
  <Hero/>
  <Highlights/>
  <Model/>
  <Features/>
  <HowItWorks/>
</main>
  )
}
 
export default App
