import React, { useEffect, useState } from "react";
import "./Game.css";
import Strikes from "../Strikes/Strikes";
import Button from "../Button/Button";
import { useQuery } from "@tanstack/react-query";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

export default function Game({ selectedGenre, selectedDifficulty }) {
  const [songEnded, setSongEnded] = useState(false);
  const [currentSong, setCurrentSong] = useState("");
  const [songNames, setSongNames] = useState([]);

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
    console.log(newSongUrl);
    setCurrentSong(newSongUrl);
    setSongEnded(false);
  };

  const handleSongEnded = () => {
    setSongEnded(true);
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
      tmpSongNames.splice(randomPosition, 0, data.songs[currentSongID].title + "real");
  
      setSongNames(tmpSongNames);
      console.log(tmpSongNames);
    }
  };
  
  

  useEffect(() => {
    if (data) {
      playSong();
    }
    generateSongNames();
  }, [data]);
  
  if (error) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;
  
  return (
    <div className="game">
      <Strikes numOfStrikes={3} />
      <div className="options-container">
        <Button
          clickHandler={playSong}
          buttonText={songNames[0]}
        />
        <Button
          clickHandler={playSong}
          buttonText={songNames[1]}
        />
        <Button
          clickHandler={playSong}
          buttonText={songNames[2]}
        />
        <Button
          clickHandler={playSong}
          buttonText={songNames[3]}
        />
        <AudioPlayer src={currentSong} onEnded={handleSongEnded} />
      </div>
    </div>
  );
}
