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
        <b>
          <p>
            Harmonify! Gain Points By Guessing The Correct Song From The Given Clip! Three Strikes And You're Out!
          </p>
        </b>
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


    </div>
  )
}
