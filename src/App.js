import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Harmonify from "./Components/Harmonify/Harmonify";
import SelectDifficulty from "./Components/selectDifficulty/SelectDifficulty";
import './App.css'

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Harmonify setSelectedGenre={setSelectedGenre} />} />
        <Route path="/difficulties" element={<SelectDifficulty setSelectedDifficulty={setSelectedDifficulty} />} />
      </Routes>
    </Router>
  );
};

export default App;
