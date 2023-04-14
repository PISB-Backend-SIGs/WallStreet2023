import React from "react";

const RankCard = () => {
  return (
    <div className="container">
      <div
        className="card mx-auto shadow"
        style={{ backgroundColor: "#3d3d4c", color: "#fefdff" }}
      >
        <div className="card-body" style={{ padding: "12px" }}>
          <div className="d-flex justify-content-around">
            <div className="">1.</div>
            <div>Anonymous</div>
            <div>$1000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
