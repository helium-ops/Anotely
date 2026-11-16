import React from 'react'
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

const ExistingUserDashboard = () => {
  const { currentUser } = useAuth();
  const subjects = currentUser.subjects;
  if (!currentUser) {
  return <p>Loading dashboard...</p>;
}
  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-start flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10">
        <header className='w-full flex justify-start items-start flex-col gap-1.5'>
            <h1 className='text-2xl md:text-3xl font-bold'>Welcome back, {currentUser.email}</h1>
            <h3 className='text-md font-semibold text-gray-500'>Jump back to your work</h3>
        </header>
        <section className='flex justify-center items-center flex-wrap gap-3 w-[80%]'>
         {subjects.slice(0, 4).map((subject)=>{
          const topics = subject.topics;
            

          return(
            <article key={subject.id} className='flex justify-start items-start flex-col gap-4 bg-gray-100 dark:bg-gray-900 h-40 w-50 py-4 px-4 rounded-lg scale-80 md:scale-90 xl:scale-100'>
                <section className='flex justify-start items-start flex-col gap-1'>
                <h1 className='text-3xl font-bold'>{subject.name}</h1>
                <h3 className='text-lg text-gray-300 dark:text-gray-500'>{topics.length} topics</h3>
                </section>
                <Link to={subject.id} className='btn h-10 w-33 flex justify-center items-center text-sm rounded-sm'>See full subject</Link>
            </article> 
          )
})}

        <section className='flex justify-center items-center gap-1 md:gap-3 xl:gap-5 w-full flex-wrap mt-15'>
          <article className='flex justify-start items-start flex-col gap-6 bg-gray-100 dark:bg-gray-900 h-40 w-90 p-4 rounded-lg scale-80 md:scale-90 xl:scale-100'>
            <div className='flex justify-start items-start flex-col gap-1'>
              <h1 className='text-xl font-bold'>Only 3 minutes left for English!</h1>
              <h3 className='text-md text-gray-300 dark:text-gray-500'>Make it 0!</h3>
              </div>
              <button className='btn h-11 w-33 flex justify-center items-center text-md rounded-sm'>Make it 0</button>
          </article>
          <article className='flex justify-start items-start flex-col gap-6 bg-blue-500 dark:bg-blue-600 h-40 w-90 p-4 rounded-lg scale-80 md:scale-90 xl:scale-100'>
            <div>
              <h1 className='text-xl font-bold text-white'>Finish up your math quiz!</h1>
              <h3 className='text-md text-gray-700 dark:text-gray-300'>Only 3 questions left!</h3>
            </div>
            <button className='bg-white h-11 w-33 flex justify-center items-center text-md font-semibold rounded-sm transition duration-30 hover:opacity-80 dark:text-black'>Finish up</button>
          </article>
        </section>
        </section>
    </main>
  )
}

export default ExistingUserDashboard
