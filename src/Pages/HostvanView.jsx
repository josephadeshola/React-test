import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLocation } from "react-router-dom";


const HostvanView = () => {
  const location = useLocation();
  
  
  console.log(location);
  return (
    <div>
      <Navbar />
      <div className="container mt-5 bg-orange-50 py-5">
        <div>
          <ul className="flex gap-3 mt-3">
            <li>
              <Link className="hover:underline " to={"/host/vans"}>
                Dashboard
              </Link>
            </li>
            <li>
              <a className="hover:underline " href="">
                Income
              </a>
            </li>
            <li>
              <a className="hover:underline " href="">
                Vans
              </a>
            </li>
            <li>
              <a className="hover:underline " href="">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <p className="text-decoration-underline mt-4 pb-2">
          <i class="bi bi-arrow-left"></i>
          <Link to={"/host/vans"}>Back to all vans</Link>
        </p>
          <div className="flex gap-3 mt-4">
            <img className="w-36 h-36" src={location.state.vanData.image} alt="" />
            <div className="mt-4">
                <button className="bg-orange-500  text-white rounded py-1 px-2">Simple</button> <br />
                <p className="text-md fw-bold mt-2 ">{location.state.vanData.name}</p>
                  <span className="text-sm ">
                    <b>${location.state.vanData.price}</b> 
                    <span className="text-normal text-sm">/day</span>
                  </span>
            </div>
          </div>
          <div>
          <ul className="flex gap-3 mt-3">
            <li>
              <Link onClick={()=>pricing} className="hover:underline ">
                Details
              </Link>
            </li>
            <li>
              <Link className="hover:underline ">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:underline ">
                Photos
              </Link>
            </li>
          </ul>
        </div>
        {/* {pricings   && (
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem quae perspiciatis, adipisci sed incidunt rem assumenda natus fugit sapiente, blanditiis nostrum excepturi, molestias veritatis! Repellat, aspernatur quidem. Ea, nostrum.
            </div>
        )} */}
      </div>
    </div>
  );
};

export default HostvanView;
