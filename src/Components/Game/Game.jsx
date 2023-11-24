import React, { useEffect, useState } from "react";
import "./Game.css";
import Strikes from "../Strikes/Strikes";
import Button from "../Button/Button";
import { useQuery } from "@tanstack/react-query";

export default function Game({ selectedGenre, selectedDifficulty }) {
  const [songEnded, setSongEnded] = useState(false);
  const [currentSong, setCurrentSong] = useState("");

  // Fetch the playlist
  const { isLoading, error, data } = useQuery({
    queryKey: ["playlist", "Bass"],
    queryFn: () =>
      fetch("http://localhost:8000/songs/playlist/" + "Bass" + "/").then(
        (res) => res.json()
      ),
  });

  // Set a new song whenever the playlist changes (This is wrong, should be whenever a new song is requested)
  function fetchSong() {
    if (data && data.songs.length > 0) {
      setCurrentSong(
        "http://localhost:8000/songs/audio/" +
        Math.floor(Math.random() * data.songs.length) +
        "/segment/5/"
      );
    }
  }

  // Play the song if one isn't already playing
  useEffect(() => {
    const audio = new Audio();
  
    
    const playSong = () => {
      audio.addEventListener("ended", () => {
        setSongEnded(true);
      });
  
      audio.src = currentSong;
      audio.play();
      console.log(audio.src);
  
      return audio;
    };

    console.log(currentSong);
    console.log(songEnded)
    if (currentSong && !songEnded) {
      playSong();
    }
  
    return () => {
      // Cleanup audio resources if needed
      audio.removeEventListener("ended", () => {
        setSongEnded(true);
      });
      audio.pause();
      audio.src = "";
    };
  }, [currentSong, songEnded]);
  

  if (error) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="game">
      <Strikes numOfStrikes={3} />
      <div className="options-container">
        {/* Add buttons or other components here */}
      </div>
    </div>
  );

  
}
