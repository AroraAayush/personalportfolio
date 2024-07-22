import React from 'react'
import { motion } from 'framer-motion'
import {FaExternalLinkAlt} from 'react-icons/fa'
import { useTheme } from '../../context/themeContext'
function ExperienceCard({experience}) {
  const InOutAnimation=()=>({
    initial1:{opacity:0,x:-100},
    initial2:{opacity:0,x:100},
    inanimation:{opacity:1,x:0,transition:{duration:1}},
    
  })
  const {themeMode}=useTheme();
  return (
    

<div className='lg:w-4/5 md:w-full rounded-4xl shadow-md  lg:ml-16 mb-4'>
<div className= {`${themeMode=="dark"? 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' : ' bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'}`}>
        <div className='flex md:flex-row flex-col-reverse  md:justify-center justify-start lg:px-10 md:py-6 px-6 py-4'>
       <motion.div variants={InOutAnimation()} initial="initial1" whileInView="inanimation" className='lg:w-1/3 md:w-1/3  w-full '>
       
       <h5 className={`${themeMode=="dark" ? "font-thin " :""} text-md lg:text-xl `}>{experience.tenure}</h5>
       <h6 className={`${themeMode=="dark" ?"font-thin text-neutral-300" : "text-neutral-600"} text-sm `}>{experience.location}</h6>
       </motion.div>
       <motion.div variants={InOutAnimation()} initial="initial2" whileInView="inanimation" className='lg:w-2/3 md:w-2/3  w-full md:pl-8 '> 
        <div className='flex justify-start items-center'>
          <div className=''>
          <img className='rounded-full sm:w-10 w-7 mr-4 object-fill' src={experience.image} alt="CIS Logo" />
          </div>
          <div className=''>
            <div className='flex flex-nowrap w-full items-baseline'>
          <span className='font-semibold lg:text-lg md:text-md text-sm mr-2   '>{experience.company}       </span>
               <a className='' href={experience.website} target='_blank'> <FaExternalLinkAlt className=' font-thin w-6 h-4 mt-2 text-neutral-500'/> </a> 
            
          </div>
          <span className={`${themeMode=="dark" ? "font-thin" :""} text-sm`}>{experience.role}</span>

          </div>
        </div>
         <p  className={`mt-3 ${themeMode=="dark" ? "font-thin" :""} text-md mb-3`}>
          {experience.desc}
         </p>
         <img className='md:w-36 w-32  rounded-md mb-3' src={experience.techs} alt="" />
       </motion.div>
    </div>
    </div>
    </div>
    

  )
}

export default ExperienceCard
