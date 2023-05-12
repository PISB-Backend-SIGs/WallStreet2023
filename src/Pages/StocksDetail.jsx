import React from "react";
import { useState, useEffect } from "react";
import { Data } from "../Utils/Data";
import LineChart from "../Components/LineChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import BuyModal from "../Components/BuyModal";
import SellModal from "../Components/SellModal";
import { useParams } from "react-router-dom";
import { getStockDetail } from "../Utils/Apis";
import { ThreeDots } from "react-loader-spinner";

Chart.register(CategoryScale);

const StocksDetail = () => {
  const { id } = useParams();

  const [stock, setStock] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      getStockDetail(id)
        .then((s) => {
          setStock(s.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 1300);
  }, []);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.a),

    datasets: [
      {
        label: " ",
        data: Data.map((data) => data.b),
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
          <div className="row mt-4 mt-sm-2 ps-2">
            <div className="d-flex align-items-center">
              <div className="h3 stockdetailtitle pe-2 ">
                {stock.short_name}
              </div>
              <div className="h3 stockdetailname"> - {stock.company_name}</div>
            </div>
          </div>

          {/* Chart */}
          <div className="row mt-5 w-100">
            <div className="col">
              <LineChart chartData={chartData} />
            </div>
          </div>

          {/* Buy/Sell  */}
          <div className="row">
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
              />
            </div>
            <div className="col-6 text-start px-4">
              <button className="btn btnbuysell btn-danger fs-5 py-1" data-toggle="modal"
                data-target={`#sellmodal${id}`}>
                Sell
              </button>
              <SellModal
                id={stock.id}
                short_name={stock.short_name}
                company_name={stock.company_name}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StocksDetail;
