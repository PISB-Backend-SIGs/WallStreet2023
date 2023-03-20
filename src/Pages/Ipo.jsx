import React from "react";
import IpoCard from "../Components/IpoCard"


const Ipo = () => {

  const arr = [1,2,3,4,5,6,7,8,9]

  return (
    
    <div className="container p-1 p-sm-5">

      <div className="h3 upcoming mb-4 text-center">
        Upcoming IPO's
      </div>

      <br/>

      <div className="row row-cols-1">

        { <div>
          {arr.map((i)=> (
              <div className="col my-4 my-sm-3">
                <IpoCard/>
              </div>
          ))}
          </div>
        }
        

      </div>
      
    </div>
  );
};

export default Ipo;
