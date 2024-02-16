import "./App.css";
import Allcomponent from "./Components/Allcomponent";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Vans from "./Pages/Vans";
import DisplayVan from "./Pages/DisplayVan";
import Signin from "./Pages/Signin";
import Errorpage from "./Pages/Errorpage";
import Host from "./Pages/Host";
import HostVan from "./Pages/HostVan";
import HostvanView from "./Pages/HostvanView";
import HoseReview from "./Pages/HoseReview";
import Income from "./Pages/Income";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Pages/Profile";
import useProtectedRoute from "./Pages/ProtectedRoute";
import { SpinnerRoundFilled } from "spinners-react";
import { Navbar } from "flowbite-react";
function App() {
  const { user, isLoading,logout } = useProtectedRoute()

  // if(isLoading){
  //   return  <div className="w-full text-center pt-36">
  //   <SpinnerRoundFilled speed={50} color="rgba(172, 85, 57, 1)"  className="mx-auto mt-5 md:mt-0 h-50 w-50 " />
  // </div>
  // }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
        theme="light"
      />
      {/* <Navbar user={user} logout={logout}/> */}
      <Routes>
        <Route path="/" element={<Allcomponent />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<Vans />}></Route>
        <Route path="/view/van" element={<DisplayVan />}></Route>
        <Route path="/create" element={<Signup />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/host" element={<Host />}></Route>
        <Route path="/host/vans" element={<HostVan />}></Route>
        <Route path="/host/vans/:id" element={<HostvanView />}></Route>
        <Route path="/host/reviews" element={<HoseReview />}></Route>
        <Route path="/host/income" element={<Income />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<Errorpage />}></Route>
      </Routes>
    </>
  );
}


export default App;
