import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustormHook from "./CustormHook";
import SecondNav from "../Components/SecondNav";
import { useEffect, useState } from "react";
import { SpinnerRoundFilled } from "spinners-react";

const Host = () => {
  const getuser = JSON.parse(localStorage.getItem("alluser"));
  const vans = CustormHook();
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setisLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  const logOutUser = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!getuser) {
    return navigate("/create");
  }
  return (
    <div>
      <SecondNav />
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
      ) : (
        <div className="container mb-5  mt-5 h-auto bg-orange-50 py-5">
          <div>
            <ul className="flex gap-3 text-sm">
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
              <li>
                <div className="dropdown">
                  <Link
                    className="hover:underline dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </Link>
                  <ul class="dropdown-menu">
                    <li style={{ cursor: "pointer" }} className="py-2">
                      <Link class="dropdown-item" to={"/profile"}>
                        <i class="bi bi-person-circle"></i> Profile
                      </Link>
                    </li>
                    <hr />
                    <li style={{ cursor: "pointer" }} className="py-2">
                      <a class="dropdown-item" onClick={logOutUser}>
                        <i class="bi bi-box-arrow-left"></i> Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="px-2 py-4 mt-4 bg-orange-100">
              <p className="text-1xl fw-bold">Welcome! {getuser.firstname} </p>
              <div className="flex py-2 justify-between">
                <small>
                  Income last <span className="underline">30 days</span>
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
                <small className="mt-3">Edit</small>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Host;
