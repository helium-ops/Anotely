import { Plus, MoreVertical, X } from "lucide-react";
import React, {useState}from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useSubject } from "../context/SubjectProvider";

const Topic = ({ topic }) => {
  const [menuOpen, setMenuOpen] = useState(null);
  const { currentUser } = useAuth();
  const { addNote, deleteNote } = useSubject();

  const subjects = currentUser?.subjects ?? [];

  const mainSubject = subjects.find((subject) =>
    subject.topics?.some((t) => t.id === topic.id),
  );

  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-start flex-col gap-4 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10">

      {/* Header */}
      <header className="flex justify-between items-center w-full lg:w-[80%]">
        <div className="flex justify-start items-start flex-col gap-1">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
            {topic.name}
          </h1>

          <h3 className="text-sm md:text-md xl:text-lg font-semibold text-gray-200 dark:text-gray-600">
            View all your notes
          </h3>
        </div>

        <button
          className="btn flex justify-center gap-1 items-center h-12 w-35 rounded-sm scale-90 lg:scale-100"
          onClick={() => {
            if (!mainSubject) return;
              addNote(mainSubject.id, topic.id);
            
          }}
        >
          <span>Add a note</span>
          <Plus size={20} />
        </button>
      </header>

      {/* Notes */}
      <section className="flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 flex-wrap w-[90%] md:w-[80%] pt-12">

        {(topic.notes ?? []).map((note) => (
          <section
            key={note.id}
            className="flex justify-start items-start flex-col gap-4 bg-gray-100 dark:bg-gray-900 h-40 w-50 py-4 px-4 rounded-lg scale-80 md:scale-90 xl:scale-100"
          >
            <section className="flex justify-start items-start flex-col gap-2">
            <header className="flex w-full min-w-0 justify-between items-center gap-2">
              <h1
                className="w-full text-2xl font-bold truncate"
                title={note.name}
              >
                {note.name}
              </h1>

              <button className="hover:bg-white hover:opacity-80 dark:hover:bg-blue-300/5 p-2 rounded-full"
              onClick={()=>setMenuOpen(note.id)}>
                <MoreVertical size={21} />
              </button>
              {menuOpen === note.id && (
                    <section className="bg-black dark:bg-gray-900 h-35 w-37 fixed flex justify-start items-end flex-col text-white rounded-xl">
                      <button
                        className="p-3 hover:bg-white/5 text-lg"
                        onClick={() => setMenuOpen(null)}
                      >
                        <X size={20} />
                      </button>
                      <div className="flex justify-start items-start flex-col gap-2 font-semibold pr-3">
                        <button>
                          Rename
                        </button>
                        <button onClick={()=>deleteNote(mainSubject.id, topic.id, note.id)}>
                          Delete
                        </button>
                      </div>
                    </section>
                  )}
            </header>

            <h3 className="text-lg text-gray-300 dark:text-gray-500">
              {note.text.length} characters
            </h3>
            </section>
            <Link
        to={`/${note.id}`}
        className="btn h-10 w-26 py-2 flex justify-center items-center text-sm rounded-sm mb-"
      >
        View note
      </Link>
          </section>
        ))}
        
      </section>

      {/* Topic Link */}
      

    </main>
  );
};

export default Topic;
