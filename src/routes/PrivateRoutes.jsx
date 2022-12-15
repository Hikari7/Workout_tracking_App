import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { auth } from "../config/configs";

//check the user is on stateged
import { onAuthStateChanged } from "firebase/auth";

const PrivateRoutes = () => {
  //tokenをfalseに変えようぜ
  // let auth = { token: true };

  //check who user currently login
  const [user, setUser] = useState(null);

  //userだったらその中のpageに
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
console.log("aaaa");
  return user === null ? <Navigate to="/login" /> : <Outlet />;
  // return user !== null ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoutes;
