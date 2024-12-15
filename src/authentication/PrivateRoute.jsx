import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from '../authentication/useAuth'
// import { useAuth } from "../services/AuthProvider";

const PrivateRoute = () => {
  const user = useAuth();

  
  if (!user?.token || !user) return <Navigate to="/auth/login" />;
  return <Outlet />;
};

export default PrivateRoute;