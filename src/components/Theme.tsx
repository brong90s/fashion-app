import {
  BaseTheme,
  createBox,
  createText,
  createTheme,
} from "@shopify/restyle";

const palette = {
  strongCyan: "#2CB9B0",
  darkBlue: "#0C0D34",
  white: "#ffffff",
};

const theme: BaseTheme = createTheme({
  colors: {
    primary: palette.strongCyan,
    title: palette.darkBlue,
    body: "rgba(12, 13, 52, 0.7)",
    button: "#0C0D34",
    grey: "rgba(12, 13, 52, 0.05)",
    darkGrey: "#F4F0EF",
    white: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      color: "white",
      textAlign: "center",
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      color: "primary",
      fontWeight: "600",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: "title",
      fontWeight: "600",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "400",
      color: "body",
    },
    button: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "400",
      color: "grey",
    },
  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
