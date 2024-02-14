import React, { useEffect, useState } from "react";
import SecondNav from "../Components/SecondNav";

const Profile = () => {
  const getuser = JSON.parse(localStorage.getItem("alluser"));
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");

  const handelUser = () => {
    setFirst(getuser.firstname);
    setLast(getuser.lastname);
    setEmail(getuser.email);
  };
  useEffect(() => {
    handelUser();
  }, []);
  return (
    <div>
      <SecondNav />
      <div className="container  shadow-xl pb-5 py-8 mt-20">
        <p className="font-bold text-xl text-orange-500">Profile</p>
        <div>
          <p className="mt-4 shadow py-2 px-2 rounded-md">{first}</p>
        </div>
        <hr className="text-orange-500" />
        <div>
          <p className="mt-4 shadow py-2 px-2 rounded-md">{last}</p>
        </div>
        <hr  className="text-orange-500" />
        <div>
          <p className="mt-4 shadow py-2 px-2 rounded-md">{email}</p>
        </div>
        <hr   className="text-orange-500"/>
      <i class="bi bi-pencil-square text-2xl mt-2 cursor-pointer text-orange-400 float-end"><span className="text-sm">Edit</span></i>
      </div>
    </div>
  );
};

export default Profile;
