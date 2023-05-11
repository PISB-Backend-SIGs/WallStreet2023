import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StockCard from "../Components/StockCard";
import { getAllStocks } from "../Utils/Apis";

const Stocks = () => {
  const [stocks, setStocks] = useState(null);

  useEffect(() => {
    getAllStocks()
      .then((stocks) => {
        setStocks(stocks.data);
      })
      .catch((error) => {
        console.error(error);
      });
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

      {/* Columns */}
      <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 g-2 mt-5">
        {stocks && (
          <>
            {stocks.map((stock) => {
              return (
                <div className="col">
                  <StockCard key={stock.id} {...stock} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Stocks;
