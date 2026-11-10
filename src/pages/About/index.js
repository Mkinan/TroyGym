import React from "react";
import { Check } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <section className="content-page about-layout">
      <div className="about-image" role="img" aria-label="Athlete training in a gym" />
      <div className="about-copy">
        <p className="eyebrow">WHO WE ARE</p>
        <h1>ABOUT <span>US</span></h1>
        <div className="red-rule" />
        <p>TROY GYM is more than a place to work out. It is a space built around discipline, consistency, and progress.</p>
        <p>Our goal is to help every member train with purpose, track their progress, and work toward a healthier, stronger life.</p>
        <ul className="feature-list">
          <li><Check /> Quality training equipment</li>
          <li><Check /> A motivating training environment</li>
          <li><Check /> Member-focused fitness tracking</li>
        </ul>
      </div>
    </section>
  );
}