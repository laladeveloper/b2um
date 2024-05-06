
import React from "react"
import "./Search.css"
import { IoIosSearch } from "react-icons/io";

export default function SearchH({placeholder}) {
  return (
    <div className="home-h-search">
      <input type="text" placeholder={placeholder ?? "search stuffs in BTUM"} />
      <button>
        <IoIosSearch />
      </button>
    </div>
  );
}
 