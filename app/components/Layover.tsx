import { Grid, Typography } from "@mui/material";
import React from "react";
import { airportStyle, flightTitle, locationElipse } from "../styles";

export default function Layover() {
  return (
    <Grid
      container
      style={{ padding: "4px 0px 4px 0px", height: "48px" }}
      gap={"12px"}
    >
      <Grid
        item
        xs={0.5}
        width={"32px"}
        height={"36px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid width={"24px"} height={"24px"}>
          <img
            src="/location.svg"
            style={{ height: "20px", width: "13.5px" }}
          />
          <Grid style={locationElipse}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={11} container style={airportStyle} gap={"8px"} >
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
