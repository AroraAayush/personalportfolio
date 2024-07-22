import React from 'react'
import { SiFlutter } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { delay, motion } from 'framer-motion';
import { useTheme } from '../../context/themeContext';

function Technologies() {
    const bubblyAnimation=(duration)=>({
        initial:{opacity:1,y:10},
        animate:{opacity:1 , y:[-10,10],transition:{duration:duration, repeat:Infinity, repeatType:"reverse",ease:"linear"}}
    })
    const {themeMode}=useTheme();
  return (
    <div className='md:px-16 sm:px-12 px-8 lg:mt-24 md:mt-20 mt-16 w-full '>
        <div className='flex flex-col justify-center items-center'>
        <h3 className={`font-Inter mx-auto text-center ${themeMode=="dark"? "border-neutral-400 font-thin ":"border-neutral-800"}  md:text-3xl sm:text-2xl text-xl pb-2 border-b-2 mb-6 `}>Technologies</h3>
        <motion.div initial={{opacity:0 ,x:-100}} whileInView={{opacity:1 ,x:0}} transition={{duration:0.5}} className=' w-full md:w-3/4 flex  flex-wrap  justify-center items-center'>
            <motion.div variants={bubblyAnimation(1.5)} initial="initial" animate="animate" className='p-3 rounded-xl border-2 border-neutral-600 md:m-2 ml-2'>
                <SiFlutter className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={bubblyAnimation(2)} initial="initial" animate="animate" className='p-3 rounded-xl border-2 border-neutral-600 md:m-2 ml-2'>
                <FaReact className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-cyan-300'/>
            </motion.div>
            <motion.div variants={bubblyAnimation(1.5)} initial="initial" animate="animate" className='p-3 rounded-xl border-2 border-neutral-600 md:m-2 ml-2'>
                <IoLogoJavascript className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-yellow-500'/>
            </motion.div>
            <motion.div variants={bubblyAnimation(2.5)} initial="initial" animate="animate" className='p-3 rounded-xl border-2 border-neutral-600 md:m-2 ml-2'>
                <IoLogoFirebase className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-orange-600'/>
            </motion.div>
            <motion.div variants={bubblyAnimation(2)} initial="initial" animate="animate" className='p-3 rounded-xl border-2 border-neutral-600 m-2'>
                <SiMongodb className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-red-600'/>
            </motion.div>
        </motion.div>
        </div>
    </div>
  )
}

export default Technologies
