import React, { createContext } from "react";
import { useAuth } from "./AuthProvider";

export const SubjectContext = createContext(null);
const SubjectProvider = ({ children }) => {
  const { currentUser, setCurrentUser, users } = useAuth();
  function makeSubject() {
    const updatedUser = {
      ...currentUser,
      subjects: [
        ...currentUser.subjects,
        {
          id: Date.now(),
          name: "Untitled",
          topics: [],
        },
      ],
    };
    setCurrentUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(updatedUser));
  }

  function editSubjectName(id, name) {
    const page = currentUser.subjects.find((page) => page.id === id);
    page.name = name;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(currentUser));
  }

  function deleteSubject(id) {
    setCurrentUser({
      ...currentUser,
      pages: currentUser.pages.filter((page) => page.id != id),
    });
  }

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("user", JSON.stringify(currentUser));
  return (
    <SubjectContext.Provider
      value={{ makeSubject, editSubjectName, deleteSubject }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectProvider;
