import Header from "./components/Header"
import { Toaster } from 'react-hot-toast'
import { useState } from "react";
import AuthProvider, { useAuth } from "./context/AuthProvider";
import AuthControls from "./components/AuthControls";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import ResetPassword from "./components/ResetPassword";
import Home from "./pages/Home";
import SubjectProvider from "./context/SubjectProvider";

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
      const { currentUser } = useAuth();
    return(
        <section className="w-full h-full dark:bg-black dark:text-white fixed">
          <Toaster position="top-right"/>
        <Header theme={theme} setTheme={setTheme}/>
        
        <section className="h-full w-screen">
          <Routes>
          { currentUser === null ? <Route path="/" element={<Auth/>}>
          <Route index element={<AuthControls/>}/>
          <Route path='reset-password' element={<ResetPassword/>}/>
            </Route> : <Route path='/' element={<Home/>}/>}
          </Routes>
        </section>
        </section>
    )
}

function App() {
   return(
    <BrowserRouter>
    <AuthProvider>
      <SubjectProvider>
    <Container/>
    </SubjectProvider>
    </AuthProvider>
    </BrowserRouter>
   )
}

export default App
