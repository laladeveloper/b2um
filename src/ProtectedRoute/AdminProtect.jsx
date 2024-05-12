import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtect = ({ role }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(user.role);
  console.log(role);
  return (
    <Fragment>
      {isAuthenticated && user.role === role ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </Fragment>
  );
};

export default AdminProtect;
