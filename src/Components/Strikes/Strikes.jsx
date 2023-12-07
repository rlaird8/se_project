import React from "react";
import "./Strikes.css";
import { useNavigate } from "react-router-dom";
import strikeImage from "./strike.png";

export default function Strikes({ difficulty, numMissed }) {
  const difficultyToStrikes = {
    Easy: 3,
    Medium: 2,
    Hard: 1,
  };

  const navigate = useNavigate();

  if ((difficultyToStrikes[difficulty] - numMissed) === 0) {
    navigate("/leaderboard");
  }

  //TODO: Replace the X with an image to represent the strike
  const strikeArray = Array.from(
    { length: difficultyToStrikes[difficulty] - numMissed },
    (_, index) => (
      <div key={index} data-testid="strike" className="strike">
        <img
          src={strikeImage}
          alt={'Strike ${index + 1}'}
          style={{ width: '30px', height: '30px' }}
        />
      </div>
    )
  );

  return <div className="strikes">{strikeArray}</div>;
}
