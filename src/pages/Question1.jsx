import React from 'react'
import '../styles/Question.css'
import Question from '../components/Question'


function Question1() {
    
    const q1 = {
        n: 1,
        q: "What's your hair type or texture?",
        a: [
            "a. Straight",
            "b. Curly",
            "c. Wavy",
            "d. Fine"
        ]
    }

  return (
    <Question question={q1}/>
  )
}

export default Question1