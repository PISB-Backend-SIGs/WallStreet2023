import React from "react";
import TeamCard from "../Components/TeamCard";

const OurTeam = () => {
  return (
    <div>
      <div className="container ">
        <div className="h3 ourTeamTitle mb-4 mb-sm-3 text-center mt-5">Our Team</div>
        <div className="row g-1 g-sm-1 gy-4 align-items-center justify-content-center">
          <div className="col-sm-4">
            <TeamCard />
          </div>
          <div className="col-sm-4">
            <TeamCard />
          </div>
          <div className="col-sm-4">
            <TeamCard />
          </div>
          <div className="col-sm-4">
            <TeamCard />
          </div>
          <div className="col-sm-4">
            <TeamCard />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default OurTeam;
