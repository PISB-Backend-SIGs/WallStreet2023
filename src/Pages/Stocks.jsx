import React from "react";
import StockCard from "../Components/StockCard";

const Stocks = () => {
  return (
    <div className="container p-5">

      {/* Searchbar */}
      <div className="mt-1 mb-4">
        <div className="d-flex flex-row justify-content-between">
          <div className="">
          <div className="form-outline">
            <input type="search" id="form1" className="searchbar ms-3 form-control shadow-lg py-2"
              placeholder="Search stocks by symbol" aria-label="Search" autocomplete="off"/>
          </div>
          </div>
          <div className="btnbalance px-3 me-3 text-center p-2 shadow bi bi-wallet"> $1000.00</div>
        </div>
      </div>

      {/* Columns */}
      <div className="row row-cols-1 row-cols-xl-3 row-cols-md-2 g-2 mt-5">
        
        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

        <div className="col">
          <StockCard/>
        </div>

      </div>

    </div>
  );
};

export default Stocks;
