import React from "react";
import Image from "next/image";

import { GoQuote } from "react-icons/go";

import {
  About__Column,
  About__As__Acheivement,
} from "../styles/Homepage/About";
import { Turaki__Max__width } from "../styles/constants";

const Achievement = () => {
  return (
    <div>
      <About__As__Acheivement>
        <Turaki__Max__width>
          <div className="Achievement__Header">
            <h2>Achievement & Lifestyles</h2>
            <hr />
            <br />
            <br />
          </div>
          <About__Column>
            <div className="Achievement__Content">
              <div className="Achievement__Content__Image">
                <Image
                  src="/images/life.png"
                  layout="fill"
                  alt="Turaki"
                  objectFit="contain"
                  objectPosition="top"
                />
              </div>
            </div>
            <div className="Achievement__Content">
              <p>
                The CPC would later merge with other legacy parties to forming
                the All Progressives Congress (APC). Saliu, dogged, dutiful and
                conscientious, was among the very few that made the historic
                merger come to reality. Since then till now, he has remained
                true to the progressive ideology as a stakeholder of the APC
                both at his home state and at the national level. He has
                contributed in no small measure to the sustenance of the party
                at all levels.
                <br />
                <br />
                Through his foundation – the Saliu Mustapha Foundation – Saliu
                has engaged in a wide range of charitable projects in his
                hometown and beyond, advancing humanitarian causes.
              </p>
            </div>
          </About__Column>
        </Turaki__Max__width>
      </About__As__Acheivement>
      <Turaki__Max__width>
        <br />
        <div style={{ textAlign: "center" }}>
          <h1>
            <GoQuote style={{ fontSize: "2em" }} />
          </h1>
          <p>
            Saliu Mustapha is widely respected as a mentor and a pillar of
            support to thousands of youths in Kwara state and beyond, being a
            young person himself .
          </p>
        </div>
      </Turaki__Max__width>
    </div>
  );
};

export default Achievement;
