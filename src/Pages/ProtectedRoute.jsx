import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//  import { useDispatch } from 'react-redux';
//  import { addUser } from '../../src/redux/counterSlice';
//  import { useSnackbar } from 'notistack';
import baseUrl from "../BaseUrl";
import { toast } from "react-toastify";

const  useProtectedRoute = () => {
//   const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
//   const dispatch = useDispatch();
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
          // console.log(res,"data");
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
      navigate("/");
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
