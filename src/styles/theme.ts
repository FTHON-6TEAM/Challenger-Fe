import { createTheme, PaletteOptions } from '@mui/material';
import { typography } from './typography';

const palette: PaletteOptions = {
  text: {
    primary: '#23272D',
  },
  primary: {
    light: '#006CA4',
    main: '#00468C',
    dark: '#001E67',
  },
  secondary: {
    light: '#78D8BB',
    main: '#00C896',
    dark: '#06B5B5',
  },
  violet: {
    light: '#F2ECFF',
    main: '#504D7D',
    dark: '#2E2D42',
    contrastText: '#fff',
  },
};

export const theme = createTheme({
  palette,
  typography,
});
