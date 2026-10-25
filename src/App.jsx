import React, { useContext, useState } from "react";
import Header from "./components/Header";
import LightProvider from "./context/LightToggle";
import SubjectProvider from "./context/SubjectContext";
import Auth from "./pages/Auth";
import AuthProvider, { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AuthControls from "./components/AuthControls";
import ResetPassword from "./components/ResetPassword";

function Container() {
  const { currentUser } = useAuth();
  return (
    <main
      className={`flex justify-start items-center h-full flex-col dark:bg-black dark:text-white`}
    >
      <Header user={currentUser} />
      <Routes>
        {currentUser === null ? (
          <Route path="/" element={<Auth />}>
            <Route index element={<AuthControls />} />
            <Route path="changePassword" element={<ResetPassword />} />
          </Route>
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}
const App = () => {
  return (
    <BrowserRouter>
      <LightProvider>
        <AuthProvider>
          <SubjectProvider>
          <Toaster position="top-right" />
          <Container />
          </SubjectProvider>
        </AuthProvider>
      </LightProvider>
    </BrowserRouter>
  );
};

export default App;
