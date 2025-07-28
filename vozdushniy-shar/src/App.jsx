
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WellcomeBlock from "./components/WellcomeBlock";
import AboutFly from "./components/AboutFly.jsx";
import FormatBlock from "./components/FormatBlock";


function App() {
  return (
    <Router>
        <WellcomeBlock />
        <AboutFly />
        <FormatBlock />
    </Router>
  )
}

export default App
