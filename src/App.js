import React from 'react';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Recommendation from './pages/Recommendation';
import Browsing from './pages/Browsing';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cari' element={<Homepage />} />
          <Route path='/jelajah' element={<Browsing />} />
          <Route path='/rekomendasi' element={<Recommendation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
