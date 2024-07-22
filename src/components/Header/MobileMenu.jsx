import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll';
import Switch from './Switch';
import { useTheme } from '../../context/themeContext';
function MobileMenu() {
  const [menu,setMenu]=useState(false)
  const {themeMode}=useTheme();
  return (
    
    <div className='flex flex-row items-center'>
    <div className='relative top-0 right-0 lg:hidden md:hidden flex sm:hidden'>
      <IoMdMenu onClick={(e)=>{setMenu(!menu)}} className={`text-3xl ${themeMode=="dark"?"text-white":"text-black"} cursor-pointer mr-3`}/>
    </div>
    <div className={`${menu? 'flex flex-col justify-center items-center gap-2':'hidden'} absolute right-2 top-24 z-20 border-1 w-28 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-md border-2 ${themeMode=="dark"?"border-neutral-700":"border-neutral-400"} shadow-md`}>
    <Link activeClass="active" to="hero" spy="true" smooth="true" offset={-80} className={`cursor-pointer w-full p-1 text-center ${themeMode=="dark"?"border-neutral-700":"border-neutral-400"} border-b-2 `} duration={500} onClick={()=>{setMenu(false)}} >Home</Link>
        <Link activeClass="active" to="experience" spy="true" smooth="true" offset={-30} className={`cursor-pointer w-full p-1 text-center ${themeMode=="dark"?"border-neutral-700":"border-neutral-400"} border-b-2`} duration={500} onClick={()=>{setMenu(false)}}>Experience </Link>
        <Link activeClass="active" to="projects" spy="true" smooth="true" offset={-50} className={`cursor-pointer w-full p-1  text-center ${themeMode=="dark"?"border-neutral-700":"border-neutral-400"} border-b-2`} duration={500} onClick={()=>{setMenu(false)}}>Projects</Link>
        <Link activeClass="active" to="contact" spy="true" smooth="true" offset={-50} className={`cursor-pointer w-full p-1  text-center `} duration={500} onClick={()=>{setMenu(false)}}>Contact</Link>
       
    </div>
    <Switch/>
    </div>
  
  )
}

export default MobileMenu
