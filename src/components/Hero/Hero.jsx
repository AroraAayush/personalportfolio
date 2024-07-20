import React from 'react'
import { HERO } from './hero'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
function Hero() {
  const incomingMotion=(delay)=>({
    initial:{opacity:0,x:-100},
    animate:{opacity:1,x:0,transition:{
      delay:delay,
      duration:0.7
    }},
    
  })
  return (
    <div id="hero">
    <div className='md:px-16 sm:px-12 px-8 mt-20 md:mt-8'>
      <div className='w-full max-w-xl pl-4'>
    <motion.h2 variants={incomingMotion(0.5)} initial="initial" animate="animate" className='font-Inter text-3xl sm:text-4xl md:text-6xl font-thin pb-3 tracking-tight'>{HERO.name}</motion.h2>
    <motion.div variants={incomingMotion(1)} initial="initial" animate="animate" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-md sm:text-xl md:text-3xl text-transparent bg-clip-text tracking-tight md:mb-6 sm:mb-4 mb-3 font-Inter  '>{HERO.role}</motion.div>
    <motion.p variants={incomingMotion(1.5)} initial="initial" animate="animate" className='font-handwritten  md:text-lg text-sm tracking-wider'> <TypeAnimation sequence={
      [HERO.desc]
    } wrapper='span' repeat={1} speed={50}/> </motion.p>
      </div>
    </div>
    </div>
  )
}

export default Hero
