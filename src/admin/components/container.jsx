import React from "react";
import Messages from "../pages/messages/messages.jsx";
import "./container.css";
import Notification from "../pages/notifications/notification.jsx";
import Home from "../pages/home/home.jsx";
import Profile from "../pages/profile/profile.jsx";
import Create from "../pages/create/create.jsx";
import User from "../pages/users/User.jsx";
import UserProfile from "../pages/users/user/userProfile.jsx";
import SellerRequests from "../pages/sellerReqs/SellerRequests.jsx";
import SellerProfile from "../pages/sellerReqs/user/sellerProfile.jsx";
import Orders from "../pages/orders/Orders.jsx";
import ListedCategories from "../pages/categories/Categories.jsx";

export default function Container({ active = "home" }) {
  return (
    <div className="seller-panel-container">
      {active === "home" ? (
        <Home />
      ) : active === "messages" ? (
        <Messages />
      ) : active === "sellerReqs" ? (
        <SellerRequests />
      ) : active === "sellerReq" ? (
        <SellerProfile />
      ) : active === "create" ? (
        <Create />
      ) : active === "notification" ? (
        <Notification />
      ) : active === "profile" ? (
        <Profile />
      ) : active === "users" ? (
        <User />
      ) : active === "user" ? (
        <UserProfile />
      ) : active === "orders" ? (
        <Orders />
      ) : active === "allcategories" ? (
        <ListedCategories />
      ) : null}
    </div>
  );
}
