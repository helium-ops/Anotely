import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthProvider";

const SubjectContext = createContext(null);

const SubjectProvider = ({ children }) => {
  const { currentUser, setCurrentUser, users, setUsers } = useAuth();
      const [subjects, setSubjects] = useState(currentUser === null ? [] : currentUser.subjects);

  function makeSubject() {
    if (!currentUser) {
      return;
    }
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
    
    const updatedSubjects = subjects.filter((subject) => subject.id !== id);
    const updatedUser = { ...currentUser, subjects: updatedSubjects };
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? updatedUser : user,
    );
    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  function changeSubjectName(id, name){
    const targettedSubject = subjects.find((subject)=>subject.id === id);
    const updatedSubject = {
      ...targettedSubject,
      name: name
    };
    const updatedSubjects = subjects.map((subject)=>subject.id === id ? updatedSubject : subject);
    const updatedUser = {
      ...currentUser,
      subjects: updatedSubjects
    };
    const updatedUsers = users.map((user)=>user.id === currentUser.id ? updatedUser : user);
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  function addTopic(id){
    const subject = subjects.find((subject)=>subject.id === id);
    if(!subject)return;
    const newTopic = {
      name: 'Untitled',
      id: crypto.randomUUID(),
      notes: []
    }
     const updatedSubject = {
      ...subject,
      topics: [...(subject.topics || []), newTopic]
    }
    const updatedSubjects = subjects.map((targettedSubject)=> targettedSubject.id === id ? updatedSubject : targettedSubject);
    const updatedUser = {...currentUser, subjects: updatedSubjects};
    const updatedUsers = users.map((user)=>user.id === currentUser.id ? updatedUser : user);
    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert(newTopic.name)
  }

  return (
    <SubjectContext.Provider value={{ makeSubject, deleteSubject, changeSubjectName, addTopic }}>
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectProvider;

export function useSubject() {
  return useContext(SubjectContext);
}
