import { Grid } from "@mui/material";
import React from "react";
import { mainContainer, navbar, secondContainer } from "../styles";

export default function Details() {
  return (
    <Grid container>
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
            style={{ height: "100%", background: "blue",padding:"16px 0px 16px 0px" }}
          ></Grid>
          <Grid
            item
            width={"77.70%"}
            style={{ height: "100%", background: "yellow" }}
          ></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
