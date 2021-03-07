import React from "react";
import "./Contact.css";

const PHONE = "213-444-9020";
const EMAIL = "team@rnjventures.com";
const Contact = () => {
  return (
    <div className="Contact">
      <span>
        Phone: <a href={`tel:${PHONE}`}>{PHONE}</a>
      </span>
      <span>
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </span>
    </div>
  );
};

export default Contact;
