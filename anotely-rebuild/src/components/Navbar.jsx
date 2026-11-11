
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [currentUser, setCurrentUser] = React.useState(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    const email = JSON.parse(localStorage.getItem("user"));
    const intendedUser = users.find((user) => user.email === email);
    return intendedUser;
  });

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

          <div className="flex justify-center items-center flex-col gap-1">
            {subjects.length === 0 ? (
              <h3 className="text-sm">Make your first subject!</h3>
            ) : subjects.length <= 3 ? (
              subjects.map((subject) => (
                <Link key={subject.id} to={subject.id}>
                  {subject.name}
                </Link>
              ))
            ) : (
              <>
                <Link to={subjects[0].id}>{subjects[0].name}</Link>
                <Link to={subjects[1].id}>{subjects[1].name}</Link>
                <Link to={subjects[2].id}>{subjects[2].name}</Link>
              </>
            )}
          </div>

          <button className="btn min-w-30 h-10 font-medium rounded-sm">
            First subject
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
                <Link to={quizzes[0].id}>{quizzes[0].name}</Link>
                <Link to={quizzes[1].id}>{quizzes[1].name}</Link>
                <Link to={quizzes[2].id}>{quizzes[2].name}</Link>
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
                <Link to={focusSessions[0].id}>
                  {focusSessions[0].name}
                </Link>
                <Link to={focusSessions[1].id}>
                  {focusSessions[1].name}
                </Link>
                <Link to={focusSessions[2].id}>
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
