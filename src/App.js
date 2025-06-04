import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import wickTheme from './theme/wickTheme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import MicrobiologistPage from './pages/MicrobiologistPage';
import DeveloperPage from './pages/DeveloperPage';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={wickTheme}>
      <CssBaseline />
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/microbiologist" element={<MicrobiologistPage />} />
          <Route path="/developer" element={<DeveloperPage />} />
        </Routes>
      </Router>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
