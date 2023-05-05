import React from "react";

const PortfolioIpoCard = () => {
  return (
    <div>
      <div className="container">
        <div
          className="card mx-auto shadow"
          style={{ backgroundColor: "#3d3d4c", color: "#fefdff", borderRadius: "10px" }}
        >
          <div className="card-body" style={{ padding: "12px" }}>
            <div className="d-flex justify-content-around">
              <div className="">Company</div>
              <div>No of Lots</div>
              <div>Amt</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioIpoCard;
