import React, { createContext } from "react";
import { useAuth } from "./AuthProvider";

export const SubjectContext = createContext(null);
const SubjectProvider = ({ children }) => {
  const { currentUser, setCurrentUser, users, setUsers } = useAuth();
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
    const updatedUsers = users.map((user) =>
      user.email === updatedUser.email ? updatedUser : user,
    );
    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("user", updatedUser.email);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  function editSubjectName(id, name) {
    const updatedUser = {
      ...currentUser,
      subjects: currentUser.subjects.map((subject) =>
        subject.id === id ? { ...subject, name } : subject,
      ),
    };
    const updatedUsers = users.map((user) =>
      user.email === updatedUser.email ? updatedUser : user,
    );
    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("user", updatedUser.email);
  }

  function deleteSubject(id) {
    if (!users || !currentUser) {
      return;
    }

    const updatedUser = {
      ...currentUser,
      subjects: currentUser.subjects.filter((subject) => subject.id !== id),
    };
    const updatedUsers = users.map((user) =>
      user.email === updatedUser.email ? updatedUser : user,
    );

    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("user", updatedUser.email);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  return (
    <SubjectContext.Provider
      value={{ makeSubject, editSubjectName, deleteSubject }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectProvider;
