import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FeedbackSummary from './pages/FeedbackSummary'; // ✅

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/feedback-summary">Feedback</Link> {/* ✅ NEW */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback-summary" element={<FeedbackSummary />} />
      </Routes>
    </div>
  );
}

export default App;
