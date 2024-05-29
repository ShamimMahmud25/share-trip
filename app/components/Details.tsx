import { Grid } from "@mui/material";
import React from "react";
import {
  mainContainer,
  navbar,
  secondContainer,
} from "../styles";
import FlightDetails from "./FlightDetails";
import FlightDetailsSecond from "./FlightDetailsSecond";
import AirLinesDetails from "./AirLinesDetails";
import Layover from "./Layover";
import Trip from "./Trip";
import AirLinesDetailsSecond from "./AirLineDetailsSecond";
import Destination from "./Destination";
import Navbar from "./Navbar";

export default function Details() {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid item xs={12} style={navbar}></Grid>
      <Grid
        item
        container
        style={mainContainer}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid
          item
          container
          style={secondContainer}
          display={"flex"}
          justifyContent={"flex-start"}
          flexDirection={"row"}
        >
          <Grid
            item
            width={"22.30%"}
            style={{ height: "100%", padding: "20px 0px 16px 0px" }}
            container
          >
            <Grid
              item
              style={{
                background: "white",
                width: "100%",
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            container
            width={"77.70%"}
            style={{ height: "100%", padding: "20px 0 20px 24px" }}
          >
            <Grid
              item
              container
              style={{ height: "100%", padding: "20px 0 20px 24px" }}
            >
              <Grid item container style={{ height: "20px" }}>
                <Navbar />
              </Grid>
              <Grid
                item
                container
                style={{ height: "100%", background: "white" }}
              >
                <Trip />
                <Grid
                  container
                  style={{
                    height: "80%",
                    padding: "16px",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
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
        </Grid>
      </Grid>
    </Grid>
  );
}
