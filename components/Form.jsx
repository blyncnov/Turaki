import React from "react";

import { Form__Container } from "../styles/Form";

const Form = () => {
  return (
    <div>
      <Form__Container>
        <div>
          <h4>Be the first to receive updates on my latest events and news</h4>
        </div>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Name" />
        <button>Subscribe</button>
      </Form__Container>
    </div>
  );
};

export default Form;
