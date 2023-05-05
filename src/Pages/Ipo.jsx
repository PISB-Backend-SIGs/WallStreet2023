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

      {!ipos && (
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

      <div className="row row-cols-1 g-4 g-sm-3">
        {ipos &&
          (<>
            {ipos.map((ipo) => {
              return <IpoCard key={ipo.id} {...ipo} />;
            })}
          </>)
        }
      </div>
    </div>
  );
};

export default Ipo;
