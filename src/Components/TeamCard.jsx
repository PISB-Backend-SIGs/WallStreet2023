import React from "react";

const TeamCard = () => {
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
                src="https://i.postimg.cc/x10ZbpDP/Abhishek.jpg"
                alt="Card image cap"
                style={{ backgroundColor: "#3d3d4d", borderRadius: "10px" }}
              />
              <div class="card-body">
                <h5 class="card-title text-center text-light mb-0 mt-2">Abhishek Bhosale</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
