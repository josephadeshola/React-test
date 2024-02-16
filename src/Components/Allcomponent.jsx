import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { Outlet } from 'react-router-dom';

const Allcomponent = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Outlet/>
    </div>
  )
}

export default Allcomponent