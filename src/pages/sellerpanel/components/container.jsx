import React from "react";
import Messages from "../pages/messages/messages.jsx";
import "./container.css";
import Notification from "../pages/notifications/notification.jsx";
import Home from "../pages/home/home.jsx";
import Profile from "../pages/profile/profile.jsx";
import Create from "../pages/create/create.jsx";
import Myproducts from "../pages/myproducts/Myproducts.jsx";
import UpdateListing from "../pages/update/update.jsx";

export default function Container({ active = "home" }) {
  return (
    <div className="seller-panel-container">
      {active === "home" ? (
        <Home />
      ) : active === "messages" ? (
        <Messages />
      ) : active === "create" ? (
        <Create />
      ) :active === "update" ? (
        <UpdateListing />
      ) : active === "notification" ? (
        <Notification />
      ) : active === "myproducts" ? (
        <Myproducts />
      ) : active === "profile" ? (
        <Profile />
      ) : null}
    </div>
  );
}
