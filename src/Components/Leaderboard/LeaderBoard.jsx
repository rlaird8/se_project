import React, { useEffect, useRef } from 'react'
import Button from '../Button/Button';
import './LeaderBoard.css';
import { useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const submitToLeaderboard = async (user_id, score) => {
    try {
      const response = await fetch('http://localhost:8000/leaderboard/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: user_id, score: score }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const responseData = await response.json();
      console.log('Leaderboard API response:', responseData);
  
    } catch (error) {
      console.error('Error during leaderboard submission:', error.message);
    }
  };
  

export default function Leaderboard( {user_id, score}) {
    const navigate = useNavigate();
    const hasEffectRun = useRef(false);
    const queryClient = useQueryClient();
    
    const { isLoading, error, data } = useQuery({
        queryKey: ["leaderboard", "leaderboard"],
        queryFn: () =>
            fetch("http://localhost:8000/leaderboard/").then(
                (res) => res.json()
            ),
    });


    function clickHandler(route) {
        navigate(route);
    }

    useEffect(() => {
        if (!hasEffectRun.current) {
            submitToLeaderboard(user_id, score);
            hasEffectRun.current = true;
            queryClient.invalidateQueries({ queryKey: ['leaderboard'] });
        }
    }, []);
    // fetch the leaderboard after score submits

    if (error) return <p>Error...</p>;
    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="text">
            <div className="title whiteText">
                <h1>
                    <i>Leaderboard</i>
                </h1>
            </div>
            <div className="leaderboard-container whiteText">
                {data.map((score, index) => (
                <div key={index} className="leaderboard-entry">
                    <span className="rank">{index + 1}</span>
                    <span className="name">{score.user_id}</span>
                    <span className="score">{score.score}</span>
                </div>
                ))}
            </div>
            <div className="button-containerL">
                <Button
                    clickHandler={clickHandler}
                    route={"/"}
                    buttonText={"Main Menu"}
                />
                <Button
                    clickHandler={clickHandler}
                    route={"/game"}
                    buttonText={"Retry"}
                />
            </div>
        </div>

    )
}