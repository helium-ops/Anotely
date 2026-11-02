import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import { Plus } from "lucide-react";

const Subject = ({subject}) => {
  const [rtopics, setRtopics] = useState(subject.topics);
  const { currentUser, users, setCurrentUser, setUsers } = useAuth();
  function addTopic(){
    const updatedTopics = [...rtopics, {
      id: Date.now(),
      name: "Untitled",
      notes: []
    }];
    const updatedUser = {
      ...currentUser,
      subjects: currentUser.subjects.map((currentSubject) =>
        currentSubject.id === subject.id
          ? { ...currentSubject, topics: updatedTopics }
          : currentSubject,
      ),
    };
    const updatedUsers = users.map((user) =>
      user.email === updatedUser.email ? updatedUser : user,
    );

    setRtopics(updatedTopics);
    setCurrentUser(updatedUser);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
  return (
    <section className='flex min-w-0 flex-1 flex-col items-start gap-8 overflow-y-auto p-4 sm:gap-9 sm:p-6 lg:p-8'>
     <header className='w-full flex justify-between items-center'>
      <div className='flex justify-start items-start flex-col gap-2'>
      <h1 className="header">{subject.name}</h1>
      <h3 className="subHeader">View all your topics</h3>
      </div>
      <button className='flex justify-center items-center gap-1 font-semibold btn h-12 w-35 rounded-sm'
      onClick={addTopic}>
        Add a topic
       <Plus size={20} strokeWidth={3}/>
      </button>
     </header>
     <section className='flex justify-start items-start gap-5 flex-wrap'>
      {rtopics.map((topic)=>(
        <section className='flex justify-start items-start flex-col gap-5 bg-[#F3F3F3] dark:bg-[#09090B] h-42 w-50 p-5 rounded-xl' key={topic.id}>
          <div className='flex justify-center items-start flex-col gap-1'>
            <h1 className="header">{topic.name}</h1>
            <h3 className='subHeader'>{topic.notes.length} notes</h3>
          </div>
          <button className='btn h-[30%] w-32 font-semibold mt-2 rounded-sm'>See all notes</button>
        </section>
      ))}
     </section>
    </section>
  )
}

export default Subject
