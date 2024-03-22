import { createTheme } from '@mui/material';
import { deepOrange, yellow } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: yellow[700],
      dark: yellow[900],
      contrastText: yellow[50],
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '&:hover': {},
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: false,
      },
    },
  },
});

export default theme;
