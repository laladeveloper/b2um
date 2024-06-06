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
import ReqConfirm from "./ReqConfirm";
import axios from "axios";
import { baseUrl } from "../../../../assets/baseURL";

export default function SellerProfile() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signleUser, loading, message } = useSelector((state) => state.admin);
  // State for managing popup visibility
  const [showPopup, setShowPopup] = useState(false);
  const [showCnfrmPopup, setShowCnfrmPopup] = useState(false);
  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleCnfrmPopup = () => {
    setShowCnfrmPopup(!showCnfrmPopup);
  };

  // Function to handle user deletion
  const handleDeleteUser = () => {
    togglePopup();
    navigate("/admin/sellerreqs");
    toast.success(`${username}'s Request deleted Successfully`);
  };

  const acceptReq = async () => {
    const response = await axios.put(
      `${baseUrl}/api/user/reqSeller/${signleUser._id}`
    );
    console.log(response.data);
  };
  // Function to handle user request acceptance
  const handleAcceptRequest = () => {
    // dispatch(deleteUser(username));
    acceptReq();
    toggleCnfrmPopup();
    // navigate("/admin/sellerreqs");
    toast.success(`${username}'s Request Accepted Successfully`);
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
        <div className="sellerpanel-profile min-w-screen w-max overflow-auto ">
          {showPopup && (
            <div className={`delete-confirm ${showPopup ? "visible" : ""}`}>
              <DeleteConfirm
                onCancel={togglePopup}
                onConfirm={handleDeleteUser}
              />
            </div>
          )}
          {showCnfrmPopup && (
            <div className={`delete-confirm ${showPopup ? "visible" : ""}`}>
              <ReqConfirm
                onCancel={toggleCnfrmPopup}
                onConfirm={handleAcceptRequest}
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

          <div className="profile-content-body scroll-auto grid min-w-max gap-4 lg:grid-cols-3 xsm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 pl-10 xsm:ml-10 mt-10 pr-10">
            <div className="flex justify-center items-start flex-col">
              <div className="profile-meta-cont">
                <h1>
                  User Balance{" "}
                  <span style={{ fontWeight: 700 }}>
                    {signleUser?.balance} USD
                  </span>
                </h1>
              </div>
              <div className="profile-meta-cont ">
                <h1>
                  Points Earned{" "}
                  <span style={{ fontWeight: 700 }}>
                    {signleUser?.points} POINTS
                  </span>
                </h1>
              </div>
            </div>

            <div>
              <div className="flex justify-center items-start flex-col">
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

            <div className="flex justify-center items-start flex-col">
              <h1>
                User Email : <span>{signleUser.email} </span>
              </h1>
              <h1>
                {" "}
                User Role : <span>{signleUser.role} </span>
              </h1>
            </div>

            <div className="flex justify-center items-start flex-col">
              <h1>
                WhatsApp : <span>{signleUser.whatsapp} </span>
              </h1>
              <h1>
                {" "}
                Telegram : <span>{signleUser.telegram} </span>
              </h1>
            </div>
            <div className="flex justify-center items-start flex-col">
              <h1>
                CNIC : <span>{signleUser.cnic} </span>
              </h1>
              <h1>
                {" "}
                Date of Birth : <span>{signleUser.dob} </span>
              </h1>
            </div>
            <div className="flex justify-center items-start flex-col">
              <h1>
                User ID : <span>{signleUser._id} </span>
              </h1>
            </div>
            {signleUser?.cnicFront?.url  ? (
              <>
                <div className="cnic border-4 rounded-xl m-2 p-2 border-dotted">
                  <h1>CNIC Front Side</h1>
                  <img
                    src={signleUser?.cnicFront?.url}
                    alt="CNIC Front Side"
                    className="rounded-xl w-80 h-80 "
                  />
                </div>
                <div className="cnic border-4 rounded-xl m-2 p-2 border-dotted">
                  <h1>CNIC Front Side</h1>
                  <img
                    src={signleUser?.cnicRear?.url}
                    alt="CNIC Front Side"
                    className="rounded-xl w-80 h-80 "
                  />
                </div>
              </>
            ) : null }
          </div>
          <div className=" flex justify-center items-center flex-col">
            <button
              onClick={toggleCnfrmPopup}
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
