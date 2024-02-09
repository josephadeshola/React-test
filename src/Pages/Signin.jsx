import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Signin = () => {
  return (
    <div>
      <Navbar/>
      <div className="container bg-orange-50 mt-5 py-5">
        <div className='mb-5 '>
            <div class="relative mb-4">
                <h5 className='text-center fw-bold mt-5 mb-5 text-2xl'>Sign in to your account</h5>
                <input placeholder='Email address' type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <input placeholder='Password' type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                <button className='btn hover:bg-orange-500 bg-orange-500 text-white w-full md:mt-4 mt-5'>Sign in</button>
                <p className='mt-3 text-center'>Don’t have an account? <span className='text-orange-500 '> Create one now </span></p>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Signin
