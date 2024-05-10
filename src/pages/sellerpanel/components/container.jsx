import React from "react";
import Messages from "../pages/messages/messages.jsx";
import "./container.css";
import Notification from "../pages/notifications/notification.jsx";
import Home from "../pages/home/home.jsx";
import Profile from "../pages/profile/profile.jsx";
import Create from "../pages/create/create.jsx";

export default function Container({ active = "home" }) {
  return (
    <div className="seller-panel-container">
      {active === "home" ? (
        <Home />
      ) : active === "messages" ? (
        <Messages />
      ) : active === "create" ? (
        <Create />
      ) : active === "notification" ? (
        <Notification />
      ) : active === "profile" ? (
        <Profile />
      ) : null}
    </div>
  );
}
