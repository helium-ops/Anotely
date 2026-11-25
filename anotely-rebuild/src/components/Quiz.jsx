import React, {useState} from 'react'

const Quiz = ({quiz}) => {
    const questions = quiz.questions;
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentQuestion = questions[currentIndex];
    const answers = currentQuestion.answers;
  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-center items-center flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10">
        <section className='h-[60%] w-[40%]'>
        <header className="flex justify-between items-center w-full lg:w-[80%] p-0">
        <div className="flex justify-start items-start flex-col gap-2 w-[80%]">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            Question {currentIndex + 1}
          </h1>
            
          <h3 className="text-sm md:text-md xl:text-md font-semibold text-gray-500 dark:text-gray-600">
            1 point
          </h3>
        </div>
        </header>
        <section className='flex justify-start items-start flex-col gap-2 '>
            <h1 className='font-semibold '>
                {currentQuestion.questionName}
            </h1>
            <div className='flex justify-center items-center flex-col'>
                {answers.map((answer)=>(
                    <button key={answer.id}>{answer.name}</button>
                ))}
            </div>
        </section>
        </section>
    </main>
  )
}

export default Quiz
