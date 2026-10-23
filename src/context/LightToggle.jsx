import React, { useState, createContext, useEffect } from "react";

export const LightContext = createContext(null);

const LightProvider = ({ children }) => {
  const [darkToggle, setDarkToggle] = useState(
    JSON.parse(localStorage.getItem("theme") ? localStorage.getItem("theme") : "false")
  );

  

  function addDarkMode() {
    setDarkToggle((prev) => !prev);
    if(darkToggle === false){
      document.documentElement.classList.add("dark");
    } else{
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(darkToggle));
  }

 

  return (
    <LightContext.Provider value={{ addDarkMode, darkToggle }}>
      {children}
    </LightContext.Provider>
  );
};

export default LightProvider;
