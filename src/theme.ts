import { DefaultTheme } from "styled-components";

interface Theme extends DefaultTheme {
  spacing: number;
  palette: object;
  breakpoints: object;
}

const robertsTheme: Theme = {
  palette: {
    typography: {},
    colors: {
      green: "#3fff77",
      white: "#fff",
    },
  },
  spacing: 2,
  borderRadius: "3px",
  colors: {
    main: "cyan",
    secondary: "magenta",
  },
  breakpoints: {
    xs: "0",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

export { robertsTheme };
