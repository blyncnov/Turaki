import React from "react";

import Form from "../components/Form";
import Navigation from "../Layout/Navigation";

import { Turaki__Max__width } from "../styles/constants";

const Contact = () => {
  return (
    <>
      <Navigation />

      <Turaki__Max__width>
        <br />
        <br />
        <div>
          <h4>Reach out to me</h4>
        </div>
        <Form />
      </Turaki__Max__width>
    </>
  );
};

export default Contact;
