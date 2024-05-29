import { Grid } from "@mui/material";
import React from "react";
import Trip from "./Trip";
import { listContainer } from "../styles";
import FlightDetails from "./FlightDetails";
import FlightDetailsSecond from "./FlightDetailsSecond";
import AirLinesDetails from "./AirLinesDetails";
import Layover from "./Layover";
import AirLinesDetailsSecond from "./AirLineDetailsSecond";
import Destination from "./Destination";

export default function ListComponent() {
  return (
    <Grid container style={{ height: "595px" }} gap={"16px"}>
      <Grid container style={listContainer}>
        <Trip />
        <Grid
          container
          style={{
            height: "504px",
            padding: "16px",
            border: "1px solid #FFFFFF",
            borderRadius: "8px",
          }}
          gap={"12px"}
        >
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              height: "472px",
            }}
          >
            <FlightDetails />
            <FlightDetailsSecond />
            <AirLinesDetails />
            <Layover />
            <FlightDetailsSecond />
            <AirLinesDetailsSecond />
            <Destination />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
