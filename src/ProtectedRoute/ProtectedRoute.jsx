import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom"; // Import useLocation

const ProtectedRoute = ({ role }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const location = useLocation(); // Initialize useLocation

  return (
    <Fragment>
      {isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} /> // Pass location state
      )}
    </Fragment>
  );
};

export default ProtectedRoute;

