import React, { useState, useEffect } from "react";
import Link from "next/link";

import { FaTimes } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";

import { Navigation__Data } from "../data/Navigation.js";

import {
  Navigation__OverAll,
  Navigation__Container,
  Navigation__Column,
  Navigation__Sector,
  Navigation__Logo,
  Navigation__Item,
  Navigation__Mobile,
} from "../styles/Layout/Navigation";

import { Turaki__Max__width } from "../styles/constants";

const Navigation = ({ bg, blur }) => {
  const [isClicked, setIsClicked] = useState(false);

  const isBarClickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Navigation__OverAll>
      <Navigation__Container bgShow={bg} blurShow={blur}>
        <Turaki__Max__width>
          <Navigation__Column>
            <Navigation__Sector>
              <Navigation__Logo>
                <Link href="/">
                  <a>
                    <h1>
                      <AiOutlineHome />
                    </h1>
                  </a>
                </Link>
              </Navigation__Logo>
            </Navigation__Sector>
            <Navigation__Sector>
              <Navigation__Item click={isClicked}>
                {Navigation__Data.map((item) => {
                  return (
                    <li onClick={isBarClickHandler} key={item.id}>
                      <h3>{item.icon}</h3>
                      <Link href={item.link}>
                        <a>{item.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </Navigation__Item>
            </Navigation__Sector>
            <Navigation__Mobile onClick={isBarClickHandler}>
              {isClicked ? (
                <FaTimes style={{ fontSize: "1.5em", color: "black" }} />
              ) : (
                <RiBarChartHorizontalLine
                  style={{ fontSize: "1.5em", color: "white" }}
                />
              )}
            </Navigation__Mobile>
          </Navigation__Column>
        </Turaki__Max__width>
      </Navigation__Container>
    </Navigation__OverAll>
  );
};

export default Navigation;
