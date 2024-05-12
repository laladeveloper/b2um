// import { Suspense } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.jsx";
// using lazy function
const Fp = lazy(() => import("./pages/auth/fp.jsx"));
// import Fp from "./pages/auth/fp.jsx";
const Login = lazy(() => import("./pages/auth/login.jsx"));
// import Login from "./pages/auth/login.jsx";
const Register = lazy(() => import("./pages/auth/register.jsx"));
// import Register from "./pages/auth/register.jsx";
const Category = lazy(() => import("./pages/category/Category.jsx"));
// import Category from "./pages/category/Category.jsx";
const CategoryB = lazy(() => import("./pages/category/CategoryB.jsx"));
// import CategoryB from "./pages/category/CategoryB.jsx";
//const Home = lazy(() => import("./pages/home/Home.jsx"));
import Home from "./pages/home/Home.jsx";
const Messages = lazy(() => import("./pages/messages/Messages.jsx"));
// import Messages from "./pages/messages/Messages.jsx";
const MessagesMain = lazy(() => import("./pages/messages/MessagesMain.jsx"));
// import MessagesMain from "./pages/messages/MessagesMain.jsx";
const Notification = lazy(() =>
  import("./pages/notification/Notification.jsx")
);
// import Notification from "./pages/notification/Notification.jsx";
const Profile = lazy(() => import("./pages/profile/Profile.jsx"));
// import Profile from "./pages/profile/Profile.jsx";
const Seller = lazy(() => import("./pages/seller/Seller.jsx"));
// import Seller from "./pages/seller/Seller.jsx";
const SellerRigister = lazy(() => import("./pages/seller/SellerRigister.jsx"));
// import SellerRigister from "./pages/seller/SellerRigister.jsx";
const Sellerpanel = lazy(() => import("./pages/sellerpanel/sellerpanel.jsx"));
// import Sellerpanel from "./pages/sellerpanel/sellerpanel.jsx";
//const Loader = lazy(() => import("../Loader.jsx"));
import Loader from "./Loader.jsx";
import SellerProtect from "./ProtectedRoute/SellerProtect.jsx";
import AdminProtect from "./ProtectedRoute/AdminProtect.jsx";
// import Admin from "./admin/admin.jsx";

const Admin = lazy(() => import("./admin/admin.jsx"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seller" element={<Seller />} />

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
              <Route path="/seller/register" element={<SellerRigister />} />
            </Route>
            <Route element={<SellerProtect role="seller" />}>
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

            <Route element={<AdminProtect role="admin" />}>
              <Route path="/admin" element={<Admin active={"home"} />} />
              <Route
                path="/admin/messages"
                element={<Admin active={"messages"} />}
              />
              <Route path="/admin/users" element={<Admin active={"users"} />} />
              <Route
                path="/admin/users/:username"
                element={<Admin active={"user"} />}
              />
              <Route
                path="/admin/create"
                element={<Admin active={"create"} />}
              />
              <Route
                path="/admin/notification"
                element={<Admin active={"notification"} />}
              />
              <Route
                path="/admin/profile"
                element={<Admin active={"profile"} />}
              />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
