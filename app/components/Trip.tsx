import { Grid, Typography } from "@mui/material";
import React from "react";
import { circle, elipse, time, title2 } from "../styles";

export default function Trip() {
  return (
    <Grid
      container
      style={{
        height: "76px",
        padding: "16px 20px",
        borderBottom: "1px solid #EBF0F5"
      }}
      gap={"16px"}
    >
      <Grid
        item
        xs={0.5}
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <Typography style={circle} textAlign={"center"}>
          1
        </Typography>
      </Grid>
      <Grid item container xs={10}>
        <Grid item xs={12}>
          <Typography
            style={{
              color: "black",
              lineHeight: "24px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            DAC → JFK
          </Typography>
        </Grid>

        <Grid container item>
          <Grid item xs={1.2}>
            <Typography style={title2}>Round Trip</Typography>
          </Grid>
          <Grid
            item
            xs={0.25}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid style={elipse}></Grid>
          </Grid>

          <Grid item xs={2.125}>
            <Typography style={title2}>25 Mar - 4 Apr 2023</Typography>
          </Grid>
          <Grid
            item
            xs={0.125}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid style={elipse}></Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography style={title2}>1 stop</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          width={"64px"}
          height={"26px"}
          borderRadius={"32px"}
          border={"1px solid #E8F3FF"}
          style={{ background: "#E8F3FF" }}
        >
          <Typography style={time} textAlign={"center"}>
            33h 20m
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
