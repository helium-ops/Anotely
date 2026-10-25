import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { SubjectContext } from "../context/SubjectContext"

const NavBar = () => {
  const { currentUser } = useAuth();
  const { makeSubject } = useContext(SubjectContext);
  return (
    <aside className="hidden md:flex md:justify-around md:items-start md:flex-col md:gap-3 md:h-162 border-r border-r-gray-200 dark:border-r-gray-700 fixed bottom-2 left-2 w-55 pl-2">
      <section className="flex justify-center items-start flex-col gap-3">
        <h1 className="header">Subjects</h1>
        <div>
          {currentUser.subjects.length === 0 ? (
            <h2 className="subHeader">Make a new Subject! </h2>
          ) : currentUser.subjects.length >= 3 ? (
            <>
              <h3>{currentUser.subjects[0].name}</h3>
              <h3>{currentUser.subjects[1].name}</h3>
              <h3>{currentUser.subjects[2].name}</h3>
            </>
          ) : currentUser.subjects.map((subject)=>(
            <h1 key={subject.id} className="subHeader">{subject.name}</h1>
          )) }
        </div>
        <button
          className="btn font-semibold h-11 w-33 text-[1.1vw] rounded-[0.7vw] sm:rounded-[0.5vw] md:rounded-[0.3vw]"
          onClick={(e)=>{
          if(e.target.textContent === "See all Subjects"){
            return;
          }
           makeSubject();
          }}
        >
          {currentUser.subjects.length === 0
            ? "First Subject"
              : "See all Subjects"}
        </button>
      </section>
      <section className="flex justify-center items-start flex-col gap-3">
        <h1 className="header">Quizzes</h1>
        <div>
          {currentUser.quizzes.length === 0 ? (
            <h2 className="subHeader">Make a new Quiz! </h2>
          ) : (
            currentUser.quiz.map((quiz) => <h3 key={quiz.id}>{quiz.name}</h3>)
          )}
        </div>
        <button className="btn font-semibold h-10 w-30 text-[1.1vw] rounded-[0.7vw] sm:rounded-[0.5vw] md:rounded-[0.3vw]"
        >
          {currentUser.quizzes.length === 0
            ? "First Quiz"
             : "See all Quizzes"}
        </button>
      </section>
      <section className="flex justify-center items-start flex-col gap-3">
        <h1 className="header">Focus Sessions</h1>
        <div>
          {currentUser.focusSessions.length === 0 ? (
            <h2 className="subHeader w-full">Make a new Session! </h2>
          ) : (
            currentUser.focusSessions.map((focusSession) => (
              <h3 key={focusSession.id}>{focusSession.name}</h3>
            ))
          )}
        </div>
        <button className="btn font-semibold h-10 w-30 text-[1.1vw] rounded-[0.7vw] sm:rounded-[0.5vw] md:rounded-[0.3vw]">
          {currentUser.focusSessions.length === 0
            ? "First Session"
            : "See all Sessions"}
        </button>
      </section>
      <h3 className="text-[10px] sm:text-[13px] font-semibold mr-4">
        {currentUser.email}
      </h3>
    </aside>
  );
};

export default NavBar;
