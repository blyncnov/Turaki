import React from "react";

import Image from "next/image";

import {
  About__Container,
  About__Column,
  About__Row,
  About__Sector,
  About__Turaki__Container,
} from "../styles/Homepage/About";

import { Turaki__Max__width, Turaki__Button } from "../styles/constants";

const News = () => {
  return (
    <>
      <About__Container>
        <About__Sector>
          <div className="HeroSection__Image Maphor">
            <Image
              src="/images/mask.png"
              objectFit="cover"
              layout="fill"
              alt="Turaki"
            />
          </div>
          <h1>News and Events</h1>
        </About__Sector>
      </About__Container>
    </>
  );
};

export default News;
