import { PaletteColor, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    violet: PaletteColor;
  }

  interface PaletteOptions {
    violet?: PaletteColorOptions;
  }
}
