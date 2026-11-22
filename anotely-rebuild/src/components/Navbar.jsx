
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useSubject } from "../context/SubjectProvider";

const Navbar = () => {
  const { currentUser } = useAuth();
  const { makeSubject } = useSubject();
  const navigate = useNavigate();
  const subjects = currentUser.subjects;
  const quizzes = currentUser.quizzes;
  const focusSessions = currentUser.focusSessions;
  return (
    <aside className="hidden h-full min-h-0 lg:flex lg:justify-around lg:items-start lg:flex-col border-r border-gray-200 w-50 dark:border-gray-700 pl-4">

      <section className="flex h-full min-h-0 w-full overflow-hidden justify-between items-start flex-col py-8">

        {/* Subjects */}
        <section className="flex justify-around items-start flex-col gap-3 shrink-0">
          <h1 className="font-bold text-xl sm:text-2xl">
            Subjects
          </h1>

          <div className="flex justify-center items-start flex-col gap-1">
            {subjects.length === 0 ? (
              <h3 className="text-sm">Make your first subject!</h3>
            ) : subjects.length < 3 ? (
              subjects.map((subject) => (
                <Link key={subject.id} to={`/${subject.id}`}>
                  {subject.name}
                </Link>
              ))
            ) : (
              <>
                <Link to={`/${subjects[0].id}`} key={subjects[0].id}>{subjects[0].name}</Link>
                <Link to={`/${subjects[1].id}`} key={subjects[1].id}>{subjects[1].name}</Link>
                <Link to={`/${subjects[2].id}`} key={subjects[2].id}>{subjects[2].name}</Link>
              </>
            )}
          </div>

          <button className={`btn min-w-30 w-33 min-h-10 h-11 font-medium rounded-sm`}onClick={(e)=>{
            e.target.textContent === 'First subject' ? makeSubject() : navigate('/subjects')
            }}>
            {subjects.length === 0 ? 'First subject' : 'See all subjects'}
          </button>
        </section>

        {/* Quizzes */}
        <section className="flex justify-start items-start flex-col gap-3 shrink-0">
          <h1 className="font-bold text-xl sm:text-2xl">
            Quizzes
          </h1>

          <div className="flex justify-center items-center flex-col gap-1">
            {quizzes.length === 0 ? (
              <h3 className="text-sm">Make your first quiz!</h3>
            ) : quizzes.length < 3 ? (
              quizzes.map((page) => (
                <Link to={page.id} key={page.id}>
                  {page.name}
                </Link>
              ))
            ) : (
              <>
  <Link to={quizzes[0].id} key={quizzes[0].id}>
    {quizzes[0].name}
  </Link>

  <Link to={quizzes[1].id} key={quizzes[1].id}>
    {quizzes[1].name}
  </Link>

  <Link to={quizzes[2].id} key={quizzes[2].id}>
    {quizzes[2].name}
  </Link>
</>
            )}
          </div>

          <button className="btn min-w-30 h-10 font-medium rounded-sm">
            First Quiz
          </button>
        </section>

        {/* Focus sessions */}
        <section className="flex justify-start items-start flex-col gap-3 shrink-0">
          <h1 className="font-bold text-xl sm:text-2xl">
            Focus sessions
          </h1>

          <div className="flex justify-center items-center flex-col gap-1">
            {focusSessions.length === 0 ? (
              <h3 className="text-sm">Make your first sesh!</h3>
            ) : focusSessions.length < 3 ? (
              focusSessions.map((sesh) => (
                <Link to={sesh.id} key={sesh.id}>
                  {sesh.name}
                </Link>
              ))
            ) : (
             <>
  <Link key={focusSessions[0].id} to={focusSessions[0].id}>
    {focusSessions[0].name}
  </Link>

  <Link key={focusSessions[1].id}  to={focusSessions[1].id}>
    {focusSessions[1].name}
  </Link>

  <Link key={focusSessions[2].id}  to={focusSessions[2].id}>
    {focusSessions[2].name}
  </Link>
</>
            )}
          </div>

          <button className="btn min-w-30 h-10 font-medium rounded-sm">
            New sesh
          </button>
        </section>

        {/* User email */}
        <Link to="/" className="shrink-0">
          {currentUser.email}
        </Link>

      </section>
    </aside>
  );
};

export default Navbar;
