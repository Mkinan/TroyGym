import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} TROY GYM. All rights reserved.</span>
      <span>TRAIN HARD. STAY STRONG.</span>
    </footer>
  );
}