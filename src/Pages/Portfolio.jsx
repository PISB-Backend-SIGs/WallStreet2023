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
      <div className="h3 ipoupcoming mb-3 mb-sm-4 text-center">Portfolio
      </div>

      <br />

      <div>
        <div className="container mb-4">
          <div
            className="card shadow"
            style={{ backgroundColor: "#3d3d4c", color: "#fefdff", borderRadius: "10px" }}
          >
            <div className="card-body" style={{ padding: "12px" }}>
              <div className="d-flex justify-content-around font-weight-bold">
              <p class="mb-0">Companay Name</p>
              <p class="mb-0">Quantity</p>
              <p class="mb-0">Offer Bid</p>
              </div>
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

      <div className="row row-cols-1 gy-3 g-sm-3 mx-sm-auto">
        {portfolioCard &&
          (<>
            {portfolioCard.map((card) => {
              return <PortfolioIpoCard key={card.id} {...card} />;
            })}
          </>)
        }
      </div>

    </div>
   
  );
};

export default Portfolio;
