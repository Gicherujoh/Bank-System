import React,{useContext} from 'react'
import { AppState,BalanceState } from '../App'
import './Balance.css'
const Balance = () => {
  const {userInfo} = useContext(AppState)

  const {amountBalance} = useContext(BalanceState)

  return (
    <div>

      <div  className='balance'>
         <div className='balance__contents'>
            <h2 className='balance__title'>{userInfo} Your account balance is {amountBalance}</h2>
         </div>
     
      


      </div>

    </div>
  )
}

export default Balance