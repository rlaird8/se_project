// SimpleComponent.jsx

import React from 'react';
import Button from './Components/Button/Button';

const layout = () => {
  return (
    <div className="Welcome">
      <div className='titleH'><h1>Welcome to <i>Harmonify</i></h1></div>
      <div className='paragraphAdjustment'>
        <p>Harmonify is an entertaining, song guessing game. You will be played a short clip of a random song from the genre that you selected. If you guess the song correctly,
          you get 1 point. If you guesswrong, you get 1 strike. Once you get 3 strikes, the game ends! Select your song genre, select your difficulty and begin when you are ready!
        </p>
      </div>
      <h1 style={{ color: 'red' }}><b>Select a Genre:</b></h1>


      <div className='Genres'>
        <Button buttonText={"Country"} />
        <Button buttonText={"Rap"} />
        <Button buttonText={"R&b"} />
        <Button buttonText={"Rock"} />
        <Button buttonText={"Pop"} />

      </div>
    </div >

  );
};

export default layout;
