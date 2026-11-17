import { Plus, MoreVertical, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSubject } from "../context/SubjectProvider";

const Subject = ({ subject }) => {
  const [menuOpen, setMenuOpen] = useState(null);
  const {addTopic} = useSubject();
  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-start flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10 ">
      <header className="flex justify-between items-center w-full lg:w-[80%]">
        <div className="flex justify-start items-start flex-col gap-1">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
            {subject.name}
          </h1>
          <h3 className="text-sm md:text-md xl:text-lg font-semibold text-gray-200 dark:text-gray-600">
            View all your topics
          </h3>
        </div>
        <section className="flex justify-center items-center gap-2">
          <button className="btn flex justify-center gap-1 items-center h-12 w-37 rounded-sm scale-90 lg:scale-100"
          onClick={()=>addTopic(subject.id)}>
            <span>Add a topic</span>
            <Plus size={20} />
          </button>
        </section>
      </header>
      <section className="flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 flex-wrap w-[80%]">
      {subject.topics.map((topic) => {
        const topics = topic.topics;

        return (
          <article
            key={topic.id}
            className="flex justify-start items-start flex-col gap-4 bg-gray-100 dark:bg-gray-900 h-40 w-50 py-4 px-4 rounded-lg scale-80 md:scale-90 xl:scale-100"
          >
            <section className="flex justify-start items-start flex-col gap-1">
              <header className="flex justify-between items-center gap-9">
                <h1 className="text-3xl font-bold">{topic.name}</h1>
                <button
                  className="hover:bg-white hover:opacity-80 dark:hover:bg-blue-300/5 p-2 rounded-full mr-16"
                  onClick={() => setMenuOpen(topic.id)}
                >
                  <MoreVertical size={21} />
                </button>
                {menuOpen === topic.id && (
                  <section className="bg-black dark:bg-gray-900 h-35 w-37 fixed flex justify-start items-end flex-col text-white rounded-xl">
                    <button
                      className="p-3 hover:bg-white/5 text-lg"
                      onClick={() => setMenuOpen(null)}
                    >
                      <X size={20} />
                    </button>
                    <div className="flex justify-start items-start flex-col gap-2 font-semibold pr-3">
                      <button>Rename</button>
                      <button>
                        Delete
                      </button>
                    </div>
                  </section>
                )}
              </header>
              <h3 className="text-lg text-gray-300 dark:text-gray-500">
                {topic.notes.length} notes
              </h3>
            </section>
            <Link
              to={`/${topic.id}`}
              className="btn h-10 w-33 flex justify-center items-center text-sm rounded-sm"
            >
              See full topic
            </Link>
          </article>
        );
      })}
      </section>
    </main>
  );
};

export default Subject;
