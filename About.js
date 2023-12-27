import React from "react";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${PedroTechSpecial})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        
        <p>
          Welcome to "Fati'S PIZZIERA HUB." – where passion meets perfection in every pizza slice! 🍕
          At Fati'S PIZZA HUB, we take pride in crafting the finest pizzas that delight the senses and satisfy the cravings of pizza enthusiasts. Our journey began with a simple goal: to redefine the pizza experience and elevate it to a whole new level of taste and quality.
        </p>
      </div>
    </div>
  );
}

export default About;