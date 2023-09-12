import React from 'react'
import '../styles/Question.css'
import Question from '../components/Question'

function Question2() {
    const q2 = {
        n: 2,
        q: "How often do you wash your hair?",
        a: [
            "a. Daily",
            "b. Every other day",
            "c. Twice a week",
            "d. Once a week",
            "e. Once every two weeks"
        ]
    }

  return (
    <Question question={q2}/>
  )
}

export default Question2