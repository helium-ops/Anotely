import React from 'react'
import { useAuth } from '../context/AuthProvider'

const FocusSessions = () => {
    const { currentUser } = useAuth();
    const focusSessions = currentUser?.focusSessions ?? [];
    function makeFocusSession(){}
  return (
    <div>
      
    </div>
  )
}

export default FocusSessions
