import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { useAuth } from '../context/AuthProvider'
import { SubjectContext } from '../context/SubjectContext'
import { Timer } from 'lucide-react';
import subjectIcon from "../assets/subjectIcon.png";
import helpCircle from "../assets/Help-circle.png"


function NewPerson({currentUser, makeSubject}){
  const timer = currentUser.timers;
 return  (
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
        
  )
}

function OldDashboard({currentUser}){
   const timer = currentUser.timers?.sort((timer)=> timer.duration <= timer.duration)[0];
   return(
    <section className='flex min-w-0 flex-1 flex-col items-start gap-6 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 overflow-y-auto p-4 sm:gap-10 sm:p-6 lg:p-8'>
    <header className='flex justify-start items-start flex-col gap-2'>
      <h1 className='header'>Another day, another chance for productivity</h1>
      <h3 className='subHeader'>Finish up your remaining work</h3>
    </header>
    <section className='flex justify-center items-center flex-col gap-3 w-full flex-wrap scale-80 sm:scale-90 md:scale-100 px-3'>
      <section>
      {currentUser.subjects.length <= 5 ? 
      currentUser.subjects.map((subject)=>(
        <section className='flex justify-start items-start flex-col gap-8 bg-[#F3F3F3] dark:bg-[#09090B] h-42 w-50 p-5 rounded-xl'>
          <div className='flex justify-center items-start flex-col gap-1'>
            <h1 className='header'>{subject.name}</h1>
            <h3 className='subHeader'>{subject.topics.length === 1 ? subject.topics[0].name : subject.topics.length === 0 ? "No topics yet!" : `${subject.topics.length} topics`}</h3>
          </div>
          <Link to={`/${subject.id}`} className='btn py-2 px-4 rounded-[0.5vh] font-semibold text-center'> See full subject</Link>
        </section>
      )) : "s" }
      </section>
      <button className='btn h-12 w-40 rounded-[0.5vh] scale-90 font-semibold'>See all Subjects</button>
    </section>
    <section className='-mt-3 flex w-full flex-col items-center justify-center md:flex-row scale-60 sm:-mt-9 md:-mt-11 lg:-mt-15 xl:-mt-22 gap-10'>
        <section className='bg-[#F3F3F3] dark:bg-[#09090B] flex min-h-[15rem] w-full max-w-[36rem] flex-col items-start justify-start gap-8 rounded-lg px-5 py-8 text-left'>
          <div className='flex w-full flex-col items-start justify-start gap-3 text-left scale-110'>
            <h1 className="header w-full break-words text-left text-3xl ml-5">{timer ? `Only 1 minute left for ${timer.name}` : "Make your first session!"}</h1>
            <h3 className="subHeader w-full text-left text-xl font-semibold ml-5">{timer ? `Make it 0!` : 'Stay focused and make every second count'}</h3>
          </div>
          <button className='btn h-18 w-48 self-start rounded-lg text-2xl font-semibold'>{timer ? `Finish up` : 'First timer'}</button>
        </section>
        <section className='btn flex min-h-[15rem] w-full max-w-[36rem] flex-col items-start justify-start gap-8 rounded-lg px-5 py-8 text-left'>
          <div className='scale-150 flex justify-start items-start flex-col gap-2'>
            <h1 className="header ml-12">
              Finish your Math quiz!
            </h1>
            <h2 className="subHeader ml-12">
              Only 3 questions left!
            </h2>
          </div>
          <button className='bg-white dark:bg-black text-black dark:text-white h-12 w-30 scale-130 ml-5 mt-8 font-semibold rounded-[0.6vh]'>Finish up</button>
        </section>
        </section>
         
    </section>
   )}
const Dashboard = () => {
  const { currentUser } = useAuth();
  const { makeSubject } = useContext(SubjectContext);
  
  return currentUser.subjects.length === 0 ? (
        <NewPerson currentUser={currentUser} makeSubject={makeSubject}/>
  ) : (
    <OldDashboard currentUser={currentUser}/>
  )
  
}

export default Dashboard
