import React, { createContext, useContext } from 'react'
import { useAuth } from './AuthProvider'

const QuizContext = createContext(null);

const QuizProvider = ({children}) => {
  const { currentUser, setCurrentUser, users, setUsers } = useAuth();
  const quizzes = currentUser?.quizzes ?? [];
  function makeQuiz(){
    const newQuiz = {
      id: crypto.randomUUID(),
      name: 'Untitled',
      questions: []
    };
    const updatedQuizzes = [quizzes, newQuiz];
    const updatedUser = {
      ...currentUser,
      quizzes: updatedQuizzes
    };
    const updatedUsers = users.map((user) => user.id === currentUser.id ? updatedUser : user);
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }
  return (
    <QuizContext.Provider value={{makeQuiz,}}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizProvider

export function useQuiz(){
  return useContext(QuizContext);
}