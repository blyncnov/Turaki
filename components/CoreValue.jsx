import React from "react";
import Image from "next/image";

import { About__CoreValue } from "../styles/Homepage/About";

import { Turaki__Max__width } from "../styles/constants";

const CoreValue = () => {
  return (
    <>
      <div>
        <Turaki__Max__width>
          <About__CoreValue>
            <div className="Core__Header">
              <h2>Core Value</h2>
              <hr style={{ border: "2px solid #03938c" }} />
              <br />
              <h4>
                The following are the minimium, irreducile standard to which i
                am personally committed.
              </h4>
            </div>
            <br />
            <div className="Core__Description">
              <h3>Loyalty</h3>
              <h5>
                I am uncompromisingly committed to the progressive ideals of the
                founding fathers of our party. I will be loyal to, and will
                demand loyalty from the stakeholders of the party.
              </h5>
            </div>
            <div className="Core__Description">
              <h3>Integrity</h3>
              <h5>
                I will maintain the highest level of trust, integrity and
                transparency in the conduct of the affairs of the party
              </h5>
            </div>
            <div className="Core__Description">
              <h3>Excellence</h3>
              <h5>
                I will strive to always exceed expectations. I will be
                different, be better and do better in the party governance
                process
              </h5>
            </div>
            <div className="Core__Description">
              <h3>Teamwork</h3>
              <h5>
                Our success will depend on our working together. I will entrench
                an atmosphere where everyone has a fair shot, does and take
                their fair share.
              </h5>
            </div>
            <div className="Core__Description">
              <h3>Openness</h3>
              <h5>
                I will communicate upfront, and in so doing, I will strive to be
                open, honest and accurate.
              </h5>
            </div>
            <div className="Core__Description">
              <h3>Innovation</h3>
              <h5>
                I will be dynamic, adaptive and creative. We will build a party
                that is fit for the digital age.
              </h5>
            </div>
            <div className="Core__Description">
              <h3>Respect</h3>
              <h5>
                I will advocate, promote and entrench diversity and equal
                opportunities for anyone that works for or with the party.
              </h5>
            </div>
          </About__CoreValue>
        </Turaki__Max__width>
      </div>
    </>
  );
};

export default CoreValue;
