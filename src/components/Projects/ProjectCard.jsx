import React from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
function ProjectCard({project}) {
  const InOutAnimation=()=>({
    initial1:{opacity:0,x:-100},
    initial2:{opacity:0,x:100},
    inanimation:{opacity:1,x:0,transition:{duration:1}},
    
  })
  return (
    <div className=' lg:w-4/5 lg:ml-16 mb-4'>
<div className=' bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-4xl shadow-md'>
        <div className=' flex flex-wrap md:flex-row flex-col items-center   justify-start lg:px-10 md:py-6 px-6 py-4'>
       <motion.div variants={InOutAnimation()} initial="initial1" whileInView="inanimation" className='md:w-1/3 w-full  mb-3'>
       <div className='flex lg:justify-center md:justify-start'>
       <img className='w-32 rounded-lg' src={project.image} alt="" />
       </div>
       </motion.div>
       <motion.div variants={InOutAnimation()} initial="initial2" whileInView="inanimation" className='md:w-2/3 w-full'>
       <h2 className='font-semibold tracking-tight font-font5 text-xl mb-1'>{project.title}</h2>
       <p className=' font-Inter font-thin  text-md mb-4'>{project.desc}</p>
       <img className=' w-32  rounded-md mb-3' src={project.techs} alt="" />
       <div className='flex flex-row '>
        <button className='p-2 bg-purple-950 mr-1  rounded-4xl shadow-md flex flex-row gap-x-1 items-center rounded-xl border-2 border-neutral-800'>
             <FaGithub className=' w-6 h-5'/> 
             <span className='text-sm font-Inter ml-1'>Source Code</span>
        </button>
        <button className='p-2 bg-emerald-900 rounded-4xl shadow-md flex flex-row  items-center rounded-xl border-2 border-neutral-800'> 
             <span className='text-sm font-Inter mr-2 '>Live Demo </span>
             <FaExternalLinkAlt className=' w-3 h-3 text-sm text-neutral-400'/>
        </button>
       </div>
       </motion.div>
    </div>
    </div>
    </div>

  )
}

export default ProjectCard
