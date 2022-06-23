import React from "react";
import Image from "next/image";

import {
  About__Container,
  About__Column,
  About__Row,
  About__Sector,
  About__Turaki__Container,
  About__Container__More,
  About__Container__More__2,
  About__As__More,
} from "../styles/Homepage/About";

import { Turaki__Max__width, Turaki__Button } from "../styles/constants";

const More = () => {
  return (
    <About__As__More>
      <Turaki__Max__width>
        <div className="More__Container">
          <About__Row>
            <br />
            <div className="About__Left">
              <p>
                The young Saliu attended St. barthelomew Primary School Wusasa ,
                Zaria . he proceeded to Command Secondary School, Kaduna for his
                post-primary education. for his Higher education, Saliu studied
                Mineral Resources Engineering at Kaduna polytechnic , Kaduna and
                graduated in flying colors.
              </p>
              <br />
              <p>
                Saliu Mustapha developed keen interest in goverance and that
                formed the basic of his evolution into politics.
              </p>
              <br />
              <p>
                As an undergraduate, Saliu Mustapha developed keen interest in
                governance and that formed the basis of his evolution into
                politics. His belief in purposeful and progressive leadership
                vis-a-vis dedication to public service, brought him on the same
                ideological paths with the likes of Chief Alexis Aniello, Chief
                Olu Falae, Alhaji Balarabe Musa, and President Muhammadu Buhari.
              </p>
              <p>
                Specifically, between 2001 – 2002, Saliu was the National
                Publicity Secretary of the Progressive Liberation Party (PLP)
                under the leadership of Dr. Ezekiel Ezeogwu. A little further in
                2003, Saliu and other likeminds came together to register and
                form the Progressive Action Congress (PAC), whereat he was
                returned again as a National Publicity Secretary, an impressive
                feat for his age and clout as at that time.
              </p>
            </div>

            <br />
          </About__Row>
        </div>
      </Turaki__Max__width>
    </About__As__More>
  );
};

export default More;
