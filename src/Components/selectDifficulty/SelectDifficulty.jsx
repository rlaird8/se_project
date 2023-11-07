import React from 'react'
import Button from '../Button/Button'
import './SelectDifficulty.css';

export default function SelectDifficulty() {
  return (
    <div className="difficulty-container">
        <Button buttonText={"Easy"}/>
        <Button buttonText={"Medium"}/>
        <Button buttonText={"Hard"}/>
    </div>
  )
}
