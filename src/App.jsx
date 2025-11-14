import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portafolio" element={<Portfolio />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
