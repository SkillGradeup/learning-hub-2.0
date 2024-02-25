import React,{useState} from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const [auth, setAuth] = useState({ token: true });
 console.log(auth)
  console.log("auth", !auth.token);
  return !auth.token ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
