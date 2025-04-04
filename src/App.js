import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Contract from './pages/Contract';
import Impact from './pages/Impact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="font-sans bg-neutral-50 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
