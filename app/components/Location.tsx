import { Grid } from "@mui/material";
import React from "react";
import { locationContainer } from "../styles";

export default function Location() {
  return (
    <Grid
      item
      xs={0.5}
      style={locationContainer}
    >
      <img src="/location.svg" />
    </Grid>
  );
}
