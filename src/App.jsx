import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
