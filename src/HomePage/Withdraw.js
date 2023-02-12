import React,{createContext,useContext,useState,useEffect} from 'react'
import './Withdraw.css'
import Modall from './Modal'
import { useNavigate } from 'react-router-dom'
import { set, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { AppState,DepositState,WithdrawState,BalanceState} from '../App' 
import WithdrawModal from './WithdrawModal'

import WithdrawMessage from './WithdrawMessage'
import Login from './Login'

const schema = yup.object().shape({
  withdraw:yup.number().required().positive()

})

const Withdraw = ({setModal,openmodal}) => {
  const navigate = useNavigate()
   const {amountDeposit} = useContext(DepositState)
   const {amountBalance,setBalance} = useContext(BalanceState)
   const {amountWithdraw,setWithdraw} = useContext(WithdrawState)
   const {userInfo} = useContext(AppState)
   
 
   const [show,setShow] = useState(false)
   const [holdShow,setHoldShow] = useState(false)
   const [showmessage,setShowMessage] = useState(false)
   

   const {register,handleSubmit,formState:{errors}} = useForm({
      resolver:yupResolver(schema)
   })


   const OnWithdraw = (data,e)=>{
       e.preventDefault();
       setShow(false)
       if(data.withdraw >= amountDeposit.deposit)
       {
            setShow(false)
           setShowMessage(true)
       }else{
          setShow(true)
          setShowMessage(false)
          setWithdraw(data)
       }
       
         
        

   
   }
   console.log(amountWithdraw.withdraw)
  return (
    <div className='deposit'>
      
        { show && !errors.withdraw && <WithdrawModal showmodal={show} setModal={setShow}/>}
        { showmessage && <WithdrawMessage message={showmessage} setMessage={setShowMessage}/>}

       <div className='withdraw__menu'>
            <h2 className='withdraw__menu__title'>Withdraw Transaction Costs</h2>
            <h3 className='content'>For withdraws les than 1000, transaction cost is 50</h3>
            <h3 className='content'>For withdraws more than 1000 and  less than 5000, transaction cost is 100</h3>
            <h3 className='content'>For withdraws more than 5000 and less than 10000, transaction cost is 180</h3>
            <h3 className='content'>For withdraws more than 1000 and less than 30000, transaction cost is 285</h3>
            <h3 className='content'>For withdraws more than 30000 and less than 100000, transaction cost is 500</h3>
            <h3 className='content'>For withdraws more than 100000, transaction cost is 1500 </h3>

      </div>
        
        <h2>Welcome {userInfo.Fname}</h2>
     <div className='main'>
       <form className='deposit__form' onSubmit={handleSubmit(OnWithdraw)}>
            <label className='deposit__label'>How much do you want to withdraw</label>
           <input type='text' name='withdraw' className='deposit__input'
          {...register('withdraw')}  autoComplete='off' />    
         <div>
           <button type='submit' className='withdraw__button' onClick={()=>{  
              { !errors.deposit && setShow(true)}   
           }} > Withdraw</button>
         
       </div>
    </form>
 </div>
</div>

  )
 
}
export default Withdraw
