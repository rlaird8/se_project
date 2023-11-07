import React, { useState } from 'react';
import Button from './Components/Button/Button';
import SelectDifficulty from './Components/selectDifficulty/SelectDifficulty'; // Ensure the component name starts with an uppercase letter

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  function clickHandler(buttonText) {
    setSelectedGenre(buttonText);
  }

  return (
    <div className="Welcome">
      <div className='titleH'><h1>Welcome to <i>Harmonify</i></h1></div>
      <div className='paragraphAdjustment'>
        <p>Harmonify is an entertaining, song guessing game. You will be played a short clip of a random song from the genre that you selected. If you guess the song correctly,
          you get 1 point. If you guess wrong, you get 1 strike. Once you get 3 strikes, the game ends! Select your song genre, select your difficulty and begin when you are ready!
        </p>
      </div>
      {selectedGenre === null ? (
        <div className='Genres'>
        <h1 style={{ color: 'red' }}><b>Select a Genre:</b></h1>
          <div className="button-container">
            <Button clickHandler={clickHandler} buttonText={"Country"} />
            <Button clickHandler={clickHandler} buttonText={"Rap"} />
            <Button clickHandler={clickHandler} buttonText={"R&b"} />
            <Button clickHandler={clickHandler} buttonText={"Rock"} />
            <Button clickHandler={clickHandler} buttonText={"Pop"} />
          </div>
        </div>
      ) : (
        <SelectDifficulty setSelectedDifficulty={setSelectedDifficulty} />
      )}
    </div>
  );
};

export default App;
