import React, { useRef, useState } from "react";
import "./App.css";
import Homepage from "./Homepage";

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-black">
      <audio ref={audioRef} loop>
        <source src="public\audio.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      {isPlaying ? (
        <Homepage />
      ) : (
        <div className="bg-black min-h-screen flex items-center justify-center">
          <button
            className="bg-pink-500 px-4 py-5 text-3xl rounded-2xl font-black border-4 border-green-500 text-yellow-200 heartbeat"
            onClick={handlePlay}
          >
            Click here!
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
