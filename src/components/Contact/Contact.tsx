import React from "react";
import "./Contact.css";

const PHONE = "213-444-9020";
const EMAIL = "team@rnjventures.com";
const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <h2>SaaS company or investor? We want to talk.</h2>
      <span>
        <a href={`mailto:${EMAIL}`}>Contact Us</a>
      </span>
    </div>
  );
};

export default Contact;
