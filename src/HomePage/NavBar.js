import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
const NavBar = () => {
  return (
           <div>
               <div className='nav'>
                    <div className='nav__images'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeq7mSwsNqs9ovQC9e_bg39c9TF0TOoLvMv9P5iI67xg&s" className='nav__image'/>
                    </div>
                    <div className='nav__links'>
                       <NavLink className='nav__link' to='/' 
                       style={
                          ({isActive})=>{
                            return {
                                 color:isActive? 'red' :'white'
                            }
                          }
                       }>Home</NavLink>
                       <NavLink className='nav__link' to='/Signup' 
                       
                       style={
                        ({isActive})=>{
                               return {
                                 color:isActive? 'red ' : 'white'
                               }
                        }
                       }
                       
                       >SignUp</NavLink>
                       <NavLink className='nav__link'
                          to='/login'
                       style={
                        ({isActive})=>{
                            return {
                              color:isActive? 'red' : 'white'
                            }
                        }
                       }
                       
                       >Login</NavLink>
                    </div>
               </div>
                 
              


          { /*
             
             
              nk>
         
         */} 
           </div>
    
         
     
  )
}

export default NavBar
