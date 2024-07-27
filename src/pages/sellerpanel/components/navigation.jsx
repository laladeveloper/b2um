import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TiMessages } from "react-icons/ti";
import { IoMdCreate } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TfiDropbox } from "react-icons/tfi";
export default function Navigation({ active = "home" }) {
  const size = 24;
  const stroke = (title) => (active === title ? 1.5 : 1),
    uiclass = "nav-tab",
    uiclass_active = "nav-tab nav-tab-active",
    _class_ = (title) => (active === title ? uiclass_active : uiclass);

  return (
    <div className="nav">
      <Link to={"/seller/dashboard"} className={_class_("home")}>
        <RxDashboard size={size} />
        <div className="nav-tab-title">Dashboard</div>
      </Link>

      <Link to={"/seller/messages"} className={_class_("messages")}>
        <TiMessages size={size} />
        <div className="nav-tab-title">Messages</div>
      </Link>

      <Link to={"/seller/products"} className={_class_("myproducts")}>
        <TfiDropbox size={size} />
        <div className="nav-tab-title">My Listings</div>
      </Link>

      <Link to={"/seller/create"} className={_class_("create")}>
        <IoMdCreate size={size} />
        <div className="nav-tab-title">Create</div>
      </Link>

     
      <Link to={"/seller/notification"} className={_class_("notification")}>
        <MdNotificationsNone size={size} />
        <div className="nav-tab-title">Notification</div>
      </Link>

      <Link to={"/seller/profile"} className={_class_("profile")}>
        <FaRegUser size={size} />
        <div className="nav-tab-title">Profile</div>
      </Link>
    </div>
  );
}
