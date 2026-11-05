import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    try{
      const findUsers = JSON.parse(localStorage.getItem('users'));
      return findUsers || [];
    } catch{
      const findUsers = [];
        return findUsers;
    }
  });


  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("users")).find(
        (user) => user.email === localStorage.getItem("user"),
      );
    } catch {
      return null;
    }
  });
  function signUp(email, password) {
    if (users) {
      if (
        users.find((user) => user.email === email)
      ) {
        toast.error("User already exists!");
        return;
      }
    }
    const newUser = {
      email,
      password,
      subjects: [],
      quizzes: [],
      focusSessions: [],
    };
    
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("user", JSON.stringify(newUser.email));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
   
  }
  return (
    <AuthContext.Provider value={{ users, setUsers, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
