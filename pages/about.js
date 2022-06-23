import React from "react";
import Image from "next/image";

import { GoQuote } from "react-icons/go";

import {
  About__Container,
  About__Column,
  About__Row,
  About__Sector,
  About__Turaki__Container,
  About__Container__More,
  About__Container__More__2,
} from "../styles/Homepage/About";

import { Turaki__Max__width, Turaki__Button } from "../styles/constants";

import Navigation from "../Layout/Navigation";
import Philantrophy from "../components/Philantrophy";
import Achievement from "../components/Achievement";
import More from "../components/More";
import CoreValue from "../components/CoreValue";

const AboutTuraki = () => {
  return (
    <>
      <About__Container>
        <Navigation />
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
                <div className="About__Left">
                  <p>
                    Saliu Mustapha developed keen interest in goverance and that
                    formed the basic of his evolution into politics.
                  </p>
                  <br />
                  <p>
                    As an undergraduate, Saliu Mustapha developed keen interest
                    in governance and that formed the basis of his evolution
                    into politics. His belief in purposeful and progressive
                    leadership vis-a-vis dedication to public service, brought
                    him on the same ideological paths with the likes of Chief
                    Alexis Aniello, Chief Olu Falae, Alhaji Balarabe Musa, and
                    President Muhammadu Buhari.
                  </p>
                  <p>
                    Specifically, between 2001 – 2002, Saliu was the National
                    Publicity Secretary of the Progressive Liberation Party
                    (PLP) under the leadership of Dr. Ezekiel Ezeogwu. A little
                    further in 2003, Saliu and other likeminds came together to
                    register and form the Progressive Action Congress (PAC),
                    whereat he was returned again as a National Publicity
                    Secretary, an impressive feat for his age and clout as at
                    that time.
                  </p>
                </div>

                <br />
              </About__Row>
            </About__Column>
          </Turaki__Max__width>
        </About__Sector>
      </About__Turaki__Container>
      <div>
        <Turaki__Max__width>
          <About__Container__More>
            <p>
              He became a pivotal member of The Buhari Organisation (TBO) and
              the Buhari Campaign Organisation (BCO) respectively for several
              years.
            </p>
          </About__Container__More>
          <br />
          <div style={{ textAlign: "center" }}>
            <h1>
              <GoQuote style={{ fontSize: "2em" }} />
            </h1>
            <p>
              He was a major member of the Buhari Presidential Campaigns in 2003
              when the latter ran under the platform of All Nigeria Peoples
              Party (ANPP).
            </p>
          </div>
        </Turaki__Max__width>
        <About__Container__More__2>
          <Turaki__Max__width>
            <p>
              At about the time President Muhammadu Buhari conceived the idea of
              coming back into public service as a civilian President, Saliu
              Mustapha keyed into the vision. Thus, he became a pivotal member
              of The Buhari Organisation (TBO) and the Buhari Campaign
              Organisation (BCO) respectively for several years.
              <br />
              <br />
              He was a major member of the Buhari Presidential Campaigns in 2003
              when the latter ran under the platform of All Nigeria Peoples
              Party (ANPP). In 2007, instead of sitting in far away Abuja, he
              decided to go into the political trenches to hold forth for the
              ANPP in his home state, Kwara State, where he contested as a
              member of the Federal House of Representatives for Ilorin East and
              South Federal Constituency.
            </p>
          </Turaki__Max__width>
        </About__Container__More__2>
      </div>
      <Philantrophy />
      <Achievement />
      <More />
      <CoreValue />
      <br />
      <br />
    </>
  );
};

export default AboutTuraki;
