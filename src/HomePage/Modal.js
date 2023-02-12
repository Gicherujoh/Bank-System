import React,{useContext,useState} from 'react'
import { DepositState,AppState } from '../App'

import { useNavigate } from 'react-router-dom'
import { Box, Modal, Typography } from '@mui/material'
import './modal.css'
import Login from './Login'
const Modall = ({openmodal,setModal}) => {

    const {amountDeposit,setDeposit} = useContext(DepositState)
    const {userInfo} = useContext(AppState)

    const navigate = useNavigate()
    

    const [show,setShow] = useState(false)
  const [showDeposit,setShowDeposit]  = useState(false)

    if(!openmodal)
    {
       return null
    }
  
   
  return (
    <div >
      <div className='modal'>
        <h2 className='title'> {userInfo.Fname} You have successfully deposited  {amountDeposit.deposit}</h2>
        <button className='deposit__button1'
        onClick={()=>{
          setModal(false)
          setShowDeposit(null)
        }}
        
        >Cancel</button>
        <button className='deposit__button2' 
          onClick={()=>{
           
            setShowDeposit(amountDeposit.deposit)
            setModal(false)
            navigate('/dashboard')

            
          }}
        >Deposit</button>

      </div>
    </div>
    
            
    
  )
}

export default Modall