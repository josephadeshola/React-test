import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DisplayVan = () => {
    const navigate=useNavigate();
  const location = useLocation();
    const loginVAn=()=>{
        navigate("/login")
    }
    
  return (
    <div>
        <Navbar/>
      <div className="container mb-5   bg-orange-50 mt-5 py-4 h-auto">
        <div className="col-md-9 col-11 mt-3 mx-auto">
            <p className="text-decoration-underline pb-2"><i class="bi bi-arrow-left"></i><Link to={"/vans"}>Back to all vans</Link></p>
          <img className="h-auto w-full" src={location.state.viewImg} alt="" />
        <div className="">
            <button className={`btn  text-white h-9 text-center w-28  mt-2 ${location.state.color}`}>{location.state.btnVan}</button>
            <div className="fw-bold text-2xl">{location.state.name}</div>
            <div><b className="fw-bold text-2xl">{location.state.price}</b> <span className="f">/day</span></div>
            <p className="py-3">The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
            <button onClick={loginVAn} className=" btn bg-orange-500 hover:bg-orange-500 mb-4 text-white w-full">Rent this van </button>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DisplayVan;
