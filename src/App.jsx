import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css"; // Global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   {/* Default route */}
        <Route path="/about" element={<About />} /> {/* About page */}
      </Routes>
    </Router>
  );
}

export default App;
