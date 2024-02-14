import React, { createContext, useState } from "react";
import baseUrl from "../BaseUrl";
import axios from "axios";

// const ProtectedRoute = () => {
//   const AuthContext = createContext({children});
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default ProtectedRoute;

// export const ProtectedRoute = async ()=> {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   try {
//     await axios.get(`${baseUrl}/auth`)
//     .then((res)=>{
//       setIsAuthenticated(res.data)
//     }).catch ((err)=>{

//     })

//   } catch {

//   }
//   return isAuthenticated;
    
// }