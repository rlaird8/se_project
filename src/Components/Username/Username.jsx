import React from 'react';
import './Username.css';
import Button from '../Button/Button'

export default function Username() {

  function clickHandler(buttonText) {

  }

  return (

    <div className="container">
      <input type="text" id="username" className="username-input" placeholder="Enter Your Username:" maxLength={10} />
      <div className="button-containerU">
        <Button className='submitButton'
          clickHandler={clickHandler}
          route={"/game"}
          buttonText={"Submit"}
        />
      </div>

    </div>
  )
}


