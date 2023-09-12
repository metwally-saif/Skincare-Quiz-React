import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Resaults.css'
import Products from '../components/Products'

function Resaults() {

  return (
    <>
      <div className='title-container r-title-container'>
        <div className='main-title'>
          <h1 className='title r-title'>Build you everyday self care routine.</h1>
          <p className='main-description r-description'>Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day.</p>
          <Link to='/'><button className='retake'>Retake the quiz</button></Link>
        </div>
      </div>
      <Products/>
    </>
  )
}

export default Resaults