import React from "react";
import Card from "./HighlightCard";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <article className="text-center mb-4">
        <h2>Testimonials</h2>
      </article>

      <article className="d-flex container-fluid col-md-8 justify-content-between pt-4">
        <TestimonialCard
          image={require("../image/avatar.png")}
          title="John"
          rate={5}
          description="good enough to try again"
        ></TestimonialCard>
        <TestimonialCard
          image={require("../image/avatar.png")}
          title="John"
          rate={2}
          description="good enough to try again"
        ></TestimonialCard>
        <TestimonialCard
          image={require("../image/avatar.png")}
          title="John"
          rate={4}
          description="good enough to try again"
        ></TestimonialCard>
        <TestimonialCard
          image={require("../image/avatar.png")}
          title="John"
          rate={4}
          description="good enough to try again"
        ></TestimonialCard>
      </article>
    </section>
  );
}
