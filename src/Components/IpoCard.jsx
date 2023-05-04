import React from "react";
import Modal from "../Components/Modal";

const IpoCard = ({
  id,
  company_name,
  company,
  high_cap,
  low_cap,
  lot_allowed,
  total_volume,
  release_date,
  closing_date,
  red_herring_prospectus,
  description,
}) => {
  return (
    <div
      className="card shadow"
      style={{
        backgroundColor: "#3d3d4d",
        color: "#fefdff",
        borderRadius: "10px",
      }}
    >
      <div
        className="card-body p-2 px-3"
        style={{
          backgroundColor: "#3d3d4d",
          color: "#fefdff",
          borderRadius: "10px",
        }}
      >
        <div className="row row-cols-2 row-cols-sm-4 g-4 align-items-center">
          <div className="col text-start text-sm-center">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              {company_name}
            </p>
          </div>
          <div className="col text-end text-sm-center">
            <p className="card-text">{release_date}</p>
          </div>
          <div className="col text-start text-sm-center">
            <p className="card-text">{closing_date}</p>
          </div>
          <div className="col text-end text-sm-center">
            <div
              className="btn btn-sm subscribe"
              data-toggle="modal"
              data-target={`#modal${id}`}
            >
              Subscribe
            </div>
            <div>
              {/* MODAL */}
              <Modal
                id={id}
                company={company}
                company_name={company_name}
                high_cap={high_cap}
                low_cap={low_cap}
                lot_allowed={lot_allowed}
                total_volume={total_volume}
                red_herring_prospectus={red_herring_prospectus}
                description={`${description.slice(
                  0,
                  1000
                )}... (for more details click on view report)`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpoCard;
