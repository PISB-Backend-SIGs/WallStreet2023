import React from "react";
import RankCard from "../Components/RankCard";

const Ranking = () => {

  const arr = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="container p-0 p-sm-5">
      <div className="h3 ranking mb-3 mb-sm-4 text-center">Ranking</div>
      <br/>
      <div className="row row-cols-1 g-4 g-sm-3">
        {
          <>
          {
            arr.map((i)=>(
              <div className="col">
                <RankCard/>
              </div>
            ))
          }
          </>
        }
      </div>
    </div>
  );
};

export default Ranking;
