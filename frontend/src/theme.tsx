import "@fontsource/inter";
import { Components, createTheme, PaletteOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00863A",
    },
    background: {
      default: "#101020", //background
      paper: "#2b2b2b", //borders and dividers
    },
    text: {
      primary: "#fff",
      secondary: "#8a8a8a",
    },
  } as PaletteOptions,
  typography: {
      fontFamily: `"Verdana", Verdana, serif`,
  } as TypographyOptions,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          textTransform: "none",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: `1px solidrgb(148, 3, 3)`,
          "& .MuiDataGrid-withBorderColor": {
            borderColor: "#2b2b2b",
          },
        },
      },
    },
  } as Components,
});
