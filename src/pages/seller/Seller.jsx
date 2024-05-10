
import React from 'react'
import Header from '../../components/common/Header.jsx'
import Footer from '../../components/common/Footer.jsx'
import './Seller.css'
import PaymentMethod from "../../components/home/PaymentMethod.jsx";
import About from "../../components/home/About.jsx";
import { img1, img2, img3, img4 } from './images.jsx'
import {Link} from 'react-router-dom'

export default function Seller() {
  return (
    <div className="seller-body">
      <Header hidefooter={true} />

      <div style={{ marginTop: "6em" }}>
        <div className="hero-section">
          <div>
            <h1>Start selling on B2UM today</h1>
            <p>
              We've helped thousands of gamers earn money and now it's your
              turn.
            </p>
            <button >
              <Link
                to={"/seller/register"}
                style={{ textDecoration: "none" }}
                id="link"
              >
                Register now
              </Link>
            </button>
          </div>
          <img className="hero-poster" src={img1} />
        </div>

        <div>
          <h2
            style={{
              textAlign: "center",
              marginTop: "3em",
              padding: "0em 3em",
            }}
          >
            Selling on B2UM is easy like 1, 2, 3
          </h2>
          <p style={{ textAlign: "center" }}>
            Literally, we only have three steps.
          </p>
          <div
            className="about-container"
            style={{ backgroundColor: "white", color: "rgba(0,0,0,0.8)" }}
          >
            <div className="about-p">
              <img src={img2} />
              <h2>Register as a seller on B2UM</h2>
            </div>
            <div className="about-p">
              <img src={img3} />
              <h2>List product for free</h2>
            </div>
            <div className="about-p">
              <img src={img4} />
              <h2>Deliver orders to customers</h2>
            </div>
          </div>
        </div>
      </div>
      <About />
      <PaymentMethod />
      <Footer />
    </div>
  );
}

// 