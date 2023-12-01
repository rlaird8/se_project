import React, { useEffect, useState } from 'react';

export default function Score({ difficulty, runTime, isCorrect }) {
  const [score, setScore] = useState(0);
  const difficultyToPoints = {
    Easy: 1,
    Medium: 1.5,
    Hard: 2,
  };

  const calculateScore = () => {
    // Multiply difficulty, runTime, and isCorrect to get the current score for the question
    const currentScore = difficultyToPoints[difficulty] * runTime * isCorrect;

    // Add the current score to the existing score
    setScore((prevScore) => prevScore + currentScore);
  };

  useEffect(() => {
    calculateScore();
  }, [isCorrect]);

  return <h1>Score: {score.toFixed(2)}</h1>;
}