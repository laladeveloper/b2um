
import React from 'react'
import '../../assets/styles/home.css'
import SearchH from './Search.jsx'
import {Link} from 'react-router-dom'
import img from "../../assets/gift cards.png"

export default function Hero({opensearch}) {
  return (
    <div className="home-hero">
      <SearchH open={opensearch} />
      <div className="home-main-hero-section">
        <div>
          <h2 className="home-main-hero-h">Start selling gift cards now!</h2>
          <p className="home-main-hero-p">
            Trading made easy with B2UM, your Number 1 choice.
          </p>
          <div className="home-main-hero-cta-section">
            <button>
              <Link to="/seller" style={{ textDecoration: "none" }} id="link">
                Start Selling
              </Link>
            </button>
            <button id="h-m-h-c-s-b2">
              <Link
                to="/auth/register"
                style={{ textDecoration: "none" }}
                id="link"
              >
                Find great deals
              </Link>
            </button>
          </div>
        </div>
        <img
          src={img}
          className="home-hero-poster"
        />
      </div>
    </div>
  );
}
// 