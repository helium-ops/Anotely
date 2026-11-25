import { Plus, MoreVertical, X } from 'lucide-react'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { useQuiz } from '../context/QuizProvider';
import { Link, useNavigate } from 'react-router-dom'

const Quizzes = () => {
  const { currentUser } = useAuth();
  const { makeQuiz, deleteQuiz } = useQuiz();
  const [changeName, setChangeName] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const quizzes = currentUser?.quizzes ?? [];
  const navigate = useNavigate();
  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-start flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10">
     <header className='flex justify-between items-center w-[100%] lg:w-[80%] p-0'>
<div className='flex justify-start items-start flex-col gap-1 w-[80%]'>
        <h1 className='text-xl md:text-2xl xl:text-3xl font-bold'>Quizzes</h1>
        <h3 className='text-sm md:text-md xl:text-lg font-semibold text-gray-200 dark:text-gray-600'>View all your quizzes</h3>
      </div>
      <section className='flex justify-center items-center gap-2'>
         <button className='btn flex justify-center gap-1 items-center h-12 w-35 rounded-sm scale-90 lg:scale-100'
         onClick={()=>navigate('/makeQuiz')}>
           Add a quiz <Plus size={20}/>
         </button>
      </section>
     </header>
     <section className='flex justify-center items-center flex-wrap gap-3 w-[80%]'>
     {quizzes.map((quiz)=>{
          const questions = quiz?.questions ?? [];
            

          return(
            <article key={quiz.id} className='flex h-40 w-50 flex-col items-start justify-start gap-4 rounded-lg bg-gray-100 px-4 py-4 dark:bg-gray-900 scale-80 md:scale-90 xl:scale-100'>
                <section className='flex w-full min-w-0 flex-col items-start justify-start gap-1'>
                  <header className='flex w-full min-w-0 items-center justify-between gap-2'>
                    <div className='min-w-0 flex-1'>
                    {
                    changeName !== quiz.id ?
                <h1 className='w-full truncate text-2xl font-bold' title={quiz.name}>{quiz.name}</h1> : 
                <input type="text" defaultValue={quiz.name} className='w-full rounded-md border border-white pl-2 font-bold outline-none dark:border-black'
                />
                  }
                    </div>
                <button className="shrink-0 rounded-full p-2 hover:bg-white hover:opacity-80 dark:hover:bg-blue-300/5" onClick={()=>setMenuOpen(quiz.id)} aria-label={`Options for ${quiz.name}`}>
                  <MoreVertical size={21}/>
                </button>
                {menuOpen === quiz.id && (
                  <section className='bg-black dark:bg-gray-900 h-35 w-37 fixed flex justify-start items-end flex-col text-white rounded-xl z-999'>
                   <button className='p-3 hover:bg-white/5 text-lg' onClick={()=>setMenuOpen(null)}><X size={20}/></button>
                    <div className='flex justify-start items-start flex-col gap-2 font-semibold pr-3'>
                      <button onClick={()=>setChangeName(quiz.id)}>Rename</button>
                      <button onClick={()=>deleteQuiz(quiz.id)}>Delete</button>
                    </div>
                  </section>
                )}
                </header>
                <h3 className='text-lg text-gray-300 dark:text-gray-500'>{quiz.questions.length} topic{quiz.questions.length === 1 ? '' : 's'}</h3>
                </section>
                <Link to={`/${quiz.id}`} className='btn flex h-10 w-33 items-center justify-center rounded-sm text-sm'>See full quiz</Link>
            </article> 
          )
})}
     </section>
    </main>
  )
}

export default Quizzes
