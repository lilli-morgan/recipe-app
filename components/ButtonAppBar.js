import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Image width={100} height={100} alt="Logo" src={logo} />
          {/* <Button color="inherit"> */}
          <Link href="/" passHref>
            <Button variant="contained" color="secondary">
              Home
            </Button>
          </Link>
          <Link href="/discover" passHref>
            <Button variant="contained" color="secondary">
              Discover recipes
            </Button>
          </Link>

          <Button variant="contained" color="secondary">
            Shopping list
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
