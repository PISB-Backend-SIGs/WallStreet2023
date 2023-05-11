import React from 'react'
import { useState } from 'react'
import {Data} from '../Utils/Data'
import LineChart from '../Components/LineChart'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
import BuyModal from "../Components/BuyModal"

Chart.register(CategoryScale);

const StocksDetail = () => {

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
          "#2a71d0"
        ],
        borderColor: "#5eb5f8",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className='container p-3 p-sm-5'>

      <div className="row mt-2">
        <div className="d-flex align-items-center">
          <div className='h3 stockdetailtitle pe-2 '>MSFT</div>
          <div className='h4 stockdetailname'> - Microsoft Inc</div>
        </div>
      </div>

      {/* Chart */}
      <div className='row mt-5 w-100'>
        <div className='col'>
          <LineChart chartData={chartData}/>
        </div>
      </div>

      {/* Buy/Sell  */}
      <div className='row'>
        <div className='col-6 text-end px-4'>
          <button className="btn btnbuysell btn-success fs-5 py-1 bold-text" data-toggle="modal"
                data-target="#buymodal">
            Buy
          </button>
          <BuyModal/>
        </div>
        <div className='col-6 text-start px-4'>
          <button className="btn btnbuysell btn-danger fs-5 py-1">
            Sell
          </button>
        </div>
      </div>

    </div>
  )
}

export default StocksDetail