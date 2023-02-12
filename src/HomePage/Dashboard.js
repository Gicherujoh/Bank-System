import React,{useContext} from 'react'
import HomePage from './HomePage'
import { AppState } from '../App'
import { DepositState } from '../App'
import { NavLink } from 'react-router-dom'
import './dashboard.css'
const Dashboard = () => {
  const { userInfo}  = useContext(AppState)
 
    return (
  <>
      
      <div>
        <h2 className='title1'>{userInfo.Fname} Welcome to the Dashboard Page </h2>
      
      <div className='dashboard'>
        
        <HomePage/>
     </div>
      </div>
   
  </>
      
         
  

  );
}

export default Dashboard