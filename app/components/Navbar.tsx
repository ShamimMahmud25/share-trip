import { Grid, Typography } from "@mui/material";
import React from "react";
import { colorTitle, title } from "../styles";

export default function Navbar() {
  return (
    <Grid item container xs={7}>
      <Grid item xs={1}>
        <Typography style={title} textAlign={"left"}>
          Home
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <img src="/icon1.svg" />
      </Grid>
      <Grid item xs={2.5}>
        <Typography style={title}>Booking History</Typography>
      </Grid>

      <Grid item xs={0.5}>
        <img src="/icon1.svg" />
      </Grid>
      <Grid item xs={1}>
        <Typography style={title}>Flight</Typography>
      </Grid>
      <Grid item xs={0.5}>
        <img src="/icon1.svg" />
      </Grid>
      <Grid item xs={2}>
        <Typography style={colorTitle}>STFL17121182045413</Typography>
      </Grid>
    </Grid>
  );
}
