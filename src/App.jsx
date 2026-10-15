import React, { useContext } from "react";
import Header from "./components/Header";
import LightProvider, { LightContext } from "./context/LightToggle";





const App = () => {
  return (
    <LightProvider>
      <main className={`flex justify-start items-center h-full flex-col dark:bg-black`}>
        <Header />
      </main>
    </LightProvider>
  );
};

export default App;
