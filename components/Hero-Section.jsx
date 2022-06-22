import React from "react";
import Image from "next/image";

import {
  HeroSection__Container,
  HeroSection__Column,
  HeroSection__Sector,
} from "../styles/Homepage/Hero-Section";

import { Turaki__Max__width, Turaki__Button } from "../styles/constants";

const HeroSection = () => {
  return (
    <>
      <HeroSection__Container>
        <Turaki__Max__width>
          <HeroSection__Column>
            <HeroSection__Sector>
              <h1>I&apos;m </h1>
              <h2>
                MALLAM SALIU MUSTAPHA <span>(Turaki of Ilorin Emirate)</span>
              </h2>
              <div className="Hero__button">
                <Turaki__Button>Learn more</Turaki__Button>

                <Turaki__Button>Reach Out</Turaki__Button>
              </div>
            </HeroSection__Sector>
            <HeroSection__Sector>
              <div className="HeroSection__Image">
                <img src="/images/turaki1.png" alt="Turaki" />
              </div>
            </HeroSection__Sector>
          </HeroSection__Column>
        </Turaki__Max__width>
      </HeroSection__Container>
    </>
  );
};

export default HeroSection;
