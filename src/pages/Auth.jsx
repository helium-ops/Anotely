import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-6">
      <Outlet />
    </div>
  );
};

export default Auth;
