
import './App.css'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience.jsx'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero.jsx'
import Technologies from './components/Technologies/Technologies'
import Footer from './components/Footer/Footer.jsx'
import Projects from './components/Projects/Projects.jsx'
import { ThemeContextProvider } from './context/themeContext.js'
import { useState,useEffect } from 'react'
function App() {
  let themefromlocal=JSON.parse(localStorage.getItem('themeMode'));
  
    const [themeMode,setThemeMode]=useState(themefromlocal==null?"dark":themefromlocal);
  
  const setLightMode=()=>{
    setThemeMode("light");
  }
  const setDarkMode=()=>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    let htmll= document.querySelector('html');
    htmll.classList.remove('light','dark');
    htmll.classList.add(themeMode);
    localStorage.setItem("themeMode",JSON.stringify(themeMode));
  },[themeMode])
  return(
    <ThemeContextProvider value={{themeMode,setLightMode,setDarkMode}}>
    <div className={`${themeMode=="dark"?'text-white':'text-black'} overflow-hidden antialiased selection:bg-slate-600`}>
    
    <div className='fixed h-full w-full top-0 -z-10' >
      <div className={`absolute top-0 z-[-2] h-screen w-screen  ${themeMode=="dark"? 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' : ' bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'}`}>
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
      </ThemeContextProvider>
  )
}

export default App

// bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-35 blur-[90px]


{/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}