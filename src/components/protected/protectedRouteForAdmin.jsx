import React from 'react'
import { Navigate } from 'react-router-dom';
const ProtectedRouteForAdmin = ({children}) => {
    const admin=JSON.parse(localStorage.getItem("user"));
    if(admin.user.email==="kmd060463@gmail.com"){
        return children;
     }
     else{
      return <Navigate to={"/login"} />
     }
   
}

export default ProtectedRouteForAdmin