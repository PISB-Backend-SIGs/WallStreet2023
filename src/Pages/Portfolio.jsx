import React from "react";
import PortfolioIpoCard from "../Components/PortfolioIpoCard";

const Portfolio = () => {
  return (
    <div className="container p-0 p-sm-5">
      <div className="h3 ipoupcoming mb-3 mb-sm-4 text-center">Portfolio</div>

      <br />

      <div className="row row-cols-1 g-4 g-sm-3">

          <div className="container">
            <div
              className="card mx-sm-auto mx-3 shadow"
              style={{
                backgroundColor: "#3d3d4c",
                color: "#fefdff",
                borderRadius: "10px",
              }}
            >
              <div className="card-body" style={{ padding: "12px" }}>
                <div className="d-flex justify-content-around">
                  <div className="fw-bold">Company</div>
                  <div className="fw-bold">No of Lots</div>
                  <div className="fw-bold">Amt</div>
                </div>
              </div>
            </div>
          </div>

          {
            // From APi
          }
          
      </div>
    </div>
  );
};

export default Portfolio;
