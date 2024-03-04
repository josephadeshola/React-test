import React, { useEffect, useState } from "react";
import SecondNav from "../Components/SecondNav";
import axios from "axios";
import baseUrl from "../BaseUrl";
import { SpinnerRoundFilled } from "spinners-react";

const Profile = () => {
  const getuser = JSON.parse(localStorage.getItem("alluser"));
  const [isLoading, setisLoading] = useState(true)
  useEffect(()=>{
    const timer=setTimeout(()=>setisLoading(false),2000)
    return()=>clearTimeout(timer)
  },[])
  const [data, setdata] = useState({
    firstname: getuser ? getuser.firstname : "",
    lastname: getuser ? getuser.lastname : "",
    email: getuser ? getuser.email : "",
    userId: getuser._id,
  });
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
    console.log(data);
  };
  const handleEdit = (e) => {
    console.log(data);
    axios
      .post(baseUrl + "user/update", { Val: data })
      .then((res) => {
        console.log(res);
        const userUpdated = res.data.user;
        localStorage.alluser = JSON.stringify(userUpdated);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      ):(
        <div>
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                EDIT USER
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                value={data.firstname}
                name="firstname"
                className="form-control border-orange-500 bg-black-500 mt-3"
                placeholder={data.firstname}
                onChange={handleChanges}
              />
              <input
                type="text"
                value={data.lastname}
                name="lastname"
                className="form-control border-orange-500 bg-black-500 mt-3"
                placeholder={data.lastname}
                onChange={handleChanges}
              />
              <input
                type="text"
                value={data.email}
                name="email"
                className="form-control border-orange-500 bg-black-500 mt-3"
                placeholder={data.email}
                onChange={handleChanges}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn bg-red-500 text-white hover:bg-red-500"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn bg-orange-500 hover:bg-orange-500 text-white"
                onClick={handleEdit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container  shadow-xl pb-5 py-8 mt-20">
        <p className="font-bold text-xl text-orange-500">Profile</p>
        <div>
          <p className="mt-4 shadow py-2 px-2 rounded-md">{data.firstname}</p>
        </div>
        <hr className="text-orange-500" />
        <div>
          <p className="mt-4 shadow py-2 px-2 rounded-md">{data.lastname}</p>
        </div>
        <hr className="text-orange-500" />
        <div>
          <p className="mt-4 shadow py-2 px-2 rounded-md">{data.email}</p>
        </div>
        <hr className="text-orange-500" />
        <i
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="bi bi-pencil-square text-2xl mt-2 cursor-pointer text-orange-400 float-end"
        >
          <span className="text-sm">Edit</span>
        </i>
      </div>
        </div>
      )}
  
    </div>
  );
};

export default Profile;
