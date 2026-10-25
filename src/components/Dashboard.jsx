import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Dashboard = () => {
  const { currentUser } = useAuth();
  
  return currentUser.subjects.length === 0 ? (
    <section className='flex justify-cstart items-start p-5 gap-10 flex-col fixed right-2 bottom-2 w-[calc(100vw-1rem)] md:w-[calc(100vw-15rem)] xl:max-w-[72.5rem] h-[calc(100dvh-6rem)] max-h-[40rem]'>
        <header>
            <h1 className='header'>Welcome to Anotely, {currentUser.email}</h1>
            <h2 className='subHeader'>Get started with the platform</h2>
        </header>
        <section className='scale-90 flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
          <h1 className="header">Create your first Subject</h1>
          <h3 className='subHeader'>A Subject is a good way to get started.</h3>
          </div>
          <button className='btn w-35 h-11 rounded-[0.3vw] font-semibold'>First Subject</button>
        </section>
    </section>
  ) : (
    <h3></h3>
  )
  
}

export default Dashboard
