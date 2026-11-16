import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Subjects from "../components/Subjects";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-165 min-h-0 w-full flex justify-start items-center overflow-hidden relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path="subjects" element={<Subjects />} />
      </Routes>
    </main>
  );
};

export default Home;
