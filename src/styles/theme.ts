import { createTheme, PaletteOptions } from '@mui/material';

const palette = {
  primary: {
    light: '#001E67',
    main: '#00468C',
    dark: '#006CA4',
  },
  secondary: {
    light: '#78D8BB',
    main: '#00C896',
    dark: '#06B5B5',
  },
  violet: {
    light: '#F2ECFF',
    main: '#504D7D',
  },
};

export const theme = createTheme({
  palette,
});
