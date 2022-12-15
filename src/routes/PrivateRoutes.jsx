import React, { useEffect, useState, createContext, useContext } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { auth } from "../config/configs";
import { onAuthStateChanged, getAuth } from "firebase/auth";

// const AuthContext = createContext();

// export function useAuthContext() {
//   return useContext(AuthContext);
// }

const PrivateRoutes = () => {
  //check who user currently login and get the userinfo
  // const [user, setUser] = useState();

  const { currentUser } = getAuth();
  console.log(currentUser);

  return !currentUser ? <Navigate to="/login" /> : <Outlet />;

  // return user === null ? <Navigate to="/home" /> : <Outlet />;
  // return user !== null ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoutes;

// <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
//userだったらその中のpageに
// useEffect(() => {
//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });
//   // return () => {
//   //   unsubscribed();
//   // };
// }, []);
