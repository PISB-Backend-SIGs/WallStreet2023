import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StockCard from "../Components/StockCard";
import { getAllStocks } from "../Utils/Apis";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const Stocks = () => {
  const [stocks, setStocks] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      getAllStocks()
        .then((stocks) => {
          setStocks(stocks.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1300);
  }, []);

  return (
    <div className="container p-1 p-sm-5">
      {/* Searchbar */}
      <div className="mt-1 mb-4">
        <div className="d-flex flex-row justify-content-between">
          <div className="form-outline mobilesearchbar">
            <input
              type="search"
              id="form1"
              className="searchbar ms-0 ms-sm-3 form-control shadow-lg py-2"
              placeholder="Search stocks by symbol"
              aria-label="Search"
              autocomplete="off"
            />
          </div>
          <div className="btnbalance px-3 me-3 text-center p-2 shadow bi bi-wallet d-none d-sm-block ">
            {" "}
            $1000.00
          </div>
        </div>
      </div>

      {!stocks && (
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

      {/* Columns */}
      <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 g-2 mt-5">
        {stocks && (
          <>
            {stocks.map((stock) => {
              return (
                <Link to={`/stocksdetail/${stock.id}`}>
                  <div className="col">
                    <StockCard key={stock.id} {...stock} />
                  </div>
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Stocks;
