import React from 'react'
import "./Home.css"

const HomePage = () => {
  return (
  <div>
    <div className='home'>
           <div className='home__contents'>
              <h1 className='home__title'>Next generation digital banking</h1>
              <p className='home__description'>Take your financial life online.My bank account will be one-stop-shop for spending,saving,budgeting,investing, and much more</p>
           </div>
           <div className='home__images'>
               <img  src='https://media.istockphoto.com/id/640267784/photo/bank-building.jpg?s=612x612&w=0&k=20&c=UTtm4t6WR-MLwO6ATq5l6n3SoCc6HpaClEFZMxO1Nek=' className='home__image'/>
           </div>
             
    </div>
      <div className='main' >
           <div className='main__contents'>
            <h2>Why Choose MyBank?</h2>
            <div className='main__description'>
               <p className='main__desc'>We leverage open banking to turn your bank account into financial hub.</p>
              <p className='main__desc'>Control your finances like never before.</p>
            </div>
            
           </div>
           <div className='main__images'>
              <img src='/home/hp/Pictures/budgetplanning.jpeg'/>

           </div>
      </div>
      <footer className='footer'>
          <div className='footer__nav'>
              <div>
            
              </div>
          </div>
      </footer>
    </div>
  )

  }
export default HomePage;