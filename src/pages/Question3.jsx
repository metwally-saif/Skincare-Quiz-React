import React from 'react'
import '../styles/Question.css'
import Question from '../components/Question'

function Question3() {
    const q3 = {
        n: 3,
        q: "What benefit do you look for in your hair products?",
        a: [
            "a. Anti-breakage",
            "b. Hydration",
            "c. Soothing dry scalp",
            "d. Repairs the appearance of damaged hair",
            "e. Volume",
            "f. Curl and coil enhancing."
        ]
    }

  return (
    <Question question={q3}/>
  )
}

export default Question3