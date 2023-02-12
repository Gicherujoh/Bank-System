import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar2 = () => {
  return (
    <div>
           <div className='dashboard__nav'>
            <div>
               <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeq7mSwsNqs9ovQC9e_bg39c9TF0TOoLvMv9P5iI67xg&s' className='dashboard__image'/>
              
            </div>
            <div className='dashboard__links'>
                <NavLink className='dashboard__navlink' to='/dashboard/deposit'
                
                style={({isActive})=>{
                    return {
                        color : isActive? 'red' : 'white'
                    }
                }}
                
                >Deposit</NavLink>
               <NavLink className='dashboard__navlink' to='/dashboard/withdraw'
               
               style={({isActive})=>{
                  return {
                    color :isActive? 'red' :'white'
                  }

               }}
               
               >Widthdraw</NavLink>
               <NavLink className='dashboard__navlink' to='/dashboard/balance'
                 style={({isActive})=>{
                    return {
                        color: isActive? 'red' : 'white',
                  
                    }

                 }}
               
               >Balance</NavLink>
               <NavLink className='dashboard__navlink' to='/dashboard/userInfo'
                  style={({isActive})=>{
                      return {
                        color :isActive ? 'red' :'white'
                      }

                  }}
               
               >User Information</NavLink>
            </div>
            
        </div>

    </div>
  )
}

export default Navbar2