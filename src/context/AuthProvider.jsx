import React, { createContext, useContext, useState } from "react";
import toaster from "react-hot-toast";

const AuthContext = createContext(null);

function getStoredUsers() {
  const storedUsers = localStorage.getItem("users");
  if (!storedUsers) {
    return [];
  }

  try {
    const users = JSON.parse(storedUsers);
    if (Array.isArray(users)) {
      return users;
    }

    if (typeof users === "string") {
      const recoveredUsers = JSON.parse(users);
      if (Array.isArray(recoveredUsers)) {
        return recoveredUsers;
      }
    }

    console.error("Stored users must be an array.");
  } catch (error) {
    console.error("Could not parse stored users.", error);
  }

  return [];
}

function getStoredUser() {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) {
    return null;
  }

  try {
    const user = JSON.parse(storedUser);
    if (user === null || (typeof user === "object" && !Array.isArray(user))) {
      return user;
    }

    console.error("Stored user must be an object or null.");
  } catch (error) {
    console.error("Could not parse stored user.", error);
  }

  return null;
}

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(getStoredUsers);
  const [currentUser, setCurrentUser] = useState(getStoredUser);

  function signUp(email, password) {
    const user = {
      email,
      password,
      focusSessions: [],
      subjects: [],
      quizzes: [],
    };
    const newUsers = [...users, user];

    setCurrentUser(user);
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
    localStorage.setItem("user", JSON.stringify(user));
    toaster.success(`Hello, ${user.email}`);
  }

  function login(email, password) {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      toaster.error("Wrong Username or Password!");
      return false;
    }

    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    toaster.success(`Hello, ${user.email}`);
    return true;
  }

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider value={{ signUp, login, logout, currentUser, setCurrentUser, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth(){
  return useContext(AuthContext);
}
