import React, { createContext, useContext } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const SubjectContext = createContext(null);

const SubjectProvider = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, users, setUsers } = useAuth();
  const subjects = currentUser?.subjects ?? [];

  function saveSubjects(updatedSubjects) {
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      subjects: updatedSubjects,
    };

    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? updatedUser : user,
    );

    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  function makeSubject() {
    if (!currentUser) return;

    const newSubject = {
      id: crypto.randomUUID(),
      name: "Untitled",
      topics: [],
    };

    saveSubjects([...subjects, newSubject]);
  }

  function deleteSubject(id) {
    if (!currentUser) return;

    saveSubjects(subjects.filter((subject) => subject.id !== id));
  }

  function changeSubjectName(id, name) {
    if (!currentUser) return;

    const updatedSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, name } : subject,
    );

    saveSubjects(updatedSubjects);
  }

  function addTopic(id) {
    if (!currentUser) return;

    const updatedSubjects = subjects.map((subject) => {
      if (subject.id !== id) return subject;

      const newTopic = {
        id: crypto.randomUUID(),
        name: "Untitled",
        notes: [],
      };

      return {
        ...subject,
        topics: [...(subject.topics ?? []), newTopic],
      };
    });

    saveSubjects(updatedSubjects);
  }

  function deleteTopic(subjectId, topicId){
    let targettedSubject = subjects.find((subject)=>subject.id === subjectId);
    if (!targettedSubject) return;
    const updatedTopics = targettedSubject.topics.filter((topic)=>topic.id !== topicId);
    const updatedSubject = {
      ...targettedSubject,
      topics: updatedTopics
    };
    const updatedSubjects = subjects.map((subject)=>subject.id === subjectId ? updatedSubject : subject);
    const updatedUser = {
      ...currentUser,
      subjects: updatedSubjects
    };
    const updatedUsers = users.map((user)=> user.id === currentUser.id ? updatedUser : user);
    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('user', updatedUser.email)
    navigate(updatedSubjects.id);
  }

  return (
    <SubjectContext.Provider
      value={{ makeSubject, deleteSubject, changeSubjectName, addTopic, deleteTopic }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectProvider;

export function useSubject() {
  return useContext(SubjectContext);
}
