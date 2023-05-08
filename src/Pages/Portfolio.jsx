import React, { useState, useEffect } from "react";
import PortfolioIpoCard from "../Components/PortfolioIpoCard";
import { ipoPortfolio } from "../Utils/Apis";
import { ThreeDots } from "react-loader-spinner";

const Portfolio = () => {
  const [portfolioCard, setPortfolioCard] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      ipoPortfolio()
        .then((card) => {
          setPortfolioCard(card.data);
          console.log(card.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1300);
  }, []);

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
        
        {!portfolioCard && (
        <ThreeDots
        height="55"
        width="55"
        color="#5eb5f8"
        ariaLabel="line-wave"
        wrapperClass="loader"
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
      )}

      <div className="row row-cols-1 g-4 g-sm-3 mx-sm-auto mx-0">
        {portfolioCard &&
          (<>
            {portfolioCard.map((card) => {
              return <PortfolioIpoCard key={card.id} {...card} />;
            })}
          </>)
        }
      </div>

      </div>
    </div>
  );
};

export default Portfolio;
