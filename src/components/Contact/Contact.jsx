import React from 'react'
import { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { HERO } from '../Hero/hero';
import { config } from '../../conf/config';
import { useRef } from 'react';
import { delay, motion } from 'framer-motion';
import { useTheme } from '../../context/themeContext';

const hoverAnimation=()=>({
  initial:{scale:1,y:0},
  animate:{scale:1.3,transition:{duration:0.2}}
})

const incominganimation=(delay)=>({
  initial:{opacity:0,x:100},
  animate:{opacity:1,x:0,transition:{duration:0.5,delay:delay}}
})

const clickanimation=()=>({
  initial:{scale:1,y:0},
  animate:{scale:2,transition:{duration:2}}

})
function Contact() {
  const formRef=useRef();
    const [info,setInfo]=useState({});
    const submitForm=(e)=>{
      e.preventDefault();
      setInfo({name:"" ,email:"",message:""})
          formRef.target.reset();
      emailjs
      .sendForm(config.serivceid, config.templateid, formRef.current, config.publickey)
      .then(
        (result) => {
          console.log('SUCCESS!',result);
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
    }
    const {themeMode}=useTheme();
  return (
    <div id="contact" className='md:px-16 sm:px-12 px-8  lg:mt-20 md:mt-16 mt-12 w-full '>
      <div className='flex flex-col justify-center items-center'>
      <motion.h3 variants={incominganimation(0.3)} initial="initial" whileInView="animate" className={`font-Inter mx-auto text-center ${themeMode=="dark"?"font-thin border-neutral-400":"border-neutral-800"}  md:text-3xl sm:text-2xl text-xl pb-2 border-b-2 mb-6  `}>Contact Me!</motion.h3>
      <div className='flex md:flex-row flex-col-reverse  justify-center items-center'>
        <div className=' w-1/3 flex flex-col gap-y-6 justify-center items-center border-none'>
            <motion.img variants={clickanimation()} initial="initial" whileTap="animate" className='rounded-full overflow-hidden lg:w-1/2 sm:w-36 mb-6 border-none'src={HERO.image} alt="" />
            <div className='flex flex-row justify-center'>
              <motion.a variants={hoverAnimation()} initial="initial" whileHover="animate" href={HERO.linkedin} target='_blank'><FaLinkedin className='text-2xl mr-3 md:m-2'/></motion.a>
              <motion.a variants={hoverAnimation()} initial="initial" whileHover="animate" href={HERO.github} target='_blank'> <FaGithub className='text-2xl mr-3 md:m-2'/> </motion.a>
              <motion.a variants={hoverAnimation()} initial="initial" whileHover="animate" href={HERO.twitter} target='_blank'> <FaTwitter className='text-2xl mr-3 md:m-2'/> </motion.a>
              <motion.a variants={hoverAnimation()} initial="initial" whileHover="animate" href={HERO.instagram} target='_blank'> <FaInstagram className='text-2xl mr-3 md:m-2'/> </motion.a>
            </div>
        </div>
        <div className='sm:w-2/3 w-full'>
            <form ref={formRef} onSubmit={submitForm} >
                <div className='flex flex-wrap justify-start  '>
                <motion.input variants={incominganimation(0.5)} initial="initial" whileInView="animate" name='from_name' className={`md:mr-3 my-2 ${themeMode=="dark"? 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-neutral-800' : ' bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-neutral-200'} rounded-md   border-2 lg:w-1/3 md:w-3/4 text-normal tracking-tight  w-full py-2 px-4 `} type="text" placeholder='Enter your name..'   value={info["name"]} onChange={(e)=>setInfo({...info,name:e.target.value})} />
                <motion.input  variants={incominganimation(0.5)} initial="initial" whileInView="animate" name='from_email'  className={`md:mr-3 my-2 ${themeMode=="dark"? 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-neutral-800' : ' bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-neutral-200'} rounded-md   border-2 lg:w-1/3 md:w-3/4 text-normal tracking-tight  w-full py-2 px-4 `}  type="email" placeholder='Enter your email..'   value={info["email"]} onChange={(e)=>setInfo({...info,email:e.target.value})} />
                <motion.textarea  variants={incominganimation(0.5)} initial="initial" whileInView="animate" name='message' className={`md:mr-3 my-2 ${themeMode=="dark"? 'bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-neutral-800' : ' bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-neutral-200'} rounded-md   border-2 lg:w-2/3 md:w-3/4 text-normal tracking-tight  w-full py-2 px-4 `} placeholder='Enter your message !'  id="" rows={3} value={info["message"]} onChange={(e)=>setInfo({...info,message:e.target.value})}></motion.textarea>
                
                </div>
                <div className=' w-full  flex justify-start mb-4'>
                  
                <motion.button  variants={incominganimation(0.5)} initial="initial" whileInView="animate" type='submit' className={` mt-3 ${themeMode=="dark"? ' font-thin bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-neutral-800 text-white' : 'text-black bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] border-neutral-200'}  border-2    p-2 rounded-md flex flex-row  items-center `}> 
                  <span className='mr-2'>Send</span>
                  <IoMdSend/>
                </motion.button>
                </div>
            </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
