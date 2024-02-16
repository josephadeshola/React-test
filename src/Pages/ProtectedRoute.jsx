import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from "../BaseUrl";
import { toast } from "react-toastify";

const  useProtectedRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.token;
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const warningMsg = (variant) => () => {
    toast("token expire!", { variant });
  };

  useEffect(() => {
    if (token) {
      axios
        .get( baseUrl + 'user/auth', {
          headers: {
            Authorization: `BearerVanLife${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        })
        .then((res) => {
          if (res.status == 200) {
            setUser(res.data.result);
          } else {
            localStorage.removeItem("token");
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err , "error");
          if (err) {
            warningMsg("warning")();
            navigate("/login");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      navigate("/login");
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return { user, isLoading ,logout};
};

export default  useProtectedRoute;
