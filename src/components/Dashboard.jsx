import React, { useContext } from 'react'
import { useAuth } from '../context/AuthProvider'
import { SubjectContext } from '../context/SubjectContext'
import { Timer } from 'lucide-react';
import subjectIcon from "../assets/subjectIcon.png";
import helpCircle from "../assets/Help-circle.png"

const Dashboard = () => {
  const { currentUser } = useAuth();
  const { makeSubject } = useContext(SubjectContext);
  
  return currentUser.subjects.length === 0 ? (
    <section className='flex min-w-0 flex-1 flex-col items-start gap-8 overflow-y-auto p-4 sm:gap-10 sm:p-6 lg:p-8'>
        <header>
            <h1 className='header break-words'>Welcome to Anotely, {currentUser.email}</h1>
            <h2 className='subHeader'>Get started with the platform</h2>
        </header>
        <section className='flex flex-col items-start gap-5'>
          <div className='flex flex-col gap-2'>
          <h1 className="header">Create your first Subject</h1>
          <h3 className='subHeader'>A Subject is a good way to get started.</h3>
          </div>
          <button className='btn h-11 w-35 rounded font-semibold' onClick={()=>{
           makeSubject();
          }}>First Subject</button>
        </section>
        <section className='grid w-full min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
          <section className='flex min-w-0 flex-col items-start gap-5 rounded-xl bg-[#F3F3F3] p-5 dark:bg-[#09090B]'>
            <img src={subjectIcon} alt="Book icon" className='h-10'/>
            <div className='flex justify-center items-start flex-col gap-2'>
            <h1 className='header'>Subjects</h1>
            <h3 className='subHeader'>No Subjects yet</h3>
            </div>
          </section>
          <section className='flex min-w-0 flex-col items-start gap-5 rounded-xl bg-[#F3F3F3] p-5 dark:bg-[#09090B]'>
            <img src={helpCircle} alt="Help Circle" className='h-10'/>
            <div className='flex justify-center items-start flex-col gap-2'>
            <h1 className='header'>Quizzes</h1>
            <h3 className='subHeader'>No Quizzes yet</h3>
            </div>
          </section>
          <section className='flex min-w-0 flex-col items-start gap-5 rounded-xl bg-[#F3F3F3] p-5 dark:bg-[#09090B]'>
            <Timer size={50} strokeWidth={2}/>
            <div className='flex justify-center items-start flex-col gap-2'>
            <h1 className='header'>Focus Sessions</h1>
            <h3 className='subHeader'>No Sessions yet</h3>
            </div>
          </section>
          </section>
          <section className='flex flex-col items-start gap-5'>
          <div className='flex flex-col gap-2'>
          <h1 className="header">Or maybe a Focus Session?</h1>
          <h3 className='subHeader'>Start a focus session for productivity.</h3>
          </div>
          <button className='btn h-11 w-30 rounded font-semibold'>First sesh</button>
          </section>
        </section>
        
  ) : (
    <h3></h3>
  )
  
}

export default Dashboard
