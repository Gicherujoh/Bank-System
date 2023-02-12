import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from './Navbar2'
const SharedLayout2 = () => {
  return (
    <>
       <Navbar2/>
      <div>
           <Outlet/>
      </div>

    </>
  )
}

export default SharedLayout2