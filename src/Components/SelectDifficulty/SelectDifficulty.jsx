import React from 'react'
import Button from '../Button/Button'
import './SelectDifficulty.css';

export default function SelectDifficulty({ setSelectedDifficulty }) {
  return (
    <div className="Welcome">
      <div className="text-container">
        <div className="titleH">
          <h1>
            Welcome to <i>Harmonify</i>
          </h1>
        </div>
        <div className="paragraphAdjustment">
          <b>
            <p>
              Gain Points by Guessing the Correct Song from the Given Clip! <br />
              Three Strikes And You're OUT!
            </p>
          </b>
        </div>
      </div>

      <div className='selectGreyBox'>
        <div className='Genres'>
          <h1 className='genreHeader'>
            <i><b>Select a Difficulty:</b></i>
          </h1>
          <div className="button-container1">
            <Button
              clickHandler={setSelectedDifficulty}
              route={"/game"}
              buttonText={"Easy"}
            />
            <Button
              clickHandler={setSelectedDifficulty}
              route={"/game"}
              buttonText={"Medium"}
            />
            <Button
              clickHandler={setSelectedDifficulty}
              route={"/game"}
              buttonText={"Hard"}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
