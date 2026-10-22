import { useState } from "react";
import { Outlet } from 'react-router-dom';
const Auth = () => {
  return (
    <main className="w-full h-full flex justify-center items-center flex-col gap-6">
      
        <Outlet/>
    </main>
  );
};

export default Auth;
