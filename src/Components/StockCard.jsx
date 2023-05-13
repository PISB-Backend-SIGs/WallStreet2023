import React from "react";
import { useState } from "react";

const StockCard = ({ id, company_name, short_name, last_traded_price, change, color }) => {
  
  return (
    <div className="m-3">
        <div class="card p-1 shadow stockcard">
          <div class="card-body stockcard-body">
            <div class="row">
              <div class="col-6">
                <p class="mb-3 mb-sm-2 stocktitle">{short_name}</p>
                <p class="mb-0 stockname text-nowrap">{company_name}</p>
              </div>
              <div class="col-6 text-end">
                <p class="mb-3 mb-sm-2 font-weight-bold">{`₹ ${last_traded_price}`}</p>
                <p class={`mb-0 ${color} font-weight-bold`}>{`${change}%`}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default StockCard;
