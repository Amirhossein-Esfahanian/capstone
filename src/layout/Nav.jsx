import React from "react";

export default function Navbar() {
  return (
    <nav cla id="nav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {" "}
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          {" "}
          <a class="nav-link active" aria-current="page" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          {" "}
          <a class="nav-link active" aria-current="page" href="#">
            Menu
          </a>
        </li>
        <li className="nav-item">
          {" "}
          <a class="nav-link active" aria-current="page" href="#">
            Reservation
          </a>
        </li>
        <li className="nav-item">
          {" "}
          <a class="nav-link active" aria-current="page" href="#">
            Order Online
          </a>
        </li>
        <li className="nav-item">
          {" "}
          <a class="nav-link active" aria-current="page" href="#">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
