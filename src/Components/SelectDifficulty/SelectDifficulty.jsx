import React from 'react'
import Button from '../Button/Button'
import './SelectDifficulty.css';

export default function SelectDifficulty( { setSelectedDifficulty }) {
  return (
    <div className="difficulty-container">
        <Button clickHandler={setSelectedDifficulty} route={"/game"} buttonText={"Easy"}/>
        <Button clickHandler={setSelectedDifficulty} route={"/game"} buttonText={"Medium"}/>
        <Button clickHandler={setSelectedDifficulty} route={"/game"} buttonText={"Hard"}/>
    </div>
  )
}
