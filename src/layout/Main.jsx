import React from "react";
import Hero from "./../components/Hero";
import Highlight from "./../components/Highlight";
import Testimonials from "./../components/Testimonials";
import About from "./../components/About";

export default function Main() {
  return (
    <main>
      <Hero></Hero>
      <Highlight></Highlight>
      <Testimonials></Testimonials>
      <About></About>
    </main>
  );
}
