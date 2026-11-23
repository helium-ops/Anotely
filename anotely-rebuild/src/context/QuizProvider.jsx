import React, { createContext } from 'react'

const QuizContext = createContext(null);

const QuizProvider = ({children}) => {
  return (
    <QuizContext.Provider value={{}}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizProvider
