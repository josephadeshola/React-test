import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2'

const Income = () => {
 
  return (
    <div>
        <Navbar/>
        <div className="container mt-5 bg-orange-50 py-5">
        <div>
          <ul className="flex  mt-3 gap-3">
            <li>
              <a className="hover:underline " href="">
                Dashboard
              </a>
            </li>
            <li>
            <Link className="hover:underline " to={"/host/income"}>
                Income
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to={"/host/vans"}>
                Vans
              </Link>
            </li>
            <li>
              <a className="hover:underline " href="">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <p className="font-bold mt-4 text-xl">Income</p>
        <p className='my-2'>Last 30 days</p>
        <p className='text-3xl font-bold'>$2,260</p>
       
        </div>
    </div>
  )
}

export default Income