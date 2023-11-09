import React from 'react'
import './Game.css'
import Strikes from '../Strikes/Strikes'
import Button from '../Button/Button'


export default function Game( {selectedGenre, selectedDifficulty} ) {
  return (
    <div className="game">
        <Strikes numOfStrikes={3}/>
        <div className="options-container">
          <Button buttonText={"option 1"}/>
          <Button buttonText={"option 2"}/>
          <Button buttonText={"option 3"}/>
          <Button buttonText={"option 4"}/>
        </div>
    </div>
    )
}
