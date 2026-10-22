import React, { useContext } from "react";
import Header from "./components/Header";
import LightProvider from "./context/LightToggle";
import Auth from "./pages/Auth";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthControls from "./components/AuthControls";
import ResetPassword from "./components/ResetPassword";

const AppContent = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Toaster position="top-right" />
      <main className="flex justify-start items-center h-full flex-col dark:bg-black dark:text-white">
        <Header user={user} />
        <Routes>
        {
          user === null ? <Route path='/' element={<Auth/>}>
            <Route index element={<AuthControls/>}/>
            <Route path="changePassword" element={<ResetPassword/>}/>
          </Route> : <Route path='/' element={<Home/>}></Route>
        }
        </Routes>
      </main>
   </>
  )
};

const App = () => (
  <BrowserRouter>
    <LightProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LightProvider>
  </BrowserRouter>
);

export default App;
