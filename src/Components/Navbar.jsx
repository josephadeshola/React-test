import React from "react";
import Home from "./Home";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isSignin = location.pathname === "/login";
  return (
    <div>
      <nav className="bg-white fixed-top  w-full py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-black text-xl font-bold">
                #VANLIFE
              </Link>
            </div>
            <div className="">
              <div className="ml-10 flex items-baseline space-x-4">
                {isSignin && (
                  <Link
                    to="/about"
                    className="text-gray-600 px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    Host
                  </Link>
                )}
                <Link
                  to="/about"
                  className="text-gray-600 px-3 py-2 rounded-md text-sm font-semibold"
                >
                  About
                </Link>
                <Link
                  to="/vans"
                  className="text-gray-600 text-decoration-underline text-2md px-3 py-2 rounded-md text-sm font-semibold"
                >
                  Vans
                </Link>
                {isSignin && (
                  <Link
                    to="/vans"
                    className="text-gray-600 text-2md px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    <i class="bi bi-person-circle"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
