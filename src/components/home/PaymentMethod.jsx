import React from "react";
import "./PaymentMethod.css";

export default function PaymentMethod() {
  return (
    <div style={{ marginTop: "1.5em" }} id="pm-cont">
      <h2>Payment Methdods</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1em",
        }}
      >
        <img
          src="https://static-pg-guide.g2g.com/payment/pplater.png?1674190766"
          className="paymentimage"
        />
        <img
          src="https://static-pg-guide.g2g.com/payment/usdc.png?1677468067"
          className="paymentimage"
        />
        <img
          src="https://static-pg-guide.g2g.com/payment/Googlepay.png?1653015670"
          className="paymentimage"
        />
        <img
          src="https://static-pg-guide.g2g.com/payment/ppwalletnew.png?1674193748"
          className="paymentimage"
        />
        <img
          src="https://static-pg-guide.g2g.com/payment/skrill.jpg?1509702565"
          className="paymentimage"
        />
        <img
          src="https://static-pg-guide.g2g.com/payment/BinancePay.png?1677468137"
          className="paymentimage"
        />
        <img
          src="https://static-pg-guide.g2g.com/payment/mastercard-kb.jpg?1508745562"
          className="paymentimage"
        />
        <img
          src="https://static-pg-guide.g2g.com/payment/visa2022.png?1646366411"
          className="paymentimage"
        />
      </div>
    </div>
  );
}
//
