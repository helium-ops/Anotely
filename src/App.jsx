import React, { useContext, useState } from "react";
import Header from "./components/Header";
import LightProvider, { LightContext } from "./context/LightToggle";
import Auth from "./pages/Auth";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.stringify(localStorage.getItem('user')) : null)
  return (
    <BrowserRouter>
    <LightProvider>
      <AuthProvider>
        <Toaster position="top-right" />

        <main
          className={`flex justify-start items-center h-full flex-col dark:bg-black dark:text-white`}
        >
          <Header />
          { user === null ?
          <Auth /> : 
          <Home/>
}
        </main>
      </AuthProvider>
    </LightProvider>
    </BrowserRouter>
  );
};

export default App;
