import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import { useSubject } from '../context/SubjectProvider';
import { Plus, MoreVertical, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Subjects = () => {
    const { currentUser, users, setUsers } = useAuth();
    const { makeSubject, deleteSubject, changeSubjectName } = useSubject();
    const [menuOpen, setMenuOpen] = useState(null);
    const [changeName, setChangeName] = useState(null);
    const subjects = currentUser.subjects;

  return (
    <main className='h-[91%] lg:h-[80%] min-h-0 w-full flex-1 min-w-0 flex justify-start items-start flex-col gap-13 pt-8 pl-8 px-3 overflow-y-auto'>
    <header className='flex justify-between items-center w-full p-0'>
      <div className='flex justify-start items-start flex-col gap-1 w-[80%]'>
        <h1 className='text-xl md:text-2xl xl:text-3xl font-bold'>Subjects</h1>
        <h3 className='text-sm md:text-md xl:text-lg font-semibold text-gray-200 dark:text-gray-600'>View all your subjects</h3>
      </div>
      <section className='flex justify-center items-center gap-2'>
         <button className='btn flex justify-center gap-1 items-center h-12 w-40 rounded-sm scale-90 lg:scale-100'
         onClick={()=>makeSubject()}>
          <span>Add a subject</span>
          <Plus size={20}/>
         </button>
      </section>
    </header>
    <section className='flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 flex-wrap w-full lg:w-[80%]'>
     {subjects.map((subject)=>{
          const topics = subject.topics;
            

          return(
            <article key={subject.id} className='relative flex h-64 w-72 shrink-0 flex-col items-start justify-between rounded-xl bg-gray-100 p-6 dark:bg-gray-900'>
                <section className='flex w-full min-w-0 flex-col items-start gap-3'>
                  <header className='flex w-full min-w-0 items-start justify-between gap-2'>
                    <div className='min-w-0 flex-1'>
                    {
                    changeName !== subject.id ?
                <h1 className='w-full truncate text-4xl font-bold text-black dark:text-white' title={subject.name}>{subject.name}</h1> : 
                <input type="text" defaultValue={subject.name} className='w-full min-w-0 rounded-md border border-gray-300 bg-transparent pl-2 text-2xl font-bold outline-none dark:border-gray-700'
                onKeyDown={(e)=>{
                  if(e.key === "Enter"){
                  changeSubjectName(subject.id, e.target.value);
                  setChangeName(null);
                }}}/>
                  }
                    </div>
                <button className="shrink-0 rounded-full p-2 text-gray-600 hover:bg-white/80 dark:text-gray-300 dark:hover:bg-white/10" onClick={()=>setMenuOpen(subject.id)} aria-label={`Options for ${subject.name}`}>
                  <MoreVertical size={21}/>
                </button>
                {menuOpen === subject.id && (
                  <section className='bg-black dark:bg-gray-900 h-35 w-37 fixed flex justify-start items-end flex-col text-white rounded-xl z-999'>
                   <button className='p-3 hover:bg-white/5 text-lg' onClick={()=>setMenuOpen(null)}><X size={20}/></button>
                    <div className='flex justify-start items-start flex-col gap-2 font-semibold pr-3'>
                      <button onClick={()=>setChangeName(subject.id)}>Rename</button>
                      <button onClick={()=>deleteSubject(subject.id)}>Delete</button>
                    </div>
                  </section>
                )}
                </header>
                <h3 className='text-2xl font-semibold text-gray-500 dark:text-gray-400'>{topics.length} topics</h3>
                </section>
                <Link to={`/${subject.id}`} className='flex h-14 w-48 items-center justify-center rounded-md bg-blue-700 text-xl font-semibold text-white transition hover:bg-blue-800'>Continue</Link>
            </article> 
          )
})}
    </section>
    </main>
  )
}

export default Subjects
