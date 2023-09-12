import React from 'react'
import '../styles/Question.css'
import Question from '../components/Question'

function Question5() {
    const q5 = {
        n: 5,
        q: "What is your natural hair color(s) today?",
        a: [
            "a. Black",
            "b. Brown",
            "c. Blonde",
            "d. Red/Orange",
            "e. Silver/Grey"
        ]
    }

  return (
    <Question question={q5}/>
  )
}

export default Question5