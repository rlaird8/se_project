import React from "react";
import "./Strikes.css";
import { useNavigate } from "react-router-dom";

export default function Strikes({ difficulty, numMissed }) {
  const difficultyToStrikes = {
    Easy: 3,
    Medium: 2,
    Hard: 1,
  };

  const navigate = useNavigate();

  if ((difficultyToStrikes[difficulty] - numMissed) === 0) {
    navigate("/");
  }

  //TODO: Replace the X with an image to represent the strike
  const strikeArray = Array.from(
    { length: difficultyToStrikes[difficulty] - numMissed},
    (_, index) => (
      <div key={index} className="strike">
        X
      </div>
    )
  );

  return <div className="strikes">{strikeArray}</div>;
}
