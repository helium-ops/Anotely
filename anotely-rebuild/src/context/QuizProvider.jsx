import React, { createContext, useContext } from 'react'
import { useAuth } from './AuthProvider'

const QuizContext = createContext(null);

const QuizProvider = ({children}) => {
  const { currentUser, setCurrentUser, users, setUsers } = useAuth();
  const quizzes = currentUser?.quizzes ?? [];
  function makeQuiz(quiz){
    if(quiz.questions.length === 0){return;}
    const updatedQuizzes = [...quizzes, quiz];
    const updatedUser = {
      ...currentUser,
      quizzes: updatedQuizzes
    };
    const updatedUsers = users.map((user)=>user.id === currentUser.id ? updatedUser : user);
    setCurrentUser(updatedUser);
    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }
  function deleteQuiz(id){
    const updatedQuizzes = quizzes.filter((quiz)=>quiz.id !== id);
    const updatedUser = {
      ...currentUser,
      quizzes: updatedQuizzes
    };
    const updatedUsers = users.map((user)=>user.id === currentUser.id ? updatedUser : user);
    setCurrentUser(updatedUser);
    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }
  return (
    <QuizContext.Provider value={{makeQuiz, deleteQuiz}}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizProvider

export function useQuiz(){
  return useContext(QuizContext);
}