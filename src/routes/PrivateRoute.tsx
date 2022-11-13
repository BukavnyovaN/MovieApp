import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoute = ({ children }: any) => {
  const { isAuth } = useAuth();

  return isAuth ? children : <Navigate to="/login" />;
};
