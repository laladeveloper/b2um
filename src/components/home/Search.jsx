 
import React from "react"
import "./Search.css"
import { IoIosSearch } from "react-icons/io";
export default function SearchH({open, placeholder}) {
  return (
    // <div className="home-h-search" onClick={open}>
    <div className="home-h-search " >
      <input
        type="text"
        name="searchhome"
        placeholder={placeholder ?? "search stuffs in B2UM"}
        // onClick={open}
      />
      <button style={{ backgroundColor: "#2AFFE2" }}>
        <IoIosSearch size={24}/>
      </button>
    </div>
  );
}
