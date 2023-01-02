import React from "react";

export default function Footer() {
  return (
    <footer className=" row  " id="footer" style={{ paddingTop: "50px" }}>
      <div className="col-md-2 offset-md-2">
        <img
          src={require("../image/lemon_color.png")}
          alt="slider with logo and text"
          width="100px"
          className="about1"
        />
      </div>
      <div className="col-md-2">
        <h3 className="list-group-header">Navigation</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="#">Home</a>
          </li>
          <li className="list-group-item">
            <a href="#">About</a>
          </li>
          <li className="list-group-item">
            <a href="#">Menu</a>
          </li>
          <li className="list-group-item">
            <a href="#">Reservation</a>
          </li>
          <li className="list-group-item">
            <a href="#">Order Online</a>
          </li>
          <li className="list-group-item">
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div className="col-md-2">
        <h3 className="list-group-header">Contact</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="#">Address</a>
          </li>
          <li className="list-group-item">
            <a href="#">Phone Number</a>
          </li>
          <li className="list-group-item">
            <a href="#">Email</a>
          </li>
        </ul>
      </div>
      <div className="col-md-2">
        <h3 className="list-group-header">Social Media Links</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <a href="#">Address</a>
          </li>
          <li className="list-group-item">
            <a href="#">Phone Number</a>
          </li>
          <li className="list-group-item">
            <a href="#">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
