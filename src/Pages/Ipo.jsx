import React, { useState, useEffect } from "react";
import IpoCard from "../Components/IpoCard";
import { getAllIpo } from "../Utils/Apis";

const Ipo = () => {
  const [ipos, setIpos] = useState([]);

  useEffect(() => {
    getAllIpo()
      .then((ipo) => {
        setIpos(ipo);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container p-3 p-sm-5">
      <div className="h3 ipoupcoming mb-3 mb-sm-4 text-center">
        Upcoming IPO's
      </div>

      <br />

      <div className="row row-cols-1 g-4 g-sm-3">
        {
          <>
            {ipos.map((ipo) => {
              return <IpoCard key={ipo.id} {...ipo} />;
            })}
          </>
        }
      </div>
    </div>
  );
};

export default Ipo;
