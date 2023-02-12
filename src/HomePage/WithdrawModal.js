import React,{useContext,useState} from 'react'
import './withdrawModal.css'
import { useNavigate } from 'react-router-dom'
import { WithdrawState,DepositState,BalanceState } from '../App'
import { AppState} from '../App'
import WithdrawMessage from './WithdrawMessage'
const WithdrawModal = ({showmodal,setModal}) => {
   const {amountDeposit} = useContext(DepositState)
    const {userInfo} = useContext(AppState)
    const {amountBalance,setBalance} = useContext(BalanceState)
    const {amountWithdraw,setWithdraw} = useContext(WithdrawState)

    
    
    const navigate = useNavigate()

    const[handleShow,setHandleShow] = useState(false)
    const Withdraw = ()=>{
        
             if(amountWithdraw.withdraw <= 1000)
             {
                const amount = amountWithdraw.withdraw + 50

                if(amountDeposit.deposit >= amount)
                {
                  setBalance(amountDeposit.deposit - amount)
                  navigate('/dashboard/balance')
                }else{
                  
                  setHandleShow(true)
                }

             }else if(amountWithdraw.withdraw > 1000 && amountWithdraw.withdraw <= 5000)
             {
                 const amount = amountWithdraw.withdraw + 100

                 if(amountDeposit.deposit >= amount)
                 {
                     setBalance(amountDeposit.deposit - amount)
                     navigate('/dashboard/balance')
                 }else{
                   setHandleShow(true)
                 }
             }else if(amountWithdraw.withdraw > 5000 && amountWithdraw.withdraw <= 10000)
             {
                
                  const amount = amountWithdraw.withdraw + 180
                 if(amountDeposit.deposit >= amount)
                 {
                      setBalance(amountDeposit.deposit - amount)
                      navigate('/dashboard/balance')
                 }else{
                     setHandleShow(true)
                 }
             }else if(amountWithdraw.withdraw > 10000 && amountWithdraw.withdraw <= 30000)
             {
                 const amount = amountWithdraw.withdraw + 285
                 if(amountDeposit.deposit >= amount)
                 {
                    setBalance(amountDeposit.deposit - amount)
                    navigate('/dashboard/balance')
                 }else{
                    setHandleShow(true)
                 }
              }else if(amountWithdraw.withdraw > 30000 && amountWithdraw.withdraw <= 100000)
              {
                  const amount = amountWithdraw.withdraw + 500
                    if(amountDeposit.deposit >= amount)
                    {
                       setBalance(amountDeposit.deposit - amount)
                       navigate('/dashboard/balance')
                       
                    }else{
                      setHandleShow(true)
                    }
              }else if(amountWithdraw.withdraw > 100000)
              {
                  const amount = amountWithdraw.withdraw + 1500
                  if(amountDeposit.deposit >= amount)
                  {
                       setBalance(amountDeposit.deposit - amount)
                       navigate('/dashboard/balance')
                  }else{
                      setHandleShow(true)
                  }
              }
                
    }
   return (
    <div>
        
        
        <div className='withdraw'>
             <h2 className='withdraw__Title'>{userInfo.Fname} You have successfully withdraw {amountWithdraw.withdraw} </h2>

             <div className='withdraw__buttons'>
                <button className='withdraw__button1'  onClick={()=>{
                    setModal(false)

                }}>Cancel</button>
                
                <button className='withdraw__button2' 
                  onClick={Withdraw}           
                >Withdraw</button>
               
             
             </div>

        </div>
       

    </div>
  )
}

export default WithdrawModal