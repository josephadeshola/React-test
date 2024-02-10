import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SecondNav from '../Components/SecondNav'

const Errorpage = () => {
  return (
    <div>
        <SecondNav/>
        <div className="container mb-5 h-auto bg-orange-50  mt-5 py-5">
          <div className="mx-auto col-md-6 col-12 py-5">
            <h5 className="text-3xl mt-5 mx-auto fw-bold ">Sorry, the page you were looking for was not found.</h5>
            <button className="btn mt-5 bg-black  text-white mb-5 w-full ">Return to home</button>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Errorpage