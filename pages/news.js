import React from "react";

import Image from "next/image";

import {
  News__Container,
  News__Section__Container,
  News__Section__Box,
} from "../styles/Homepage/News";

import { About__Container, About__Sector } from "../styles/Homepage/About";

import { Turaki__Max__width } from "../styles/constants";

import Navigation from "../Layout/Navigation";
import Form from "../components/Form";

const News = () => {
  return (
    <>
      <About__Container>
        <Navigation />
        <Turaki__Max__width>
          <About__Sector>
            <h1>About</h1>
            <br />
            <p>
              lorem ipsum dolor sit lorem lorem ipsum dolor sit loremlorem ipsum
              dolor sit lorem lorem ipsum dolor sit lorem lorem ipsum dolor sit
              lorem lorem ipsum dolor sit lorem
            </p>
          </About__Sector>
        </Turaki__Max__width>
      </About__Container>
      <News__Container>
        <Turaki__Max__width>
          <News__Section__Container>
            <News__Section__Box>
              <div className="News__Images">
                <div className="News__Images__img">
                  <Image
                    src="/images/life.png"
                    layout="fill"
                    alt="Turaki"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="News__Text__Content">
                <h2>Lorem ipsum dolor sit</h2>

                <p>
                  lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor sit
                  lorem ipsum dolor lorem ipsum dolor sit lorem ipsum dolor
                </p>

                <p>January, 28th</p>

                <h4>Read More</h4>
              </div>
            </News__Section__Box>
            <News__Section__Box>
              <div className="News__Images">
                <div className="News__Images__img">
                  <Image
                    src="/images/life.png"
                    layout="fill"
                    alt="Turaki"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="News__Text__Content">
                <h2>Lorem ipsum dolor sit</h2>

                <p>
                  lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor sit
                  lorem ipsum dolor lorem ipsum dolor sit lorem ipsum dolor
                </p>

                <p>January, 28th</p>

                <h4>Read More</h4>
              </div>
            </News__Section__Box>
            <News__Section__Box>
              <div className="News__Images">
                <div className="News__Images__img">
                  <Image
                    src="/images/life.png"
                    layout="fill"
                    alt="Turaki"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="News__Text__Content">
                <h2>Lorem ipsum dolor sit</h2>

                <p>
                  lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor sit
                  lorem ipsum dolor lorem ipsum dolor sit lorem ipsum dolor
                </p>

                <p>January, 28th</p>

                <h4>Read More</h4>
              </div>
            </News__Section__Box>
            <News__Section__Box>
              <div className="News__Images">
                <div className="News__Images__img">
                  <Image
                    src="/images/life.png"
                    layout="fill"
                    alt="Turaki"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="News__Text__Content">
                <h2>Lorem ipsum dolor sit</h2>

                <p>
                  lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor sit
                  lorem ipsum dolor lorem ipsum dolor sit lorem ipsum dolor
                </p>

                <p>January, 28th</p>

                <h4>Read More</h4>
              </div>
            </News__Section__Box>
            <News__Section__Box>
              <div className="News__Images">
                <div className="News__Images__img">
                  <Image
                    src="/images/life.png"
                    layout="fill"
                    alt="Turaki"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="News__Text__Content">
                <h2>Lorem ipsum dolor sit</h2>

                <p>
                  lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor sit
                  lorem ipsum dolor lorem ipsum dolor sit lorem ipsum dolor
                </p>

                <p>January, 28th</p>

                <h4>Read More</h4>
              </div>
            </News__Section__Box>
            <News__Section__Box>
              <div className="News__Images">
                <div className="News__Images__img">
                  <Image
                    src="/images/life.png"
                    layout="fill"
                    alt="Turaki"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="News__Text__Content">
                <h2>Lorem ipsum dolor sit</h2>

                <p>
                  lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor sit
                  lorem ipsum dolor lorem ipsum dolor sit lorem ipsum dolor
                </p>

                <p>January, 28th</p>

                <h4>Read More</h4>
              </div>
            </News__Section__Box>
            <News__Section__Box>
              <div className="News__Images">
                <div className="News__Images__img">
                  <Image
                    src="/images/life.png"
                    layout="fill"
                    alt="Turaki"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="News__Text__Content">
                <h2>Lorem ipsum dolor sit</h2>

                <p>
                  lorem ipsum dolor sit lorem ipsum dolor lorem ipsum dolor sit
                  lorem ipsum dolor lorem ipsum dolor sit lorem ipsum dolor
                </p>

                <p>January, 28th</p>

                <h4>Read More</h4>
              </div>
            </News__Section__Box>
          </News__Section__Container>
          <Form />
        </Turaki__Max__width>
      </News__Container>
    </>
  );
};

export default News;
