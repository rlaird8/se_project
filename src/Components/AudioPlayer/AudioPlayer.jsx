import { useEffect } from "react";

const AudioPlayer = ({ src, setNumMissed, fetchNextSong, runTime, setRunTime }) => {
  const audio = new Audio();

  useEffect(() => {
    const handleEnded = () => {
      audio.pause();
      audio.currentTime = 0;
      fetchNextSong();
      setNumMissed((prev) => prev + 1);
    };

    const updateCurrentTime = () => {
      setRunTime(audio.duration - audio.currentTime);
    }

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", updateCurrentTime);

    if (src) {
      audio.src = src;
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }

    return () => {
      audio.src = "";
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("timeupdate", updateCurrentTime)
    };
  }, [src]);

  return (
    <div className="timer">
      <h1>Time Remaining: {Math.floor(runTime)} </h1>
    </div>
  );
};

export default AudioPlayer;
