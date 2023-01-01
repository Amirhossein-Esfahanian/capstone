import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="section">
      <article className=" row flex-nowrap container pt-200">
        <div className="col-md-4 offset-md-2 ">
          <h1 className="hero">Little Lemon</h1>
          <h2 className="hero">Chicago</h2>
          <h5 className="hero mb-15">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </h5>
          <button className="btn btn-hero">RESERVE A TABLE</button>
        </div>
        <div className="col-md-3 offset-md-3 ">
          <img
            src={require("../image/f5.jpg")}
            alt="slider with logo and text"
            width="600px"
            className="hero "
          />
        </div>
      </article>
    </section>
  );
}
