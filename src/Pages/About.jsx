import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image from '../assets/image 54.png'
import { SpinnerRoundFilled } from "spinners-react";

const About = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>setisLoading(false),2000)
    return()=>clearTimeout(timer)
  },[])
  return (
    <div>
      <Navbar />
      {isLoading ? (
        <div className="w-full text-center pt-36">
        <SpinnerRoundFilled
          speed={50}
          height={"100px"}
          width={"100px"}
          color="rgba(172, 85, 57, 1)"
          className="mx-auto mt-5 md:mt-0"
        />
      </div>
      ):(
      <div className="mb-10">
      <div className="w-full">
          <img
            className="about-img md:h-auto h-60  w-full mt-5"
            src={image}
            alt=""
          />
        
      </div>
      <div className="mx-auto px-4 mb-5 py-3 bg-orange-50 ">
        <p className="text-4xl mt-4 mx-auto fw-bold ">
          Don’t squeeze in a sedan when you could relax in a van.
        </p>
        <p className="fw-bold text-gray-600">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <br />
        <p className="fw-bold  text-gray-600">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="col-6 bg-orange-300 mt-5 mb-5  rounded-lg col-12 px-20 py-14">
          <p className="fw-bold md:text-3xl  md:w-1/2">
            Your destination is waiting. Your van is ready.
          </p>
          <button className="btn bg-black text-white mt-3 py-3 rounded-lg w-40">
            Explore our vans
          </button>
        </div>
      </div>
      </div>

      )}
      <Footer/>
    </div>
  );
};

export default About;
