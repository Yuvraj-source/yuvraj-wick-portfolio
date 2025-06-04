import { createTheme } from '@mui/material/styles';

const wickTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0a0a',
      paper: '#121212',
    },
    primary: {
      main: '#00ffff',
    },
    secondary: {
      main: '#8000ff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: `'Orbitron', 'Poppins', sans-serif`,
    h3: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    button: {
      textTransform: 'none',
    },
  },
});

export default wickTheme;
