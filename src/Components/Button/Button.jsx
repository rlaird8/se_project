import React from 'react'
import './Button.css';

export default function Button({ buttonText }) {
  return (
    <div className="center-rectangle">
      <span className='blinkingText'><b>{buttonText}</b></span>
    </div>
  )
}
