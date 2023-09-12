import { React, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuizContext from './Quiz-context'
import App from './pages/App'
import Question1 from './pages/Question1'
import Question2 from './pages/Question2'
import Question3 from './pages/Question3'
import Question4 from './pages/Question4'
import Question5 from './pages/Question5'
import Resaults from './pages/Resaults'

function Indexer() {
    const [value, setValue] = useState({
        started: false,
        "q1": '',
        "q2": '',
        "q3": '',
        "q4": '',
        "q5": ''
    })

  return (
        <BrowserRouter>
            <QuizContext.Provider value={{value, setValue}}>
                <Routes>
                    <Route path='/' element={<App/>}/>
                    <Route path='/q1' element={<Question1/>}/>
                    <Route path='/q2' element={<Question2/>}/>
                    <Route path='/q3' element={<Question3/>}/>
                    <Route path='/q4' element={<Question4/>}/>
                    <Route path='/q5' element={<Question5/>}/>
                    <Route path='/r' element={<Resaults/>}/>
                </Routes>
            </QuizContext.Provider>
        </BrowserRouter>
    )
}

export default Indexer