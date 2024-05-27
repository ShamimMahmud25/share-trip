import { Grid, Typography } from "@mui/material";
import React from "react";
import { title4, title5 } from "../styles";

export default function FlightDetailsSecond() {
  return (
      <Grid
        container
        style={{ padding: "12px 0px 0px 0px", height: "58px"  }}
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
          <Typography style={title4}>DAC - DXB</Typography>
          <Typography style={title5}>12 hr 20 min</Typography>
        </Grid>
        <Grid item xs={3.6}>
          <Typography style={title4}>07:30 PM</Typography>
          <Typography style={title5}>28 Mar, Friday</Typography>
        </Grid>
        <Grid item xs={3.6}>
        <Typography style={title4}>08:50 AM</Typography>
          <Typography style={title5}>29 Mar, Saturday</Typography>
        </Grid>
      </Grid>
  );
}
