import React from "react";
import x from "../../assets/11053970_x_logo_twitter_new_brand_icon.svg";
import paypal from "../../assets/2993670_brand_brands_logo_logos_paypal_icon.svg";
import google from "../../assets/7123025_logo_google_g_icon.svg";
import fb from "../../assets/Facebook-f_Logo-Blue-Logo.wine (1).svg";
import "./auth.css";

export default function Se() {
 
  return (
    <div style={{ width: "100%", marginTop: "-5%" }}>
      <p className="auth-continuewith mt-2 hover:bg-cyan-300 ">
        <span className="acw-l">
          <img src={fb} width={60} />
        </span>
        <span className="acw-t">Continue with Facebook</span>
        <span className="acw-l"> </span>
      </p>
      <p
        className="auth-continuewith mt-2 hover:bg-cyan-300 "
        
      >
        <span className="acw-l">
          <img src={google} width={40} />
        </span>
        <span className="acw-t">Continue with Google</span>
        <span className="acw-l"> </span>
      </p>
      <p className="auth-continuewith mt-2 hover:bg-cyan-300 ">
        <span className="acw-l">
          <img src={x} width={23} />
        </span>
        <span className="acw-t">Continue with Twitter</span>
        <span className="acw-l"> </span>
      </p>
      <p className="auth-continuewith mt-2 hover:bg-cyan-300 ">
        <span className="acw-l">
          <img src={paypal} width={27} />
        </span>
        <span className="acw-t">Continue with Paypal</span>
        <span className="acw-l"> </span>
      </p>
    </div>
  );
}
//
