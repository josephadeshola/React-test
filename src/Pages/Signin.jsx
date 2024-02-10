import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import baseUrl from "../BaseUrl";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false)
const togglePasswordVisibility=()=>{
  setShowPass(!showPass);
}
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      axios
        .post(baseUrl + "user/login", values)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.message);
            const userFirstName = res.data.firstname;
            localStorage.setItem("user", JSON.stringify(userFirstName));
            navigate("/host");
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div>
      <Navbar />
      <div className="container bg-orange-50 h-auto mt-3 py-5">
        <div className="mb-5 ">
          <form action="" onSubmit={formik.handleSubmit}>
            <div class="relative mb-4 md:w-1/2 w-full mx-auto">
              <h5 className="text-center fw-bold mt-5 mb-5 text-2xl">
                Sign in to your account
              </h5>
              <input
                placeholder="Email address"
                type="email"
                value={formik.values.email}
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:ring-orange-300 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.email}
                </small>
              )}
              <input
                placeholder="Password"
                type={showPass ? 'text' : 'password'}
                value={formik.values.password}
                name="password"
                class="w-full bg-white mt-3 rounded focus:ring-2 border focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out pr-10"                onChange={formik.handleChange}
              />
                {showPass ? (
                    <i  onClick={togglePasswordVisibility} class="bi absolute py-6 mr-1 bi-eye-slash-fill bi text-2xl text-orange-500 top-40 transform -translate-y-1/2 right-2 cursor-pointer"></i>
                ):(
                  <i  onClick={togglePasswordVisibility} class="bi absolute py-6 mr-1 bi-eye-fill bi text-2xl text-orange-500 top-40 transform -translate-y-1/2 right-2 cursor-pointer"></i>
                )
              }
              {formik.errors.password && formik.touched.password && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.password}
                </small>
              )}
              <button
                className="btn hover:bg-orange-500 bg-orange-500 text-white w-full md:mt-4 mt-5"
                type="submit"
              >
                Sign in
              </button>
              <p className="mt-3 text-center">
                Don’t have an account?{" "}
                <span className="text-orange-500 ">
                  <Link to={"/create"}> Create one now </Link>
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

export default Signin;
