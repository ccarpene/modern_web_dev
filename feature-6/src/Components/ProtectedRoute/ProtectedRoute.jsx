import React from "react";
import { Navigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);

  if (checkUser()) {
    return <Component />;
  } else {
    return <Navigate to="/auth" replace />;
  }
};

export default ProtectedRoute;