import { Grid, Typography } from "@mui/material";
import React from "react";
import { airportStyle, flightTitle, locationElipse } from "../styles";
import Location from "./Location";

export default function Layover() {
  return (
    <Grid
      container
      style={{ padding: "4px 0px 4px 0px", height: "48px" }}
      gap={"12px"}
    >
      <Location />
      <Grid item xs={11} container style={airportStyle} gap={"8px"}>
        <Grid item xs={5.9} height={"18px"}>
          <Typography style={flightTitle} textAlign={"left"}>
            Layover at Dubai: 12 hr 20 min
          </Typography>
        </Grid>
        <Grid item xs={5.9} height={"18px"}>
          <Typography style={flightTitle} textAlign={"right"}>
            Layover at Dubai: 12 hr 20 min
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
