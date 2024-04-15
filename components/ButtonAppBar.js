import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { theme } from "@/styles/theme";


export default function ButtonAppBar({
  showShoppingList,
  setShowShoppingList,
}) {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
         sx={{backgroundColor: theme.palette.primary}}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Image width={120} height={120} alt="Logo" src={logo} />
              <Typography
                variant="h3"
                p={4}
                sx={{ color: theme.palette.primary.contrastText }}
              >
                Recipe Book
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/" passHref>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    mx: 1,
                    backgroundColor: theme.palette.secondary.dark,
                    color: theme.palette.secondary.contrastText,
                  }}
                  onClick={() => setShowShoppingList(!showShoppingList)}
                >
                  {showShoppingList ? "Home" : "Shopping List"}
                </Button>
              </Link>
              <Link href="/discover" passHref>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    mx: 1,
                    backgroundColor: theme.palette.secondary.dark,
                    color: theme.palette.secondary.contrastText,
                  }}
                >
                  Discover recipes
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
