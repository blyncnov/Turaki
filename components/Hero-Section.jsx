import React from "react";
import Image from "next/image";

import DisPlayImage from "../public/images/turaki1.png";

import Link from "next/link";

import {
  HeroSection__Container,
  HeroSection__Column,
  HeroSection__Sector,
} from "../styles/Homepage/Hero-Section";

import { Turaki__Max__width, Turaki__Button } from "../styles/constants";
import Navigation from "../Layout/Navigation";

const HeroSection = () => {
  return (
    <>
      <HeroSection__Container>
        <Navigation bg="none" blur="none" />
        <Turaki__Max__width>
          <HeroSection__Column>
            <HeroSection__Sector>
              <h1>I&apos;m </h1>
              <h2>
                MALLAM SALIU MUSTAPHA <span>(Turaki of Ilorin Emirate)</span>
              </h2>
              <div className="Hero__button">
                <Link href="/about">
                  <a>
                    <Turaki__Button>Learn more</Turaki__Button>
                  </a>
                </Link>
              </div>
            </HeroSection__Sector>
            <HeroSection__Sector>
              <div className="HeroSection__Image">
                <Image src={DisPlayImage} alt="Turaki" layout="responsive" />
              </div>
            </HeroSection__Sector>
          </HeroSection__Column>
        </Turaki__Max__width>
      </HeroSection__Container>
    </>
  );
};

export default HeroSection;
