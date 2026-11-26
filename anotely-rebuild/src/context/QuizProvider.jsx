import React, { createContext, useContext } from 'react'
import { useAuth } from './AuthProvider'
import toast from 'react-hot-toast';

const QuizContext = createContext(null);

const QuizProvider = ({children}) => {
  const { currentUser, setCurrentUser, users, setUsers } = useAuth();
  const quizzes = currentUser?.quizzes ?? [];
  function makeQuiz(quiz){
    if(quiz.questions.find((question)=>question.correctAnswer === '')){
      toast.error('Have a correct answer!');
      return;
    }
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
  function renameQuiz(quizId, name){
    const targettedQuiz = quizzes.find((quiz)=>quiz.id === quizId);
    const updatedQuiz = {
      ...targettedQuiz,
      name: name
    };
    const updatedQuizzes = quizzes.map((quiz)=>quiz.id === quizId ? updatedQuiz : quiz);
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
    <QuizContext.Provider value={{makeQuiz, deleteQuiz, renameQuiz}}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizProvider

export function useQuiz(){
  return useContext(QuizContext);
}