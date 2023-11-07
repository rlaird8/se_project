import React from 'react'
import './Button.css';

export default function Button( { buttonText, clickHandler } ) {
  return (
    <div onClick={() => clickHandler(buttonText)} className="center-rectangle">
          <span className='blinkingText'><b>{ buttonText }</b></span>
    </div>
  )
}
