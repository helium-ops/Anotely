import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { Timer } from 'lucide-react';
import subjectIcon from "../assets/subjectIcon.png";
import helpCircle from "../assets/Help-circle.png"

const Dashboard = () => {
  const { currentUser } = useAuth();
  
  return currentUser.subjects.length === 0 ? (
    <section className='flex justify-start items-start p-5 gap-10 flex-col fixed right-2 bottom-2 w-[calc(100vw-1rem)] md:w-[calc(100vw-15rem)] xl:max-w-[72.5rem] h-[calc(100vh-6rem)] max-h-[40rem] overflow-y-auto'>
        <header>
            <h1 className='header'>Welcome to Anotely, {currentUser.email}</h1>
            <h2 className='subHeader'>Get started with the platform</h2>
        </header>
        <section className='scale-90 flex flex-col gap-5 justify-start items-start'>
          <div className='flex flex-col gap-2'>
          <h1 className="header">Create your first Subject</h1>
          <h3 className='subHeader'>A Subject is a good way to get started.</h3>
          </div>
          <button className='btn w-35 h-11 rounded-[0.3vw] font-semibold'>First Subject</button>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 scale-90 sm:scale-90 lg:scale-90 justify-start items-start'>
          <section className='flex justify-start items-start flex-col bg-[#F3F3F3] dark:bg-[#09090B] h-40 sm:h-40 md:h-41 w-80 p-5 gap-5 rounded-xl'>
            <img src={subjectIcon} alt="Book icon" className='h-10'/>
            <div className='flex justify-center items-start flex-col gap-2'>
            <h1 className='header'>Subjects</h1>
            <h3 className='subHeader'>No Subjects yet</h3>
            </div>
          </section>
          <section className='flex justify-start items-start flex-col bg-[#F3F3F3] dark:bg-[#09090B] h-40 sm:h-40 md:h-41 w-80 p-5 gap-5 rounded-xl'>
            <img src={helpCircle} alt="Help Circle" className='h-10'/>
            <div className='flex justify-center items-start flex-col gap-2'>
            <h1 className='header'>Quizzes</h1>
            <h3 className='subHeader'>No Quizzes yet</h3>
            </div>
          </section>
          <section className='flex justify-start items-start flex-col bg-[#F3F3F3] dark:bg-[#09090B] h-40 sm:h-40 md:h-41 w-80 p-5 gap-5 rounded-xl'>
            <Timer size={50} strokeWidth={2}/>
            <div className='flex justify-center items-start flex-col gap-2'>
            <h1 className='header'>Focus Sessions</h1>
            <h3 className='subHeader'>No Sessions yet</h3>
            </div>
          </section>
          </section>
          <section className='scale-90 flex flex-col gap-5 justify-start items-start'>
          <div className='flex flex-col gap-2'>
          <h1 className="header">Or maybe a Focus Session?</h1>
          <h3 className='subHeader'>Start a focus session for productivity.</h3>
          </div>
          <button className='btn h-11 w-30 font-semibold rounded-[0.2vw]'>First sesh</button>
          </section>
        </section>
        
  ) : (
    <h3></h3>
  )
  
}

export default Dashboard
