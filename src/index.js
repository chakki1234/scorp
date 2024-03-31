import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './pages/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    address: {
      fontStyle: 'italic',
      fontFamily: 'Butler Bold, sans-serif',
      fontSize: '14px',
      color: '#7a413b',
      fontWeight: 500
    },
    navBarOptions: {
      fontFamily: 'Butler Bold, sans-serif',
      fontSize: '16px',
      color: '#7a413b',
      fontWeight: 700
    }
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#f8edeb',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <LandingPage />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
