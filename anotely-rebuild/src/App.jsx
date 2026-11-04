import Header from "./components/Header"
import { Toaster } from 'react-hot-toast'
import { useState } from "react";
import AuthProvider from "./context/AuthProvider";
import AuthControls from "./components/AuthControls";

function Container(){
    const [theme, setTheme] = useState(()=>{
        try{
          const savedTheme = JSON.parse(localStorage.getItem('theme'));
          if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
        return savedTheme;

        } catch{
          return window.matchMedia('(prefers-colour-scheme: dark)').matches ? 'dark' : 'light'
        }
      })
    return(
        <section className="w-full h-full dark:bg-black dark:text-white">
          <Toaster position="top-right"/>
        <Header theme={theme} setTheme={setTheme}/>
        
        <section className="h-full w-screen">
          <AuthControls/>
        </section>
        </section>
    )
}

function App() {
   return(
    <AuthProvider>
    <Container/>
    </AuthProvider>
   )
}

export default App
