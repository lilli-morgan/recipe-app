import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

export default function ButtonAppBar({
  showShoppingList,
  setShowShoppingList,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="secondary">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Image width={100} height={100} alt="Logo" src={logo} />
              <Typography variant="h2" p={2}>
                Recipe Book
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/" passHref>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mx: 1 }}
                  onClick={() => setShowShoppingList(!showShoppingList)}
                >
                  {showShoppingList ? "Home" : "Shopping List"}
                </Button>
              </Link>
              <Link href="/discover" passHref>
                <Button variant="contained" color="secondary" sx={{ mx: 1 }}>
                  Discover recipes
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
