import React from "react";
import SecondNav from "./SecondNav";
import { Outlet } from "react-router-dom";
import useProtectedRoute from "../Pages/ProtectedRoute";

const SecondNavbar = () => {
  const { user, isLoading } = useProtectedRoute();
  return (
    <div>
      <SecondNav />
      <Outlet />
    </div>
  );
};

export default SecondNavbar;
