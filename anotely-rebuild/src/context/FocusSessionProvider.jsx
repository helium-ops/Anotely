import React, { createContext, useContext } from 'react'
import { useAuth } from './AuthProvider';

const FocusSessionContext = createContext(null);

const FocusSessionProvider = ({children}) => {
  const { currentUser, setCurrentUser, users, setUsers } = useAuth();
  const focusSessions = currentUser?.focusSessions ?? [];
    function makeFocusSession(){
      const newFocusSession = {
        name: 'Untitled',
        id: crypto.randomUUID(),
        timer: 0,
        finished: false
      }
      const updatedFocusSessions = [...focusSessions, newFocusSession];
      const updatedUser = {
        ...currentUser,
        focusSessions: updatedFocusSessions
      }
      const updatedUsers = users.map((user)=>user.id === currentUser.id ? updatedUser : user);
      setCurrentUser(updatedUser);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  return (
    <FocusSessionContext.Provider value={{makeFocusSession}}>
        {children}
    </FocusSessionContext.Provider>
  )
}

export default FocusSessionProvider

export function useFocusSession(){
    return useContext(FocusSessionContext);
}