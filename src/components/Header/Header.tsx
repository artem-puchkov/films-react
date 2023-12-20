import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export function Header() {
  return (
    <AppBar
      elevation={0}
      sx={{ position: "static", width: "1280px", margin: "0 auto" }}
    >
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6">
          Фильмы
        </Typography>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
