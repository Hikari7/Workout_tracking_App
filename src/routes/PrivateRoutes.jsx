import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { getAuth } from "firebase/auth";

const PrivateRoutes = () => {
  const { currentUser } = getAuth();
  console.log(currentUser);

  return !currentUser ? <Navigate to="/login" /> : <Outlet />;

  // return user === null ? <Navigate to="/home" /> : <Outlet />;
  // return user !== null ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoutes;
