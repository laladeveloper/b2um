import React, { useState } from "react";
import "./userProfile.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../Loader";
import { SlRefresh } from "react-icons/sl";
import { getUser } from "../../../../app/actions/adminActions";

export default function Profile() {
  const { username } = useParams();
  const dispatch = useDispatch();
const navigate = useNavigate(); 
  const { signleUser, loading } = useSelector((state) => state.admin);
  return (
    <>
      {loading ? (
        <Loader />
      ) : !signleUser ? (
        <>
          <div className="flex justify-center items-center h-screen ">
            <h1 className=" w-max ">
              <button
                onClick={() => dispatch(getUser(username))}
                className=" flex justify-center items-center gap-4 text-lg font-bold"
              >
                Refresh <SlRefresh size={30} />
              </button>
            </h1>
          </div>
        </>
      ) : (
        <div className="sellerpanel-profile">
          <div>
            <div
              className="profile-leadcirlce"
              style={{
                backgroundColor: `hsl(138), 87%, 75%)`,
              }}
            >
              {signleUser?.fname?.charAt(0)}
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
              {signleUser?.fname ? (
                <h1 style={{ textAlign: "center", color: "rbga(0,0,0,0.7)" }}>
                  {signleUser?.fname + " " + signleUser?.lname}
                </h1>
              ) : (
                <h1 style={{ textAlign: "center", color: "rbga(0,0,0,0.7)" }}>
                  {signleUser?.username}
                </h1>
              )}
            </p>
          </div>

          <div className="profile-content-body grid grid-cols-3 content-center gap-2 mt-10">
            <div className="profile-meta-body flex justify-center items-center flex-col">
              <div className="profile-meta-cont">
                <span>User Balance </span>
                <span style={{ fontWeight: 700 }}>
                  {signleUser?.balance} USD
                </span>
              </div>
              <div className="profile-meta-cont ">
                <span>Points Earned </span>
                <span style={{ fontWeight: 700 }}>
                  {signleUser?.points} POINTS
                </span>
              </div>
            </div>

            <div>
              <div className=" ">
                <h1>
                  User First Name :{" "}
                  <span className=" font-bold">{signleUser?.fname} </span>{" "}
                </h1>
                <h1>
                  User last Name :{" "}
                  <span className=" font-bold">{signleUser?.lname} </span>
                </h1>
              </div>
            </div>

            <div>
              <h1>
                User Email : <span>{signleUser.email} </span>
              </h1>
              <h1>
                {" "}
                User Role : <span>{signleUser.role} </span>
              </h1>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <button
            onClick={()=>navigate("/admin/users")}
              className=" m-5 px-5 py-2 bg-teal-300 rounded-full "
              style={{ marginLeft: "1em" }}
            >
              back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
