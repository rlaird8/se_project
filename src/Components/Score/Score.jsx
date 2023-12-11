import React, { useEffect } from 'react';

export default function Score({ difficulty, runTime, isCorrect, score, setScore }) {
  const difficultyToPoints = {
    Easy: 1,
    Medium: 2,
    Hard: 5,
  };

  const difficultyToTime = {
    Easy: 15,
    Medium: 10,
    Hard: 5,
  };
  

  const calculateScore = () => {
    // Multiply difficulty, runTime, and isCorrect to get the current score for the question
    const currentScore = difficultyToPoints[difficulty] * runTime * isCorrect;
    // const currentScore = isCorrect * runTime * difficultyToPoints[difficulty] * (runTime/difficultyToTime[difficulty]);
    // Add the current score to the existing score
    setScore((prevScore) => prevScore + currentScore);
  };

  useEffect(() => {
    calculateScore();
  }, [isCorrect]);

  return <h1 data-testid="score" className='score-container'>Score: {Math.round(score * 100) / 100}</h1>;
}
