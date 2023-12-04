import React, { useState } from 'react';
import './Username.css';
import Button from '../Button/Button'

export default function Username({ setUsername }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setUsername(inputValue);
  }

  return (

    <div className="container">
      <input type="text" id="username" className="username-input" placeholder="Enter Your Username:" maxLength={10} onChange={handleInputChange}/>
      <div className="button-containerU">
        <Button className='submitButton'
          clickHandler={handleButtonClick}
          route={"/game"}
          buttonText={"Submit"}
        />
      </div>

    </div>
  )
}


