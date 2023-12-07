import React, { useEffect, useState } from "react";
import "./Game.css";
import Strikes from "../Strikes/Strikes";
import Button from "../Button/Button";
import { useQuery } from "@tanstack/react-query";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Score from "../Score/Score";
import { useNavigate } from "react-router";

export default function Game({ selectedGenre, selectedDifficulty, score, setScore }) {
  const [currentSong, setCurrentSong] = useState("");
  const [songTitles, setSongTitles] = useState([]);
  const [currentSongTitle, setCurrentSongTitle] = useState("");
  const [numMissed, setNumMissed] = useState(0);
  const [isAnswerCorrect, setisAnswerCorrect] = useState(0);
  const navigate = useNavigate();
  let currentSongID = -1;
  
  const difficultyToTime = {
    Easy: 15,
    Medium: 10,
    Hard: 5,
  };
  
  const [runTime, setRunTime] = useState(difficultyToTime[selectedDifficulty]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["playlist", "playlist"],
    queryFn: () =>
      fetch("http://localhost:8000/songs/playlist/" + selectedGenre + "/").then(
        (res) => res.json()
      ),
    onSuccess: () => {
      playSong();
    },
  });

  const fetchNewSong = () => {
    currentSongID = Math.floor(Math.random() * data.songs.length) + 1;
    if (data && data.songs.length > 0) {
      return (
        "http://localhost:8000/songs/audio/" + currentSongID +
        "/segment/" + difficultyToTime[selectedDifficulty] + "/"
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
      const randomPosition = Math.floor(Math.random() * (tmpSongNames.length));
      tmpSongNames.splice(randomPosition, 0, data.songs[currentSongID].title);
      setCurrentSongTitle(data.songs[currentSongID].title);
      setSongTitles(tmpSongNames);
    }
  };

  const checkAnswer = (title) => {
    if (title !== currentSongTitle) {
      setNumMissed(numMissed + 1);
      setisAnswerCorrect(0);
    }
    else {
      setisAnswerCorrect(1);
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

  useEffect(() => {
    setScore(0);
    if (selectedGenre === null || selectedDifficulty === null) {
      // Users values got are invalid go back to start before anything bad happens
      navigate("/");
    }
  }, [])

  if (error) return <p>Error...</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="game">
      <Strikes difficulty={selectedDifficulty} numMissed={numMissed} />
      <div className="stats">
        <Score difficulty={selectedDifficulty} runTime={runTime} isCorrect={isAnswerCorrect} score={score} setScore={setScore} />
        <AudioPlayer src={encodeURI(currentSong)} setNumMissed={setNumMissed} fetchNextSong={playSong} runTime={runTime} setRunTime={setRunTime} />
      </div>
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
      </div>
    </div>
  );
}