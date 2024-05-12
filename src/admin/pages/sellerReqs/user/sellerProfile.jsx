import React, { useState } from "react";
import "./sellerProfile.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../Loader";
import { SlRefresh } from "react-icons/sl";
import { deleteUser, getUser } from "../../../../app/actions/adminActions";
import DeleteConfirm from "./DeleteConfirm";
import { toast } from "sonner";
import { clearMsgs } from "../../../../app/reducers/adminReducer";

export default function SellerProfile() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signleUser, loading, message } = useSelector((state) => state.admin);
  // State for managing popup visibility
  const [showPopup, setShowPopup] = useState(false);
  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Function to handle user deletion
  const handleDeleteUser = () => {
    // Perform user deletion logic here
    // For now, let's just log a message
    dispatch(deleteUser(username))
   
    togglePopup();
    navigate("/admin/users")
    setTimeout(() => {
      toast.success(message)
    }, 1100);

    // toast.success(`${username} deleted Successfully`)
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : !signleUser ? (
        <>
          <div className="flex justify-center items-center h-screen w-screen ">
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
        <div className="sellerpanel-profile w-screen">
          {showPopup && (
            <div className={`delete-confirm ${showPopup ? "visible" : ""}`}>
              <DeleteConfirm
                onCancel={togglePopup}
                onConfirm={handleDeleteUser}
              />
            </div>
          )}
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

          <div className="profile-content-body grid min-w-max gap-4 lg:grid-cols-3 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xsm:ml-10 mt-10">
            <div className="flex justify-center items-center flex-col">
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
              <div className="flex justify-center items-center flex-col">
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

            <div className="flex justify-center items-center flex-col">
              <h1>
                User Email : <span>{signleUser.email} </span>
              </h1>
              <h1>
                {" "}
                User Role : <span>{signleUser.role} </span>
              </h1>
            </div>

            <div className="flex justify-center items-center flex-col">
              <h1>
                WhatsApp : <span>{signleUser.whatsapp} </span>
              </h1>
              <h1>
                {" "}
                Telegram : <span>{signleUser.telegram} </span>
              </h1>
            </div>
            <div className="flex justify-center items-center flex-col">
              <h1>
                CNIC : <span>{signleUser.cnic} </span>
              </h1>
              <h1>
                {" "}
                Date of Birth : <span>{signleUser.dob} </span>
              </h1>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-col">
            <button
              onClick={() => navigate("/admin/sellerreqs")}
              className=" m-5 px-6 py-3 hover:px-10 font-bold bg-teal-300 rounded-full "
              style={{ marginLeft: "1em" }}
            >
              Accept Request
            </button>
            <div
              onClick={togglePopup}
              className="action m-5 cursor-pointer hover:text-red-600 "
            >
              <h3>Delete Request</h3>
            </div>
            <button
              onClick={() => navigate("/admin/sellerreqs")}
              className=" m-5 px-6 py-3 hover:px-10 font-bold bg-teal-300 rounded-full "
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
