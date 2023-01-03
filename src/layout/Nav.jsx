import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const handleClick = (anchor) => () => {
  const id = `${anchor}`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }
};

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img
            src={require("../image/logo_colored.png")}
            alt="Little lemon logo"
            // width="30"
            height="80"
            className="d-inline-block align-text-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-end">
            <li className="nav-item menu me-2">
              <Link
                className="nav-link active"
                aria-current="page"
                to="#"
                onClick={handleClick("hero")}
              >
                <i className="fa fa-home me-2"></i>
                Home
              </Link>
            </li>
            <li className="nav-item menu me-2">
              <Link className="nav-link" to="#" onClick={handleClick("about")}>
                <i className="fa fa-question me-2"></i>
                About
              </Link>
            </li>
            <li className="nav-item menu me-2">
              <Link className="nav-link" to="#">
                <i className="fa fa-list me-2"></i>
                Menu
              </Link>
            </li>
            <li className="nav-item menu me-2">
              <Link className="nav-link" to="#">
                <i className="fa fa-clock me-2"></i>
                Reservation
              </Link>
            </li>
            <li className="nav-item menu me-2">
              <Link className="nav-link" to="#">
                <i className="fa fa-book me-2"></i>
                Order Online
              </Link>
            </li>
            <li>
              <Link className="nav-link menu " to="#">
                <i className="fa fa-user me-2"></i>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
