import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "../BaseUrl";
import axios from "axios";
import { toast } from "react-toastify";
import SecondNav from "../Components/SecondNav";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility=()=>{
    setShowPassword(!showPassword);
  }
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("firstname is required"),
      lastname: Yup.string().required("lastname is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Minimum of 8 character")
        .required("password is required"),
    }),
    onSubmit: (values) => {
      axios
        .post(baseUrl + "user/register", values)
        .then((res) => {
          if (res.data.status == true) {
            console.log("myresponse", res);
            setTimeout(() => {
              navigate("/login");
            }, 5000);
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response) {
            toast.error(err.response.data.message);
          } else if (err.request) {
            toast.error("No response received from the server");
          } else {
            toast.error("Error setting up the request");
          }
        });
    },
  });
  return (
    <div>
     <SecondNav/>
      <div className="container bg-orange-50 h-auto mt-3 py-5">
        <div className="mb-5 ">
          <form action="" onSubmit={formik.handleSubmit}>
            <div class="relative mb-4 md:w-1/2 w-full mx-auto">
              <h5 className="text-center fw-bold mt-5 mb-3 text-2xl">
                Create an account
              </h5>
              <input
                placeholder="Firstname"
                type="firstname"
                value={formik.values.firstname}
                name="firstname"
                class="w-full border-orange-500 bg-white rounded border focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={formik.handleChange}
              />
              {formik.errors.firstname && formik.touched.firstname && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.firstname}
                </small>
              )}
              <input
                placeholder="Lastname"
                type="lastname"
                value={formik.values.lastname}
                name="lastname"
                class="w-full border-orange-500 bg-white mt-3 rounded border focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={formik.handleChange}
              />
              {formik.errors.lastname && formik.touched.lastname && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.lastname}
                </small>
              )}
              <input
                placeholder="Email address"
                type="email"
                value={formik.values.email}
                name="email"
                class="w-full border-orange-500 mt-3 bg-white rounded border focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.email}
                </small>
              )}
              <input
                placeholder="Password"
                type={showPassword?'text':'password'}
                value={formik.values.password}
                name="password"
                class="w-full bg-white mt-3 rounded focus:ring-2 border focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out pr-10" 
                onChange={formik.handleChange}
              />
              {
              showPassword ? (
                <i  onClick={togglePasswordVisibility} class="bi absolute py-6 mr-1 bi-eye-slash-fill bi text-2xl text-orange-500 top-60 transform -translate-y-1/2 right-2 cursor-pointer"></i>
              ):(
                <i  onClick={togglePasswordVisibility} class="bi absolute py-6 mr-1 bi-eye-fill bi text-2xl text-orange-500 top-60 transform -translate-y-1/2 right-2 cursor-pointer"></i>
              )
            
            }
              {formik.errors.password && formik.touched.password && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.password}
                </small>
              )}
              <button
                type="submit"
                className="btn hover:bg-orange-500 bg-orange-500 text-white w-full border-orange-500 md:mt-2 mt-3"
              >
                SIGN-UP
              </button>
              <p className="mt-3 text-center">
                Already have an account?
                <span className="text-orange-500">
                  <Link to={"/login"}> Login account</Link>{" "}
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
