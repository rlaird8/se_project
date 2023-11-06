// SimpleComponent.jsx

import React from 'react';

const layout = () => {
  return (
    <div className="Welcome">
      <div className='titleH'><h1>Welcome to <i>Harmonify</i></h1></div>
      <div className='paragraphAdjustment'>
        <p>Harmonify is an entertaining, song guessing game. You will be played a short clip of a random song from the genre that you selected. If you guess the song correctly,
          you get 1 point. If you guesswrong, you get 1 strike. Once you get 3 strikes, the game ends! Select your song genre, select your difficulty and begin when you are ready!
        </p>
      </div>

      <div className='Genres'>
        <h1><b>Select a Genre:</b></h1>
        <div className="center-rectangle">
          <span className='blinkingText'><b>Country</b></span>
        </div>
        <div className="center-rectangle">
          <span className='blinkingText'><b>Rap</b></span>
        </div>
        <div className="center-rectangle">
          <span className='blinkingText'><b>R&b</b></span>
        </div>
        <div className="center-rectangle">
          <span className='blinkingText'><b>Rock</b></span>
        </div>
        <div className="center-rectangle">
          <span className='blinkingText'><b>Pop</b></span>
        </div>
      </div>
    </div>

  );
};

export default layout;
