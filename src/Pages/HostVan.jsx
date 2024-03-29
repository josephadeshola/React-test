import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import CustormHook from "./CustormHook";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SecondNav from "../Components/SecondNav";
import { SpinnerRoundFilled } from "spinners-react";

const HostVan = () => {
    const navigate=useNavigate();
    const [isLoading, setisLoading] = useState(true)
    useEffect(()=>{
      const timer=setTimeout(()=>setisLoading(false),2000)
      return()=>clearTimeout(timer)
    },[])
  const vans = CustormHook();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState([]);
  const viewVana = (imageUrl, name, price,index) => {
    let vanView = {
      name: name,
      price: price,
      image: imageUrl,
      index:index
    };
    navigate(`/host/vans/${index + 1}`,{state:{vanData : vanView}})
  };
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
      <div className="container mb-5 mt-5 h-auto bg-orange-50 py-5">
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
        <p className="font-bold mt-4 mb-3">Your Listed Vans</p>
        {vans.map((eachVan,index) => (
          <div
            className="bg-white mt-3 px-2 flex justify-between py-3 cursor-pointer "
            onClick={() =>
              viewVana(eachVan.imageUrl, eachVan.name,eachVan.price, index)
            }
            key={eachVan._id}
          >
            <div>
              <div key={eachVan.id} className="flex gap-2">
                <img
                  className="w-16 h-16 rounded"
                  src={eachVan.imageUrl}
                  alt=""
                />
                <div className="mt-3">
                  <p className="font-semibold">{eachVan.name}</p>
                  <small>{eachVan.price}/day</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     )}
      <Footer />
    </div>
  );
};

export default HostVan;
