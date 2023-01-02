import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <article className=" row  container ">
        <div className="col-md-4 offset-md-2 ">
          <h1 className="about">Little Lemon</h1>
          <h2 className="about">Chicago</h2>
          <h5 className="about mb-15">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, ullam voluptate possimus aliquid accusamus omnis
            ducimus dicta. Totam voluptate quibusdam debitis voluptatem quidem
            ipsa facere consequuntur, in sequi recusandae placeat!
          </h5>
        </div>
        <div className="col-md-6 ">
          <img
            src={require("../image/f7.jpg")}
            alt="slider with logo and text"
            width="70%"
            className="about1"
          />
          <img
            src={require("../image/f8.jpg")}
            alt="slider with logo and text"
            width="70%"
            className="position-relative about2"
          />
        </div>
      </article>
    </section>
  );
}
