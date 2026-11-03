import Header from "./components/Header"
import { useState } from "react";

function App() {
    const [theme, setTheme] = useState(()=>{
        try{
        return JSON.parse(localStorage.getItem('theme'));
        } catch{
          return window.matchMedia('(preferred-colour-scheme: dark)').matches ? 'dark' : 'light'
        }
      })
    return(
        <section className="w-full h-full dark:bg-black dark:text-white">
        <Header theme={theme} setTheme={setTheme}/>
        </section>
    )
}

export default App
