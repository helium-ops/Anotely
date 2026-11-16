import React, { createContext, useContext } from 'react'
import { useAuth } from './AuthProvider'

const SubjectContext = createContext(null);

const SubjectProvider = ({children}) => {
  const { currentUser, users, setUsers  } = useAuth();
  
  function makeSubject(){
    const subjects = currentUser.subjects;
    const newSubject = {
      id: crypto.randomUUID(),
      name: 'Untitled',
      topics: []
    }
    const updatedSubjects = [...subjects, newSubject];
    const updatedUser = {...currentUser, subjects: updatedSubjects};
    const updatedUsers = users.map((user)=> user.id === currentUser.id ? updatedUser : user);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }
  return (
    <SubjectContext.Provider value={{makeSubject}}>{children}</SubjectContext.Provider>
  )
}

export default SubjectProvider

export function useSubject(){
  return useContext(SubjectContext);
}
