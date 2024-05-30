import { Grid, Typography } from "@mui/material";
import React from "react";
import { title, timeInfo } from "../styles";

export default function FlightDetailsSecond() {
  return (
    <Grid
      container
      style={{ padding: "12px 0px 0px 0px", height: "58px" }}
      gap={"12px"}
    >
      <Grid
        item
        xs={0.5}
        height={"32px"}
        width={"32px"}
        display={"flex"}
        justifyContent={"center"}
      >
        <img src="/icon2.svg" />
      </Grid>
      <Grid item xs={3.6}>
        <Typography style={title}>DAC - DXB</Typography>
        <Typography style={timeInfo}>12 hr 20 min</Typography>
      </Grid>
      <Grid item xs={3.6}>
        <Typography style={title}>07:30 PM</Typography>
        <Typography style={timeInfo}>28 Mar, Friday</Typography>
      </Grid>
      <Grid item xs={3.6}>
        <Typography style={title}>08:50 AM</Typography>
        <Typography style={timeInfo}>29 Mar, Saturday</Typography>
      </Grid>
    </Grid>
  );
}
