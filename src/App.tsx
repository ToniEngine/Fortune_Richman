import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Toolkit from './components/Toolkit'
import BrandQuote from './components/BrandQuote'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Leadership from './components/Leadership'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Research />
        <Projects />
        <Toolkit />
        <BrandQuote />
        <Education />
        <Certifications />
        <Leadership />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
