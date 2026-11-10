import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="content-page contact-layout">
      <div className="contact-copy">
        <p className="eyebrow">WE ARE HERE TO HELP</p>
        <h1>CONTACT <span>US</span></h1>
        <div className="red-rule" />
        <p className="contact-intro">Have a question about TROY GYM? Reach us through the contact details below.</p>
        <div className="contact-item"><MapPin /><div><strong>Address</strong><span>Beirut, Lebanon</span></div></div>
        <div className="contact-item"><Phone /><div><strong>Phone</strong><span>+961 70 123 456</span></div></div>
        <div className="contact-item"><Mail /><div><strong>Email</strong><span>info@troygym.com</span></div></div>
      </div>
      <div className="contact-photo" role="img" aria-label="Gym interior" />
    </section>
  );
}