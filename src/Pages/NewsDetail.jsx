import React from "react";

const NewsDetail = () => {
  return (
    <div className="container p-3 p-sm-5">
      <div className="mt-2">
        <div className="flex align-items-center">
          <div className="h3 newsdetailheadline">
            Credit Suisse shares tank after Saudi backer rules out further
            assistance
          </div>
          <br />
          <div className="newsbody mt-1 mt-sm-5">
            Shares of Credit Suisse on Wednesday plunged to a fresh all-time low
            for the second consecutive day after a top investor in the embattled
            Swiss bank said it would not be able to provide any more cash due to
            regulatory restrictions. Trading in the bank’s plummeting stock was
            halted several times throughout the morning as it fell below 2 Swiss
            francs ($2.17) for the first time. Swiss-listed Credit Suisse shares
            ended the session down 24%, paring some of its earlier losses after
            dropping more than 30% at one point. The U.S.-traded American
            depositary receipts of Credit Suisse were last down about 15%. After
            European markets closed, Swiss regulators said that Credit Suisse
            currently meets capital and liquidity requirements and that the
            Swiss National Bank will provide additional liquidity if necessary.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
