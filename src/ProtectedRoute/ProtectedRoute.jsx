import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({role} ) => {
  const {  isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {isAuthenticated  ?   <Outlet /> : <Navigate to="/login" />}
    </Fragment>
  );
};

export default ProtectedRoute;

// // following is ai
// import { useNavigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProtectedRoute = ({ isAdmin, children }) => {
//   const navigate = useNavigate();
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   if (loading) {
//     // Render a loading indicator or handle it in your own way.
//     return null;
//   }

//   if (!isAuthenticated) {
//     navigate("/login", { replace: true });
//     return null;
//   }

//   if (isAdmin && user.role !== "admin") {
//     navigate("/login", { replace: true });
//     return null;
//   }

//   return <Outlet>{children}</Outlet>;
// };

// export default ProtectedRoute;
