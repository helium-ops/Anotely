import React, {useState} from 'react'

const Quiz = ({quiz}) => {
    const questions = quiz.questions;
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuestion = questions[currentIndex];
    console.log(currentQuestion)
  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-start flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10">
        <header className="flex justify-between items-center w-full lg:w-[80%] p-0">
        <div className="flex justify-start items-start flex-col gap-2 w-[80%]">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            Question {currentIndex + 1}
          </h1>

          <h3 className="text-sm md:text-md xl:text-md font-semibold text-gray-200 dark:text-gray-600">
            Answer the questions correctly
          </h3>
        </div>
        </header>
        <section>
            <h1>
                {currentQuestion.questionName}
            </h1>
        </section>
    </main>
  )
}

export default Quiz
