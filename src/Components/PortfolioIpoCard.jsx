import React from "react";

const PortfolioIpoCard = ({
  company,
  quantity,
  offer_bid,
}) => {
  return (
    <div>
      <div className="container">
        <div
          className="card shadow"
          style={{ backgroundColor: "#3d3d4c", color: "#fefdff", borderRadius: "10px" }}
        >
          <div className="card-body" style={{ padding: "12px" }}>
            <div className="d-flex justify-content-around">
              <div className="">{company.company_name}</div>
              <div>{quantity}</div>
              <div>{offer_bid}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioIpoCard;
