import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="app-nav">
          <div className="app-logo">API Demo App</div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} API Demo App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
