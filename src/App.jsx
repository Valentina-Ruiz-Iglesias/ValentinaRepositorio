import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/molecules/Navigation/Navigation';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portafolio" element={<Portfolio />} />
                        <Route path="/contacto" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;