import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="mx-auto max-w-[1512px] bg-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
