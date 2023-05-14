import React from "react";

const RankCard = ({id, rank, user_id, net_worth, ranki}) => {
  return (
    <div className="container">
      <div
        className="card mx-ms-auto mx-3 shadow"
        style={{ backgroundColor: "#3d3d4c", color: "#fefdff" }}
      >
        <div className="card-body" style={{ padding: "12px" }}>
          <div className="row row-cols-2 text-center">
            <div className="">{ranki}</div>
            <div>{user_id.first_name}</div>
            {/* <div>{`₹ ${net_worth}`}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
