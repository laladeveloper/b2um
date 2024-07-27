import React, { useEffect } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TiMessages } from "react-icons/ti";
import { IoMdCreate } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { FaRegUser, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getSellerReqs } from "../../app/actions/adminActions";
// import { FaUsers } from "react-icons/fa";
export default function Navigation({ active = "home" }) {
  const dispatch = useDispatch(); 
  const { sellerReqs } = useSelector((state) => state.admin);
  const { token } = useSelector((state) => state.user);
useEffect(() => {
 dispatch(getSellerReqs(token));
}, [])
const requests = sellerReqs.length;
  const size = 24;
  const stroke = (title) => (active === title ? 1.5 : 1),
    uiclass = "nav-tab",
    uiclass_active = "nav-tab nav-tab-active",
    _class_ = (title) => (active === title ? uiclass_active : uiclass);

  return (
    <div className="nav ">
      <Link to={"/admin"} className={_class_("home")}>
        <RxDashboard size={size} />
        <div className="nav-tab-title">Dashboard</div>
      </Link>
      <Link to={"/admin/orders"} className={_class_("orders")}>
        <RxDashboard size={size} />
        <div className="nav-tab-title">Orders</div>
      </Link>

      <Link to={"/admin/messages"} className={_class_("messages")}>
        <TiMessages size={size} />
        <div className="nav-tab-title">Messages</div>
      </Link>

      <Link to={"/admin/sellerreqs"} className={_class_("sellerReq")}>
        <FaUsers size={size} />
        <div className="nav-tab-title ">Requests </div>
        {requests && <p className="reqnumbers">{requests}</p>}
      </Link>

      <Link to={"/admin/users"} className={_class_("users")}>
        <FaUsers size={size} />
        <div className="nav-tab-title">Users</div>
      </Link>

      <Link to={"/admin/create"} className={_class_("create")}>
        <IoMdCreate size={size} />
        <div className="nav-tab-title">Category </div>
      </Link>

      <Link to={"/admin/notification"} className={_class_("notification")}>
        <MdNotificationsNone size={size} />
        <div className="nav-tab-title">Notification</div>
      </Link>

      <Link to={"/admin/profile"} className={_class_("profile")}>
        <FaRegUser size={size} />
        <div className="nav-tab-title">Profile</div>
      </Link>
    </div>
  );
}
