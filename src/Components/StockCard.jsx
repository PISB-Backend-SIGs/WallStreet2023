import React from "react";

const StockCard = ({ id, company_name, short_name, last_traded_price }) => {

  
  return (
    <div className="m-3">
        <div class="card p-1 shadow stockcard">
          <div class="card-body stockcard-body">
            <div class="row">
              <div class="col-6">
                <p class="mb-3 mb-sm-2 stocktitle">{short_name}</p>
                <p class="mb-0 stockname">{company_name}</p>
              </div>
              <div class="col-6 text-end">
                <p class="mb-3 mb-sm-2 font-weight-bold">{`₹ ${last_traded_price}`}</p>
                <p class="mb-0 text-success font-weight-bold">+1.25%</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default StockCard;
