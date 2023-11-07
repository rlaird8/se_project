import React from 'react'
import Button from '../Button/Button'
import './SelectDifficulty.css';

export default function SelectDifficulty( { setSelectedDifficulty }) {
  return (
    <div className="difficulty-container">
        <Button clickHandler={setSelectedDifficulty} buttonText={"Easy"}/>
        <Button clickHandler={setSelectedDifficulty} buttonText={"Medium"}/>
        <Button clickHandler={setSelectedDifficulty} buttonText={"Hard"}/>
    </div>
  )
}
