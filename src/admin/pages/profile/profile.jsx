
import React, { useState } from 'react'
import './profile.css'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Profile() {
  const navigate = useNavigate();
  const { user, isAuthenticated, message } = useSelector((state) => state.user);
  
  return (
    <div className="sellerpanel-profile">
      <div>
        <div
          className="profile-leadcirlce"
          style={{
            backgroundColor: `hsl(138), 87%, 75%)`,
          }}
        >
          {user?.fname?.charAt(0)}
        </div>
      </div>

      <div>
        <p
          style={{
            textAlign: "center",
            color: "rbga(0,0,0,0.8)",
            marginTop: "0.5em",
            fontFamily: "nunito",
          }}
        >
          {user?.fname ? (
            <h1 style={{ textAlign: "center", color: "rbga(0,0,0,0.7)" }}>
              {user?.fname + " " + user?.lname}
            </h1>
          ) : (
            <h1 style={{ textAlign: "center", color: "rbga(0,0,0,0.7)" }}>
              {user?.username}
            </h1>
          )}
        </p>
      </div>

      <div className="profile-content-body grid gap-4 lg:grid-cols-3 xsm:grid-cols-1 md:grid-cols-2 xsm:ml-10 mt-10">
      {/* <div className="grid auto-cols-auto mt-10"> */}
        <div className=" ">
          <div className="profile-meta-cont">
            <span>Available Balance </span>
            <span style={{ fontWeight: 700 }}>{user?.balance} USD</span>
          </div>
          <div className="profile-meta-cont ">
            <span>Points Earned </span>
            <span style={{ fontWeight: 700 }}>{user?.points} POINTS</span>
          </div>
        </div>

        <div>
          <div className=" ">
            <h1>
               First Name : {" "}
              <span className=" font-bold">{user?.fname} </span>{" "}
            </h1>
            <h1>
               last Name : {" "}
              <span className=" font-bold">{user?.lname} </span>
            </h1>
          </div>
        </div>

        <div>
          <h1>
             Email : <span>{user.email} </span>
          </h1>
          <h1>
            {" "}
             Role : <span>{user.role} </span>
          </h1>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <button
          onClick={() => navigate("/admin")}
          className=" m-5 px-5 py-2 bg-teal-300 rounded-full "
          style={{ marginLeft: "1em" }}
        >
          back
        </button>
      </div>
    </div>
  );
}
