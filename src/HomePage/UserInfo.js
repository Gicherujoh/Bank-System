import React,{useContext,useState} from 'react'
import { AppState,DepositState,BalanceState,WithdrawState } from '../App'
import './UserInfo.css'
const UserInfo = () => {
  const {userInfo} = useContext(AppState)
  const {amountDeposit,setDeposit} = useContext(DepositState)
  const {amountWithdraw,setWithdraw} = useContext(WithdrawState)
  const {amountBalance,setBalance} = useContext(BalanceState)

  const [show,setShow] = useState(true)
    
    console.log(amountDeposit.deposit)
  return (
    <div>

     {  show && <div className='user__info'>
        <div className='user__main'>
          <h2 className='user__title'> User Information</h2>
            <div>
                <h3 className='user__contents'>Name: <span className='user__span'>{userInfo.Fname } {userInfo.Lname} </span></h3>
                <h3 className='user__contents'>Phone: <span className='user__span'>{userInfo.phone}</span></h3>
                <h3 className='user__contents'>Id: <span className='user__span'>{userInfo.id}</span></h3>
                <h3 className='user__contents'>Email: <span className='user__span'>{userInfo.email}</span></h3>
                <h3 className='user__contents'>Deposited Amount: <span className='user__span'>{amountDeposit.deposit}</span></h3>
                <h3 className='user__contents'>Withdraw Amount: <span className='user__span'>{amountWithdraw.withdraw}</span></h3>
                <h3 className='user__contents'>Balance: <span className='user__span'>{amountBalance}</span></h3>
          </div>
        </div>
           
    </div>}
    </div>
  )
}

export default UserInfo