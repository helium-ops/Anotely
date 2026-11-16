import React, { createContext, useContext } from "react";
import { useAuth } from "./AuthProvider";

const SubjectContext = createContext(null);

const SubjectProvider = ({ children }) => {
  const { currentUser, setCurrentUser, users, setUsers } = useAuth();

  function makeSubject() {
    if (!currentUser) {
      return;
    }
    const subjects = currentUser.subjects;
    const newSubject = {
      id: crypto.randomUUID(),
      name: "Untitled",
      topics: [],
    };
    const updatedSubjects = [...subjects, newSubject];
    const updatedUser = { ...currentUser, subjects: updatedSubjects };
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? updatedUser : user,
    );
    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
  function deleteSubject(id) {
    const subjects = currentUser.subjects;
    const updatedSubjects = subjects.filter((subject) => subject.id !== id);
    const updatedUser = { ...currentUser, subjects: updatedSubjects };
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? updatedUser : user,
    );
    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  return (
    <SubjectContext.Provider value={{ makeSubject, deleteSubject }}>
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectProvider;

export function useSubject() {
  return useContext(SubjectContext);
}
