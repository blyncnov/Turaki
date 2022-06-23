import React from "react";

import Image from "next/image";

import { About__Container, About__Sector } from "../styles/Homepage/About";

import { Turaki__Max__width } from "../styles/constants";
import Navigation from "../Layout/Navigation";

const News = () => {
  return (
    <>
      <About__Container>
        <Navigation />
        <Turaki__Max__width>
          <About__Sector>
            <h1>News and Events</h1>
            <br />
            <p>
              lorem ipsum dolor sit lorem lorem ipsum dolor sit loremlorem ipsum
              dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit
              lorem lorem ipsum dolor sit lorem
            </p>
          </About__Sector>
        </Turaki__Max__width>
      </About__Container>
    </>
  );
};

export default News;
