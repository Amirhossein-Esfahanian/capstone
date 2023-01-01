import React from "react";
import Card from "./HighlightCard";

export default function Highlight() {
  return (
    <section className="section">
      <article className="d-flex container-fluid col-md-8 justify-content-between pt-4 pb-4">
        <h2>Special</h2>
        <button className="btn btn-hero">ONLINE MENU</button>
      </article>

      <article className="d-flex container-fluid col-md-8 justify-content-between pt-4">
        <div className="row">
          <div className="col-md-4">
            <Card
              title="Greek Salad"
              description="My olives of choice are Kalamata olives. Commonly used in Greek food, their salty, briny flavor is delectable alongside the feta and crisp veggies. Instead of slicing large tomatoes, I use cherry tomatoes because they release less water into the salad than larger tomatoes would. I also seed my cucumber to avoid making my salad watery."
              image={require("../image/ff4.jpg")}
              price="15$"
            ></Card>
          </div>
          <div className="col-md-4">
            <Card
              title="Pasta"
              description="My olives of choice are Kalamata olives. Commonly used in Greek food, their salty, briny flavor is delectable alongside the feta and crisp veggies. Instead of slicing large tomatoes, I use cherry tomatoes because they release less water into the salad than larger tomatoes would. I also seed my cucumber to avoid making my salad watery."
              image={require("../image/f2.jpg")}
              price="25$"
            ></Card>
          </div>
          <div className="col-md-4">
            <Card
              title="Lemon Dessert"
              description="My olives of choice are Kalamata olives. Commonly used in Greek food, their salty, briny flavor is delectable alongside the feta and crisp veggies. Instead of slicing large tomatoes, I use cherry tomatoes because they release less water into the salad than larger tomatoes would. I also seed my cucumber to avoid making my salad watery."
              image={require("../image/f3.jpg")}
              price="35$"
            ></Card>
          </div>
        </div>
      </article>
    </section>
  );
}
