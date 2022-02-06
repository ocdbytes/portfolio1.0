import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DirectoriesPopup from './Components/DirectoriesPopup/DirectoriesPopup';
import Navbar from './Components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import BlogsPage from './pages/BlogsPage/BlogsPage';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage';
import LandingPage from './pages/LandingPage/LandingPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

function App() {
    return (
        <>
            <Router>
                <DirectoriesPopup />
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<LandingPage />}></Route>
                    <Route exact path='/about' element={<AboutPage />}></Route>
                    <Route exact path='/experience' element={<ExperiencePage />}></Route>
                    <Route exact path='/blogs' element={<BlogsPage />}></Route>
                    <Route exact path='/projects' element={<ProjectsPage />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
