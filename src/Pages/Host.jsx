import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import CustormHook from "./CustormHook";


const Host = () => {
const vans=CustormHook();  
  return (
    <div>
      <Navbar />
      <div className="container mt-5 bg-orange-50 py-5">
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
              <Link className="hover:underline"  to={"/host/vans"}>
                Vans
              </Link>
            </li>
            <li>
              <a className="hover:underline " href="">
                Reviews
              </a>
            </li>
          </ul>
          <div className="px-2 py-4 mt-4 bg-orange-100">
            <p className="text-1xl fw-bold">Welcome!</p>
            <div className="flex py-2 justify-between">
              <small>
                Income last <span className="underline">30 days</span>{" "}
              </small>
              <small>Details</small>
            </div>
            <p className="text-2xl fw-bold "> $2,260</p>
          </div>
          <div className="bg-orange-200 px-2">
            <h6 className="font-semibold py-4">
              Review score <i class="bi bi-star-fill text-orange-500"></i>5.0{" "}
              <span className="font-normal">/5</span>
            </h6>
          </div>
          <p className="font-bold mt-3">Your Listed Vans</p>
          {vans.map((eachVan) => (
            <div className="bg-white mt-3 px-2 flex justify-between py-3 ">
              <div>
                <div  key={eachVan.id} className="flex gap-2">
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
              <small className="mt-3">Edit</small>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Host;
