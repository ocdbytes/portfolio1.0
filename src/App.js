import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DirectoriesPopup from './Components/DirectoriesPopup/DirectoriesPopup';
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
    return (
        <>
            <Router>
                <DirectoriesPopup />
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<LandingPage />}></Route>
                    <Route exact path='/about' element={<AboutPage />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
