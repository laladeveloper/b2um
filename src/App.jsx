// import { Suspense } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
// using lazy function
const Fp = lazy (() => import("./containers/auth/fp.jsx"));
// import Fp from "./containers/auth/fp.jsx";
const Login = lazy(() => import("./containers/auth/login.jsx"));
// import Login from "./containers/auth/login.jsx";
const Register = lazy(() => import("./containers/auth/register.jsx"));
// import Register from "./containers/auth/register.jsx";
const Category = lazy(() => import("./containers/category/Category.jsx"));
// import Category from "./containers/category/Category.jsx";
const CategoryB = lazy(() => import("./containers/category/CategoryB.jsx"));
// import CategoryB from "./containers/category/CategoryB.jsx";
//const Home = lazy(() => import("./containers/home/Home.jsx"));
import Home from "./containers/home/Home.jsx";
const Messages = lazy(() => import("./containers/messages/Messages.jsx"));
// import Messages from "./containers/messages/Messages.jsx";
const MessagesMain = lazy(() => import("./containers/messages/MessagesMain.jsx"));
// import MessagesMain from "./containers/messages/MessagesMain.jsx";
const Notification = lazy(() => import("./containers/notification/Notification.jsx"));
// import Notification from "./containers/notification/Notification.jsx";
const Profile = lazy(() => import("./containers/profile/Profile.jsx"));
// import Profile from "./containers/profile/Profile.jsx";
const Seller = lazy(() => import("./containers/seller/Seller.jsx"));
// import Seller from "./containers/seller/Seller.jsx";
const SellerRigister = lazy(() => import("./containers/seller/SellerRigister.jsx"));
// import SellerRigister from "./containers/seller/SellerRigister.jsx";
const Sellerpanel = lazy(() => import("./containers/sellerpanel/sellerpanel.jsx"));
// import Sellerpanel from "./containers/sellerpanel/sellerpanel.jsx";
//const Loader = lazy(() => import("../Loader.jsx"));
import Loader from "./Loader.jsx";
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seller" element={<Seller />} />

            <Route path="/seller/register" element={<SellerRigister />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgetpswrd" element={<Fp />} />

            <Route path="/trending/:category" element={<Category />} />
            <Route path="/trending/:cateogry/:id" element={<CategoryB />} />

            <Route path="/notification" element={<Notification />} />
            <Route path="/messages/" element={<Messages />} />
            <Route path="/messages/:id" element={<MessagesMain />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/sellerpanel"
                element={<Sellerpanel active={"home"} />}
              />
              <Route
                path="/sellerpanel/messages"
                element={<Sellerpanel active={"messages"} />}
              />
              <Route
                path="/sellerpanel/create"
                element={<Sellerpanel active={"create"} />}
              />
              <Route
                path="/sellerpanel/notification"
                element={<Sellerpanel active={"notification"} />}
              />
              <Route
                path="/sellerpanel/profile"
                element={<Sellerpanel active={"profile"} />}
              />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
