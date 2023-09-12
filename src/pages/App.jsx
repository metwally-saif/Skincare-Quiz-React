import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import QuizContext from '../Quiz-context';
import '../styles/App.css'


function App() {
  const { value, setValue } = useContext(QuizContext);


  return (
    <>
      <div className='title-container'>
        <div className='main-title'>
          <h1 className='title'>Build a self care routine suitable for you</h1>
          <p className='main-description'>Take out test to get a personalised self care routine based on your needs.</p>
          <Link onClick={() => setValue({ ...value, started: true})} to={'/q1'}><button className='start'>Start the quiz</button></Link>
        </div>
      </div>
    </>
  )
}

export default App
