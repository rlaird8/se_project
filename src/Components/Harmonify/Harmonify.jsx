import React from 'react'
import Button from '../Button/Button';
import './Harmonify.css';

export default function Harmonify({ setSelectedGenre }) {
    function clickHandler(buttonText) {
        setSelectedGenre(buttonText);
    }

    return (
    <div className="Welcome">
        <div className="titleH">
          <h1>
            Welcome to <i>Harmonify</i>
          </h1>
        </div>
        <div className="paragraphAdjustment">
          <p>
            Harmonify is an entertaining, song guessing game. You will be played
            a short clip of a random song from the genre that you selected. If
            you guess the song correctly, you get 1 point. If you guess wrong,
            you get 1 strike. Once you get 3 strikes, the game ends! Select your
            song genre, select your difficulty and begin when you are ready!
          </p>
        </div>
          <div className="Genres">
            <h1 style={{ color: "red" }}>
              <b>Select a Genre:</b>
            </h1>
            <div className="button-container">
              <Button
                clickHandler={clickHandler}
                route={"/difficulties"}
                buttonText={"Country"}
              />
              <Button
                clickHandler={clickHandler}
                route={"/difficulties"}
                buttonText={"Rap"}
              />
              <Button
                clickHandler={clickHandler}
                route={"/difficulties"}
                buttonText={"R&b"}
              />
              <Button
                clickHandler={clickHandler}
                route={"/difficulties"}
                buttonText={"Rock"}
              />
              <Button
                clickHandler={clickHandler}
                route={"/difficulties"}
                buttonText={"Pop"}
              />
            </div>
          </div>

      </div>
  )
}
