import React,{useContext,useState,useMemo} from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { isRouteErrorResponse, Link } from 'react-router-dom'
import { AppState,DepositState } from '../App'
import './deposit.css'
import { Modal } from '@mui/material'
import { useForm } from 'react-hook-form'
import Modall from './Modal'


const schema = yup.object().shape({
    deposit:yup.number().required().positive()
})

const Deposit = ({show}) => {
 
  const {register,handleSubmit,formState:{errors}} = useForm({
      resolver:yupResolver(schema)
  })
    const {userInfo} = useContext(AppState)
    const {amountDeposit,setDeposit} = useContext(DepositState)
    
    const [modal,setModal] = useState(false)

    const  OnDeposit=(data,e)=>{
        e.preventDefault(data)
          if(data<=0)
            {
              setModal(false)
              
            }else {
                !errors.deposit && setModal(true)
            }  

       
          setDeposit(data)
        
          
          
    }
 
  return (
  <>
  
    <div className='deposit'>
         {  modal && !errors.deposit && <Modall openmodal={modal} setModal={setModal}/>}
        
       <h2>Welcome {userInfo.Fname}</h2>
      <div className='main'>
         <form className='deposit__form' onSubmit={handleSubmit(OnDeposit)}>
            <label className='deposit__label'>How much do you want do deposit</label>
            <input type='text' name='deposit' className='deposit__input'
            {...register('deposit')} autoComplete='off'
            />
            
            <div>
                <button className='deposit__button' onClick={()=>{  
               
                    {!errors.deposit && setModal(true)}
                }} >Deposit</button>
                
            </div>
         </form>
       

      </div>
      
     
     </div>
    </>
  )
}

export default Deposit