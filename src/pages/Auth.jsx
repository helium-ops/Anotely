import { useState } from "react";
import AuthControls from "../components/AuthControls";
import ResetPassword from "../components/ResetPassword";
import { Route, Routes } from 'react-router-dom';
const Auth = () => {
  const [changePasswordOrAuth, setChangePasswordOrAuth] = useState('login');
  return (
    <main className="w-full h-full flex justify-center items-center flex-col gap-6">
      <Routes>
        <Route path="/" element={<AuthControls/>}/>
      <Route path="/changePassword" element={<ResetPassword/>}/>
      </Routes>
    </main>
  );
};

export default Auth;
