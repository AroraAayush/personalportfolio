import React from 'react'
import {Link} from 'react-scroll'
import { motion } from 'framer-motion'
function DesktopMenu() {
  const hoverAnimation=()=>({
    initial:{scale:1,y:0},
    animate:{scale:1.2,transition:{duration:0.2}}
  })
  return (
    <div className='hidden sm:visible sm:flex flex-row gap-10 justify-between items-center font-thin text-lg pb-3 '>
       <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate" > <Link activeClass="active" to="hero" spy="true" smooth="true" offset={-80} className={`cursor-pointer  `} duration={500} >Home</Link></motion.div>
       <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate" ><Link activeClass="active" to="experience" spy="true" smooth="true" offset={-30} className="cursor-pointer" duration={500} >Experience </Link></motion.div>
       <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate" ><Link activeClass="active" to="projects" spy="true" smooth="true" offset={-50} className="cursor-pointer" duration={500}>Projects</Link></motion.div>
       <motion.div variants={hoverAnimation()} initial="initial" whileHover="animate" ><Link activeClass="active" to="contact" spy="true" smooth="true" offset={-50} className="cursor-pointer" duration={500}>Contact</Link></motion.div>
       
    </div>
  )
}

export default DesktopMenu
