import React, { useState, useEffect } from 'react'
import { Moon, Sun } from "lucide-react";


const Theme = ({theme, setTheme}) => { 
  useEffect(() => {
  document.documentElement.classList.toggle(
    'dark',
    theme === 'dark'
  );
}, [theme]);
  function changeTheme(){
    const newTheme = JSON.parse(localStorage.getItem('theme')) === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', JSON.stringify(newTheme));
  }
  return (
    <button onClick={changeTheme} className="h-10 w-10 btn flex justify-center items-center rounded-full scale-120"><span className='text-white'>{theme === 'dark' ? (<Moon size={22}/>) : (<Sun size={22}/>)}</span></button>
  )
}

export default Theme
