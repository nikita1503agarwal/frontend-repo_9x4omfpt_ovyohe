import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Approach from './components/Approach'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <Expertise />
        <Approach />
        <Services />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
    </div>
  )
}

export default App
