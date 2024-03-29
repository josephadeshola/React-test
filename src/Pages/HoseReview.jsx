import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import SecondNav from "../Components/SecondNav";
import { SpinnerRoundFilled } from "spinners-react";

const HoseReview = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>setisLoading(false),2000)
    return()=>clearTimeout(timer)
  },[])
  const ratings = [
    { stars: 5, percentage: 100, color:" bg-orange-500" },
    { stars: 4, percentage: 0, color: "bg-zinc-200" },
    { stars: 3, percentage: 0, color: "bg-zinc-200" },
    { stars: 2, percentage: 0, color: "bg-zinc-200" },
    { stars: 1, percentage: 0, color: "bg-zinc-200" },
  ];

  return (
    <div>
      <SecondNav/>
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
      <div className="mt-5 mb-5  py-5 h-auto bg-orange-50 px-3">
        <div>
          <ul className="flex gap-3">
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
        <div className="mt-4">
          <span className="font-semibold text-xl">Your reviews</span>
          <small>last 30 days</small> <br />
          <br />
          <span className="font-bold text-xl">5.0</span>
          <small>
            <i class="bi bi-star-fill text-orange-500 ms-1"></i> overall rating
          </small>
        </div>

        {ratings.map((rate, index) => (
          <div key={rate.id} className="flex w-100 justify-between my-2">
            <small className="text-md">{rate.stars} stars</small>
            <div
              class="progress h-2 col-md-11 mx-auto mt-2"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class={`progress-bar  py-1 ${rate.color} w-80`}></div>
            </div>
            <small>{rate.percentage}%</small>
          </div>
        ))}
        <p className="font-semibold">Reviews (2)</p> <br />
        <small>
          {Array.from({ length: 5 }).map((_, index) => (
            <i key={index} className="bi bi-star-fill text-orange-500 ms-1"></i>
          ))}
        </small> <br /><br />
            <span className=""><b>Elliot</b> December 1, 2022</span>
            <p className="py-3">The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
            <div className="my-2">
            <hr />
            </div>
            <small>
          {Array.from({ length: 5 }).map((_, index) => (
            <i key={index} className="bi bi-star-fill text-orange-500 ms-1"></i>
          ))}
        </small> <br />
            <span className=""><b>Sandy</b> November 23, 2022</span>
            <p className="mt-2">This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
            <div className="my-3">
            <hr />
            </div>
      </div>

      )}
      <Footer/>
    </div>
  );
};

export default HoseReview;
