import React, { useEffect, useState } from 'react'
import darkMode  from "../assets/Dark_mode.png"
import lightMode from "../assets/Light_mode.png"
import Theme from './Theme'
import { useAuth } from '../context/AuthProvider'
import { Menu } from 'lucide-react'

const Header = ({theme, setTheme, isNavOpen, setIsNavOpen}) => {
  const { logout, currentUser } = useAuth();
  useEffect(()=>{
    setTheme(()=>{
    try{
    return JSON.parse(localStorage.getItem('theme'));
    } catch{
      return window.matchMedia('(preferred-colour-scheme: dark)').matches ? 'dark' : 'light'
    }})
  },[theme, setTheme])
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaChange = (event) => {
      if (event.matches) {
        setIsNavOpen(false);
      }
    };

    if (mediaQuery.matches) {
      setIsNavOpen(false);
    }

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, [setIsNavOpen]);
  return (
    <header className='flex justify-between items-center w-full h-17 sm:h-18 md:h-21 lg:h-23 border-b border-gray-200 dark:border-gray-700'>
        <div>
     <img src={theme === 'dark' ? lightMode : darkMode} alt="Logo" className='h-15 sm:h-16 md:h-17 lg:h-18 xl:h-19'/>
     </div>
      <section className='flex justify-center items-center gap-3 mr-4 sm:mr-5 md:mr-6 lg:mr-8 scale-80 sm:scale-90 md:scale-100'>
        { currentUser != null && <button className='h-10 btn w-24 font-semibold rounded-sm' onClick={()=>{logout()}}>Logout</button>}
                <Theme theme={theme} setTheme={setTheme}/>
        <button aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isNavOpen} className='h-10 w-10 btn flex justify-center items-center rounded-full scale-120 md:hidden ml-1'
        onClick={() => setIsNavOpen((open) => !open)}>
          <Menu/>
        </button>
      </section>
    </header>
  )
}

export default Header
