import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'; // Import Material-UI components
import Main from './components/Main';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
