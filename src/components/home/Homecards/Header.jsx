

import React from "react"
import { FaChevronRight } from "react-icons/fa";
import "../../../assets/styles/home.css"
import { Link } from "react-router-dom"

export default function Header({title, col}) {
  return (
    <div className="home-main-card-header" style={{ color: col }}>
      <span id="hideonsmallscreens">hello world</span>
      <h1>{title}</h1>
      <Link
        to={"trending/" + title}
        className="home-main-card-header-btn"
        style={{ color: col, textDecoration: "none" }}
      >
        <span>Discover all </span>
        <FaChevronRight size={20} />
      </Link>
    </div>
  );
}
// 