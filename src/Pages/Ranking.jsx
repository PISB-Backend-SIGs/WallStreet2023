import React, { useEffect, useState} from "react";
import axios from "axios";
import RankCard from "../Components/RankCard";

const Ranking = () => {

  const [ranks, setRanks] = useState([]);

  useEffect( () => {
    axios.get('http://127.0.0.1:8000/api/leaderboard/')
    .then(response => {
      setRanks(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="container p-0 p-sm-5">
      <div className="h3 ranking mb-3 mb-sm-4 text-center">Ranking</div>
      <br/>
      <div className="row row-cols-1 g-4 g-sm-3">
        {
          <>
          {ranks.map(rank => {
            return <RankCard key={rank.id} {...rank}/>
          })}

          </>
        }
      </div>
    </div>
  );
};

export default Ranking;
