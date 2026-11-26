import { Check, Delete, Plus } from "lucide-react";
import React, { useState } from "react";
import { useQuiz } from "../context/QuizProvider";

const CreateQuiz = () => {
  const [quiz, setQuiz] = useState({
    name: "Untitled",
    id: crypto.randomUUID(),
    questions: [],
    points: 0,
    questionsRight: 0
  });
  const { makeQuiz } = useQuiz();

  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-start flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10">
      <header className="flex justify-between items-center w-full lg:w-[80%] p-0">
        <div className="flex justify-start items-start flex-col gap-2 w-[80%]">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            Create a new quiz
          </h1>

          <h3 className="text-sm md:text-md xl:text-md font-semibold text-gray-200 dark:text-gray-600">
            Add some questions to get started
          </h3>
        </div>

        <button
          className="btn flex justify-center gap-1 items-center h-13 w-42 rounded-sm scale-90 lg:scale-100"
          onClick={() =>{
            setQuiz({
              ...quiz,
              points: quiz.points + 1,
              questions: [
                ...quiz.questions,
                {
                  name: "Untitled",
                  questionName: "",
                  id: crypto.randomUUID(),
                  answers: [],
                  correctAnswer: "",
                  timeMaken: Date.now(),
                },
              ],
            })
          }
        }
        >
          Add a question <Plus size={20} />
        </button>
      </header>

      <section className="flex justify-center items-center flex-wrap gap-3 w-[80%]">
        {quiz.questions.map((question, index) => {
          const id = question.id;
          return (
            <section
              key={question.id}
              className="flex justify-start items-start flex-col gap-2 bg-gray-200 dark:bg-gray-700 rounded-xl w-88 h-auto min-h-30 relative p-4 pb-14"
            >
              <header className="flex justify-center items-start flex-col gap-1">
                <h1 className="text-lg md:text-xl xl:text-2xl font-bold">
                  Question {index + 1}
                </h1>

                <h3 className="text-sm md:text-md xl:text-md font-semibold text-gray-600 dark:text-gray-500">
                  1 point
                </h3>
              </header>

              <section className="flex justify-start items-start flex-col gap-2">
                <div className="flex justify-start items-center gap-2">
                  <label htmlFor="name" className="font-semibold">
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Question name"
                    className="w-[60%] h-[5vh] rounded-2xl border border-gray-300 dark:border-gray-800 border-[2.5px] placeholder:font-semibold placeholder:text-sm pl-2.5 outline-none"
                    onChange={(e)=>setQuiz(
                      {
                        ...quiz,
                        questions: quiz.questions.map((q)=>q.id === question.id ? {
                          ...question,
                          questionName: e.target.value
                        } : question)
                      }
                    )}
                  />
                </div>
                <section className="flex justify-start items-start flex-col gap-2 scale-90 w-full">
                  {question.answers.map((answer, index) => {
                    return (
                      <div className="flex justify-start items-center gap-2 w-full" key={answer.id}>
                        <label htmlFor={answer.id} className="font-semibold">
                          Answer {index + 1}
                        </label>

                        <input
                          type="text"
                          id={answer.id}
                          defaultValue={answer.name}
                          placeholder="Answer"
                          className="w-[60%] h-[5vh] rounded-2xl border border-gray-300 dark:border-gray-800 border-[2.5px] placeholder:font-semibold placeholder:text-sm pl-2.5 outline-none"
                          onChange={(e) => {
                            const updatedAnswer = {
                              ...answer,
                              name: e.target.value,
                            };
                            const updatedQuestion = {
                              ...question,
                              answers: question.answers.map((a) =>
                                a.id === answer.id ? updatedAnswer : a,
                              ),
                            };
                            const updatedQuiz = {
                              ...quiz,
                              questions: quiz.questions.map((q) =>
                                q.id === question.id ? updatedQuestion : q,
                              ),
                            };
                            setQuiz(updatedQuiz);
                          }}
                        />
                        <button className="rounded-full h-10 w-11 flex justify-center items-center bg-green-700 dark:bg-green-500"
                        onClick={()=>{
                          const updatedQuestion = {
                            ...question,
                            correctAnswer: answer.name
                          }
                            const updatedQuiz = {
                              ...quiz,
                              questions: quiz.questions.map((q) =>
                                q.id === question.id ? updatedQuestion : q,
                              ),
                            };
                            setQuiz(updatedQuiz);
                        }}><Check size={20} strokeWidth={3}/></button>
                      </div>
                    );
                  })}
                </section>
              </section>

              <section className="absolute bottom-2 left-2 right-2 flex justify-start items-center gap-2 pl-1 pb-0.5">
                <button
                  className="h-8 px-2 bg-red-500 dark:bg-red-700 flex items-center justify-center gap-1 text-xs font-semibold text-white rounded-sm hover:opacity-90"
                  onClick={() =>
                    setQuiz({
                      ...quiz,
                      points: quiz.points - 1,
                      questions: quiz.questions.filter(
                        (question) => question.id !== id,
                      ),
                    })
                  }
                >
                  <Delete size={14} />
                  Delete question
                </button>

                <button
                  className="h-8 px-2 bg-blue-500 dark:bg-blue-700 flex items-center justify-center gap-1 text-xs font-semibold text-white rounded-sm hover:opacity-90"
                  onClick={() => {
                    const answers = question.answers;
                    const id = question.id;
                    const updatedQuestion = {
                      ...question,
                      answers: [
                        ...answers,
                        {
                          name: "",
                          id: crypto.randomUUID(),
                        },
                      ],
                    };
                    setQuiz({
                      ...quiz,
                      questions: quiz.questions.map((question) =>
                        question.id === id ? updatedQuestion : question,
                      ),
                    });
                  }}
                >
                  <Plus size={14} />
                  Add an answer
                </button>
              </section>
            </section>
          );
        })}
      </section>

      <button className="btn flex justify-center gap-1 items-center h-13 w-44 rounded-sm scale-90 lg:scale-100"
      onClick={()=>{
        makeQuiz(quiz)}}> 
        Create your quiz <Plus size={20} />
      </button>
    </main>
  );
};

export default CreateQuiz;
