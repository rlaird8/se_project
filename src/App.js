import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Harmonify from "./Components/Harmonify/Harmonify";
import SelectDifficulty from "./Components/SelectDifficulty/SelectDifficulty";
import Game from "./Components/Game/Game";
import './App.css';
import LeaderBoard from "./Components/Leaderboard/LeaderBoard";
import Username from "./Components/Username/Username";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Harmonify setSelectedGenre={setSelectedGenre} />} />
          <Route path="/difficulties" element={<SelectDifficulty setSelectedDifficulty={setSelectedDifficulty}/>} />
          <Route path="/name" element={<Username setUsername={setUsername}/>} />
          <Route path="/game" element={<Game selectedGenre={selectedGenre} selectedDifficulty={selectedDifficulty} score={score} setScore={setScore} />} />
          <Route path="/leaderboard" element={<LeaderBoard user_id={username} score={score}/>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
