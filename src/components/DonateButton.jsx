import Button from "@mui/joy/Button";
import * as React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

export default function DonateButton() {
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
        color="primary"
        sx={(theme) => ({
          fontFamily: "Inter",
          fontWeight: 300,
          boxShadow: theme.shadow.xl,
          "--joy-shadowChannel": theme.vars.palette.primary.mainChannel,
          "--joy-shadowRing": "inset 0 -3px 0 rgba(0 0 0 / 0.24)",
        })}
      >
        Donează
      </Button>
    </CssVarsProvider>
  );
}
