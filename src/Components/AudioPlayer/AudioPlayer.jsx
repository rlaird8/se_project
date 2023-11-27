import { useEffect } from "react";

const AudioPlayer = ({ src, setNumMissed, fetchNextSong }) => {
  const audio = new Audio();

  useEffect(() => {
    const handleEnded = () => {
      audio.pause();
      audio.currentTime = 0;
      fetchNextSong();
      setNumMissed((prev) => prev + 1);
    };

    audio.addEventListener("ended", handleEnded);

    if (src) {
      audio.src = src;
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }

    return () => {
    //   audio.pause();
      audio.src = "";
      audio.removeEventListener("ended", handleEnded);
    };
  }, [src]);

  return null;
};

export default AudioPlayer;
