import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Plus, EllipsisVertical, X } from "lucide-react";
import emptyImg from "../assets/emptyImg.png";
import { Link } from "react-router-dom";
import { SubjectContext } from "../context/SubjectContext";

const FullSubjects = () => {
  const { currentUser } = useAuth();
  const { makeSubject, deleteSubject } = useContext(SubjectContext);
  const [openMenu, setOpenMenu] = useState(null);
  return (
    <section className="flex min-w-0 flex-1 flex-col items-start gap-6 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 overflow-y-auto p-4 sm:gap-10 sm:p-6 lg:p-8">
      <header className="w-full h-20 flex justify-between items-center">
        <div className="flex justify-start items-start flex-col gap-2 scale-110 ml-3">
          <h1 className="header">Subjects</h1>
          <h3 className="subHeader">View all your Subjects</h3>
        </div>
        <button
          className="btn flex justify-around items-center px-3 font-semibold h-12 w-39 gap-1 rounded-[0.5vh]"
          onClick={() => makeSubject()}
        >
          Add a Subject <Plus size={22} strokeWidth={3} />
        </button>
      </header>
      <section className="flex justify-center items-center flex-wrap gap-7">
        {currentUser.subjects.map((subject) => (
          <section
            className="flex justify-start items-start flex-col gap-8 bg-[#F3F3F3] dark:bg-[#09090B] h-42 w-50 p-5 rounded-xl"
            key={subject.id}
          >
            <div className="flex justify-center items-start flex-col gap-1">
              <div className="flex justify-between items-center w-40">
                <h1 className="header">{subject.name}</h1>
                <button
                  className="h-8 w-8 rounded-full flex justify-center items-center hover:bg-[#fffefe] transition duration-300 hover:opacity-70"
                  onClick={() => setOpenMenu(subject.id)}
                >
                  <EllipsisVertical size={20} strokeWidth={2} />
                </button>
                {openMenu === subject.id && (
                  <section className="flex justify-center items-center flex-col gap-2 absolute ml-30 z-5 bg-black dark:bg-white text-white dark:text-black font-semibold h-25 w-30 rounded-2xl">
                    <button className="ml-20" onClick={() => setOpenMenu(null)}>
                      <X size={20} strokeWidth={3} />
                    </button>
                    <button
                      className="mr-5 w-10 text-center"
                      onClick={() => {
                        deleteSubject(subject.id);
                      }}
                    >
                      Delete
                    </button>
                    <button className="mr-5 w-10 text-center">Rename</button>
                  </section>
                )}
              </div>
              <h3 className="subHeader">
                {subject.topics.length === 1
                  ? subject.topics[0].name
                  : subject.topics.length === 0
                    ? "No topics yet!"
                    : `${subject.topics.length} topics`}
              </h3>
            </div>
            <Link
              to={`/${subject.id}`}
              className="btn py-2 px-4 rounded-[0.5vh] font-semibold text-center"
            >
              {" "}
              See full subject
            </Link>
          </section>
        ))}
      </section>
    </section>
  );
};

export default FullSubjects;
