import styled from "styled-components";

export const Form__Container = styled.form`
  width: 100%;
  padding: 20px 0;

  div {
    margin: 0.5em 0;
  }

  h4 {
    font-weight: 400;
  }

  input {
    width: 100%;
    margin: 0.5em 0;
    padding: 1em;
    border-radius: 3px;
    outline: none;
    border: 1px solid #ccc;
  }

  button {
    margin: 0.5em 0;
    padding: 1em 24px;
    border-radius: 3px;
    outline: none;
    background-color: #8bd15f;
    border: 1px solid #ccc;
    font-weight: 600;
    color: white;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export default Form__Container;
