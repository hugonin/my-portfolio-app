import React from "react";
import Form from "./form.component"

import "./contact.styles.css";

const Contact = () => (
  <div>
    <section className="contact" id="contact" data-nav="Contact">
      <h2 className="section__title section__title--contact">Contact</h2>
      <p className="section__subtitle section__subtitle--contact">
        Interested in My Work?
      </p>

     <Form />
    </section>
  </div>
);

export default Contact;
