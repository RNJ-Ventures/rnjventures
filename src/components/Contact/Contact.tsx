import React from "react";
import "./Contact.css";

const PHONE = "213-444-9020";
const EMAIL = "team@rnjventures.com";
const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <span>
        <a href={`mailto:${EMAIL}`}>Email: {EMAIL}</a>
      </span>
      <span>
        <a href={`tel:${PHONE}`}>Phone: {PHONE}</a>
      </span>
    </div>
  );
};

export default Contact;
