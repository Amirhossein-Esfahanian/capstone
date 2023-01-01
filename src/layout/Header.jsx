import React from "react";
import Navbar from "./Nav";

export default function Header() {
  return (
    <header
      id="header"
      className="navbar navbar-expand-lg navbar-light bg-light justify-content-center"
    >
      <img
        className="me-4"
        src={require("../image/logo_colored.png")}
        alt="little lemon logo"
        height="80"
      />
      <Navbar></Navbar>
    </header>
  );
}
