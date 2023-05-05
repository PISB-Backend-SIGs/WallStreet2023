import React from "react";

import Lottie from "lottie-react";
import animationData from "../Lottie/114986-ultimate-trading-experience.json";
import {UseAuthContext} from "../Hooks/UseAuthContext";

const Home = () => {

  const {user} = UseAuthContext()

  return (
    <div className="homepage">
      <div>
        <section id="intro">
          <div className="container-lg">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 text-center text-md-start order-2 order-md-1 text-light">
                <h2 className="mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  gravida ante vel eros ullamcorper, euismod bibendum velit
                  lacinia.
                  <br />
                </h2>
                <h4 className="fw-lighter mb-5 mt-5 text-secondary">
                  Lorem ipsum dolor sit amet, consectetur
                </h4>
                <btn className=" h5 align-items-center align-items-sm-start mt-5 mt-auto logoutbtn py-2 px-3">
                  {" "}
                  Get Started
                </btn>
              </div>

              <div className="col-md-5 text-center order-1 order-md-2 ms-md-5 mb-5 illustration">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  speed={1}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
