import React, { createContext, useState } from "react";
import toast  from "react-hot-toast";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [],
  );

   const [user, setUser] = useState(()=>{
      try{
      return JSON.stringify(localStorage.getItem('user'));
      }
      catch(error){
        return null;
      }
    })

    const [loggedIn, setLoggedIn] = useState(()=>{
      return localStorage.getItem('user') ? true : false;
    })

  function signUp(email, password) {
    const user = {
      email,
      password,
      focusSessions: [],
      subjects: [],
      quizzes: [],
    };
    const newUsers = [...users, user];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    localStorage.setItem("user", JSON.stringify(user));
    
    toaster.success(`Hello, ${user.email} `);
    setLoggedIn(true);
  }

  function login(email, password) {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      toaster.error("No accounts yet!");
      return;
    }

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    toast("Refresh the page!")
  }

  function logout(){
    setUser(null);
    localStorage.removeItem('user');
  }


  return (
    <AuthContext.Provider value={{ signUp, login, logout, loggedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export { AuthContext };
