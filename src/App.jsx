import "./App.css";
import Allcomponent from "./Components/Allcomponent";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import { Routes,Route } from "react-router-dom";
import Vans from "./Pages/Vans";
import DisplayVan from "./Pages/DisplayVan";
import Signin from "./Pages/Signin";
import Errorpage from "./Pages/Errorpage";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Allcomponent/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/vans" element={<Vans/>}></Route>
      <Route path="/view/van" element={<DisplayVan/>}></Route>
      <Route path="/login" element={<Signin/>}></Route>
      <Route path="*" element={<Errorpage />}></Route>
    </Routes>
    </>
  );
}

export default App;
