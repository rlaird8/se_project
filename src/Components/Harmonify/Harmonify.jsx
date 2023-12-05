import React from 'react'
import Button from '../Button/Button';
import './Harmonify.css';

export default function Harmonify({ setSelectedGenre }) {
  function clickHandler(buttonText) {
    setSelectedGenre(buttonText);
    console.log(buttonText);
  }

  return (
    <div className="Welcome">
      <div className='text-container'>
        <div className="titleH">
          <h1>
            Welcome to <i>Harmonify</i>
          </h1>
        </div>
        <div className="paragraphAdjustment">
          <b>
            <p>
              Harmonify! Gain Points By Guessing The Correct Song From The Given Clip! Three Strikes And You're Out!
            </p>
          </b>
        </div>
      </div>

      <div className='greyBox'>
        <div className="Genres">
          <h1 className='genreHeader'>
            <i><b>Select a Genre:</b></i>
          </h1>
          <div className="button-container">
            <Button
              clickHandler={clickHandler}
              route={"/difficulties"}
              buttonText={"Bass"}
            />
            <Button
              clickHandler={clickHandler}
              route={"/difficulties"}
              buttonText={"Dubstep"}
            />
            <Button
              clickHandler={clickHandler}
              route={"/difficulties"}
              buttonText={"Future Bass"}
            />
            <Button
              clickHandler={clickHandler}
              route={"/difficulties"}
              buttonText={"House"}
            />
            <Button
              clickHandler={clickHandler}
              route={"/difficulties"}
              buttonText={"Phonk"}
            />
          </div>
        </div>
      </div>


    </div>
  )
}
