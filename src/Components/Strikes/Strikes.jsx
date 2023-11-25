import React from "react";
import "./Strikes.css";

export default function Strikes({ difficulty }) {
  const difficultyToStrikes = {
    Easy: 3,
    Medium: 2,
    Hard: 1,
  };

  //TODO: Replace the X with an image to represent the strike
  const strikeArray = Array.from(
    { length: difficultyToStrikes[difficulty] },
    (_, index) => (
      <div key={index} className="strike">
        X
      </div>
    )
  );

  return <div className="strikes">{strikeArray}</div>;
}
