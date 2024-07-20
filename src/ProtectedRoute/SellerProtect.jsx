import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const SellerProtect = ({ role }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // console.log(user.isVerifiedSeller);
  console.log(role);
  console.log(isAuthenticated);

  return (
    <Fragment>
      {isAuthenticated && user.role === role  ? <Outlet /> : <Navigate to="/login" />}
    </Fragment>
  );
};

export default SellerProtect;
