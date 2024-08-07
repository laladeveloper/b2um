// import { Suspense } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ReactGA from 'react-ga4'; // Import ReactGA

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
import Privacy from "./pages/privacy/Privacy.jsx";
import Terms from "./pages/terms/Terms.jsx";
import Contact from "./pages/contact/Contact.jsx";
import CategoryName from "./pages/category/CategoryName.jsx";
import Order from "./pages/order/Order.jsx";
import Checkout from "./pages/pay/Checkout.jsx";
// import Admin from "./admin/admin.jsx";

const Admin = lazy(() => import("./admin/admin.jsx"));
const GA_TRACKING_ID = import.meta.env.VITE_REACT_APP_GA_TRACKING_ID;
console.log(GA_TRACKING_ID);
ReactGA.initialize(GA_TRACKING_ID);
// Custom hook to track page views
function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    // Sends page view event to Google Analytics
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
}

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
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:id" element={<MessagesMain />} />

            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/order" element={<Order />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/seller/register" element={<SellerRigister />} />
              <Route path="/pay" element={<Checkout />} />
            </Route>
            <Route element={<SellerProtect role="seller" />}>
              <Route
                path="/seller/dashboard"
                element={<Sellerpanel active={"home"} />}
              />
              <Route
                path="/seller/messages"
                element={<Sellerpanel active={"messages"} />}
              />
              <Route
                path="/seller/create"
                element={<Sellerpanel active={"create"} />}
              />
              <Route
                path="/seller/listing/update"
                element={<Sellerpanel active={"update"} />}
              />
              <Route
                path="/seller/notification"
                element={<Sellerpanel active={"notification"} />}
              />
              <Route
                path="/seller/products"
                element={<Sellerpanel active={"myproducts"} />}
              />
              <Route
                path="/seller/profile"
                element={<Sellerpanel active={"profile"} />}
              />
            </Route>

            <Route element={<AdminProtect role="admin" />}>
              <Route path="/admin" element={<Admin active={"home"} />} />
              <Route
                path="/admin/messages"
                element={<Admin active={"messages"} />}
              />
              <Route
                path="/admin/orders"
                element={<Admin active={"orders"} />}
              />
              <Route
                path="/admin/sellerreqs"
                element={<Admin active={"sellerReqs"} />}
              />
              <Route
                path="/admin/sellerreqs/:username"
                element={<Admin active={"sellerReq"} />}
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
              <Route
                path="/admin/all/categories"
                element={<Admin active={"allcategories"} />}
              />
            </Route>
            <Route path="/:category" element={<CategoryName />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
