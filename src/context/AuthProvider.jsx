import React, { createContext, useContext, useState } from "react";
import toaster from "react-hot-toast";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [],
  );

  const [currentUser, setCurrentUser] = useState(null);
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
  }

  function login(email, password) {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      toaster.error("No accounts yet!");
      return;
    }

    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }


  return (
    <AuthContext.Provider value={{ signUp, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export { AuthContext };
