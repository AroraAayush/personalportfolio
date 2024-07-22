import React from 'react'
import logodarkmode from '../../assets/logodarkmode.png'
import { useTheme } from '../../context/themeContext'
import logolightmode from '../../assets/logolightmode.png'
function Logo() {
  const {themeMode}=useTheme();
  return (
    <div className=''>
      <img  className="w-20 h-20 " src={(themeMode=="dark")?logodarkmode:logolightmode} alt="" />
    </div>
  )
}

export default Logo
