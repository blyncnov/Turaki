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

const AboutTuraki = () => {
  return (
    <>
      <About__Container>
        <>
          <About__Sector>
            <div className="HeroSection__Image showcase">
              <Image
                src="/images/hands.png"
                layout="fill"
                objectFit="cover"
                alt="Turaki"
              />
            </div>
            <div className="About__btn">
              <Turaki__Button>Join Community</Turaki__Button>
            </div>
          </About__Sector>
        </>
      </About__Container>
      <br />
      <br />
      <About__Turaki__Container>
        <About__Sector>
          <Turaki__Max__width>
            <About__Column>
              <About__Row>
                <div className="HeroSection__Image alhajipic">
                  <Image
                    src="/images/alhaji.png"
                    layout="fill"
                    alt="Turaki"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
              </About__Row>
              <About__Row>
                <div className="About__Header__Text">
                  <h1>SALIU MUSTAPHA</h1>
                  <hr style={{ border: "1.3px solid white" }} />
                </div>
                <div className="About__Content__Text">
                  <div className="About__Left">
                    <p>
                      Born on September 25, 1972, into the reputable family of
                      Issa and Maryam Mustapha of Gambari Ward in Ilorin East
                      Local Government Area, Kwara State .
                    </p>
                    <br />
                    <p>
                      On the surface , Saliu Mustapha is a reputable politician
                      with over two decades of experience in party
                      administration and developmental politics . But beyond
                      that facade is a philantropist and an accomplished
                      international businesman with interest in real estate and
                      contructions
                    </p>
                  </div>
                  <div className="About__Right">
                    <p>
                      Saliu Mustapha developed keen interest in goverance and
                      that formed the basic of his evolution into politics.
                    </p>
                    <br />
                    <p>
                      The young Saliu attended St. barthelomew Primary School
                      Wusasa , Zaria . he proceeded to Command Secondary School,
                      Kaduna for his post-primary education. for his Higher
                      education, Saliu studied Mineral Resources Engineering at
                      Kaduna polytechnic , Kaduna and graduated in flying
                      colors.
                    </p>
                  </div>
                </div>
                <br />
                <hr style={{ border: "1.3px solid white" }} />
                <br />
                <p>
                  Saliu Mustapha developed keen interest in goverance and that
                  formed the basic of his evolution into politics.
                </p>
                <br />
                <p>
                  lorem ipsum dolor sit amet lorem, consectetur adipiscing elit
                  lorem ipsum dolor sit amet lorem, consectetur adipiscing elit
                  lorem ipsum dolor sit amet lorem, consectetur adipiscing elit
                </p>
              </About__Row>
            </About__Column>
          </Turaki__Max__width>
        </About__Sector>
      </About__Turaki__Container>
    </>
  );
};

export default AboutTuraki;
