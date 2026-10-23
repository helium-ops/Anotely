import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const NavBar = () => {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))) 
  return (
    <aside className='hidden md:flex md:justify-around md:items-start md:flex-col md:gap-3 md:h-162 border-r border-r-gray-200 dark:border-r-gray-700 fixed bottom-2 left-2 w-55 pl-2'>
      <section className='flex justify-center items-start flex-col gap-3'>
        <h1 className='header'>Subjects</h1>
        <div>
          {user.subjects.length === 0 ? <h2 className='subHeader'>Make a new Subject! </h2> : user.subjects.map((subject)=>(
            <h3 key={subject.id}>{subject.name}</h3>
          ))}
        </div>
        <button className='btn font-semibold h-10 w-30 text-[1.1vw] rounded-[0.7vw] sm:rounded-[0.5vw] md:rounded-[0.3vw]'>{user.subjects.length === 0 ? "First Subject" : "See all subjects"}</button>
      </section>
      <section className='flex justify-center items-start flex-col gap-3'>
        <h1 className='header'>Quizzes</h1>
        <div>
          {user.quizzes.length === 0 ? <h2 className='subHeader'>Make a new Quiz! </h2> : user.quiz.map((quiz)=>(
            <h3 key={quiz.id}>{quiz.name}</h3>
          ))}
        </div>
        <button className='btn font-semibold h-10 w-30 text-[1.1vw] rounded-[0.7vw] sm:rounded-[0.5vw] md:rounded-[0.3vw]'>{user.subjects.length === 0 ? "First Subject" : "See all subjects"}</button>
      </section>
      <section className='flex justify-center items-start flex-col gap-3'>
        <h1 className='header'>Focus Sessions</h1>
        <div>
          {user.focusSessions.length === 0 ? <h2 className='subHeader w-full'>Make a new Session! </h2> : user.focusSessions.map((focusSession)=>(
            <h3 key={focusSession.id}>{focusSession.name}</h3>
          ))}
          
        </div>
        <button className='btn font-semibold h-10 w-30 text-[1.1vw] rounded-[0.7vw] sm:rounded-[0.5vw] md:rounded-[0.3vw]'>{user.subjects.length === 0 ? "First Subject" : "See all subjects"}</button>
      </section>
      <h3 className='text-[10px] sm:text-[13px]' >{user.email}</h3>
    </aside>
  )
}

export default NavBar
