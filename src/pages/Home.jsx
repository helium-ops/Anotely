import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Dashboard from '../components/Dashboard';

export default function Home(){
  return (
    <div>
      <NavBar/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
     </Routes>
    </div>
  )
}

