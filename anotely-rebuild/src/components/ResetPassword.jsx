import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const { users } = useAuth();

    function resetPassword(data){
      const targettedUser = users.find((user)=> data.email);
      if(users.length === 0){
        toast.error('No users yet!');
        return;
      }

      if(data.password != data.confirmPassword){
        toast.error('Unconfirmed password!');
        return;
      }

      targettedUser.password = data.confirmPassword;
    }
  return (
    <main className='min-h-screen w-full flex flex-col justify-center items-center gap-5 p-4 lg:pb-8'>
    <section className='flex justify-center items-center flex-col scale-90 md:scale-100'>
      <h1 className='font-bold text-2xl sm:text-4xl md:text-4xl'>Reset password</h1>
      <form className='flex justify-around items-center flex-col h-100 gap-4'>
        <section className='flex justify-around items-start flex-col h-40 gap-3'>
        <div className='flex justify-start items-start flex-col gap-2'>
          <label htmlFor="#email" className='text-md font-medium'>Email</label>
          <input type="email" id='email' placeholder='you@example.com' className='w-100 h-10 pl-4 border border-gray-200 dark:border-gray-700 rounded-full outline-none'/>
        </div>
        <div className='flex justify-start items-start flex-col gap-4'>
          <label htmlFor="#password" className='text-md font-medium'>Password</label>
          <input type="password" id='password' placeholder='••••••••' className='w-100 h-10 pl-4 border border-gray-200 dark:border-gray-700 rounded-full outline-none'/>
        </div>
        <div className='flex justify-start items-start flex-col gap-4'>
          <label htmlFor="#password" className='text-md font-medium'>Confirm Password</label>
          <input type="password" id='password' placeholder='••••••••' className='w-100 h-10 pl-4 border border-gray-200 dark:border-gray-700 rounded-full outline-none'/>
        </div>
        </section>
        <button className='w-100 h-10 rounded-full mt-7 font-medium btn'>Reset Password</button>
      </form>
      <Link to="/" className='text-blue-500'>Back to log in</Link>
    </section>
    </main>
  )
}

export default ResetPassword
