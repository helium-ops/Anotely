import React, { useState } from 'react'
import { Brain, Timer, Book } from 'lucide-react';
import { useAuth } from '../context/AuthProvider';
import { useSubject } from '../context/SubjectProvider'

const NewDashboard = () => {
    const { currentUser } = useAuth();
    const { makeSubject } = useSubject();
  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-start flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10 ">
        <header className='w-full flex justify-start items-start flex-col gap-2 pl-2'>
            <h1 className='font-bold text-xl md:text-2xl scale-110'>Welcome to Anotely, {currentUser.email}</h1>
            <h3 className='text-sm md:text-md text-gray-500 dark:text-gray-400 font-semibold scale-110'>Get started with the platform</h3>
        </header>
        <section className=' w-full flex justify-start items-start flex-col gap-3'>
            <div>
            <h1 className="font-bold text-xl md:text-2xl scale-90">Create your first subject</h1>
            <h3 className="text-sm md:text-md text-gray-500 dark:text-gray-400 font-semibold scale-90">A subject is a good way to get started.</h3>
            </div>
            <button className='h-10 w-30 btn rounded-sm font-semibold scale-92 ml-2' onClick={()=>makeSubject()}>First subject</button>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-[80%] gap-7'>
            <section className='flex justify-between items-start p-5 flex-col gap-4 surface h-45 rounded-xl'>
                <Book size={50}/>
                <div className='flex justify-start items-start flex-col gap-1'>
                <h1 className='font-bold text-xl md:text-2xl'>Subjects</h1>
                <h3 className='text-gray-700 dark:text-gray-300'>No subjects yet</h3>
                </div>
            </section>
            <section className='flex justify-between items-start p-5 flex-col gap-4 surface h-45 rounded-xl'>
                <Brain size={50}/>
                <div className='flex justify-start items-start flex-col gap-1'>
                <h1 className='font-bold text-xl md:text-2xl'>Quizzes</h1>
                <h3 className='text-gray-700 dark:text-gray-300'>No quizzes yet</h3>
                </div>
            </section>
            <section className='flex justify-between items-start p-5 flex-col gap-4 surface h-45 rounded-xl'>
                <Timer size={50}/>
                <div className='flex justify-start items-start flex-col gap-1'>
                <h1 className='font-bold text-xl md:text-2xl'>Timers</h1>
                <h3 className='text-gray-700 dark:text-gray-300'>No timers yet</h3>
                </div>
            </section>
            
        </section>
        <section className='flex justify-start items-start flex-col gap-3'>
                <div className='flex justify-start items-start flex-col gap-1'>
                <h1 className='text-xl md:text-2xl font-bold'>Or maybe a Focus session?</h1>
                <h3 className='text-sm md:text-md text-gray-500 dark:text-gray-400 font-semibold'>Start a focus session for productivity.</h3>
                </div>
                <button className='h-10 w-30 btn rounded-sm font-semibold mr-2'>First sesh</button>
            </section>
    </main>
  
  )
}

export default NewDashboard
