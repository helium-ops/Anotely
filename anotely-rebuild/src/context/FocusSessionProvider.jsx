import React, { createContext, useContext } from 'react'
import { useAuth } from './AuthProvider';

const FocusSessionContext = createContext(null);

const FocusSessionProvider = ({children}) => {
  const { currentUser, setCurrentUser, users, setUsers } = useAuth();
  return (
    <FocusSessionContext.Provider value={{}}>
        {children}
    </FocusSessionContext.Provider>
  )
}

export default FocusSessionProvider

export function useFocusSession(){
    return useContext(FocusSessionContext);
}