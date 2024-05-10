import React from "react";
import "./admin.css";
import Navigation from "./components/navigation.jsx";
import Container from "./components/container.jsx";
import Header from "./components/header.jsx";

export default function Admin({ active }) {
  return (
    <div className="admin-panel">
      
      <Header />
      <Navigation active={active} />
      <Container active={active} />
    </div>
  );
}
