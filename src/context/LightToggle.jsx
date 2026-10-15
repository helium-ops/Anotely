import React, { useState, createContext, useEffect } from "react";

export const LightContext = createContext(null);

const LightProvider = ({ children }) => {
  const [darkToggle, setDarkToggle] = useState(
    JSON.parse(localStorage.getItem("theme") ?? false),
  );

  function addDarkMode() {
    setDarkToggle((prev) => !prev);
  }

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkToggle));
    document.documentElement.classList.add("dark", darkToggle);
  }, [darkToggle]);

  return (
    <LightContext.Provider value={{ addDarkMode, darkToggle }}>
      {children}
    </LightContext.Provider>
  );
};

export default LightProvider;
