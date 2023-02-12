import React,{useContext,useState,useEffect} from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './ForgotPassword.css'
import { AppState,ForgotPasswordState } from '../App'
import { useForm } from 'react-hook-form'



const schema = yup.object().shape({
    setPassword:yup.string().required().min(4).max(16),
    confirmPassword:yup.string().required().oneOf([yup.ref('setPassword'),null])

})

const ForgotPassword = () => {
    const {handleSubmit,register, formState:{errors}} = useForm({
        resolver:yupResolver(schema)

    })

    const {userInfo,setUserInfo} = useContext(AppState)
    const  { fPassword, setPassword} = useContext(ForgotPasswordState)
   

   const navigate = useNavigate()
   

    const HandleSubmit = (data,event)=>{
        event.preventDefault(data)
        setPassword(data)
         if(fPassword.setPassword === fPassword.confirmPassword)
         {
            navigate('/login')
         }
        
      
    }
   
  return (
    <div>
        <div className='forgotpassword'>
           <h2>Forgot  Password</h2>    
           <form className='Form' onSubmit={handleSubmit(HandleSubmit)}>
         <div className='form__fields'>
            <label className='form__label'>Set New Password</label>
            <input type='password' placeholder='Set Password' name='setPassword' className='form__inputs'  {...register('setPassword')}/>
        </div>
        <div className='form__fields'>
            <label className='form__label'>Confirm new Password</label>
            <input type='password' placeholder='Confirm Password' name='confirmPaswword'  className='form__inputs' {...register('confirmPassword')}/>
        </div>
        <button className='button__login' type='submit'>Submit</button>
        
    </form>

            <Link to='/'>Home</Link>

        </div>
    
    </div>
   
  )
}

export default ForgotPassword
