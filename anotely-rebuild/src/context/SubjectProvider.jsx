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
      user.id === currentUser.id ? updatedUser : user,
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

  function deleteTopic(subjectId, topicId) {
    let targettedSubject = subjects.find((subject) => subject.id === subjectId);
    if (!targettedSubject) return;
    const updatedTopics = targettedSubject.topics.filter(
      (topic) => topic.id !== topicId,
    );
    const updatedSubject = {
      ...targettedSubject,
      topics: updatedTopics,
    };
    const updatedSubjects = subjects.map((subject) =>
      subject.id === subjectId ? updatedSubject : subject,
    );
    const updatedUser = {
      ...currentUser,
      subjects: updatedSubjects,
    };
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id ? updatedUser : user,
    );
    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("user", updatedUser.email);
  }

  function renameTopic(subjectId, topicId, name) {
    const targettedSubject = subjects.find(
      (subject) => subject.id === subjectId,
    );
    const topics = targettedSubject.topics;
    const targettedTopic = topics.find((topic) => topic.id === topicId);
    const updatedTopic = {
      ...targettedTopic,
      name: name,
    };
    const updatedTopics = topics.map((topic) =>
      topic.id === topicId ? updatedTopic : topic,
    );
    const updatedSubject = {
      ...targettedSubject,
      topics: updatedTopics,
    };
    const updatedSubjects = subjects.map((subject) =>
      subject.id === subjectId ? updatedSubject : subject,
    );
    saveSubjects(updatedSubjects);
  }

  function addNote(subjectId, topicId) {
    const targettedSubject = subjects.find(
      (subject) => subject.id === subjectId,
    );
    if (!targettedSubject) return;
    const topics = targettedSubject.topics;
    const targettedTopic = topics.find((topic) => topic.id === topicId);
    if (!targettedTopic) return;
    const newNote = {
      name: "Untitled",
      text: "",
      id: crypto.randomUUID(),
    };
    const updatedTopic = {
      ...targettedTopic,
      notes: [...(targettedTopic.notes ?? []), newNote],
    };
    const updatedTopics = topics.map((topic) =>
      topic.id === topicId ? updatedTopic : topic,
    );
    const updatedSubject = {
      ...targettedSubject,
      topics: updatedTopics,
    };
    const updatedSubjects = subjects.map((subject) =>
      subject.id === subjectId ? updatedSubject : subject,
    );
    saveSubjects(updatedSubjects);
  }

  function deleteNote(subjectId, topicId, noteId) {
    const targettedSubject = subjects.find(
      (subject) => subject.id === subjectId,
    );
    const topics = targettedSubject.topics;
    const targettedTopic = topics.find((topic) => topic.id === topicId);
    const notes = targettedTopic.notes;
    const updatedTopic = {
      ...targettedTopic,
      notes: notes.filter((note) => note.id !== noteId),
    };
    const updatedTopics = topics.map((topic) =>
      topic.id === topicId ? updatedTopic : topic,
    );
    const updatedSubject = {
      ...targettedSubject,
      topics: updatedTopics,
    };
    const updatedSubjects = subjects.map((subject) =>
      subject.id === subjectId ? updatedSubject : subject,
    );
    saveSubjects(updatedSubjects);
  }

  function renameNote(subjectId, topicId, noteId, name) {
    const targettedSubject = subjects.find(
      (subject) => subject.id === subjectId,
    );
    const topics = targettedSubject.topics;
    const targettedTopic = topics.find((topic) => topic.id === topicId);
    const notes = targettedTopic.notes;
    const targettedNote = notes.find((note) => note.id === noteId);
    const updatedNote = {
      ...targettedNote,
      name: name,
    };
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? updatedNote : note,
    );
    const updatedTopic = {
      ...targettedTopic,
      notes: updatedNotes,
    };
    const updatedSubject = {
      ...targettedSubject,
      topics: targettedSubject.topics.map((topic) =>
        topic.id === topicId ? updatedTopic : topic,
      ),
    };
    const updatedSubjects = subjects.map((subject) =>
      subject.id === subjectId ? updatedSubject : subject,
    );
    saveSubjects(updatedSubjects);
  }

  function updateNote(subjectId, topicId, noteId, text) {
    const targettedSubject = subjects.find(
      (subject) => subject.id === subjectId,
    );
    const topics = targettedSubject.topics;
    const targettedTopic = topics.find((topic) => topic.id === topicId);
    const notes = targettedTopic.notes;
    const targettedNote = notes.find((note) => note.id === noteId);
    const updatedNote = {
      ...targettedNote,
      text: text,
    };
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? updatedNote : note,
    );
    const updatedTopic = {
      ...targettedTopic,
      notes: updatedNotes,
    };
    const updatedSubject = {
      ...targettedSubject,
      topics: targettedSubject.topics.map((topic) =>
        topic.id === topicId ? updatedTopic : topic,
      ),
    };
    const updatedSubjects = subjects.map((subject) =>
      subject.id === subjectId ? updatedSubject : subject,
    );
    saveSubjects(updatedSubjects);
  }

  return (
    <SubjectContext.Provider
      value={{
        makeSubject,
        deleteSubject,
        changeSubjectName,
        addTopic,
        deleteTopic,
        renameTopic,
        addNote,
        deleteNote,
        renameNote,
        updateNote
      }}
    >
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectProvider;

export function useSubject() {
  return useContext(SubjectContext);
}
