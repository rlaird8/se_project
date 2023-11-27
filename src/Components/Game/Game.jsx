import React, { useEffect, useState } from "react";
import "./Game.css";
import Strikes from "../Strikes/Strikes";
import Button from "../Button/Button";
import { useQuery } from "@tanstack/react-query";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

export default function Game({ selectedGenre, selectedDifficulty }) {
  const [currentSong, setCurrentSong] = useState("");
  const [songTitles, setSongTitles] = useState([]);
  const [currentSongTitle, setCurrentSongTitle] = useState("");
  const [numMissed, setNumMissed] = useState(0);

  let currentSongID = -1;

  const { isLoading, error, data } = useQuery({
    queryKey: ["playlist", "Bass"],
    queryFn: () =>
      fetch("http://localhost:8000/songs/playlist/" + "Bass" + "/").then(
        (res) => res.json()
      ),
  });

  const fetchNewSong = () => {
    currentSongID = Math.floor(Math.random() * data.songs.length) + 1;
    if (data && data.songs.length > 0) {
      return (
        "http://localhost:8000/songs/audio/" + currentSongID +
        "/segment/5/"
      );
    }
    return "";
  };

  const playSong = () => {
    const newSongUrl = fetchNewSong();
    setCurrentSong(newSongUrl);
    generateSongNames();
  };

  const generateSongNames = () => {
    if (data) {
      const tmpSongNames = [];
      const usedIndexes = new Set();
  
      // Generate three random titles
      for (let i = 0; i < 3; i++) {
        let randomIndex;
  
        // Ensure the index is unique
        do {
          randomIndex = Math.floor(Math.random() * data.songs.length);
        } while (usedIndexes.has(randomIndex));
  
        usedIndexes.add(randomIndex);
        tmpSongNames[i] = data.songs[randomIndex].title;
      }
  
      // Generate a random position for the title from currentSongID
      const randomPosition = Math.floor(Math.random() * (tmpSongNames.length + 1));
      tmpSongNames.splice(randomPosition, 0, data.songs[currentSongID].title);
      setCurrentSongTitle(data.songs[currentSongID].title);
      setSongTitles(tmpSongNames);
    }
  };
  
  const checkAnswer = (title) => {
    if (title !== currentSongTitle){
      setNumMissed(numMissed + 1);
    }

    if (data) {
      playSong();
    }
  }  

  useEffect(() => {
    if (data) {
      playSong();
    }
  }, [data]);
  
  if (error) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="game">
      <Strikes difficulty={selectedDifficulty} numMissed={numMissed} />
      <div className="options-container">
        <Button
          clickHandler={() => checkAnswer(songTitles[0])}
          buttonText={songTitles[0]}
        />
        <Button
          clickHandler={() => checkAnswer(songTitles[1])}
          buttonText={songTitles[1]}
        />
        <Button
          clickHandler={() => checkAnswer(songTitles[2])}
          buttonText={songTitles[2]}
        />
        <Button
          clickHandler={() => checkAnswer(songTitles[3])}
          buttonText={songTitles[3]}
        />
        <AudioPlayer src={encodeURI(currentSong)} setNumMissed={setNumMissed} fetchNextSong={playSong}/>
      </div>
    </div>
  );
}
