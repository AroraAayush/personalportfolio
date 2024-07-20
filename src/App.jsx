
import './App.css'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience.jsx'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero'
import Technologies from './components/Technologies/Technologies'
import Footer from './components/Footer/Footer.jsx'
import Projects from './components/Projects/Projects.jsx'
function App() {
  return(
    <div className='text-white overflow-hidden antialiased selection:bg-slate-600'>
    
    <div className='fixed h-full w-full top-0 -z-10' >
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      
      </div>

      <div> 
        <Navbar />
        <Hero/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
      </div>
  )
}

export default App
