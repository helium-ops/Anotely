import React from 'react'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'

const Home = () => {
  return (
    <main className='h-165 min-h-0 w-full flex justify-start items-center overflow-hidden relative'>
      <Navbar />
      <Dashboard/>
    </main>
  )
}

export default Home
