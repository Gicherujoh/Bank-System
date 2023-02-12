import './App.css'
import { useState,createContext } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SharedLayout2 from './HomePage/SharedLayout2';
import HomePage from './HomePage/HomePage';
import SharedLayout from './HomePage/SharedLayout';
import Signup from './HomePage/Signup'
import Login from './HomePage/Login';

import Dashboard from './HomePage/Dashboard';
import Deposit from './HomePage/Deposit';
import Withdraw from './HomePage/Withdraw'
import Balance from './HomePage/Balance';
import UserInfo from './HomePage/UserInfo';
import ForgotPassword from './HomePage/ForgotPassword';


export const AppState = createContext()
export const DepositState = createContext()
export const WithdrawState = createContext()
export const BalanceState = createContext()
export const ForgotPasswordState = createContext()

function App() {

   const [userInfo,setUserInfo] = useState([])
   const [amountWithdraw,setWithdraw] = useState([])
   const [amountDeposit,setDeposit] = useState([])
   const [amountBalance,setBalance] = useState([])
   const [fPassword, setPassword] = useState([])
  const [handleShow,setHandleShow] = useState(false)


  return (
    
   <AppState.Provider value={{userInfo,setUserInfo}}> 
   <WithdrawState.Provider value={{amountWithdraw,setWithdraw}}>
   <DepositState.Provider value={{amountDeposit,setDeposit}}>
   <BalanceState.Provider value={{amountBalance,setBalance}}>
    <ForgotPasswordState.Provider value={{fPassword, setPassword}}>
    
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<SharedLayout/>}>
              <Route index element={<HomePage/>}/>
              <Route path='signup' element={<Signup/>}/>
             <Route path='login' element={<Login/>}/>
             <Route path='forgotpassword' element={<ForgotPassword/>}/>
          </Route>
          
          <Route path='dashboard' element={<SharedLayout2/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='deposit' element={<Deposit/>}/>
            <Route path='withdraw' element={<Withdraw/>}/>
            <Route path='balance' element={<Balance/>}/>
            <Route path='userInfo' element={<UserInfo/>}/>
           
          </Route>
          
        </Routes>
     </BrowserRouter>
   
     </ForgotPasswordState.Provider>
     </BalanceState.Provider>
    </DepositState.Provider>
    </WithdrawState.Provider>
    </AppState.Provider>
 
  );
}
export default App;
