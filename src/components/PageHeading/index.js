import React from "react";
import "./PageHeading.css";

export function PageHeading({ eyebrow, title, highlight, children }) {
  return (
    <div className="page-heading-shared">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title} <span>{highlight}</span></h1>
      </div>
      {children}
    </div>
  );
}