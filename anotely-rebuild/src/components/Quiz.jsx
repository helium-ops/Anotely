import React, {useState} from 'react'

const Quiz = ({quiz}) => {
    const questions = quiz?.questions ?? [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    const currentQuestion = questions[currentIndex];
    const answers = currentQuestion?.answers ?? [];
    const [correctAnswers, setCorrectAnswers] = useState(quiz.questionsRight);
  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-center items-center flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10">
      { currentIndex < questions.length ? (
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
        <section className='flex justify-start items-start flex-col gap-3 mt-5'>
            <h1 className='font-semibold text-lg'>
                {currentQuestion.questionName}
            </h1>
            <div className='flex justify-center items-center flex-col gap-3'>
                {answers.map((answer, index)=>(
                    <button key={answer.id} className='w-70 h-11 flex rounded-full text-left bg-gray-200 dark:bg-gray-900 flex justify-start items-center gap-2 pl-5 font-semibold'
                    onClick={(e)=>{
                      if(answer.name === currentQuestion.correctAnswer){
                       e.target.style.background = 'green';
                        setCorrectAnswers(prev => prev + 1)
                      } else {
                        e.target.style.background = 'red';
                      }
                      setQuestionAnswered(true);
                    }
                    }>
                       <span>{index + 1}.</span> 
                      <span>{answer.name}</span></button>
                ))}
            </div>
        </section>
        {questionAnswered != false && <button className='btn h-11 w-25 rounded-md mt-5 ml-21'
        onClick={()=>{
          setCurrentIndex(prev => prev + 1);
          setQuestionAnswered(false);
        }}>Next</button>}

        </section>
      ) : (
        <section className='h-[60%] w-[40%] lg:mr-60 flex justify-center items-center flex-col'>
          <header className="flex justify-between items-center w-full lg:w-[80%] p-0">
          <div className="flex justify-center items-center flex-col gap-2 w-full">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">
            You finished the quiz!
          </h1>
            
          <h3 className="text-sm md:text-md xl:text-md font-semibold text-gray-500 dark:text-gray-600">
            Make another quiz!
          </h3>
        </div>
        </header>
        <section className='flex justify-center items-center flex-col gap-3 mt-5'>
          <h1 className='font-semibold text-lg'>You got</h1>
          <h3 className='h-12 w-12 rounded-full btn flex justify-center items-center '>{`${correctAnswers}/${quiz.questions.length} `}</h3>
          <h3 className="text-sm md:text-md xl:text-md font-semibold text-gray-500 dark:text-gray-600">Questions right</h3>
        </section>
        <button className='btn h-11 w-35 btn rounded-sm mt-6'>New quiz</button>
        </section>
      )
}
    </main>
  )
}

export default Quiz
