import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ id, src, name,linkedInId }) => {
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
            <div class="card-body">
              <img
                class="card-img-top "
                src={src}
                alt="Card image cap"
                style={{ backgroundColor: "#3d3d4d", borderRadius: "10px" }}
              />
              <div class="card-body">

                <a href={linkedInId} target="_blank" class="branch-text col-md-4" rel="noreferrer">
                  <h5 class="card-title text-center text-light mb-0 mt-2">{name}</h5>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
