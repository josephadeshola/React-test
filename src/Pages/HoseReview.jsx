import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const HoseReview = () => {
  const ratings = [
    { stars: 5, percentage: 100, color: " bg-orange-500" },
    { stars: 4, percentage: 0, color: "bg-zinc-200" },
    { stars: 3, percentage: 0, color: "bg-zinc-200" },
    { stars: 2, percentage: 0, color: "bg-zinc-200" },
    { stars: 1, percentage: 0, color: "bg-zinc-200" },
  ];

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
          <div className="flex mx-auto text-center justify-between my-2">
            <small>{rate.stars} stars</small>
            <div
              class="progress h-2  mt-2"
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
      <Footer/>
    </div>
  );
};

export default HoseReview;
