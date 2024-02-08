import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const HoseReview = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 py-5 bg-orange-50 px-4">
        <div>
          <ul className="flex gap-3">
            <li>
              <a className="hover:underline " href="">
                Dashboard
              </a>
            </li>
            <li>
              <a className="hover:underline " href="">
                Income
              </a>
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
        <div className="mt-4">
          <span className="font-semibold text-xl">Your reviews</span>
          <small>last 30 days</small> <br />
          <br />
          <span className="font-bold text-xl">5.0</span>
          <small><i class="bi bi-star-fill text-orange-500 ms-1"></i> overall rating</small>
        </div>
      </div>
    </div>
  );
};

export default HoseReview;
