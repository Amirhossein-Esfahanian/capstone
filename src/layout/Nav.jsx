import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={require("../image/logo_colored.png")}
            alt="Little lemon logo"
            // width="30"
            height="80"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-end">
            <li className="nav-item menu me-2">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="fa fa-home me-2"></i>
                Home
              </a>
            </li>
            <li className="nav-item menu me-2">
              <a className="nav-link" href="#">
                <i className="fa fa-question me-2"></i>
                About
              </a>
            </li>
            <li className="nav-item menu me-2">
              <a className="nav-link" href="#">
                <i className="fa fa-list me-2"></i>
                Menu
              </a>
            </li>
            <li className="nav-item menu me-2">
              <a className="nav-link" href="#">
                <i className="fa fa-clock me-2"></i>
                Reservation
              </a>
            </li>
            <li className="nav-item menu me-2">
              <a className="nav-link" href="#">
                <i className="fa fa-book me-2"></i>
                Order Online
              </a>
            </li>
            <li>
              <a className="nav-link menu " href="#">
                <i className="fa fa-user me-2"></i>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
