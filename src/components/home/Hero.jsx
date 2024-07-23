import React from "react";
import "../../assets/styles/home.css";
import SearchH from "./Search.jsx";
import { Link } from "react-router-dom";
import img from "../../assets/gift cards.png";
import { useSelector } from "react-redux";

export default function Hero({ opensearch }) {
  const { user } = useSelector((state) => state.user);
  // const isSeller = user.role; 
  // console.log(isSeller);
  return (
    <div className="home-hero md:mt-20 lg:mt-40">
      <SearchH open={opensearch} />
      <div className="home-main-hero-section">
        <div>
          <h2 className="home-main-hero-h">Start selling gift cards now!</h2>
          <p className="home-main-hero-p">
            Trading made easy with B2UM, your Number 1 choice.
          </p>
          <div className="home-main-hero-cta-section">
            <button>
              {user && user.role == "seller" ? (
                <Link
                  to="/seller/dashboard"
                  style={{ textDecoration: "none" }}
                  id="link"
                >
                  Seller Dashboard
                </Link>
              ) : user && user?.role == "admin" ? (
                <Link to="/admin" style={{ textDecoration: "none" }} id="link">
                  Admin Dashboard
                </Link>
              ) : (
                <Link to="/seller" style={{ textDecoration: "none" }} id="link">
                  Start Selling
                </Link>
              )}
            </button>
            <button id="h-m-h-c-s-b2">
              <Link to="/register" style={{ textDecoration: "none" }} id="link">
                Find great deals
              </Link>
            </button>
          </div>
        </div>
        <img src={img} className="home-hero-poster" />
      </div>
    </div>
  );
}
//
