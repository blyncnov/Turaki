import styled from "styled-components";

export const Turaki__Max__width = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export const Turaki__Button = styled.button`
  background-color: #8bd15f;
  color: #333333;
  border: 2px solid transparent;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
  font-weight: 700;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 13px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 1em 0;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03),
      0px 2px 4px rgba(96, 97, 112, 0.14);
    color: white;
    background-color: transparent;
    border: 2px solid white;
  }
`;

export default Turaki__Max__width;
