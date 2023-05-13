import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPortfolio } from "../Utils/Apis";
import { ThreeDots } from "react-loader-spinner";

const PortfolioNew = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [cash, setCash] = useState(0);
  const [networth, setNetworth] = useState(0);
  const [transactions, setTransactions] = useState(null);
  const [holdings, setHoldings] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      getPortfolio()
        .then((p) => {
          setPortfolio(p.data);
          setCash(p.data.cash);
          setNetworth(p.data.net_worth);
          setTransactions(p.data.user_history.slice(-5).reverse());
          setHoldings(p.data.user_shares);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1300);
  }, []);

  return (
    <div>
      {/* Title */}
      <div className="h3 ipoupcoming mb-5 mb-sm-5 text-center mt-sm-5 mt-5 py-1">
        Portfolio
      </div>
      {!portfolio && (
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
      {portfolio && (
        <>
          {/* Portfolio card */}
          <div class=" container card p-1 shadow portfolioCard text-light mt-4 p-2">
            <div class="card-body stockcard-body w-100">
              <div class="row">
                <div class="col-6">
                  <p class="mt-2 mb-sm-2 h5 ms-sm-3 bi bi-pie-chart d-none d-sm-block">
                    {" "}
                    Net Worth : {`₹ ${networth}`}
                  </p>
                  <p class="mb-3 mb-sm-2 h5 ms-sm-3 bi bi-pie-chart d-block d-sm-none ">
                    {" "}
                    Net Worth :{" "}
                  </p>
                  <p class="mb-0 h5 ms-sm-4 mt-3 d-block d-sm-none">{`₹ ${networth}`}</p>
                </div>
                <div class="col-6 text-end">
                  <p class="mt-2 mb-sm-2 h5 ms-sm-3 me-2 bi bi-wallet d-none d-sm-block">
                    {" "}
                    Balance : {`₹ ${cash}`}
                  </p>
                  <p class="mb-3 mb-sm-2 h5 ms-sm-3 bi bi-wallet d-block d-sm-none ">
                    {" "}
                    Balance :{" "}
                  </p>
                  <p class="mb-0 h5 ms-sm-4 mt-3 d-block d-sm-none">{`₹ ${cash}`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h5 text-light mb-5 mb-sm-5 text-center mt-sm-5 mt-5">
            Current Holdings
          </div>

          {/* Table */}
          <div className="container portfolioTable mt-5 shadow border-0 p-1">
            <table class="table text-light text-center table-fixed">
              <thead>
                <tr style={{ color: "#5eb5f8" }}>
                  <th scope="col" className="py-3">
                    Company
                  </th>
                  <th scope="col" className="py-3">
                    Qty
                  </th>
                  {/* <th scope="col" className="py-3">
                    Buying{" "}
                  </th> */}
                  <th scope="col" className="py-3">
                    Current
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  {holdings.map((t) => {
                    return (
                      <tr className="border-0">
                        <td scope="row">{t.company.short_name}</td>
                        <td>{t.shares}</td>
                        <td>{t.company.last_traded_price}</td>
                      </tr>
                    );
                  })}
                </>
              </tbody>
            </table>
          </div>

          {/* Transaction history */}
          <div className="h5 text-light mb-5 mb-sm-5 text-center mt-sm-5 mt-5">
            Recent Transactions
          </div>

          {/* Transaction table */}
          <div className="container portfolioTable mt-5 shadow border-0 p-1 mb-5">
            <table class="table text-light text-center table-fixed">
              <thead>
                <tr style={{ color: "#5eb5f8" }}>
                  <th scope="col" className="py-3">
                    Company
                  </th>
                  <th scope="col" className="py-3">
                    Qty
                  </th>
                  <th scope="col" className="py-3">
                    Type
                  </th>
                  <th scope="col" className="py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  {transactions.map((t) => {
                    const buySell = t.buy_or_sell === true ? "Buy" : "Sell";
                    const color =
                      buySell === "Buy" ? "text-success" : "text-danger";
                    return (
                      <tr className="border-0">
                        <td scope="row">{t.company.short_name}</td>
                        <td>{t.no_of_shares}</td>
                        <td className={`${color} fw-bold`}>{buySell}</td>
                        <td>{t.bid_price}</td>
                      </tr>
                    );
                  })}
                </>
              </tbody>
            </table>
          </div>
        </>
      )}
      <br />
      <br />
    </div>
  );
};

export default PortfolioNew;
