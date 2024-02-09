import axios from "axios";
import React, { useEffect, useState } from "react";
import baseUrl from "../BaseUrl";

const CustormHook = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + "api/host/vans")
      .then((res) => {
        setVans(res.data);
      })
      .catch((err) => {
        console.log(err, "error ");
      });
  }, []);
  return vans;
};

export default CustormHook;
