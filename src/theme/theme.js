import { createTheme } from "@mui/material/styles";

// Você pode colocar sua paleta base aqui (depois refina)
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "dark" ? "#90caf9" : "#1976d2",
    },
    secondary: {
      main: mode === "dark" ? "#ce93d8" : "#9c27b0",
    },
    background: {
      default: mode === "dark" ? "#0b0f19" : "#f6f7fb",
      paper: mode === "dark" ? "#121a2a" : "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: { fontSize: "2.2rem", fontWeight: 800 },
    h2: { fontSize: "1.8rem", fontWeight: 800 },
  },
  shape: { borderRadius: 12 },

  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 12 },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 16 },
      },
    },
  },
});

export function createAppTheme(mode) {
  return createTheme(getDesignTokens(mode));
}
