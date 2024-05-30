import { Grid, Typography } from "@mui/material";
import React from "react";
import { colorTitle, menuTitle } from "../styles";

export default function Content() {
  return (
    <Grid item container lg={7} xs={12}>
      <Grid item xs={1}>
        <Typography style={menuTitle} textAlign={"left"}>
          Home
        </Typography>
      </Grid>
      <Grid item xs={0.5}>
        <img src="/icon1.svg" />
      </Grid>
      <Grid item xs={2.5}>
        <Typography style={menuTitle}>Booking History</Typography>
      </Grid>

      <Grid item xs={0.5}>
        <img src="/icon1.svg" />
      </Grid>
      <Grid item xs={1}>
        <Typography style={menuTitle}>Flight</Typography>
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
