import React, { useEffect } from 'react'
import { useTheme } from '../../context/themeContext'
import '../Header/Switch.css'
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";


function Switch() {
    const {themeMode,setLightMode,setDarkMode}=useTheme();
    const toggleButton=(e)=>{
        console.log(themeMode);
        // console.log(e.currentTarget.checked)
        const darkModeStatus=(themeMode=="light");
        if(darkModeStatus)
        {
            setDarkMode();
        }
        else
        {
            setLightMode();
        }


    }


    

  return (
    <div>
      <div className={`rounded-full w-10 h-10 flex justify-center items-center ${themeMode=="dark"?"bg-slate-700 border-neutral-500 text-white ":"bg-red-100/40  text-black"} text-clip border-2  shadow-lg`} onClick={toggleButton}>{themeMode=="dark"? <FaMoon />:<GoSun/> } </div>
{/* <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" onChange={toggleButton} checked={themeMode=="dark"}  className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  
</label> */}
 
{/* 
 <label>
  <input type="checkbox" checked={themeMode=="dark"} onChange={toggleButton}/>
  <span className='moon'><FaMoon/></span>
  <span className='sun'><GoSun/></span>

  <span className="toggle" ></span>
 </label> */}
    </div>
  )
}

export default Switch
