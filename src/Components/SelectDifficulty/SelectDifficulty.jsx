import React from 'react'
import Button from '../Button/Button'
import './SelectDifficulty.css';

export default function SelectDifficulty({ setSelectedDifficulty }) {
  return (
    <div className="difficulty-container">
      <div className="Welcome">
        <div className="selectTitleH">
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
      <div className='selectGreyBox'>
        <div className='selectDificulty'><i><b>Select a Difficulty:</b></i></div>
        <div className='buttonFormating'>
          <Button clickHandler={setSelectedDifficulty} route={"/game"} buttonText={"Easy"} />
          <Button clickHandler={setSelectedDifficulty} route={"/game"} buttonText={"Medium"} />
          <Button clickHandler={setSelectedDifficulty} route={"/game"} buttonText={"Hard"} />
        </div>
      </div>

    </div>
  )
}
