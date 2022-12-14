import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  //tokenをfalseに変えようぜ
  let auth = { token: true };

  return (
    // <Route {...rest}>{!auth.token ? <Redirect to="/login" /> : children}</Route>

    //もしtokenがtrueだったら、Outletに移動して、そうじゃなかったらlogin pageに
    auth.token ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoutes;
