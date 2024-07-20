import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll';
function MobileMenu() {
  const [menu,setMenu]=useState(false)
  return (
    
    <>
    <div className='relative top-0 right-0 lg:invisible md:invisible md:flex sm:hidden'>
      <IoMdMenu onClick={(e)=>{setMenu(!menu)}} className='text-3xl text-white cursor-pointer mr-3'/>
    </div>
    <div className={`${menu? 'flex flex-col justify-center items-center gap-2':'hidden'} absolute right-2 top-20 z-20 border-1 w-28 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-md border-2 border-neutral-700 shadow-md`}>
    <Link activeClass="active" to="hero" spy="true" smooth="true" offset={-80} className={`cursor-pointer w-full p-1 text-center border-neutral-700 border-b-2 `} duration={500} onClick={()=>{setMenu(false)}} >Home</Link>
        <Link activeClass="active" to="experience" spy="true" smooth="true" offset={-30} className="cursor-pointer w-full p-1 text-center border-neutral-700 border-b-2" duration={500} onClick={()=>{setMenu(false)}}>Experience </Link>
        <Link activeClass="active" to="projects" spy="true" smooth="true" offset={-50} className="cursor-pointer w-full p-1  text-center border-neutral-700 border-b-2" duration={500} onClick={()=>{setMenu(false)}}>Projects</Link>
        <Link activeClass="active" to="contact" spy="true" smooth="true" offset={-50} className="cursor-pointer w-full p-1  text-center border-neutral-700 border-b-2 " duration={500} onClick={()=>{setMenu(false)}}>Contact</Link>
       
    </div>
    </>
  
  )
}

export default MobileMenu
