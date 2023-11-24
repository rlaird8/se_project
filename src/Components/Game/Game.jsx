import React, { useEffect, useState } from "react";
import "./Game.css";
import Strikes from "../Strikes/Strikes";
import Button from "../Button/Button";
import { useQuery } from "@tanstack/react-query";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

export default function Game({ selectedGenre, selectedDifficulty }) {
  const [songEnded, setSongEnded] = useState(false);
  const [currentSong, setCurrentSong] = useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["playlist", "Bass"],
    queryFn: () =>
      fetch("http://localhost:8000/songs/playlist/" + "Bass" + "/").then(
        (res) => res.json()
      ),
  });

  const fetchNewSong = () => {
    if (data && data.songs.length > 0) {
      return (
        "http://localhost:8000/songs/audio/" +
        Math.floor(Math.random() * data.songs.length) +
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

  useEffect(() => {
    if (data) {
      playSong();
    }
  }, [data]);
  
  if (error) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="game">
      <Strikes numOfStrikes={3} />
      <div className="options-container">
        <Button
          clickHandler={playSong}
          buttonText={"Get New Song"}
        />
        <AudioPlayer src={currentSong} onEnded={handleSongEnded} />
      </div>
    </div>
  );
}
