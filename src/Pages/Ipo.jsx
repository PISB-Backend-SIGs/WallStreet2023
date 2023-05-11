import React, { useState, useEffect } from "react";
import IpoCard from "../Components/IpoCard";
import { getAllIpo } from "../Utils/Apis";
import { ThreeDots } from "react-loader-spinner";

const Ipo = () => {
  const [ipos, setIpos] = useState(null);

  useEffect(() => {

    setTimeout(() => {
      getAllIpo()
      .then((ipo) => {
        setIpos(ipo);
      })
      .catch((error) => {
        console.error(error);
      });
    }, 1300)

  }, []);

  return (
    <div className="container p-3 p-sm-5">
      <div className="h3 ipoupcoming mb-3 mb-sm-4 text-center">
        Upcoming IPO's
      </div>

      <br />

      

      <div className="row row-cols-1 g-4 g-sm-3 mx-sm-auto mx-0">
        {ipos &&
          (<>
            {ipos.map((ipo) => {
              return <IpoCard key={ipo.id} {...ipo} />;
            })}
          </>)
        }
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Ipo;
