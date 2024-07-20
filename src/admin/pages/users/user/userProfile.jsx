import React, { useState } from "react";
import "./userProfile.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../../Loader";
import { SlRefresh } from "react-icons/sl";
import { deleteUser, getUser } from "../../../../app/actions/adminActions";
import DeleteConfirm from "./DeleteConfirm";
import { toast } from "sonner";
import { clearMsgs } from "../../../../app/reducers/adminReducer";

export default function Profile() {
  const { username } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signleUser, loading, message } = useSelector((state) => state.admin);
  // State for managing popup visibility
  const [showPopup, setShowPopup] = useState(false);
  const [showRole, setShowRole] = useState(false);
  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleRole = () => {
    toast.info(`Be Sure to change User role`);
    setShowRole(!showRole);
  };
  // Function to handle user deletion
  const handleDeleteUser = () => {
    // Perform user deletion logic here
    // For now, let's just log a message
    dispatch(deleteUser(username));

    togglePopup();
    navigate("/admin/users");
    setTimeout(() => {
      toast.success(message);
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

          <div className="profile-content-body grid gap-4 lg:grid-cols-3 xsm:grid-cols-1 md:grid-cols-2 xsm:ml-10 mt-10">
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
          <div className=" flex justify-center items-center flex-col">
            <div
              onClick={togglePopup}
              className="action m-5 cursor-pointer hover:text-red-600 "
            >
              <h3>Delete User</h3>
            </div>

            {/* <button
              onClick={toggleRole}
              className=" m-5 px-6 py-3 hover:px-10 font-bold bg-teal-300 rounded-full "
              style={{ marginLeft: "1em" }}
            >
              Change User Role
            </button> */}

            <button
              id="dropdownRadioBgHoverButton"
              data-dropdown-toggle="dropdownRadioBgHover"
              className="text-black font-bold bg-teal-300 hover:bg-teal-200 focus:ring-4 focus:outline-none focus:ring-teal-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              onClick={toggleRole}
            >
              Change User Role
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownRadioBgHover"
              className={`z-10 ${
                showRole ? "" : "hidden"
              } w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
            >
              <ul
                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownRadioBgHoverButton"
              >
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="default-radio-4"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="default-radio-4"
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Default radio
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      checked
                      id="default-radio-5"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="default-radio-5"
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Checked state
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="default-radio-6"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="default-radio-6"
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Default radio
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <button
              onClick={() => navigate("/admin/users")}
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
