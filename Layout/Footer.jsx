import React from "react";

import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

import { Turaki__Footer__Container } from "../styles/Layout/Footer";
import { Turaki__Max__width } from "../styles/constants";

const Footer = () => {
  return (
    <Turaki__Footer__Container>
      <Turaki__Max__width>
        <div className="Footer__Container">
          <div className="Footer__Sector">
            <h5 className="Footer__Connect">Connect with us</h5>
          </div>
          <div className="Footer__Sector">
            <div className="Footer__Social__Media">
              <FaFacebookSquare />
              <FaInstagramSquare />
              <AiFillYoutube />
              <FaTwitter />
            </div>
          </div>
          <div className="Footer__Sector">
            <h5>
              {" "}
              <IoLocationSharp /> Mustapha Towers, 21b, Mugadishu Street, Zone
              IV, Abuja
            </h5>
          </div>
          <div className="Footer__Sector">
            <h5>Copyright @ 2022 DEETWOGD</h5>
          </div>
        </div>
      </Turaki__Max__width>
    </Turaki__Footer__Container>
  );
};

export default Footer;
