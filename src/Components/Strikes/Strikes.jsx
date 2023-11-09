import React from 'react'
import './Strikes.css';

export default function Strikes( {numOfStrikes} ) {
    //TODO: Replace the X with an image to represent the strike
    const strikeArray = Array.from({ length: numOfStrikes }, (_, index) => (
        <div key={index} className="strike">
          X
        </div>
      ));

    
    return (
    <div className="strikes">
        {strikeArray}
    </div>
  )
}
