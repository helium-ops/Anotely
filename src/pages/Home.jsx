import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Dashboard from '../components/Dashboard';
import { useAuth } from '../context/AuthProvider';
import Subject from '../components/Subject';

export default function Home(){
  const { currentUser } = useAuth();
  return (
    <div className='flex w-full min-h-0 flex-1 flex-col lg:flex-row'>
      <NavBar/>
      <main className='flex min-h-0 min-w-0 flex-1'>
        <Outlet/>
      </main>
    </div>
  )
}
