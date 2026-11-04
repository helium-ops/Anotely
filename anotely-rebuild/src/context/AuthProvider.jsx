import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [users, setUsers] = useState(()=>{
    try{
      return JSON.parse(localStorage.getItem('users'));
    } catch{
      const users = [];
      return users;
    }
  })
  function signUp(email, password){
    if(users.length === 0){
      toast.error("No users yet!")
      return;
    }
  }
  return (
    <AuthContext.Provider value={{users, setUsers}}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
