import React from "react";
import IpoCard from "../Components/IpoCard"

const Ipo = () => {

  const arr = [1,2,3,4,5,6,7,8,9]

  return (
    
    <div className="container p-3 p-sm-5">

      <div className="h3 upcoming mb-4 text-center">
        Upcoming IPO's
      </div>

      <br/>

      <div className="row row-cols-1 g-4 g-sm-3">

        { <>
          {arr.map((i)=> (
              <div className="col">
                <IpoCard/>
              </div>
          ))}
          </>
        }
        

      </div>
      
    </div>
  );
};

export default Ipo;
