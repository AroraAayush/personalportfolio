import React from 'react'
import ProjectCard from './ProjectCard'
import { PROJECTS } from './project'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/themeContext'
function Projects() {
  const InOutAnimation=()=>({
    initial1:{opacity:0,x:-100},
    initial2:{opacity:0,x:100},
    inanimation:{opacity:1,x:0,transition:{duration:1}},
    
  })
  const {themeMode}=useTheme();
  return (
    <div id='projects' className='md:px-16 sm:px-12 px-8 lg:mt-20 md:mt-16 mt-12'>
      <div className='flex flex-col justify-center items-center'>
        <motion.h3 variants={InOutAnimation()} initial="initial1" whileInView="inanimation" className={`font-Inter mx-auto text-center ${themeMode=="dark" ?"font-thin border-neutral-400":"border-neutral-800"}  md:text-3xl sm:text-2xl text-xl pb-2 border-b-2 mb-6`}>Projects</motion.h3>
        
          
          <div>
            {PROJECTS.map((project,index)=>
            <ProjectCard key={index} project={project}/>)}
          </div>
        
       
        
        </div>
    </div>
  )
}

export default Projects
