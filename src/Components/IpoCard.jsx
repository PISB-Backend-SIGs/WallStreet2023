import React, { useEffect, useState } from "react";
import Modal from "../Components/Modal";

const IpoCard = ({
  id,
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []
  )

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

          {/* company Name */}
          <div className="col text-start text-sm-center">
            <p className="card-text" style={{ fontWeight: "bold" }}>
              {company.company_name}
            </p>
          </div>

          {/* release date / subscribe */}
          {/* Release date */}
          {windowWidth > 576 &&
            <div className="col text-end text-sm-center">
              <p className="card-text">{release_date}</p>
            </div>
          }

          {/* subscribe */}
          {windowWidth < 576 &&
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
                  company={company.id}
                  company_name={company.company_name}
                  short_name={company.short_name}
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
          }


          {/* Opening date or closing date */}
          {/* closing date */}
          {windowWidth > 576 &&
            <div className="col text-start text-sm-center">
              <p className="card-text">{closing_date}</p>
            </div>
          }

          {/* Opening date */}
          {windowWidth < 576 &&
            <div className="col text-start text-sm-center">
              <p className="card-text">{release_date}</p>
            </div>
          }

          {/* closing date or subscribe button */}
          {windowWidth > 576 &&
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
                  company={company.id}
                  company_name={company.company_name}
                  short_name={company.short_name}
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
          }

          {windowWidth < 576 &&
            <div className="col text-end text-sm-center">
              <p className="card-text">{closing_date}</p>
            </div>

          }

        </div>
      </div>
    </div>
  );
};

export default IpoCard;
