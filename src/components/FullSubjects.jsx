import React, { useContext, useState } from 'react'
import { useAuth } from '../context/AuthProvider';
import { Plus } from 'lucide-react'
import emptyImg from "../assets/emptyImg.png"
import { Link } from 'react-router-dom';
import { SubjectContext } from "../context/SubjectContext";

const FullSubjects = () => {
  const [ currentUser ] = useState(JSON.parse(localStorage.getItem('user')));
  const { makeSubject } = useContext(SubjectContext);
  return (
    <section className='flex min-w-0 flex-1 flex-col items-start gap-6 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 overflow-y-auto p-4 sm:gap-10 sm:p-6 lg:p-8'>
      <header className='w-full h-20 flex justify-between items-center'>
        <div className='flex justify-start items-start flex-col gap-2 scale-110 ml-3'>
        <h1 className='header'>Subjects</h1>
        <h3 className="subHeader">View all your Subjects</h3>
        </div>
        <button className='btn flex justify-around items-center px-3 font-semibold h-12 w-39 gap-1 rounded-[0.5vh]' onClick={()=>makeSubject()}>Add a Subject <Plus size={22} strokeWidth={3}/></button>
      </header>
      <section className='flex justify-center items-center flex-wrap gap-7'>
        {currentUser.subjects.map((subject)=>(
            <section className='flex justify-start items-start flex-col gap-8 bg-[#F3F3F3] dark:bg-[#09090B] h-42 w-50 p-5 rounded-xl' key={subject.id}>
          <div className='flex justify-center items-start flex-col gap-1'>
            <h1 className='header'>{subject.name}</h1>
            <h3 className='subHeader'>{subject.topics.length === 1 ? subject.topics[0].name : subject.topics.length === 0 ? "No topics yet!" : `${subject.topics.length} topics`}</h3>
          </div>
          <Link to={`/${subject.id}`} className='btn py-2 px-4 rounded-[0.5vh] font-semibold text-center'> See full subject</Link>
          </section>))}
      </section>
    </section>
  )
}

export default FullSubjects
