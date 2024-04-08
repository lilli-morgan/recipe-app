import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "../public/logo.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Image width={100} height={100} alt="Logo" src={logo} />
          <Button color="inherit">Discover recipes</Button>
          <Button color="inherit">Saved recipes</Button>
          <Button color="inherit">Shopping list</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
