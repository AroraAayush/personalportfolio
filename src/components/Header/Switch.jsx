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

    </div>
  )
}

export default Switch
