// AudioPlayer.js
import React, { useEffect } from "react";

const AudioPlayer = ({ src, onEnded }) => {
  const audio = new Audio();

  useEffect(() => {
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audio.src = "";
    };
  }, [onEnded]);

  useEffect(() => {
    if (src) {
      audio.src = src;
      audio.play();
    }
  }, [src]);

  return null; // This component doesn't render anything visible
};

export default AudioPlayer;
