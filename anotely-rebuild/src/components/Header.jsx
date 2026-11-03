import React, { useEffect, useState } from 'react'
import darkMode  from "../assets/Dark_mode.png"
import lightMode from "../assets/Light_mode.png"
import Theme from './Theme'

const Header = ({theme, setTheme}) => {
  
  useEffect(()=>{
    setTheme(()=>{
    try{
    return JSON.parse(localStorage.getItem('theme'));
    } catch{
      return window.matchMedia('(preferred-colour-scheme: dark)').matches ? 'dark' : 'light'
    }})
  },[theme, setTheme])
  return (
    <header className='flex justify-between items-center w-full h-17 sm:h-18 md:h-21 lg:h-23 border-b border-gray-200'>
        <div>
     <img src={theme === 'dark' ? lightMode : darkMode} alt="Logo" className='h-15 sm:h-16 md:h-17 lg:h-18 xl:h-20'/>
     </div>
      <section className='flex justify-center items-center gap-1 mr-9'>
        <Theme theme={theme} setTheme={setTheme}/>
      </section>
    </header>
  )
}

export default Header
