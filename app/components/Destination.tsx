import { Grid, Typography } from "@mui/material";
import React from "react";
import { airportStyle, flightTitle, title3 } from "../styles";

export default function Destination() {
  return (
    <Grid
      container
      gap={"12px"}
      style={{ height: "48px", padding: "4px 0px 4px 0px" }}
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
            src="/locationIcon.svg"
            style={{ height: "20px", width: "13.5px" }}
          />
        </Grid>
      </Grid>
      <Grid item xs={11} container style={airportStyle} gap={"8px"}>
        <Grid item xs={5.9} height={"18px"}>
          <Typography style={flightTitle} textAlign={"left"}>
          Destination at New York
          </Typography>
        </Grid>
        <Grid item xs={5.9} height={"18px"}>
          <Typography style={flightTitle} textAlign={"right"}>
          Terminal 4:<span style={title3}>John F Kennedy International Airport</span> 
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
