import React, { useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import incomChart from '/data/incomChart.json'
import { Bar } from "react-chartjs-2";
import image from '../assets/image 532.png'
import Footer from "../Components/Footer";
const Income = () => {
    
  return (
    <div>
      <Navbar />
      <div className="container mt-5 mb-5  bg-orange-50 py-5">
        <div>
          <ul className="flex  mt-3 gap-3">
            <li>
            <Link className="hover:underline " to={"/host"}>
                Dashboard
              </Link>
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
            <Link className="hover:underline " to={"/host/reviews"}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <p className="font-bold mt-4 text-xl">Income</p>
        <p className="my-3">Last 30 days</p>
        <p className="text-3xl font-bold">$2,260</p>
        <div>
            <img className="w-100 mt-4 h-60" src={image} alt="" />
            <p className="font-semibold my-4">Your transactions (3)</p>
            <div className="bg-white flex justify-between py-4 mt-3 px-2">
                <p className="text-2xl font-bold">$720</p>
                <small>1/12/22</small>
            </div>
            <div className="bg-white flex justify-between py-4 mt-3 px-2">
                <p className="text-2xl font-bold">$560</p>
                <small>1/12/22</small>
            </div>
            <div className="bg-white flex justify-between py-4 mt-3 px-2">
                <p className="text-2xl font-bold">$980</p>
                <small>1/12/22</small>
            </div>
          {/* <Bar 
           data={{
            labels: incomChart.map((eachdata) => eachdata.label),
            datasets: [
              {
                label: "1 = $1k",
                data: incomChart.map((eachdata) => eachdata.value),
                backgroundColor: [
                  "#ffead0",
                  "#ffead0",
                  "#ffead0",
                  "#ffead0",
                  "#ff8c38",
                  "#ff8c38",
                ],
                borderRadius: 5,
              },
            ],
          }}
           options={{
    scales: {
      x: {
        type: 'category', 
      },
    },
  }}
        /> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Income;
