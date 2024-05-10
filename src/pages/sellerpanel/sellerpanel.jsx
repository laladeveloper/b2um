import React from "react";
import "./sellerpanel.css";
import Navigation from "./components/navigation.jsx";
import Container from "./components/container.jsx";
import Header from "./components/header.jsx";

export default function Sellerpanel({ active }) {
  return (
    <div className="seller-panel">
      <Header />
      <Navigation active={active} />
      <Container active={active} />
    </div>
  );
}
