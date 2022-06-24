import React from "react";

import Form from "../components/Form";
import Navigation from "../Layout/Navigation";

import { About__Sector, About__Container } from "../styles/Homepage/About";

import { Turaki__Max__width } from "../styles/constants";

const Contact = () => {
  return (
    <>
      <About__Container>
        <Navigation />
        <Turaki__Max__width>
          <About__Sector>
            <h1>Contact</h1>
            <br />
            <p>
              lorem ipsum dolor sit lorem lorem ipsum dolor sit loremlorem ipsum
              dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit
              lorem lorem ipsum dolor sit lorem
            </p>
          </About__Sector>
        </Turaki__Max__width>
      </About__Container>

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
