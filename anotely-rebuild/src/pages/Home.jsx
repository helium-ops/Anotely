import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Subjects from "../components/Subjects";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Subject from "../components/Subject";
import Topic from "../components/Topic";

const Home = () => {
  const { currentUser } = useAuth();
  const [topics, setTopics] = useState(()=>{
    const subjects = currentUser.subjects;
    const topics = subjects.flatMap((subject)=>subject.topics);
    return topics;
  })
  return (
    <main className="h-165 min-h-0 w-full flex justify-start items-center overflow-hidden relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="subjects" element={<Subjects />} />
        {currentUser != null && currentUser.subjects?.map((subject)=>(
          <Route path={`/${subject.id}`} key={subject.id} element={<Subject subject={subject}/>}/>
        ))}
        {topics.map((topic)=>(
          <Route path={`/${topic.id}`} key={topic.id} element={<Topic topic={topic}/>}/>
        ))}
      </Routes>
    </main>
  );
};

export default Home;
