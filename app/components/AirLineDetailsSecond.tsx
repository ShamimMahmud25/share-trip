import { Grid } from "@mui/material";
import React from "react";
import AirLineInfo from "./AirLineInfo";
import JournyLine from "./JournyLine";

export default function AirLinesDetailsSecond() {
  return (
    <Grid container style={{ height: "72px" }} gap={"12px"}>
      <JournyLine/>
      <Grid item xs={11} container gap={"16px"} padding={"16px 0"}>
        <AirLineInfo />
      </Grid>
    </Grid>
  );
}
