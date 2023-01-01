import React from "react";
import Card from "./HighlightCard";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <article className="text-center mb-4">
        <h2>Testimonials</h2>
      </article>

      <article className="container-fluid col-md-8  pt-4">
        <div className="row">
          <div className="col-md-3 col-xs-12">
            <TestimonialCard
              image={require("../image/avatar.png")}
              title="John"
              rate={5}
              description="good enough to try again"
            ></TestimonialCard>
          </div>
          <div className="col-md-3">
            <TestimonialCard
              image={require("../image/avatar.png")}
              title="John"
              rate={5}
              description="good enough to try again"
            ></TestimonialCard>
          </div>
          <div className="col-md-3">
            <TestimonialCard
              image={require("../image/avatar.png")}
              title="John"
              rate={5}
              description="good enough to try again"
            ></TestimonialCard>
          </div>
          <div className="col-md-3">
            <TestimonialCard
              image={require("../image/avatar.png")}
              title="John"
              rate={5}
              description="good enough to try again"
            ></TestimonialCard>
          </div>
        </div>
      </article>
    </section>
  );
}
