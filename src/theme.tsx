import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: 'green',
    },
    error: {
      main: '#ff3f55'
    },
    warning: {
      main: '#FECD1A'
    }
  }
});

export default theme;