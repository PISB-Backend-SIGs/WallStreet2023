import React from "react";
import { useState, useEffect } from "react";
import { Data } from "../Utils/Data";
import LineChart from "../Components/LineChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import BuyModal from "../Components/BuyModal";
import SellModal from "../Components/SellModal";
import { useParams } from "react-router-dom";
import { getStockDetail, getPortfolio } from "../Utils/Apis";
import { ThreeDots } from "react-loader-spinner";
import { getUserShares } from "../Utils/Apis";

Chart.register(CategoryScale);

const StocksDetail = () => {
  const { id } = useParams();

  const [stock, setStock] = useState(null);
  const [cash, setCash] = useState(0);
  const [prices, setPrices] = useState(null);
  const [change, setChange] = useState(0);
  const [shares, setShares] = useState(0);
  const [chartData, setChartData] = useState(null);

  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      getStockDetail(id)
        .then((s) => {
          setStock(s.data);
          setPrices(s.data.last_traded_prices);
          setChartData({
            labels: s.data.last_traded_prices.map((data, index) => index),
            datasets: [
              {
                label: " ",
                data: s.data.last_traded_prices.map((data) => data),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#f0331a",
                  "#f3ba2f",
                  "#2a71d0",
                ],
                borderColor: "#5eb5f8",
                borderWidth: 2,
              },
            ],
          });
          setChange(
            (
              ((s.data.last_traded_price -
                s.data.last_traded_prices.slice(-1)) /
                s.data.last_traded_prices.slice(-1)) *
              100
            ).toFixed(1)
          );
        })
        .catch((error) => {
          console.error(error);
        });

      getPortfolio(id)
        .then((p) => {
          setCash(p.data.cash);
        })
        .catch((error) => {
          console.error(error);
        });

      getUserShares(id)
        .then((p) => {
          setShares(p.data[0].shares);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1300);
  }, []);

  return (
    <div className="container p-3 p-sm-5">
      {!stock && (
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

      {stock && (
        <>
          <div className="row mt-5 mt-sm-3 ps-2">
            <div className="d-flex align-items-center justify-content-center">
              <div className="h3 stockdetailtitle pe-2">{stock.short_name}</div>
              <div className="h3 stockdetailname"> - {stock.company_name}</div>
            </div>
          </div>

          {/* Chart */}
          {chartData && (
            <div className="row mt-5 w-100">
              <div
                className="col"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <LineChart chartData={chartData} />
              </div>
            </div>
          )}

          {/* Buy/Sell  */}

          {isOpen && (<div className="row">
            <div className="col-6 text-end px-4">
              <button
                className="btn btnbuysell btn-success fs-5 py-1 bold-text"
                data-toggle="modal"
                data-target={`#modal${id}`}
              >
                Buy
              </button>
              <BuyModal
                id={stock.id}
                short_name={stock.short_name}
                company_name={stock.company_name}
                current_price={stock.last_traded_price}
                change={change}
                cash={cash}
              />
            </div>
            <div className="col-6 text-start px-4">
              <button
                className="btn btnbuysell btn-danger fs-5 py-1"
                data-toggle="modal"
                data-target={`#sellmodal${id}`}
              >
                Sell
              </button>
              <SellModal
                id={stock.id}
                short_name={stock.short_name}
                company_name={stock.company_name}
                current_price={stock.last_traded_price}
                change={change}
                shares={shares}
              />
            </div>
          </div>)}

          {!isOpen && (<div className="text-warning mb-5 fs-5 text-center">[Note : Market is closed currently]</div>)}

          {!isOpen && (<div className="row">
            <div className="col-6 text-end px-4">
              <button
                className="btn btnbuysell btn-success fs-5 py-1 bold-text"
                data-toggle="modal"
                data-target={`#modal${id}`}
                disabled
              >
                Buy
              </button>
              <BuyModal
                id={stock.id}
                short_name={stock.short_name}
                company_name={stock.company_name}
                current_price={stock.last_traded_price}
                change={change}
                cash={cash}
              />
            </div>
            <div className="col-6 text-start px-4">
              <button
                className="btn btnbuysell btn-danger fs-5 py-1"
                data-toggle="modal"
                data-target={`#sellmodal${id}`}
                disabled
              >
                Sell
              </button>
              <SellModal
                id={stock.id}
                short_name={stock.short_name}
                company_name={stock.company_name}
                current_price={stock.last_traded_price}
                change={change}
                shares={shares}
              />
            </div>
          </div>)}

        </>
      )}
    </div>
  );
};

export default StocksDetail;
