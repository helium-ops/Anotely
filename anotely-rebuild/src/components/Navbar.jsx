
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useSubject } from "../context/SubjectProvider";

const Navbar = ({ nav, isNavOpen, setIsNavOpen }) => {
  const {  currentUser } = useAuth();
  const { makeSubject } = useSubject();
  const navigate = useNavigate();

  const subjects =  currentUser?.subjects ?? [];
  const quizzes =  currentUser?.quizzes ?? [];
  const focusSessions =  currentUser?.focusSessions ?? [];

  const closeMobileNav = () => setIsNavOpen(false);

  const renderLinks = () => (
    <>
      {/* Subjects */}
      <section className="flex justify-around items-start flex-col gap-3 shrink-0 z-999">
        <h1 className="font-bold text-xl sm:text-2xl">
          Subjects
        </h1>

        <div className="flex justify-center items-start flex-col gap-1">
          {subjects.length === 0 ? (
            <h3 className="text-sm">Make your first subject!</h3>
          ) : (
            subjects.slice(0, 3).map((subject) => (
              <Link
                key={subject.id}
                to={`/${subject.id}`}
                onClick={closeMobileNav}
              >
                {subject.name}
              </Link>
            ))
          )}
        </div>

        <button
          className="btn min-w-30 w-33 min-h-10 h-11 font-medium rounded-sm"
          onClick={() => {
            if (subjects.length === 0) {
              makeSubject();
            } else {
              navigate("/subjects");
            }
            closeMobileNav();
          }}
        >
          {subjects.length === 0 ? "First subject" : "See all subjects"}
        </button>
      </section>

      {/* Quizzes */}
      <section className="flex justify-start items-start flex-col gap-3 shrink-0">
        <h1 className="font-bold text-xl sm:text-2xl">
          Quizzes
        </h1>

        <div className="flex justify-center items-start flex-col gap-1">
          {quizzes.length === 0 ? (
            <h3 className="text-sm">Make your first quiz!</h3>
          ) : (
            quizzes.slice(0, 3).map((quiz) => (
              <Link
                to={quiz.id}
                key={quiz.id}
                onClick={closeMobileNav}
              >
                {quiz.name}
              </Link>
            ))
          )}
        </div>

        <button
          className="btn min-w-30 h-10 font-medium rounded-sm"
          onClick={() => {
            if(quizzes.length === 0){
              navigate('/makeQuiz');
              return;
            }
            navigate("/quizzes");
            closeMobileNav();
          }}
        >
          {quizzes.length === 0 ? "First Quiz" : "See all quizzes"}
        </button>
      </section>

      {/* Focus Sessions */}
      <section className="flex justify-start items-start flex-col gap-3 shrink-0">
        <h1 className="font-bold text-xl sm:text-2xl">
          Focus sessions
        </h1>

        <div className="flex justify-center items-start flex-col gap-1">
          {focusSessions.length === 0 ? (
            <h3 className="text-sm">Make your first sesh!</h3>
          ) : (
            focusSessions.slice(0, 3).map((sesh) => (
              <Link
                key={sesh.id}
                to={sesh.id}
                onClick={closeMobileNav}
              >
                {sesh.name}
              </Link>
            ))
          )}
        </div>

        <button className="btn min-w-30 h-10 font-medium rounded-sm">
          New sesh
        </button>
      </section>

      {/* User email */}
      <Link
        to="/"
        className="shrink-0"
        onClick={closeMobileNav}
      >
        { currentUser?.email}
      </Link>
    </>
  );

  return (
    <>
      {/* Mobile Navbar */}
      {/* Mobile menu is anchored to the top of the content area below the header. */}
      {isNavOpen && (
        <aside
          id="mobile-navigation"
          className="lg:hidden absolute top-0 left-0 z-50 w-full max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-5 shadow-lg z-1999"
        >
          <section className="flex flex-col items-start gap-8">
            {renderLinks()}
          </section>
        </aside>
      )}

      {/* Desktop Sidebar */}
      <aside
        className="hidden lg:flex h-full shrink-0 border-r border-gray-200 dark:border-gray-700 pl-4 w-50"
        ref={nav}
      >
        <section className="flex h-full min-h-0 w-full overflow-hidden justify-between items-start flex-col py-8">
          {renderLinks()}
        </section>
      </aside>
    </>
  );
};

export default Navbar;
