
import React from "react"
import "./Search.css"
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
export default function Searchmain ({close, placeholder}) {
  return (
    <div className="search-tint-body">
      <button className="exit" onClick={close}>
        <RxCross2 />
      </button>

      <div className="search">
        <input
          type="text"
          name="search"
          placeholder={placeholder ?? "search stuffs in B2UM"}
        />
        <button>
          <IoIosSearch size={24} />
        </button>
      </div>
      <div className="search search-res">
        <h3>Results</h3>
      </div>
    </div>
  );
}
