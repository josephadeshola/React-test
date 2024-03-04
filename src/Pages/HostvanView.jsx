import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import baseUrl from "../BaseUrl";
import Footer from "../Components/Footer";
import SecondNav from "../Components/SecondNav";

const HostvanView = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");
  const [Vans, setVans] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + `api/host/vans/${id}`)
      .then((res) => {
        console.log(res.data, "find data");
        setVans(res.data);
      })
      .catch((err) => {
        console.log(err, "error ");
      });
  }, []);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <SecondNav/>
      <div className="container mt-5 mb-5 h-auto bg-orange-50 py-5">
        <div>
          <ul className="flex gap-3 mt-3">
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
        <p className="text-decoration-underline mt-4 pb-2">
          <i class="bi bi-arrow-left"></i>
          <Link to={"/host/vans"}>Back to all vans</Link>
        </p>

        {Vans ? (
          <>
            <div className="container bg-white  p-3 mt-4 mb-2">
              <div className="row">
                <div className="flex gap-3 mt-4">
                  <img className="w-36 rounded h-36" src={Vans.imageUrl} alt="" />
                  <div className="mt-4">
                    <button className="bg-orange-500  text-white rounded py-1 px-2">
                      Simple
                    </button>
                    <br />
                    <p className="text-md fw-bold mt-2 ">{Vans.name}</p>
                    <span className="text-sm ">
                      <b>${Vans.price}</b>
                      <span className="text-normal text-sm">/day</span>
                    </span>
                  </div>
                </div>
                <div className="mt-3 row">
                  <span
                    className={`col-3 ${
                      activeTab === "details"
                        ? "text-decoration-underline cursor-pointer fw-bold"
                        : ""
                    }`}
                    onClick={() => handleTabClick("details")}
                  >
                    Details
                  </span>
                  <span
                    className={`col-3 ${
                      activeTab === "pricing"
                        ? "text-decoration-underline cursor-pointer fw-bold"
                        : ""
                    }`}
                    onClick={() => handleTabClick("pricing")}
                  >
                    Pricing
                  </span>
                  <span
                    className={`col-2 ${
                      activeTab === "photos"
                        ? "text-decoration-underline cursor-pointer fw-bold"
                        : ""
                    }`}
                    onClick={() => handleTabClick("photos")}
                  >
                    Photos
                  </span>
                </div>

                <div className="mt-4">
                  {activeTab === "details" && (
                    <div>
                    <span className="font-semibold ">Name</span>: <span>{Vans.name}</span><br />
                      <br />
                      
                    <span className="font-semibold ">Category</span>: <span>{Vans.type}</span><br />
                      <br />
                   
                    <span className="font-semibold ">Description</span>: <span>{Vans.description}</span>
                      <br />
                      <br />
                      <b>Visibility</b>: <span>Public</span>
                    </div>
                  )}
                  {activeTab === "pricing" && (
                    <div>
                      <b>Pricing</b>:
                      <span className="fw-bold">${Vans.price}.00 </span>
                      <span>/day</span>
                    </div>
                  )}

                  {activeTab === "photos" && (
                    <div>
                      <img
                        src={Vans.imageUrl}
                        alt=""
                        className="img-fluid rounded"
                        style={{ width: "80px" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Details not avaliable</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default HostvanView;
