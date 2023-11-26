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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Harmonify from "./Components/Harmonify/Harmonify";
import SelectDifficulty from "./Components/SelectDifficulty/SelectDifficulty";
import Game from "./Components/Game/Game";
import './App.css';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Harmonify setSelectedGenre={setSelectedGenre} />} />
          <Route path="/difficulties" element={<SelectDifficulty setSelectedDifficulty={setSelectedDifficulty}/>} />
          <Route path="/game" element={<Game selectedGenre={selectedGenre} selectedDifficulty={selectedDifficulty}/>} />
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
