import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
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
      const wantedUser = JSON.parse(localStorage.getItem("users")).find(
        (user) => user.email === localStorage.getItem("user"),
      )
      return wantedUser;
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
    toast.success(`Welcome to Anotely, ${newUser.email}`)
    localStorage.setItem("user", JSON.stringify(newUser.email));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate('/');
  }
  function login(email, password){
    if(users.length === 0){
      toast.error('No users yet!');
      return;
    }
    const intendedUser = users.find((user)=> user.email === email || user.password === password);
    if(email != intendedUser.email || intendedUser.password != password){
      toast.error("Wrong email or password!");
      return;
  }
  
  setCurrentUser(intendedUser);
  toast.success(`Welcome back, ${email}`)
  localStorage.setItem('user', JSON.stringify(email));
  navigate('/');
  }

  function logout(){
    localStorage.removeItem('user');
    const emptyUser = null;
    setCurrentUser(emptyUser);
    navigate('/');
  }
  return (
    <AuthContext.Provider value={{ users, setUsers, signUp, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
