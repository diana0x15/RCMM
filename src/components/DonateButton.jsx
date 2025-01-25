import Button from "@mui/joy/Button";
import * as React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

export default function DonateButton() {
  // Function to generate boxShadow for different elevation levels
  const getElevation = (level) => {
    const shadows = [
      "none", // Elevation 0
      "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)", // Elevation 1
      "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)", // Elevation 2
      "0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)", // Elevation 3
    ];
    return shadows[level] || shadows[0];
  };

  const theme = extendTheme({
    components: {
      JoyButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.color === "primary" && {
              color: "#FFF",
              backgroundColor: "#000",
            }),
          }),
        },
      },
    },
  });

  return (
    <CssVarsProvider theme={theme}>
      <Button
        sx={{
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "#222",
            boxShadow: getElevation(3), // Change the number for a different elevation
          },
          fontFamily: "Inter",
          fontWeight: 300,
          boxShadow: getElevation(2), // Change the number for a different elevation
        }}
      >
        Donează
      </Button>
    </CssVarsProvider>
  );
}
