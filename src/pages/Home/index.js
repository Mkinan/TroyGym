import React from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowRight, Dumbbell, Plus, Users } from "lucide-react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-copy">
        <p className="eyebrow">BUILT FOR PROGRESS</p>
        <h1>TRAIN HARD.<br /><span>STAY STRONG.</span></h1>
        <p className="hero-description">
          Push your limits, build strength, and become a stronger version of yourself at TROY GYM.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/members">Explore Members <ArrowRight size={17} /></Link>
          <Link className="btn btn-outline" to="/members/add">Add Member <Plus size={17} /></Link>
        </div>
      </div>
      <div className="hero-image" role="img" aria-label="Modern gym with strength training equipment" />
      <div className="hero-bottom">
        <div><Dumbbell /><span>Modern Equipment</span></div>
        <div><Activity /><span>Fitness Progress</span></div>
        <div><Users /><span>Stronger Community</span></div>
      </div>
    </section>
  );
}