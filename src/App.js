import React, { useState } from 'react';
import './App.css'; // Your existing App styles
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Investments from './components/Investments';
import Sidebar from './components/SideBar'; // Sidebar component
import Wealth from './components/Wealth';
import Insurance from './components/Insurance';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1>Finance Bro - Your Personal Finance Assistant</h1>
        </header>
        
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className={sidebarOpen ? 'main-content open' : 'main-content'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/wealth" element={<Wealth />} />
            <Route path="/insurance" element={<Insurance />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
