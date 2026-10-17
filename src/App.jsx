import React, { useContext } from "react";
import Header from "./components/Header";
import LightProvider, { LightContext } from "./context/LightToggle";
import Auth from "./pages/Auth";





const App = () => {
  return (
    <LightProvider>
      <main className={`flex justify-start items-center h-full flex-col dark:bg-black dark:text-white`}>
        <Header />
        <Auth/>
      </main>
    </LightProvider>
  );
};

export default App;
