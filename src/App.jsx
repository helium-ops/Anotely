import React, { useContext } from "react";
import Header from "./components/Header";
import LightProvider, { LightContext } from "./context/LightToggle";
import Auth from "./pages/Auth";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <LightProvider>
      <AuthProvider>
        <Toaster position="top-right" />

        <main
          className={`flex justify-start items-center h-full flex-col dark:bg-black dark:text-white`}
        >
          <Header />
          <Auth />
        </main>
      </AuthProvider>
    </LightProvider>
  );
};

export default App;
