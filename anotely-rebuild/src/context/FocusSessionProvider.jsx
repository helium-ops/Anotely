import React, { createContext, useContext } from 'react'

const FocusSessionContext = createContext(null);

const FocusSessionProvider = ({children}) => {
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