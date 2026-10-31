
import { useContext } from "react";
import { useAuth } from "../context/AuthProvider";
import { SubjectContext } from "../context/SubjectContext";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { currentUser } = useAuth();
  const { makeSubject } = useContext(SubjectContext);
  const navigate = useNavigate();

  return (
    <aside className="hidden w-full shrink-0 flex-row gap-6 overflow-x-auto border-b border-gray-200 bg-gray-500 px-4 py-3 dark:border-gray-700 md:bg-transparent lg:flex lg:w-56 lg:flex-col lg:items-start lg:justify-around lg:gap-3 lg:overflow-y-auto lg:overflow-x-hidden lg:border-b-0 lg:border-r lg:px-4 lg:py-5">

      {/* Subjects */}
      <section className="flex w-52 shrink-0 flex-col items-start gap-2 lg:w-full lg:gap-3">
        <h1 className="header">Subjects</h1>

        <div className="max-w-full">
          {currentUser.subjects.length === 0 ? (
            <h2 className="subHeader break-words">
              Make a new Subject!
            </h2>
          ) : (
            currentUser.subjects.slice(0, 3).map((subject) => (
              <Link
                to={`/${subject.id}`}
                key={subject.id}
                className="subHeader block break-words"
              >
                {subject.name}
              </Link>
            ))
          )}
        </div>

        <button
          type="button"
          className="btn h-10 w-33 rounded font-semibold"
          onClick={() => {
            if (currentUser.subjects.length === 0) {
              makeSubject();
            } else {
              navigate('/subjects')
            }
          }}
        >
          {currentUser.subjects.length === 0
            ? "First Subject"
            : "See all Subjects"}
        </button>
      </section>

      {/* Quizzes */}
      <section className="flex w-52 shrink-0 flex-col items-start gap-2 lg:w-full lg:gap-3">
        <h1 className="header">Quizzes</h1>

        <div className="max-w-full">
          {currentUser.quizzes.length === 0 ? (
            <h2 className="subHeader break-words">
              Make a new Quiz!
            </h2>
          ) : (
            currentUser.quizzes.slice(0, 3).map((quiz) => (
              <h3 className="break-words" key={quiz.id}>
                {quiz.name}
              </h3>
            ))
          )}
        </div>

        <button
          type="button"
          className="btn h-10 w-30 rounded font-semibold"
        >
          {currentUser.quizzes.length === 0
            ? "First Quiz"
            : "See all Quizzes"}
        </button>
      </section>

      {/* Focus Sessions */}
      <section className="flex w-52 shrink-0 flex-col items-start gap-2 lg:w-full lg:gap-3">
        <h1 className="header">Focus Sessions</h1>

        <div className="max-w-full">
          {currentUser.focusSessions.length === 0 ? (
            <h2 className="subHeader w-full break-words">
              Make a new Session!
            </h2>
          ) : (
            currentUser.focusSessions.slice(0, 3).map((focusSession) => (
              <h3 className="break-words" key={focusSession.id}>
                {focusSession.name}
              </h3>
            ))
          )}
        </div>

        <button
          type="button"
          className="btn h-10 w-30 rounded font-semibold"
        >
          {currentUser.focusSessions.length === 0
            ? "First Session"
            : "See all Sessions"}
        </button>
      </section>

      {/* User Email */}
      <div>
      <Link to="/" className="text-sm scale-90 font-semibold text-left w-full">{currentUser.email}</Link>
      </div>
    </aside>
  );
};

export default NavBar;
