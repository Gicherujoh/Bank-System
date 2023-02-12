import React, {useContext}from 'react'
import './withdrawmessage.css'
import { AppState } from '../App'
const WithdrawMessage = ({message,setMessage}) => {
    const {userInfo} = useContext(AppState)
  return (
    <div>
        <div className='error__message'>
            {message && <h3 className='error__message__title'>{userInfo.Fname} You have Insufficient amount in the account.Please Try a Lower Amount</h3>}
             <div>
                <button className='error__message__button' onClick={()=>{
                     setMessage(false)
                }}>Ok</button>
             </div>
        </div>
    </div>
  )

}

export default WithdrawMessage