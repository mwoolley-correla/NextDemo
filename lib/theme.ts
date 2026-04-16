import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0f766e",
    },
    secondary: {
      main: "#2563eb",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "var(--font-geist-sans)",
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;
