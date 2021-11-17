import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Profile from "./Profile";

function ProtectedRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Profile /> : <Navigate to="/" />;
}

export default ProtectedRoute;
