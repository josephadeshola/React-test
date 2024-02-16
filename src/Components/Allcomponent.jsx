import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { Outlet } from 'react-router-dom'
import useProtectedRoute from '../Pages/ProtectedRoute'

const Allcomponent = () => {
  const { user, isLoading} = useProtectedRoute()
  console.log(user);
  return (
    <div>
        <Navbar/>
        <Home/>
        <Outlet/>
    </div>
  )
}

export default Allcomponent