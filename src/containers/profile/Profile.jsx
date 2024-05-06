import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import "./profile.css";
import axios from "axios";
import { logout } from "../../app/actions/userAction";
import { toast } from "sonner";
import { clearMsgs } from "../../app/reducers/userReducer";

export default function Profile() {
  const { user, isAuthenticated, message } = useSelector((state) => state.user);
  const [fName, setFName] = useState(user.username);
  const [rule, setRule] = useState(user.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [successMsg, setSuccessMsg] = '';
  const loggedout = () => {
    dispatch(logout());
    setSuccessMsg(`Logout Successful`);
    toast.success(successMsg);
    setTimeout(() => {
      dispatch(clearMsgs());
    }, 3000);
    
    setSuccessMsg('')
    navigate("/");
  };

  

  return (
    <div>
      <Header active={"profile"} />
      <div style={{ marginTop: "6em" }}>
        <div className="profile-profilepic">
          {" "}
          {fName.charAt(0).toUpperCase()}{" "}
        </div>
      </div>

      <div>
        <h1 style={{ textAlign: "center", color: "rbga(0,0,0,0.7)" }}>
          {fName}
        </h1>

        {rule === "user" ? (
          <button className="profile-sellbtn">
            <Link to="/seller" style={{ textDecoration: "none" }} id="link">
              Start Selling
            </Link>
          </button>
        ) : null}
        {rule === "seller" ? (
          <button className="profile-sellbtn">
            <Link
              to="/sellerpanel"
              style={{ textDecoration: "none" }}
              id="link"
            >
              Start Selling
            </Link>
          </button>
        ) : null}
      </div>

      <div className="profile-content-body">
        <div className="profile-meta-body">
          <div className="profile-meta-cont">
            <span>Available Balance</span>
            <span style={{ fontWeight: 700 }}>0.00 USD</span>
          </div>
          <div className="profile-meta-cont">
            <span>Points Earned</span>
            <span style={{ fontWeight: 700 }}>202 POINTS</span>
          </div>
        </div>

        <div style={{ marginBottom: "15rem" }}>
          <button className="logout-btn" onClick={loggedout}>
            <h4 style={{ textDecoration: "none" }} id="link">
              Logout
            </h4>
          </button>
        </div>
      </div>
    </div>
  );
}
