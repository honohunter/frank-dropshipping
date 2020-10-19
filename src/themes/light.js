/* eslint-disable import/no-mutable-exports */

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import PNFont from 'src/assets/fonts/ProximaNova';

let theme = createMuiTheme({
  shadows: Array(25).fill('none'),
  palette: {
    text: {
      primary: '#303475',
      secondary: '#a4afb6',
    },
    primary: {
      main: '#303475',
    },
    secondary: {
      main: '#f3f5fb',
      contrastText: '#303475',
    },
    background: {
      default: '#f6f7fb',
    },
  },
  typography: {
    fontFamily: 'Proxima Nova',
    h1: {
      fontSize: 20,
      fontWeight: 700,
      '@media (max-width: 600px)': {
        fontSize: 16,
      },
    },
    h2: {
      fontSize: 16,
      fontWeight: 700,
      '@media (max-width: 600px)': {
        fontSize: 20,
      },
    },
    h6: {
      fontSize: 13,
      fontWeight: 700,
      '@media (max-width: 600px)': {
        // fontSize: 20,
      },
    },
    h5: {
      fontSize: 16,
      fontWeight: 700,
      '@media (max-width: 600px)': {
        // fontSize: 20,
      },
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      '@media (max-width: 600px)': {
        fontSize: 12,
      },
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 600,
      '@media (max-width: 600px)': {
        fontSize: 15,
      },
    },
    button: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': PNFont,
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 36,
        display: 'flex',
      },
    },
    MuiOutlinedInput: {
      root: {
        // backgroundColor: '#eef0f8',
      },
      notchedOutline: {
        borderRadius: 4,
        border: '1px solid ',
        borderColor: '#edeefa',
      },
    },
    MuiSelect: {
      root: {
        fontSize: 12,
        fontWeight: 700,
        // textAlign: 'center',
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: 12,
        fontWeight: 700,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 0,
        padding: '16px 8px',
        // textAlign: 'center',
      },
      '& .MuiCheckbox-colorSecondary.Mui-checked': {
        color: '#303475',
      },
    },
    MuiButton: {
      containedSizeLarge: {
        minHeight: 40,
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: '#303475',
        },
      },
    },
    MuiTab: {
      root: {
        '&$selected': {
          color: '#303475',
        },
      },
      textColorInherit: {
        opacity: 1,
        color: '#a4afb6',
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: '#367cff',
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
