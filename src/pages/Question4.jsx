import React from 'react'
import '../styles/Question.css'
import Question from '../components/Question'

function Question4() {
    const q4 = {
        n: 4,
        q: "Is there anything troubling you about your hair?",
        a: [
            "a. Breakage",
            "b. Frizz",
            "c. Scalp dryness",
            "d. Damage",
            "e. Tangling"
        ]
    }

  return (
    <Question question={q4}/>
  )
}

export default Question4