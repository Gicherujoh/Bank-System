import {React,useState,useContext,useMemo} from 'react'
import { AppState } from '../App'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './Signup.css'
import HomePage from './HomePage'

const schema= yup.object().shape({ 
     Fname:yup.string().required(),
     Lname:yup.string().required(),
     age:yup.number().required().positive().integer(),
     id:yup.number().required().positive().integer().min(8),
     phone:yup.string().required().max(10).min(10),
     email:yup.string().email().required(),
     Spassword:yup.string().min(4).max(16).required(),
     Cpassword:yup.string().oneOf([yup.ref("Spassword"),null])
})
const Signup = () => {
     const {userInfo,setUserInfo}= useContext(AppState)
    const navigate = useNavigate()
  const {register,handleSubmit,formState:{errors}} = useForm({
     resolver:yupResolver(schema)
  })
  
   
    const OnSubmit =(data,event)=>{
      event.preventDefault(data);
      
        setUserInfo(data)
        
      if(userInfo)
        {
 
           navigate('/login')
       
        }
      
    } 
    
  
  
    
    return (
    <div className='signup'>
         
       <h3 className='signup__title'>Sign Up Form</h3>
       
       <div className='signup__form'>
          <form className='form'  onSubmit={handleSubmit(OnSubmit)}>
            <div className='form__fields'>
              <label className='form__label'>First Name</label>
              <input placeholder='first name' type='text' name='Fname'   className='form__inputs'
              
              {...register('Fname')}
              />
              </div>
              <p className='form__inputs__error'>{errors.Fname?.message}</p>
            <div className='form__fields'>
              <label className='form__label'>Last Name</label>
              <input placeholder='last name' type='text' name='Lname' className='form__inputs'
              {...register('Lname')}
              />
            </div>
            <p className='form__inputs__error'>{errors.Lname?.message}</p>
            <div className='form__fields'>
              <label className='form__label'>Age</label>
              <input placeholder='Age' type='number' name='age' className='form__inputs'
               {...register('age')}
              />
            </div>
            <p className='form__inputs__error'>{errors.age?.message}</p>
            <div className='form__fields'>
              <label className='form__label'>ID</label>
              <input placeholder='ID' type='number' name='id' className='form__inputs'
              
              {...register('id')}
              />
            </div>
            <p className='form__inputs__error'>{errors.id?.message}</p>
            <div className='form__fields'>
              <label className='form__label'>Phone</label>
              <input placeholder='Phone' type='number' className='form__inputs' name='phone'
                {...register('phone')}
              />

            </div>
            <p className='form__inputs__error'>{errors.phone?.message}</p>
            <div className='form__fields'>
              <label className='form__label'>Email</label>
              <input placeholder='Email' type='email' className='form__inputs' name='email'
                {...register('email')}
              />

            </div>
            <p className='form__inputs__error'>{errors.email?.message}</p>
            <div className='form__fields'>
              <label className='form__label'>Set Password</label>
              <input placeholder='Set Password' type='password' name='Spassword' className='form__inputs'
                {...register('Spassword')}
              />
            </div>
            <p className='form__inputs__error'>{errors.Spassword && "Passowrd Should be more than 4 characters"}</p>
            <div className='form__fields'>
              <label className='form__label'>Confirm Password</label>
              <input placeholder='Confirm Password' type='password' name='Cpassword' className='form__inputs'
              
               {...register('Cpassword')}
              />
            </div>
            <p className='form__inputs__error'>{errors.Cpassword && "Passwords Should Match"}</p>
            <div>
              <button className='button__signup' type='submit'>Sign Up</button>
            </div>

          </form>
          
      </div>
    </div>
  
  )
 
}


export default Signup