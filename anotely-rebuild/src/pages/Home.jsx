import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Subjects from "../components/Subjects";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Subject from "../components/Subject";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <main className="h-165 min-h-0 w-full flex justify-start items-center overflow-hidden relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="subjects" element={<Subjects />} />
        {currentUser.subjects.map((subject)=>(
          <Route path={`/${subject.id}`} key={subject.id} element={<Subject subject={subject}/>}/>
        ))}
      </Routes>
    </main>
  );
};

export default Home;
