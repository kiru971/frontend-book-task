import { createTheme } from "@mui/material";
import {
  amber,
  blue,
  deepPurple,
  green,
  grey,
  pink,
  red,
  yellow,
} from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#f1faff",
      main: "#3e97ff",
      dark: blue[500],
      contrastText: "#fff",
    },
    secondary: {
      light: red[50],
      main: pink[400],
      dark: red[500],
      contrastText: "#99a1b7",
    },
    success: {
      light: "#e8fff3",
      main: "#50cd89",
      dark: green[500],
      contrastText: "#b5b5c3",
    },
    warning: {
      light: amber[50],
      main: yellow[700],
      contrastText: "#4b5675",
    },
    info: {
      light: "#f8f5ff",
      main: deepPurple[400],
      dark: "#78829d",
      contrastText: grey[100],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 760,
      lg: 1200,
    },
  },
  typography: {
    fontFamily: "sen",
  },
//   shadows: Array(25).fill("0px 4px 12px 0px rgba(0, 0, 0, 0.03)"),
});