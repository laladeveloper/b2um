import React from "react";
import Messages from "../pages/messages/messages.jsx";
import "./container.css";
import Notification from "../pages/notifications/notification.jsx";
import Home from "../pages/home/home.jsx";
import Profile from "../pages/profile/profile.jsx";
import Create from "../pages/create/create.jsx";
import User from "../pages/users/User.jsx";
import UserProfile from "../pages/users/user/userProfile.jsx";

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
      ) : active === "users" ? (
        <User />
      ) :active === "user" ? (
        <UserProfile />
      ): null}
    </div>
  );
}
