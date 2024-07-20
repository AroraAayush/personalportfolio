import React from 'react'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
function Footer() {
  const hoverAnimation=()=>({
    initial:{scale:1,y:0},
    animate:{scale:1.2,transition:{duration:0.2}}
  })
  
  return (
    <div className=''>
        <div className=' visible  mt-14 md:mt-9 mb-9 flex flex-row  justify-center items-center font-thin'>
        <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate"><Link activeClass="active" to="hero" spy="true" smooth="true" offset={-80} className={`cursor-pointer mr-2 md:m-2 `} duration={500} >Home</Link></motion.div>
            <span className='font-normal mr-2 md:m-2'>| |</span>
            <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate"><Link activeClass="active" to="experience" spy="true" smooth="true" offset={-30} className="cursor-pointer mr-2 md:m-2" duration={500} >Experience </Link></motion.div>
            <span className='font-normal mr-2 md:m-2'>| |</span>
            <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate"><Link activeClass="active" to="projects" spy="true" smooth="true" offset={-50} className="cursor-pointer mr-2 md:m-2" duration={500}>Projects</Link></motion.div>
            <span className='font-normal mr-2 md:m-2'>| |</span>
                <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate"><Link activeClass="active" to="contact" spy="true" smooth="true" offset={-100} className="cursor-pointer mr-2 md:m-2" duration={500}>Contact</Link></motion.div>
       

        </div>
      <div className=' w-full text-center font-thin md:mb-6 mb-8  md:text-md text-sm'>Made by Aayush &#169; Copyright 2024	</div>
    </div>
  )
}

export default Footer
