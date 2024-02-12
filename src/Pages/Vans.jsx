import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import baseUrl from "../BaseUrl";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular, SpinnerRoundFilled } from "spinners-react";

const Vans = () => {
  const navigate = useNavigate();
  const [vans, setVans] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    axios
      .get(baseUrl + "api/vans")
      .then((res) => {
        console.log(res.data, "find data");
        setVans(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err, "error ");
        // setIsloading(false);
      });
  }, []);
  const buttonColors = [
    "bg-red-600",
    "bg-green-800",
    "bg-black",
    "bg-red-400",
    "bg-black",
    "bg-green-800",
    "bg-green-900",
  ];
  const [viewImg, setViewImg] = useState(null);
  const [price, setprice] = useState("");
  const [name, setname] = useState("");
  const [btnVan, setBtnVan] = useState("");
  const handleViews = (imageUrl, price, name, type, color) => {
    let getData = {
      price: price,
      viewImg: imageUrl,
      name: name,
      btnVan: type,
      color: color,
    };
    navigate("/view/van", { state: getData });
  };
  return (
    <div>
      <Navbar />

      {isloading ? (
        <div className="w-full text-center pt-36">
          <SpinnerRoundFilled speed={50} color="rgba(172, 85, 57, 1)"  className="mx-auto h-50 w-50 " />
        </div>
      ) : (
        
        <div className="container mb-5 mt-20 h-auto px-4 py-2 bg-orange-50 ">
          <h1 className="mt-4 md:text-4xl  fw-bold">Explore our van options</h1>
          <div className="d-flex gap-md-5 gap-2 mt-4">
            <button className="btn bg-orange-200">Simple</button>
            <button className="btn bg-orange-200">Luxury</button>
            <button className="btn bg-orange-200">Rugged</button>
            <p className="mt-3 text-decoration-underline text-sm ">
              <a href="">Clear filters</a>
            </p>
          </div>
          <div>
            <div className="md:grid md:grid-cols-4 grid gap-3 grid-cols-2 mb-5 mx-auto">
              {vans.map((van, index) => (
                <div key={van.id} className=" col-md-9  mt-12 mx-auto ">
                  <img
                    className="rounded-md col-12 h-48"
                    src={van.imageUrl}
                    alt={van.name}
                  />
                  <div className="d-flex justify-between g mt-2">
                    <p className="text-md fw-bold ">{van.name}</p>
                    <span className="text-xl ">
                      <b>${van.price}</b> <br />
                      <span className="text-normal text-sm">/day</span>
                    </span>
                  </div>
                  <button
                    className={`btn fw-bold text-gray-50 ${
                      buttonColors[index % buttonColors.length]
                    }`}
                    onClick={() =>
                      handleViews(
                        van.imageUrl,
                        van.price,
                        van.name,
                        van.type,
                        buttonColors[index % buttonColors.length]
                      )
                    }
                  >
                    {van.type}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Vans;
