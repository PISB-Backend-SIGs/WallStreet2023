import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ id, src, name, linkedInId, githubId }) => {
  return (
    <div>
      <div className="container">
        <div className="d-flex ">
          {/* card */}
          <div
            class="card m-3 m-sm-5 border-0 shadow-lg"
            style={{ backgroundColor: "#3d3d4d", borderRadius: "10px" }}
          >
            {/* card body */}
            <div class="card-body" style={{ marginBottom: "-20px" }}>
              <img
                class="card-img-top "
                src={src}
                alt="Card image cap"
                style={{ backgroundColor: "#3d3d4d", borderRadius: "10px" }}
              />
              <div class="card-body">


                <h5 class="card-title text-center text-light mb-0 mt-2">{name}</h5>


                <div className="d-flex justify-content-center text-light mt-3 mb-0 justify-content-around mx-5 px-4">

                  <a href={linkedInId} target="_blank" class="branch-text col-md-4 text-decoration-none" rel="noreferrer">
                    <div className="bi bi-linkedin mx-0 text-light" style={
                      {fontSize: "22px"}}></div>
                  </a>

                  <a href={githubId} target="_blank" class="branch-text col-md-4 text-decoration-none" rel="noreferrer">
                    <div className="bi bi-github mx-0 text-light" style={
                      {fontSize: "22px"}}></div>
                  </a>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
