import React, { useEffect, useRef } from 'react'
import Button from '../Button/Button';
import './LeaderBoard.css';
import { useNavigate } from 'react-router-dom';

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

    function clickHandler(route) {
        navigate(route);
    }

    useEffect(() => {
        if (!hasEffectRun.current) {
            submitToLeaderboard(user_id, score);
            hasEffectRun.current = true;
        }
    }, []);
    // fetch the leaderboard after score submits

    return (
        <div className="text">
            <div className="title whiteText">
                <h1>
                    <i>Leaderboard</i>
                </h1>
            </div>
            <div className="leaderboard-container whiteText">
                <div className="leaderboard-entry">
                    <span className="rank">1. </span>
                    <span className="name">Peter Griffin</span>
                    <span className="score">69</span>
                </div>
                <div className="leaderboard-entry">
                    <span className="rank">2. </span>
                    <span className="name">Jeff</span>
                    <span className="score">68.999</span>
                </div>
                <div className="leaderboard-entry">
                    <span className="rank">3. </span>
                    <span className="name">Homie</span>
                    <span className="score">57</span>
                </div>
                <div className="leaderboard-entry">
                    <span className="rank">4. </span>
                    <span className="name">The Horse</span>
                    <span className="score">56</span>
                </div>
                <div className="leaderboard-entry">
                    <span className="rank">5. </span>
                    <span className="name">Crab Rave</span>
                    <span className="score">55</span>
                </div>
                <div className="leaderboard-entry">
                    <span className="rank">6. </span>
                    <span className="name">Eren Jaeger</span>
                    <span className="score">50</span>
                </div>
                <div className="leaderboard-entry">
                    <span className="rank">7. </span>
                    <span className="name">Ninja</span>
                    <span className="score">49</span>
                </div>
                <div className="leaderboard-entry">
                    <span className="rank">8. </span>
                    <span className="name">AAAGGGGHHHH</span>
                    <span className="score">47</span>
                </div>
                <div className="leaderboard-entry">
                    <span className="rank">9. </span>
                    <span className="name">wazsexdcrftvbgnhujimk,</span>
                    <span className="score">45</span>
                </div>
                <div className="leaderboard-entry">
                    <span className="rank">10. </span>
                    <span className="name">Barney</span>
                    <span className="score">40</span>
                </div>
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