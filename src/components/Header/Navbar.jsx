import React from 'react'
import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import Switch from './Switch'

function Navbar() {
  return (
    <div className='  px-4 sm:px-8 md:px-10  mt-8 mb-16'>
        <div className='flex flex-row justify-between items-center'>
                <Logo/>
                <DesktopMenu/>
                <MobileMenu/>
                
                
            
        </div>
      
    </div>
  )
}

export default Navbar
