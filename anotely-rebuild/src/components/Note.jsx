import React from "react";
import { useSubject } from "../context/SubjectProvider";
import { useAuth } from "../context/AuthProvider";

const Note = ({ note }) => {
  const { currentUser } = useAuth();
  const { updateNote } = useSubject();
  const subjects = currentUser?.subjects ?? [];
  const mainSubject = subjects.find((subject) =>
    subject.topics.some((topic) =>
      topic.notes.some((note) => note.id === note.id),
    ),
  );
  const mainTopic = mainSubject?.topics.find((topic) =>
    topic.notes.some((note) => note.id === note.id),
  );

  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-start flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10 ">
      <textarea
        name=""
        id=""
        className="h-full w-[80%] resize-none outline-none rounded-md focus:font-semibold focus:text-2xl font-semibold text-2xl"
        defaultValue={note.text}
        placeholder="Think it out..."
        onChange={(e) => updateNote(mainSubject.id, mainTopic.id, note.id, e.target.value )}
      ></textarea>
    </main>
  );
};

export default Note;
