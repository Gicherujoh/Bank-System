import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'

import './Login.css'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate,NavLink} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AppState,ForgotPasswordState } from '../App'


const schema = yup.object().shape({
    email:yup.string().email().required(),
    Password:yup.string().required()
})
const Login = () => {

     const {userInfo,setUserInfo} = useContext(AppState)
     const {fPassword} = useContext(ForgotPasswordState)

    const {register,handleSubmit,formState:{errors}}= useForm({
        resolver:yupResolver(schema)
    })
    const navigate = useNavigate()
    
    const [loginInfo,setloginInfo] = useState('')
   const HandleSubmit =(data)=>{
      setloginInfo(data)
      if((loginInfo.Password === userInfo.Cpassword || loginInfo.Password === fPassword.confirmPassword )  && loginInfo.email === userInfo.email)
      {
          
        navigate('/dashboard')
        
        console.log(userInfo.Cpassword)
      }


   }
  return (
    <div className='Login'>
        
        <h2 className='Login__title'>Login</h2>
      
    <form className='Form' onSubmit={handleSubmit(HandleSubmit)}>
         <div className='form__fields'>
            <label className='form__label'>Email</label>
            <input type='email' placeholder='Email' name='email' className='form__inputs'  {...register('email')}/>
        </div>
        <div className='form__fields'>
            <label className='form__label'>Password</label>
            <input type='password' placeholder='Password' name='Password'  className='form__inputs' {...register('Password')}/>
        </div>
        <button className='button__login' type='submit'>Login</button>
         <div>
            <NavLink to='/forgotpassword' className='navlink'>ForgotPassword</NavLink>
            <NavLink to='/signup'>Create Account</NavLink>
         </div>
    </form>
    
 </div>
  )
}
 
export default Login