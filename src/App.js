// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './styles/GlobalStyles';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Statistics from './pages/Statistics';
import Goals from './pages/Goals';
import Community from './pages/Community';
import Nutrition from './pages/Nutrition';
import Tutorials from './pages/Tutorials';
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Router>
          <Navbar toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/community" element={<Community />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/tutorials/:id" element={<ExerciseDetail />} />
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
