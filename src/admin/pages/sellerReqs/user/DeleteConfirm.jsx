import React from "react";

const DeleteConfirm = ({ onCancel, onConfirm }) => {
  return (
    // <div className="popup bg-red-300 w-1/3 h-1/3  rounded-3xl fixed top-1/3 right-1/4 sm:right-1/3 xsm:right-1/3 md:right-1/4  bg-opacity-80">
    <div className="popup bg-slate-100 fixed w-screen h-screen bg-opacity-80">
      <div className="popup-inner sm drop-shadow-lg hover:drop-shadow  bg-white xsm:w-full md:w-1/3 h-1/3 fixed rounded-3xl top-1/3  sm:right-1/3  md:right-1/4  flex justify-around flex-col items-center ">
        <h2 className="font-bold text-lg">
          Are you sure you want to delete this Request?
        </h2>
        <div className="button-container grid grid-cols-2 gap-8 ">
          <button className="px-4 py-2 rounded-full border border-green-400 text-gray-600 hover:bg-green-300 hover:text-gray-700 " onClick={onCancel}>No</button>
          <button className=" px-4 py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-400 hover:text-white " onClick={onConfirm}>Yes, delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirm;
